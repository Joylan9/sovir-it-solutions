import { 
  Code, Cloud, Shield, Headphones, Database, 
  Laptop, Users, Settings, Brain, BarChart3,
  Palette, Heart, DollarSign 
} from 'lucide-react';

export const detailedServices = [
  {
    id: 'it-consulting',
    title: 'IT Consulting & Strategy',
    icon: Settings,
    description: 'Strategic IT planning and consulting services',
    services: [
      'Technology roadmap planning',
      'IT infrastructure assessment',
      'Cloud migration strategy',
      'IT compliance & risk management'
    ],
    color: 'text-sovir-accent'
  },
  {
    id: 'software-development',
    title: 'Custom Software & Application Development',
    icon: Code,
    description: 'Tailored software solutions for your business needs',
    services: [
      'Web & mobile application development',
      'Enterprise solutions (ERP, CRM, HRM)',
      'API & third-party integration',
      'Legacy system modernization'
    ],
    color: 'text-blue-600'
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure Services',
    icon: Cloud,
    description: 'Scalable cloud solutions and infrastructure management',
    services: [
      'Cloud deployment (AWS, Azure, GCP)',
      'Hybrid cloud solutions',
      'Virtualization & containerization',
      'Managed IT infrastructure'
    ],
    color: 'text-sky-500'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    icon: Shield,
    description: 'Comprehensive security solutions for your business',
    services: [
      'Security audits & compliance',
      'Network security',
      'Endpoint protection & threat management',
      'Data encryption & disaster recovery'
    ],
    color: 'text-green-600'
  },
  {
    id: 'networking-support',
    title: 'Networking & IT Support',
    icon: Headphones,
    description: '24/7 IT support and networking solutions',
    services: [
      'Network design & implementation',
      'Server management',
      'Remote & onsite IT support',
      'IT helpdesk services'
    ],
    color: 'text-purple-600'
  },
  {
    id: 'data-solutions',
    title: 'Data Solutions',
    icon: Database,
    description: 'Advanced data management and analytics',
    services: [
      'Database design & management',
      'Big data analytics',
      'Business Intelligence (BI)',
      'AI/ML-powered data processing'
    ],
    color: 'text-orange-600'
  },
  {
    id: 'digital-workplace',
    title: 'Digital Workplace Solutions',
    icon: Laptop,
    description: 'Modern workplace technology solutions',
    services: [
      'Collaboration tools',
      'Remote work enablement',
      'Unified communication systems',
      'IT automation'
    ],
    color: 'text-indigo-600'
  },
  {
    id: 'it-outsourcing',
    title: 'End-to-End IT Outsourcing',
    icon: Users,
    description: 'Complete IT department outsourcing solutions',
    services: [
      'Complete IT department outsourcing',
      'Dedicated IT support teams',
      'Project-based IT management',
      'Cost-optimized managed services'
    ],
    color: 'text-red-600'
  }
];

export const aiServices = [
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots & Virtual Assistants',
    icon: Brain,
    description: 'Smart conversational AI systems for customer support, lead generation, and business automation.'
  },
  {
    id: 'business-intelligence',
    title: 'AI for Business Intelligence',
    icon: BarChart3,
    description: 'Predictive analytics, AI-driven recommendations, fraud detection & smart automation for industries.'
  },
  {
    id: 'generative-ai',
    title: 'Generative AI Solutions',
    icon: Palette,
    description: 'AI-powered content creation, text-to-image generation, automated marketing campaigns & personalization.'
  },
  {
    id: 'ai-healthcare',
    title: 'AI in Healthcare',
    icon: Heart,
    description: 'Smart diagnostic tools, AI-driven patient monitoring & predictive healthcare solutions.'
  },
  {
    id: 'ai-finance',
    title: 'AI in Finance',
    icon: DollarSign,
    description: 'Risk analysis, fraud detection, robo-advisors & AI-based financial forecasting.'
  }
];

export const recommendedServices = [
  {
    title: 'AI Chatbots for E-commerce',
    description: 'Boost your sales with 24/7 AI-powered chatbots that engage customers and upsell products.',
    icon: Brain
  },
  {
    title: 'Generative AI for Marketing',
    description: 'Create stunning ad creatives, email campaigns & social media posts automatically using Generative AI.',
    icon: Palette
  },
  {
    title: 'AI Healthcare Monitoring',
    description: 'Improve patient care with predictive AI monitoring systems for hospitals & clinics.',
    icon: Heart
  }
];

export const whyChooseUs = [
  'End-to-end IT solutions under one roof',
  'Industry-specific expertise with global standards',
  '24/7 monitoring & support services',
  'Scalable solutions that grow with your business',
  'Proven track record in delivering secure & reliable IT systems'
];
