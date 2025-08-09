import {
  ide, idp, kristobad1, kristobad2,
  shellLogix1, shellLogix2, shellLogix3,
  oandm1, oandm2, oandm3,
  rio, laguna
} from '../assets/index';

export const projects = [
  {
    title: 'Rio Platform',
    description: `Learning & work management system with video, quizzes, secure payments & analytics dashboard.
    
    - Integrated secure payment systems and subscription models
    - Developed an interactive dashboard with real-time analytics
    - Implemented video streaming and quizzes for an engaging learning experience`,
    images: [rio],
    live: 'https://sustainability.rio.ai/v2',
  },
  {
    title: 'IDP - Intelligent Document Processing',
    description: `Intelligent Document Processing is a powerful web-based solution that streamlines PDF management by allowing users to upload, edit, search, and modify content with ease.
    
    This tool enhances document handling efficiency, making it ideal for businesses and professionals who work extensively with PDFs.`,
    images: [idp],
  },
  {
    title: 'Laguna Wallet Extension',
    description: `Laguna is a secure and user-friendly browser wallet extension designed to simplify cryptocurrency transactions and digital asset management.
    
    - Provides seamless integration with decentralized applications (dApps)
    - Ensures a smooth and efficient Web3 experience for users.`,
    images: [laguna],
  },
  {
    title: 'O&M System - Service Platform',
    description: `As a Frontend Developer for this O&M (Operations & Maintenance) service platform, I played a key role in building an intuitive, responsive, and user-friendly interface.
    
    - Developed interactive dashboards and real-time monitoring features
    - Created seamless user workflows to enhance operational efficiency
    - Focused on performance optimization, accessibility, and scalable UI design`,
    images: [oandm1, oandm2, oandm3],
    github: 'https://github.com/Varsine/oandam',
    live: 'https://oandam.vercel.app',
  },
  {
    title: 'ShellLogix - Company Introduction Website',
    description: `- Designed a modern company website
    - Implemented server-side rendering (SSR) for faster loading speeds
    - Integrated blog, contact forms, and lead generation tools
    - Built engaging animations to enhance user experience`,
    images: [shellLogix1, shellLogix2, shellLogix3],
  },
  {
    title: 'Kristobad – Shopping Site',
    description: `- Integrated PayPal for secure payments
    - Used GraphQL & REST APIs for seamless backend communication
    - Implemented real-time features using WebSockets for instant updates`,
    images: [kristobad1, kristobad2],
  },
  {
    title: 'IDE - Videos Platform',
    description: `I developed the frontend for an immersive IDE site featuring high-quality erotic videos and content about love.
    
    - Created a visually engaging, smooth, and responsive user experience
    - Ensured seamless video playback and interactive UI elements
    - Optimized platform performance, accessibility, and mobile responsiveness`,
    images: [ide],
  },
];
