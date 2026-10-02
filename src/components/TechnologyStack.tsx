import React from 'react';
import { Cpu, Code2, Server, Database, Cloud, GitBranch, Shield, Zap } from 'lucide-react';

export const TechnologyStack: React.FC = () => {
  const stackLayers = [
    {
      category: 'AI / Machine Learning',
      icon: Cpu,
      items: [
        { name: 'Python', role: 'Model development & core ML scripts' },
        { name: 'TensorFlow / PyTorch', role: 'Convolutional neural networks for multi-class packaging classification' },
        { name: 'OpenCV', role: 'Image pre-processing, contour detection & edge filtering' },
      ],
      description: 'Optimized inference pipeline targeting high classification accuracy with low compute overhead.'
    },
    {
      category: 'Frontend Client',
      icon: Code2,
      items: [
        { name: 'React.js', role: 'Responsive single-page web architecture' },
        { name: 'Modern TypeScript', role: 'Type-safe component contracts and modular state' },
        { name: 'Tailwind CSS', role: 'High-performance mobile-first styling system' },
      ],
      description: 'Zero-lag viewport camera rendering, instant visual feedback, and cross-device responsiveness.'
    },
    {
      category: 'Backend Microservices',
      icon: Server,
      items: [
        { name: 'FastAPI / Flask', role: 'High-throughput asynchronous REST API endpoints' },
        { name: 'Pydantic & Gunicorn', role: 'Strict schema validation and WSGI orchestration' },
      ],
      description: 'Handles image ingest, batch requests, confidence thresholding, and guidance retrieval.'
    },
    {
      category: 'Database & Cloud Services',
      icon: Database,
      items: [
        { name: 'Firebase Firestore', role: 'User accounts, scan telemetry, and activity logs' },
        { name: 'Cloud Infrastructure', role: 'Containerized deployment on scalable cloud clusters' },
      ],
      description: 'Low-latency session sync, high reliability, and encrypted authentication.'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 uppercase">
            <span>Engineering Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Planned Technology Stack</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight font-display">
            Built on a proven, scalable foundation.
          </h2>

          <p className="text-lg text-neutral-600 leading-relaxed font-normal">
            Our technical design balances cutting-edge computer vision with lightweight client-side responsiveness, ensuring smooth performance even on budget smartphones.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackLayers.map((layer) => {
            const Icon = layer.icon;
            return (
              <div
                key={layer.category}
                className="bg-[#fafaf9] rounded-2xl p-6 border border-neutral-200/80 shadow-2xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-emerald-700">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-neutral-900 font-display">
                      {layer.category}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                      {layer.description}
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2 border-t border-neutral-200/60">
                    {layer.items.map((it) => (
                      <div key={it.name} className="text-xs">
                        <div className="font-semibold text-neutral-900">{it.name}</div>
                        <div className="text-[11px] text-neutral-500 leading-tight">{it.role}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-neutral-200/60 text-[10px] uppercase font-mono text-emerald-800">
                  Production Target
                </div>
              </div>
            );
          })}
        </div>

        {/* Architectural Flow Diagram Box */}
        <div className="p-6 rounded-2xl bg-neutral-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              Modular Integration Pipeline
            </span>
            <div className="text-sm font-semibold text-neutral-200">
              Smartphone Camera &rarr; Pre-processing (OpenCV) &rarr; Neural Net Classification (PyTorch/TF) &rarr; Waste Knowledge Engine &rarr; Instant UI Guidance
            </div>
          </div>
          <div className="text-xs font-mono text-neutral-400 shrink-0 border border-neutral-700 rounded-lg px-3 py-2 bg-neutral-800">
            Target Inference: &le; 1.8s
          </div>
        </div>

      </div>
    </section>
  );
};
