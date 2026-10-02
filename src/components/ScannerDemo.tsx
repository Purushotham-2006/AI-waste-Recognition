import React, { useState, useRef, useEffect } from 'react';
import { 
  Camera, 
  Upload, 
  Sparkles, 
  CheckCircle2, 
  RefreshCw, 
  Recycle, 
  AlertCircle, 
  ArrowRight, 
  Activity, 
  Trash2, 
  FileCheck, 
  ChevronRight, 
  Info,
  Video,
  VideoOff,
  Copy,
  Check,
  RotateCcw
} from 'lucide-react';
import { SAMPLE_WASTE_ITEMS } from '../data/mockData';
import { WasteItem, ActivityLog } from '../types';

export const ScannerDemo: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<WasteItem>(SAMPLE_WASTE_ITEMS[0]);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [activeScreen, setActiveScreen] = useState<'scan' | 'identified' | 'instructions'>('identified');
  const [uploadedImagePreview, setUploadedImagePreview] = useState<string | null>(null);
  const [customDetectedName, setCustomDetectedName] = useState<string | null>(null);
  const [activeViewTab, setActiveViewTab] = useState<'demo' | 'activity'>('demo');
  const [feedbackToast, setFeedbackToast] = useState<string | null>(null);
  const [copiedSummary, setCopiedSummary] = useState<boolean>(false);

  // Live Camera states
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const initialLogs: ActivityLog[] = [
    {
      id: 'log-1',
      itemName: 'PET Plastic Water Bottle',
      category: 'Recyclable',
      timestamp: 'Today, 08:30 AM',
      streamName: 'Dry Waste (Blue Bin)',
      binColor: 'blue'
    },
    {
      id: 'log-2',
      itemName: 'Corrugated Cardboard Packaging',
      category: 'Recyclable',
      timestamp: 'Yesterday, 07:15 PM',
      streamName: 'Dry Waste (Blue Bin)',
      binColor: 'blue'
    },
    {
      id: 'log-3',
      itemName: 'Fruit Peels & Kitchen Waste',
      category: 'Organic / Compost',
      timestamp: 'Yesterday, 01:20 PM',
      streamName: 'Wet Waste (Green Bin)',
      binColor: 'green'
    }
  ];

  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>(initialLogs);

  const showToast = (message: string) => {
    setFeedbackToast(message);
    setTimeout(() => {
      setFeedbackToast(null);
    }, 3000);
  };

  const stopCameraStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setIsCameraActive(false);
  };

  useEffect(() => {
    return () => {
      stopCameraStream();
    };
  }, []);

  const startCamera = async () => {
    setCameraError(null);
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setCameraError('Camera access is not supported by your current browser.');
        return;
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setIsCameraActive(true);
      setActiveScreen('scan');
      showToast('Live camera feed active! Aim at any waste item.');
    } catch (err: any) {
      console.warn('Camera access failed, falling back to mock video feed', err);
      // Try with general video: true if environment fails
      try {
        const fallbackStream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = fallbackStream;
        if (videoRef.current) {
          videoRef.current.srcObject = fallbackStream;
          videoRef.current.play();
        }
        setIsCameraActive(true);
        setActiveScreen('scan');
        showToast('Live camera feed active!');
      } catch (fallbackErr) {
        setCameraError('Camera permission was denied or camera is unavailable. You can use the photo upload or sample items below.');
      }
    }
  };

  const captureCameraFrame = () => {
    if (!videoRef.current) return;
    try {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth || 640;
      canvas.height = videoRef.current.videoHeight || 480;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg');
        stopCameraStream();
        // Select an item or random sample
        const randomItem = SAMPLE_WASTE_ITEMS[Math.floor(Math.random() * SAMPLE_WASTE_ITEMS.length)];
        setCustomDetectedName('Live Camera Snapshot');
        triggerScan(randomItem, dataUrl);
        showToast('Photo captured! Running AI inference...');
      }
    } catch (e) {
      stopCameraStream();
      triggerScan(selectedItem);
    }
  };

  const triggerScan = (item: WasteItem, customPreview?: string) => {
    stopCameraStream();
    setIsScanning(true);
    setActiveScreen('scan');
    
    setTimeout(() => {
      setSelectedItem(item);
      if (customPreview) {
        setUploadedImagePreview(customPreview);
      } else {
        setUploadedImagePreview(null);
        setCustomDetectedName(null);
      }
      setIsScanning(false);
      setActiveScreen('identified');
      showToast(`Waste Identified: ${item.name}`);
    }, 900);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const previewUrl = event.target?.result as string;
        // Select a sample item or map by filename keyword
        const lowerName = file.name.toLowerCase();
        let matched = SAMPLE_WASTE_ITEMS[0];
        if (lowerName.includes('box') || lowerName.includes('cardboard') || lowerName.includes('paper')) {
          matched = SAMPLE_WASTE_ITEMS[1];
        } else if (lowerName.includes('food') || lowerName.includes('fruit') || lowerName.includes('apple') || lowerName.includes('veg')) {
          matched = SAMPLE_WASTE_ITEMS[2];
        } else if (lowerName.includes('can') || lowerName.includes('tin') || lowerName.includes('metal')) {
          matched = SAMPLE_WASTE_ITEMS[3];
        } else if (lowerName.includes('wire') || lowerName.includes('cable') || lowerName.includes('usb') || lowerName.includes('electronic')) {
          matched = SAMPLE_WASTE_ITEMS[4];
        } else if (lowerName.includes('glass')) {
          matched = SAMPLE_WASTE_ITEMS[5];
        } else if (lowerName.includes('tetra') || lowerName.includes('carton') || lowerName.includes('milk')) {
          matched = SAMPLE_WASTE_ITEMS[6];
        } else if (lowerName.includes('battery')) {
          matched = SAMPLE_WASTE_ITEMS[7];
        }
        
        setCustomDetectedName(file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '));
        triggerScan(matched, previewUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const addToActivityLog = () => {
    const itemName = customDetectedName ? `${customDetectedName} (${selectedItem.name})` : selectedItem.name;
    const newLog: ActivityLog = {
      id: `log-${Date.now()}`,
      itemName,
      category: selectedItem.category,
      timestamp: 'Just now',
      streamName: selectedItem.streamName,
      binColor: selectedItem.binColor
    };
    setActivityLogs([newLog, ...activityLogs]);
    setActiveViewTab('activity');
    showToast(`Logged "${itemName}" to your Activity Tracker!`);
  };

  const deleteLogItem = (id: string) => {
    setActivityLogs(activityLogs.filter(log => log.id !== id));
    showToast('Item removed from activity log.');
  };

  const clearAllLogs = () => {
    setActivityLogs([]);
    showToast('Activity log cleared.');
  };

  const resetSampleLogs = () => {
    setActivityLogs(initialLogs);
    showToast('Sample activity logs restored.');
  };

  const copyActivitySummary = () => {
    if (activityLogs.length === 0) {
      showToast('No items to copy yet. Scan items first!');
      return;
    }
    const summary = activityLogs.map(l => `• ${l.itemName} [${l.category}] -> ${l.streamName} (${l.timestamp})`).join('\n');
    const textToCopy = `AI Waste Recognition — Activity Log Summary\nTotal Items: ${activityLogs.length}\n\n${summary}\n\nScan Waste. Sort Right. Save the Planet.`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopiedSummary(true);
      showToast('Activity summary copied to clipboard!');
      setTimeout(() => setCopiedSummary(false), 2000);
    });
  };

  const getBinBadgeClass = (bin: 'blue' | 'green' | 'red' | 'gray') => {
    switch (bin) {
      case 'blue':
        return 'text-blue-800 bg-blue-50 border-blue-200';
      case 'green':
        return 'text-emerald-800 bg-emerald-50 border-emerald-200';
      case 'red':
        return 'text-rose-800 bg-rose-50 border-rose-200';
      default:
        return 'text-neutral-800 bg-neutral-100 border-neutral-200';
    }
  };

  return (
    <section id="scanner-demo" className="py-20 md:py-28 bg-white border-t border-neutral-200/80 relative">
      {/* Floating Feedback Notification Toast */}
      {feedbackToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-neutral-900 text-white text-xs px-4 py-3 rounded-xl shadow-xl border border-neutral-700 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{feedbackToast}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200/80 pb-8">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 uppercase">
              <span>Interactive Product Demo</span>
              <span aria-hidden="true">·</span>
              <span>Test The Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight font-display">
              Experience AI Waste Recognition in action.
            </h2>

            <p className="text-base text-neutral-600 leading-relaxed font-normal">
              Select any sample item below, upload your own packaging photo, or turn on your camera to see how computer vision classifies waste and provides instant disposal guidance.
            </p>
          </div>

          {/* Segmented Mode Switcher */}
          <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-lg shrink-0">
            <button
              onClick={() => setActiveViewTab('demo')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeViewTab === 'demo'
                  ? 'bg-white text-neutral-900 shadow-2xs font-bold'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Interactive Scanner
            </button>
            <button
              onClick={() => setActiveViewTab('activity')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
                activeViewTab === 'activity'
                  ? 'bg-white text-neutral-900 shadow-2xs font-bold'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Activity className="w-3.5 h-3.5 text-emerald-600" />
              <span>Activity Log ({activityLogs.length})</span>
            </button>
          </div>
        </div>

        {activeViewTab === 'demo' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 5 Cols: Sample Picker & Controls */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Camera Activation Button Card */}
              <div className="bg-[#fafaf9] rounded-2xl p-5 border border-neutral-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-neutral-900 uppercase tracking-wide">
                    Live Camera Scan
                  </span>
                  <span className="text-[11px] text-emerald-700 font-medium">Real-Time Capture</span>
                </div>

                {!isCameraActive ? (
                  <button
                    onClick={startCamera}
                    className="w-full py-3 px-4 rounded-xl bg-neutral-900 text-white font-semibold text-xs hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Video className="w-4 h-4 text-emerald-400" />
                    <span>Open Device Camera</span>
                  </button>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={captureCameraFrame}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <Camera className="w-4 h-4" />
                      <span>Snap & Identify</span>
                    </button>
                    <button
                      onClick={stopCameraStream}
                      className="py-2.5 px-3 rounded-xl bg-white border border-neutral-300 text-neutral-700 font-semibold text-xs hover:bg-neutral-50 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <VideoOff className="w-3.5 h-3.5 text-rose-600" />
                      <span>Close</span>
                    </button>
                  </div>
                )}

                {cameraError && (
                  <div className="text-[11px] text-rose-700 bg-rose-50 p-2.5 rounded-lg border border-rose-200">
                    {cameraError}
                  </div>
                )}
              </div>

              {/* Sample item selector */}
              <div className="bg-[#fafaf9] rounded-2xl p-6 border border-neutral-200/80 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-neutral-900 uppercase tracking-wide">
                    Choose A Sample Waste Item
                  </span>
                  <span className="text-[11px] text-neutral-500">8 Curated Samples</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {SAMPLE_WASTE_ITEMS.map((item) => {
                    const isSelected = selectedItem.id === item.id && !uploadedImagePreview && !isCameraActive;
                    return (
                      <button
                        key={item.id}
                        onClick={() => triggerScan(item)}
                        className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-white border-neutral-900 shadow-xs ring-2 ring-neutral-900'
                            : 'bg-white border-neutral-200/80 hover:border-neutral-400 hover:shadow-2xs text-neutral-700'
                        }`}
                      >
                        <div className="text-xs font-bold text-neutral-900 line-clamp-1">{item.name}</div>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-neutral-100 text-[10px] text-neutral-500">
                          <span className="line-clamp-1">{item.category}</span>
                          <span className="font-mono ml-1 font-semibold">{item.confidence}%</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Upload Custom Image Card */}
              <div className="bg-[#fafaf9] rounded-2xl p-6 border border-neutral-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-neutral-900 uppercase tracking-wide">
                    Upload A Custom Waste Photo
                  </span>
                  {uploadedImagePreview && (
                    <button
                      onClick={() => {
                        setUploadedImagePreview(null);
                        setCustomDetectedName(null);
                        triggerScan(SAMPLE_WASTE_ITEMS[0]);
                      }}
                      className="text-[11px] text-neutral-500 hover:text-neutral-900 flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset to Samples</span>
                    </button>
                  )}
                </div>

                <label className="border-2 border-dashed border-neutral-300 hover:border-emerald-500 rounded-xl p-5 flex flex-col items-center justify-center cursor-pointer transition-colors bg-white group">
                  <Upload className="w-6 h-6 text-neutral-400 group-hover:text-emerald-600 transition-colors mb-2" />
                  <span className="text-xs font-semibold text-neutral-800">
                    Click to select photo from device
                  </span>
                  <span className="text-[10px] text-neutral-500 mt-0.5">
                    Supports JPG, PNG, WEBP from your phone or PC
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Technical disclaimer */}
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-start gap-2.5 text-xs text-neutral-600">
                <Info className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-800">Technical Note: </span>
                  This interactive interface simulates computer vision inference and municipal segregation logic. The production architecture connects to a TensorFlow/PyTorch model backend via FastAPI.
                </div>
              </div>

            </div>

            {/* Right 7 Cols: Interactive Product Display (3 Screens Flow) */}
            <div className="lg:col-span-7 bg-[#fafaf9] rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs space-y-6">
              
              {/* Screen Flow Navigator Tabs */}
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  Product Flow Demonstration
                </div>
                <div className="flex items-center gap-1">
                  {[
                    { id: 'scan', label: 'Screen 1: Scan' },
                    { id: 'identified', label: 'Screen 2: Identified' },
                    { id: 'instructions', label: 'Screen 3: Guidance' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveScreen(s.id as any)}
                      className={`text-xs px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                        activeScreen === s.id
                          ? 'bg-neutral-900 text-white font-semibold'
                          : 'text-neutral-600 hover:text-neutral-900 bg-white border border-neutral-200'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Screen 1: Scan Viewport */}
              {activeScreen === 'scan' && (
                <div className="relative rounded-2xl bg-neutral-950 text-white aspect-[16/10] sm:aspect-[16/9] flex flex-col items-center justify-center p-6 overflow-hidden">
                  {/* Viewfinder borders */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-emerald-400 z-10" />
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-emerald-400 z-10" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-emerald-400 z-10" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-emerald-400 z-10" />

                  {isScanning && (
                    <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#34d399] animate-pulse z-20" />
                  )}

                  {/* If Live Camera is active, show video element */}
                  {isCameraActive ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-black">
                      <video
                        ref={videoRef}
                        playsInline
                        muted
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-600/90 text-white text-[10px] px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                        LIVE CAMERA
                      </div>
                    </div>
                  ) : uploadedImagePreview ? (
                    <img
                      src={uploadedImagePreview}
                      alt="Uploaded waste item"
                      className="max-h-52 object-contain rounded-lg opacity-85"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center space-y-3 z-10">
                      <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 shadow-inner">
                        <Camera className="w-8 h-8 animate-pulse" />
                      </div>
                      <div className="text-center max-w-sm">
                        <div className="text-sm font-semibold text-white">Target: {selectedItem.name}</div>
                        <div className="text-xs text-neutral-400 font-mono mt-1">
                          {isScanning ? 'Running convolutional neural net inference...' : 'Viewfinder locked. Click to view classification result.'}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Actions inside viewfinder */}
                  <div className="absolute bottom-4 z-20 flex items-center gap-3">
                    {isCameraActive ? (
                      <button
                        onClick={captureCameraFrame}
                        className="px-5 py-2 rounded-lg bg-emerald-400 text-neutral-950 font-bold text-xs hover:bg-emerald-300 transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>Snap Photo Now</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => setActiveScreen('identified')}
                        className="px-5 py-2 rounded-lg bg-emerald-400 text-neutral-950 font-bold text-xs hover:bg-emerald-300 transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
                      >
                        <span>View AI Classification Result</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Screen 2: Identified View */}
              {activeScreen === 'identified' && (
                <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 space-y-6 shadow-2xs">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-neutral-100 pb-5">
                    <div>
                      <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        <span>AI Waste Recognition Engine</span>
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-900 mt-1 font-display">
                        {customDetectedName ? `${customDetectedName} (${selectedItem.name})` : selectedItem.name}
                      </h3>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        {selectedItem.sampleDescription}
                      </p>
                    </div>

                    <div className="text-right sm:shrink-0">
                      <div className="text-2xl font-extrabold text-neutral-900 font-mono tabular-nums">
                        {selectedItem.confidence}%
                      </div>
                      <div className="text-[11px] text-neutral-500">Confidence Score</div>
                    </div>
                  </div>

                  {/* Classification details grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-[#fafaf9] border border-neutral-200 space-y-1.5">
                      <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wide">
                        Assigned Waste Stream
                      </span>
                      <div className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${
                          selectedItem.binColor === 'blue' ? 'bg-blue-600' :
                          selectedItem.binColor === 'green' ? 'bg-emerald-600' :
                          selectedItem.binColor === 'red' ? 'bg-rose-600' : 'bg-neutral-600'
                        }`} />
                        <span>{selectedItem.streamName}</span>
                      </div>
                      <div className="text-xs text-neutral-500 pt-1">
                        Category: <strong className="text-neutral-800">{selectedItem.category}</strong>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#fafaf9] border border-neutral-200 space-y-1.5">
                      <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wide">
                        Material Composition
                      </span>
                      <div className="text-sm font-bold text-neutral-900">
                        {selectedItem.materialComposition}
                      </div>
                      <div className="text-xs text-neutral-500 pt-1">
                        Circular Potential: <span className="text-emerald-700 font-medium">High recyclable value</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Action Preview */}
                  <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-neutral-800 space-y-1">
                    <span className="font-bold text-emerald-900">Recommended Action: </span>
                    <span>{selectedItem.recommendedAction}</span>
                  </div>

                  {/* Action row with fully working buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                    <button
                      onClick={() => setActiveScreen('instructions')}
                      className="w-full sm:w-auto px-5 py-2.5 bg-neutral-900 text-white rounded-lg font-semibold text-xs hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>View Full Step-by-Step Instructions</span>
                      <ChevronRight className="w-4 h-4 text-emerald-400" />
                    </button>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        onClick={() => setActiveScreen('scan')}
                        className="px-3.5 py-2.5 bg-white border border-neutral-300 text-neutral-700 rounded-lg font-semibold text-xs hover:bg-neutral-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        title="Rescan or switch angle"
                      >
                        <RefreshCw className="w-3.5 h-3.5 text-neutral-500" />
                        <span>Rescan</span>
                      </button>

                      <button
                        onClick={addToActivityLog}
                        className="flex-1 sm:flex-initial px-4 py-2.5 bg-white border border-neutral-300 text-neutral-800 rounded-lg font-semibold text-xs hover:bg-neutral-50 transition-colors flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                      >
                        <Activity className="w-4 h-4 text-emerald-600" />
                        <span>Log To Tracker</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Screen 3: Step-by-Step Guidance */}
              {activeScreen === 'instructions' && (
                <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 space-y-6 shadow-2xs">
                  <div className="border-b border-neutral-100 pb-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                        Action Checklist
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 font-display">
                        How To Handle: {selectedItem.name}
                      </h3>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-md font-semibold border ${getBinBadgeClass(selectedItem.binColor)}`}>
                      {selectedItem.streamName}
                    </span>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-3">
                    {selectedItem.stepByStep.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#fafaf9] border border-neutral-100 text-xs text-neutral-700">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 mt-0.5 text-[11px]">
                          {idx + 1}
                        </div>
                        <div className="leading-relaxed">{step}</div>
                      </div>
                    ))}
                  </div>

                  {/* Educational Recycling Tip Box */}
                  <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 space-y-1">
                    <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                      <Recycle className="w-4 h-4 text-amber-700" />
                      <span>Educational Recycling Tip</span>
                    </div>
                    <p className="text-xs text-amber-800 leading-relaxed">
                      {selectedItem.recyclingTip}
                    </p>
                  </div>

                  {/* Environmental Benefit */}
                  <div className="text-xs text-neutral-500 border-t border-neutral-100 pt-3">
                    <strong className="text-neutral-700">Ecological Impact: </strong>
                    {selectedItem.environmentalBenefit}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => setActiveScreen('identified')}
                      className="text-xs text-neutral-600 hover:text-neutral-900 font-medium cursor-pointer"
                    >
                      &larr; Back to Recognition Summary
                    </button>
                    <button
                      onClick={addToActivityLog}
                      className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold text-xs hover:bg-emerald-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Completed! Log Action</span>
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        ) : (
          /* Activity Tracker View */
          <div className="bg-[#fafaf9] rounded-3xl p-8 border border-neutral-200/80 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
              <div>
                <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                  Personal & Campus Impact Tracker
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mt-1 font-display">
                  Your Segregation Activity History
                </h3>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={copyActivitySummary}
                  className="px-3 py-2 bg-white border border-neutral-300 text-neutral-700 rounded-lg text-xs font-semibold hover:bg-neutral-50 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSummary ? 'Copied!' : 'Copy Summary'}</span>
                </button>
                <button
                  onClick={() => {
                    setActiveViewTab('demo');
                    setActiveScreen('scan');
                  }}
                  className="px-4 py-2 bg-neutral-900 text-white rounded-lg text-xs font-semibold hover:bg-neutral-800 transition-colors shrink-0 cursor-pointer shadow-xs"
                >
                  Scan Another Item &rarr;
                </button>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl border border-neutral-200">
                <div className="text-xs text-neutral-500">Total Items Scanned</div>
                <div className="text-2xl font-bold text-neutral-900 font-mono mt-1">{activityLogs.length}</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-neutral-200">
                <div className="text-xs text-neutral-500">Dry Recyclables Diverted</div>
                <div className="text-2xl font-bold text-blue-700 font-mono mt-1">
                  {activityLogs.filter(l => l.category === 'Recyclable').length}
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-neutral-200">
                <div className="text-xs text-neutral-500">Organic Compost Actions</div>
                <div className="text-2xl font-bold text-emerald-700 font-mono mt-1">
                  {activityLogs.filter(l => l.category.includes('Organic')).length}
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-neutral-200">
                <div className="text-xs text-neutral-500">Hazardous / E-Waste Isolated</div>
                <div className="text-2xl font-bold text-rose-700 font-mono mt-1">
                  {activityLogs.filter(l => l.category.includes('Hazardous') || l.category.includes('E-Waste')).length}
                </div>
              </div>
            </div>

            {/* Log list */}
            {activityLogs.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-neutral-200 space-y-3">
                <Activity className="w-10 h-10 text-neutral-300 mx-auto" />
                <div className="text-base font-bold text-neutral-800">Your log is currently empty</div>
                <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                  Scan items using the interactive demo or restore the sample log entries to see metrics.
                </p>
                <div className="pt-2 flex items-center justify-center gap-3">
                  <button
                    onClick={resetSampleLogs}
                    className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Restore Sample Records
                  </button>
                  <button
                    onClick={() => setActiveViewTab('demo')}
                    className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Scan An Item Now
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden divide-y divide-neutral-100 shadow-2xs">
                {activityLogs.map((log) => (
                  <div key={log.id} className="p-4 flex items-center justify-between gap-4 text-xs hover:bg-neutral-50/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full shrink-0 ${
                        log.binColor === 'blue' ? 'bg-blue-600' :
                        log.binColor === 'green' ? 'bg-emerald-600' :
                        log.binColor === 'red' ? 'bg-rose-600' : 'bg-neutral-600'
                      }`} />
                      <div>
                        <div className="font-bold text-neutral-900">{log.itemName}</div>
                        <div className="text-neutral-500">{log.streamName}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <span className="text-[11px] font-mono text-neutral-400">{log.timestamp}</span>
                        <div className="text-emerald-700 font-medium text-[11px]">Correctly Sorted</div>
                      </div>
                      <button
                        onClick={() => deleteLogItem(log.id)}
                        className="p-1.5 text-neutral-400 hover:text-rose-600 rounded-md hover:bg-rose-50 transition-colors cursor-pointer"
                        title="Remove entry"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Table Footer Controls */}
            {activityLogs.length > 0 && (
              <div className="flex items-center justify-between text-xs text-neutral-500 pt-2">
                <button
                  onClick={clearAllLogs}
                  className="text-neutral-400 hover:text-rose-600 transition-colors cursor-pointer text-xs"
                >
                  Clear all activity logs
                </button>
                <button
                  onClick={resetSampleLogs}
                  className="text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer text-xs"
                >
                  Reset to initial sample logs
                </button>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
};
