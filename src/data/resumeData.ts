import { ResumeData } from '../types';

export const resumeData: ResumeData = {
  name: 'Kannikesh Prabhu',
  title: 'Software Engineer / Android Team Lead',
  headline: 'Crafting apps that fit in your pocket and solutions that expand your world.',
  location: 'Karkala taluk, Karnataka, India',
  email: 'me@kannikeshprabhu.in',
  linkedinUrl: 'https://www.linkedin.com/in/kannikesh',
  linkedinDisplay: 'linkedin.com/in/kannikesh',
  summary:
    'Software Engineer and Android Team Lead with a strong background in Android development, Clean Architecture, and team coordination. Experienced in designing robust multi-modular mobile systems, server-driven UI, and reactive state management with high-performance caching and offline-first capabilities.',
  
  experience: [
    {
      id: 'farefirst-lead',
      role: 'Software Engineer / Android Team Lead',
      company: 'FareFirst',
      location: 'Mangaluru, Karnataka, India',
      locationType: 'On-site',
      period: 'September 2025 – Present',
      duration: 'Present',
      isCurrent: true,
      isLeadRole: true,
      description:
        'Leading the core Android engineering department, driving system architecture decisions, code reviews, and cross-functional team coordination to deliver production-grade applications.',
      bulletPoints: [
        'Lead and mentor Android engineering team, orchestrating sprint planning, technical roadmaps, and code quality benchmarks.',
        'Architected clean multi-modular application structures ensuring decoupled UI, domain, and data layers.',
        'Guided integration of Android Jetpack modern libraries, Server-Driven UI (SDUI), and robust state management pipelines.',
        'Coordinated release cycles, Over-The-Air (OTA) updates, and crash analytics triage for seamless user experience.'
      ],
      skills: [
        'Clean Architecture',
        'Android',
        'Android Framework',
        'Team Coordination',
        'Android Jetpack',
        'Multi-Modular',
        'Code Reviews',
        'OTA Updates'
      ]
    },
    {
      id: 'farefirst-dev',
      role: 'Android Developer',
      company: 'FareFirst',
      location: 'Mangaluru, Karnataka, India',
      locationType: 'On-site',
      period: 'July 2024 – September 2025',
      duration: '1 yr 3 mos',
      isCurrent: false,
      isLeadRole: false,
      description:
        'Designed and developed core Android application features, focusing on clean architecture, asynchronous flows with Kotlin Coroutines, and responsive state management.',
      bulletPoints: [
        'Implemented MVVM design pattern with Kotlin Coroutines and Flow for reactive and predictable UI states.',
        'Engineered caching strategies including custom memory/disk image caching and network payload caching for reduced latency.',
        'Integrated Google Maps API for interactive geo-location search, route plotting, and location-based discovery services.',
        'Integrated RESTful JSON APIs and Dependency Injection pipelines for maintainable and testable components.'
      ],
      skills: [
        'Clean Architecture',
        'Kotlin',
        'Android Studio',
        'Kotlin Coroutines',
        'Dependency Injection',
        'MVVM',
        'Google Maps API',
        'Cache Management'
      ]
    }
  ],

  skillCategories: [
    {
      id: 'mobile-android',
      title: 'Mobile & Android Ecosystem',
      iconName: 'Smartphone',
      featuredSkills: ['Android Framework', 'Android Jetpack', 'Clean Architecture', 'MVVM', 'Kotlin Coroutines'],
      skills: [
        'Android Development',
        'Android Framework',
        'Android Jetpack',
        'Clean Architecture',
        'Model-View-ViewModel (MVVM)',
        'Multi-Modular Programming',
        'API-driven UI & Server-Driven UI',
        'Compose State Management',
        'Kotlin Coroutines & Flow',
        'Reactive Programming',
        'Google Maps API Integration',
        'REST APIs & JSON Parsing',
        'OTA (Over-The-Air) Updates',
        'Cache Management & Image Caching',
        'Network Caching & Offline Resilience'
      ]
    },
    {
      id: 'languages',
      title: 'Programming Languages',
      iconName: 'Code',
      featuredSkills: ['Kotlin', 'Java', 'Core Java', 'Python'],
      skills: ['Kotlin', 'Java', 'Core Java', 'Python', 'Dart', 'XML']
    },
    {
      id: 'web-crossplatform',
      title: 'Web & Cross-Platform',
      iconName: 'Globe',
      featuredSkills: ['HTML5 & CSS3', 'ES6 JavaScript', 'MERN Stack', 'Flutter'],
      skills: ['HTML5', 'Cascading Style Sheets (CSS)', 'Modern JavaScript (ES6+)', 'MERN Stack', 'Flutter']
    },
    {
      id: 'tools-cloud',
      title: 'Tools, BaaS & Platforms',
      iconName: 'Wrench',
      featuredSkills: ['Android Studio', 'Git & GitHub', 'Firebase', 'Postman'],
      skills: [
        'Android Studio',
        'Postman',
        'Git & GitHub',
        'Ubuntu Linux',
        'Firebase',
        'Firebase Remote Config',
        'Google Analytics'
      ]
    },
    {
      id: 'testing-quality',
      title: 'Testing, Debugging & QA',
      iconName: 'CheckCircle2',
      featuredSkills: ['Unit Testing', 'Bug Fixing', 'Debugging & Profiling'],
      skills: [
        'Unit Testing',
        'Bug Fixing',
        'Memory Profiling',
        'Network Debugging',
        'Performance Tuning',
        'Code Refactoring'
      ]
    }
  ],

  projects: [
    {
      id: 'clean-plate-sattvik',
      title: 'Clean Plate Sattvik: No Onion No Garlic',
      subtitle: 'Associated with FareFirst',
      association: 'FareFirst',
      period: 'May 2026 – Present',
      description:
        'A dedicated dietary lifestyle and culinary navigation application engineered to help users discover certified Sattvik, No-Onion & No-Garlic dining options, meal plans, and regional cuisines with real-time location mapping.',
      highlights: [
        'Built with Clean Architecture and modular architecture separating presentation, domain, and local data persistence.',
        'Integrated high-precision Google Maps navigation and custom geospatial filtering for verified dietary establishments.',
        'Engineered multi-layer caching (Image caching + API payload persistence) ensuring instant loading even in poor network conditions.',
        'Implemented Server-Driven UI components allowing dynamic promotional feeds and menu curation without requiring app store updates.'
      ],
      tags: [
        'Android',
        'Kotlin',
        'Clean Architecture',
        'Google Maps API',
        'Server-Driven UI',
        'Offline Cache',
        'Firebase'
      ]
    }
  ],

  education: [
    {
      id: 'polytechnic-karkala',
      institution: 'Polytechnic College Karkala',
      location: 'Karkala, Karnataka',
      degree: 'Diploma in Computer Science and Engineering',
      period: 'November 2022 – April 2024',
      skills: ['Git', 'Android Development', 'Data Structures', 'Algorithms', 'Computer Architecture'],
      details: 'Focused on core software development principles, operating systems, and native Android application engineering.'
    },
    {
      id: 'sri-bhuvanendra',
      institution: 'Sri Bhuvanendra College, Karkala',
      location: 'Karkala, Karnataka',
      degree: 'PUC, Full Stack Web Development',
      period: 'July 2018 – July 2019',
      skills: ['Android Development', 'Android Studio', 'Web Technologies', 'Programming Fundamentals'],
      details: 'Pre-University Course foundational studies with emphasis on software development fundamentals, web engineering, and Android Studio IDE tooling.'
    }
  ],

  languages: [
    { language: 'English', proficiency: 'Limited working proficiency', levelPercent: 75 },
    { language: 'Hindi', proficiency: 'Limited working proficiency', levelPercent: 75 },
    { language: 'Kannada / Tulu', proficiency: 'Native / Bilingual', levelPercent: 100 }
  ]
};
