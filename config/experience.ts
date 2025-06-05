import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "wayfair-ecommerce-ui",
    companyName: "Wayfair",
    type: "Professional",
    category: ["Frontend", "Backend", "E-Commerce"],
    shortDescription:
      "Contributed to Wayfair’s e-commerce platform improving user experience and backend microservices for payments and user authentication.",
    githubLink: "",
    techStack: [
      "React",
      "Redux",
      "Node.js",
      "PostgreSQL",
      "AWS ECS",
      "JWT",
      "Stripe",
    ],
    startDate: new Date("2017-08-01"),
    endDate: new Date("2020-02-01"),
    companyLogoImg: "/experience/wayfair/logo.png",
    pagesInfoArr: [
      {
        title: "E-commerce UI",
        description:
          "React/Redux-driven user interface with advanced state management.",
        imgArr: ["/experience/wayfair/ecommerce-ui.webp"],
      },
      {
        title: "Secure Payment Microservices",
        description:
          "Node.js backend integrating Stripe and JWT-based authentication.",
        imgArr: ["/experience/wayfair/payment-microservices.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Enhanced Wayfair’s e-commerce front-end using React and Redux with complex state management patterns.",
        "Designed secure Node.js microservices integrating Stripe payments and JWT RBAC authentication.",
        "Optimized PostgreSQL queries and indexing to improve performance by 20%.",
        "Led efforts for automated testing and CI/CD using Jest, Enzyme, AWS CodePipeline, and ECS.",
      ],
      bullets: [
        "Implemented React UI components with Redux Thunk and Saga for async state.",
        "Built secure payment and authentication microservices with Node.js and JWT.",
        "Improved database transaction speeds through query tuning and indexing.",
        "Automated build/deployment pipelines with AWS CodePipeline and ECS.",
        "Wrote comprehensive unit, integration, and E2E tests.",
      ],
    },
  },
  {
    id: "teladoc-healthcare-scheduling-app",
    companyName: "Teladoc Health",
    type: "Professional",
    category: ["Full Stack", "Healthcare", "Telemedicine", "Compliance"],
    shortDescription:
      "Built HIPAA-compliant healthcare scheduling and telemedicine app with PHP Laravel backend and MySQL, improving patient engagement for Teladoc Health.",
    githubLink: "",
    techStack: ["PHP", "Laravel", "MySQL", "Vue.js", "Kanban", "Agile"],
    startDate: new Date("2015-05-01"),
    endDate: new Date("2017-07-01"),
    companyLogoImg: "/experience/teladoc/logo.png",
    pagesInfoArr: [
      {
        title: "Scheduling Module",
        description: "Secure patient appointment scheduling with intuitive UI.",
        imgArr: ["/experience/teladoc/scheduling.webp"],
      },
      {
        title: "Telemedicine Features",
        description:
          "Video consultations and messaging between patients and clinicians.",
        imgArr: ["/experience/teladoc/telemedicine.webp"],
      },
      {
        title: "HIPAA Compliance",
        description:
          "Ensured strict data security and privacy for sensitive health data.",
        imgArr: ["/experience/teladoc/hipaa.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed a HIPAA-compliant healthcare application using Laravel and MySQL, focusing on secure patient data handling.",
        "Collaborated with clinicians and QA teams to design user-friendly scheduling and telemedicine features.",
        "Introduced agile workflows and Kanban boards to improve team productivity and delivery speed.",
        "Mentored junior developers and maintained high code quality standards.",
      ],
      bullets: [
        "Built secure scheduling and telemedicine modules with PHP Laravel and Vue.js.",
        "Implemented HIPAA-compliant security and data privacy measures.",
        "Facilitated agile transformation with Kanban boards and daily standups.",
        "Mentored junior engineers and enforced coding best practices.",
      ],
    },
  },
  {
    id: "apex-shopping",
    companyName: "Apex Shopping App",
    type: "Personal Project",
    category: ["Mobile Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Developed a feature-rich mobile shopping application with admin panel, user authentication, and seamless product management using React Native and Firebase.",
    githubLink: "https://github.com/adrid34/nextjs-portfolio.git",
    techStack: ["React Native", "Javascript", "Redux", "Node.js", "express.js"],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/experience/apex/logo.png",
    pagesInfoArr: [
      {
        title: "Splash Screen",
        description: "Custom animated splash screen with app branding",
        imgArr: ["/experience/apex/app_7.webp"],
      },
      {
        title: "Login/Signup Authentication",
        description: "Secure user authentication system with Firebase",
        imgArr: ["/experience/apex/app_1.webp"],
      },
      {
        title: "All Products Explore Screen",
        description: "Interactive product browsing with categories and filters",
        imgArr: ["/experience/apex/app_3.webp"],
      },
      {
        title: "Admin Panel",
        description:
          "Comprehensive admin dashboard for product and order management",
        imgArr: ["/experience/apex/app_4.webp", "/experience/apex/app_6.webp"],
      },
      {
        title: "Sidenav Navigation",
        description: "Intuitive side navigation for easy app navigation",
        imgArr: ["/experience/apex/app_5.webp"],
      },
      {
        title: "Firebase Database",
        description:
          "Real-time database structure for efficient data management",
        imgArr: ["/experience/apex/db.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The Apex Shopping App represents a comprehensive mobile e-commerce solution that I developed from the ground up using React Native and Firebase. This project showcases my ability to create a full-featured shopping application with both user and admin functionalities.",
        "The application features a robust authentication system, allowing users to securely sign up and log in. The product exploration interface is designed with user experience in mind, incorporating smooth navigation and intuitive filtering options.",
        "One of the key highlights is the admin panel, which provides complete control over product management, order processing, and inventory tracking. The integration with Firebase ensures real-time data synchronization and reliable data persistence.",
        "The app's architecture emphasizes scalability and performance, utilizing Redux for state management and following best practices for mobile app development. The UI/UX design focuses on providing a seamless shopping experience across different device sizes.",
      ],
      bullets: [
        "Implemented secure user authentication and authorization using Firebase",
        "Designed and developed an intuitive product browsing and shopping cart system",
        "Created a comprehensive admin panel for product and order management",
        "Integrated real-time data synchronization using Firebase Database",
        "Implemented state management using Redux for optimal performance",
        "Designed responsive UI components following mobile-first principles",
        "Incorporated smooth animations and transitions for enhanced user experience",
      ],
    },
  },
  {
    id: "smart-logistics-dashboard",
    companyName: "Transporeon", // Real platform owner (European but project done in US)
    type: "Professional",
    category: ["Full Stack", "Logistics", "Real-Time"],
    shortDescription:
      "Developed a smart logistics dashboard with real-time tracking and analytics, integrating BLE device monitoring and AI-powered predictive fault detection.",
    githubLink: "",
    techStack: [
      "Next.js",
      "Node.js",
      "WebSocket",
      "MQTT",
      "TensorFlow.js",
      "Azure",
      "Vercel",
    ],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2025-05-01"),
    companyLogoImg: "/experience/ledgent/logo.png",
    pagesInfoArr: [
      {
        title: "Real-time Device Monitoring",
        description:
          "Live BLE device status updates with low-latency WebSocket streams.",
        imgArr: ["/experience/ledgent/device-monitoring.webp"],
      },
      {
        title: "AI Predictive Analytics",
        description:
          "TensorFlow.js-powered fault detection reducing downtime by 15%.",
        imgArr: ["/experience/ledgent/ai-analytics.webp"],
      },
      {
        title: "Dynamic Dashboard UI",
        description:
          "Next.js based UI with server-side rendering and incremental static regeneration.",
        imgArr: ["/experience/ledgent/dashboard-ui.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Led the development of a scalable smart logistics dashboard using Next.js and Node.js, focusing on real-time data and AI-driven insights.",
        "Implemented WebSocket and MQTT protocols for efficient, real-time device monitoring over BLE networks.",
        "Integrated AI models with TensorFlow.js for predictive fault detection, enabling proactive maintenance and reducing downtime.",
        "Collaborated closely with cross-functional teams following Agile methodologies to deliver high-impact features on schedule.",
      ],
      bullets: [
        "Architected Next.js app with SSR and ISR for optimal performance and SEO.",
        "Built AI predictive analytics using TensorFlow.js and custom APIs.",
        "Developed real-time communication pipelines with WebSocket and MQTT.",
        "Set up CI/CD pipelines using GitHub Actions and Azure Pipelines.",
        "Mentored developers and enforced coding standards with ESLint, Prettier, and Jest.",
      ],
    },
  },
  {
    id: "portfolio-card",
    companyName: "Portfolio Card",
    type: "Personal Project",
    category: ["Web Dev", "Frontend", "3D Modeling"],
    shortDescription:
      "Forged an immersive 3D Portfolio Card utilizing the prowess of Three.js and Blender, where art and technology converge in an interactive masterpiece.",
    websiteLink: "https://card.adrid34.xyz/",
    githubLink: "https://github.com/adrid34/3d-portfolio-card",
    techStack: ["React", "Javascript", "HTML5", "CSS3"],
    startDate: new Date("2022-03-01"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/experience/card/logo.png",
    pagesInfoArr: [
      {
        title: "Card Views",
        description: "Front and back views of the interactive 3D card",
        imgArr: [
          "/experience/card/card_2.webp",
          "/experience/card/card_3.webp",
        ],
      },
      {
        title: "Interactive Elements",
        description:
          "Custom links embedded in the 3D model with interactive animations",
        imgArr: ["/experience/card/card_1.webp"],
      },
      {
        title: "3D Model Development",
        description: "Blender project showcasing the model creation process",
        imgArr: ["/experience/card/card_4.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "In my personal project, I've ventured into the world of creativity, fashioning a distinctive portfolio card through the utilization of Three.js.",
        "This portfolio card transcends convention; it emerges as a captivating 3D model, adorned with meticulous lighting arrangements that conjure a spellbinding visual journey.",
        "To materialize this concept, I've harnessed the combined potential of Three.js and Blender, orchestrating a meticulous crafting of the central 3D model that serves as the cornerstone of the card's allure.",
        "Yet, the allure extends beyond aesthetics. I've ingeniously interwoven custom links directly into the fabric of Three.js components. Through the creation and seamless integration of novel components, these additions elegantly rest upon the card's surface, mirroring its rotations and delivering an interactive dimension to my portfolio.",
        "The portfolio card itself is an opus of motion, perpetually swaying in an auto-rotational dance that unfurls its multifaceted essence. As an enhancement, I've introduced an instinctive user interaction element. A simple, intuitive drag of the card in specific directions grants viewers a comprehensive vantage, enabling exploration from every conceivable angle.",
        "At its core, my personal project epitomizes technical finesse, artistic expression, and interactive design. The amalgamation of Three.js, Blender's prowess, and the innovation of component integration has birthed not only a portfolio card, but a dynamic encounter leaving an indelible imprint on all who partake.",
      ],
      bullets: [
        "Conceptualized and realized a distinct portfolio card using Three.js, highlighting creative exploration.",
        "Crafted a mesmerizing 3D model enhanced by thoughtful lighting arrangements, resulting in a captivating visual voyage.",
        "Leveraged the synergy of Three.js and Blender to meticulously sculpt and refine the central 3D model, embodying meticulous attention to detail.",
        "Innovatively integrated custom links within Three.js components, introducing an interactive layer via seamlessly incorporated new elements.",
        "Enabled an auto-rotating feature for the portfolio card, perpetually showcasing its various facets to observers.",
        "Introduced an instinctual user interaction mechanism, allowing viewers to comprehensively explore the card's dimensions through simple, intuitive dragging motions.",
        "Represented a fusion of technical prowess, artistic ingenuity, and interactive design in a project that reshapes the boundaries of conventional portfolio representation.",
      ],
    },
  },
  {
    id: "hotel-booking-platform",
    companyName: "Booking.com", // real hotel booking platform owner
    type: "Professional",
    category: ["Full Stack", "Travel", "Real-Time"],
    shortDescription:
      "Created a responsive hotel booking platform with real-time notifications and location-based search using PHP Laravel and WebSocket technology.",
    githubLink: "",
    techStack: [
      "PHP",
      "Laravel",
      "PostgreSQL",
      "Redis",
      "JavaScript",
      "Ratchet WebSocket",
    ],
    startDate: new Date("2013-05-01"),
    endDate: new Date("2015-04-01"),
    companyLogoImg: "/experience/mobile/logo.png",
    pagesInfoArr: [
      {
        title: "Booking Interface",
        description:
          "Responsive UI for hotel search and reservations with Google Maps integration.",
        imgArr: ["/experience/mobile/booking-ui.webp"],
      },
      {
        title: "Real-Time Notifications",
        description:
          "Implemented push notifications and live updates using Ratchet WebSocket.",
        imgArr: ["/experience/mobile/realtime-notifications.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed a full-stack hotel booking platform featuring responsive design and geolocation search.",
        "Implemented real-time notifications using WebSocket for immediate booking updates.",
        "Optimized backend performance with PostgreSQL partitioning and Redis caching.",
        "Conducted automated testing and performance benchmarking to ensure reliability.",
      ],
      bullets: [
        "Created a responsive front-end with HTML5, CSS3, and JavaScript.",
        "Built backend services with PHP Laravel and WebSocket real-time communication.",
        "Optimized database queries using PostgreSQL partitioning and Redis caching.",
        "Implemented automated tests and performance tuning with PHPUnit and JMeter.",
      ],
    },
  },
  {
    id: "cirql-dashboard",
    companyName: "Cirql Dashboard",
    type: "Personal Project",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Created a dashboard project using React and Tailwind CSS, focusing on UI design and routing implementation.",
    websiteLink: "https://adrianmadrid.vercel.app/",
    techStack: ["React", "TailwindCSS", "Google Auth"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-02-15"),
    companyLogoImg: "/experience/cirql/logo.png",
    pagesInfoArr: [
      {
        title: "Dashboard Home",
        description:
          "Main dashboard view with analytics widgets and data visualization",
        imgArr: ["/experience/cirql/web_1.png", "/experience/cirql/web_2.png"],
      },
      {
        title: "Profile Page",
        description:
          "User profile management interface with customization options",
        imgArr: ["/experience/cirql/web_3.png", "/experience/cirql/web_4.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "For the 'Cirql Dashboard' personal project, I aimed to enhance my UI design skills and deepen my understanding of routing within a React application.",
        "I utilized React and Tailwind CSS to craft an intuitive dashboard interface that provides users with an organized overview of data and functionalities. The UI components were thoughtfully designed to ensure a seamless user experience.",
        "Incorporating Google Sign-In Authentication further fortified the project by adding a layer of security and convenience. Users are required to authenticate before accessing certain routes, ensuring the safety of sensitive information.",
        "The routing system was meticulously implemented to enable smooth navigation between different sections of the dashboard, simulating real-world use cases.",
        "Through this project, I've gained valuable insights into UI/UX design principles and the implementation of secure and efficient routing in React applications.",
      ],
      bullets: [
        "Created a user-friendly dashboard project using React and Tailwind CSS.",
        "Implemented Google Sign-In Authentication to ensure secure access to sensitive routes.",
        "Designed UI components to provide an intuitive and visually pleasing experience.",
        "Focused on implementing a smooth routing system to simulate real-world use cases.",
        "Enhanced my skills in UI design, routing, and component architecture.",
      ],
    },
  },
];

export const featuredExperiences = Experiences.slice(0, 3);
