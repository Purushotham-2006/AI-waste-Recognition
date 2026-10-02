export interface WasteItem {
  id: string;
  name: string;
  category: 'Recyclable' | 'Organic / Compost' | 'E-Waste' | 'Hazardous' | 'General Waste';
  streamName: string;
  binColor: 'blue' | 'green' | 'red' | 'gray';
  confidence: number;
  sampleDescription: string;
  recommendedAction: string;
  stepByStep: string[];
  recyclingTip: string;
  materialComposition: string;
  environmentalBenefit: string;
  iconType: 'bottle' | 'cardboard' | 'apple' | 'can' | 'cable' | 'glass' | 'tetra' | 'battery';
}

export interface ActivityLog {
  id: string;
  itemName: string;
  category: string;
  timestamp: string;
  streamName: string;
  binColor: 'blue' | 'green' | 'red' | 'gray';
}

export interface TeamMember {
  name: string;
  college: string;
  major: string;
  role: string;
  skills: string[];
  bio: string;
  initials: string;
}

export interface RoadmapPhase {
  phase: string;
  timeline: string;
  goal: string;
  team: string;
  funds: string;
  resources: string;
  milestones: string[];
  status: 'In Progress' | 'Planned' | 'Upcoming';
}

export interface CompetitorComparison {
  name: string;
  type: 'Direct' | 'Indirect';
  strength: string;
  limitation: string;
  differentiator: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Technology' | 'Institutions' | 'Usage';
}
