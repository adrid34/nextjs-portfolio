import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "ledgent",
    position: "Senior Software Engineer",
    company: "Ledgent Technology",
    location: "Hollywood, FL",
    startDate: new Date("2020-03-01"),
    endDate: new Date("2025-04-01"),
    description: [
      "Developed server-side rendered UI with Next.js, Material UI, and TailwindCSS.",
      "Built inventory management APIs with Node.js/Express and GraphQL, integrated Mongoose.",
      "Implemented real-time inventory tracking using Socket.io.",
      "Led quality assurance using Selenium and Jest with automated regression and performance tests.",
      "Developed financial dashboards using Vue.js and Vuetify for real-time analytics.",
      "Created secure online payment gateway backend using Python Django.",
      "Designed MongoDB schema for transaction data and ensured data protection compliance.",
      "Wrote robust Jest and Pytest suites for full frontend/backend coverage.",
      "Streamlined DevOps with Azure Pipelines, AWS CodePipeline, ECS, and ECR.",
    ],
    achievements: [
      "Reduced page load time by 30% with lazy loading, code splitting, and CSS minification.",
      "Achieved real-time inventory status updates that improved user visibility and operational speed.",
      "Improved test coverage and release quality, resulting in 40% fewer post-release bugs.",
      "Enabled secure, scalable payment processing that passed all penetration tests on first audit.",
      "Optimized CI/CD pipelines across Azure and AWS, reducing deployment time by 50%.",
    ],
    skills: [
      "Next.js",
      "TailwindCSS",
      "Material UI",
      "Node.js",
      "Express.js",
      "GraphQL",
      "Mongoose",
      "Socket.io",
      "Selenium",
      "Jest",
      "Vue.js",
      "Vuetify",
      "Python",
      "Django",
      "MongoDB",
      "Azure Pipelines",
      "AWS CodePipeline",
      "ECS",
      "ECR",
      "Pytest",
    ],
    companyUrl: "https://www.ledgent.com",
    logo: "/logos/ledgent.png",
  },
  {
    id: "amazon",
    position: "Senior Software Engineer",
    company: "Amazon",
    location: "Seattle, WA",
    startDate: new Date("2017-08-01"),
    endDate: new Date("2020-02-01"),
    description: [
      "Developed React.js e-commerce UI using Ant Design and Bootstrap.",
      "Managed API state using Redux Thunk and Redux Saga.",
      "Integrated backend services with Node.js, including Stripe and JWT authentication.",
      "Designed PostgreSQL database schema and implemented indexing for performance.",
      "Built end-to-end testing with Postman, Jest, and Enzyme.",
      "Streamlined CI/CD using AWS CodePipeline with containerization on ECS and ECR.",
    ],
    achievements: [
      "Improved checkout conversion by 18% through faster UI and smoother payment flows.",
      "Enhanced backend scalability, handling 3x traffic load during peak shopping seasons.",
      "Reduced authentication failures by 25% after secure token handling improvements.",
      "Cut release cycle time by 35% with automated testing and CI/CD pipelines.",
    ],
    skills: [
      "React.js",
      "Ant Design",
      "Bootstrap",
      "Redux Thunk",
      "Redux Saga",
      "Node.js",
      "Stripe",
      "JWT",
      "RBAC",
      "PostgreSQL",
      "AWS CodePipeline",
      "ECS",
      "ECR",
      "Postman",
      "Jest",
      "Enzyme",
    ],
    companyUrl: "https://www.amazon.com",
    logo: "/logos/amazon.png",
  },
  {
    id: "avco",
    position: "Full Stack Engineer",
    company: "Avco Consulting",
    location: "Houston, TX",
    startDate: new Date("2015-05-01"),
    endDate: new Date("2017-07-01"),
    description: [
      "Developed healthcare platform UI with HTML, jQuery, and Bootstrap.",
      "Built backend APIs using PHP Laravel and MySQL.",
      "Enabled appointment scheduling and telemedicine modules.",
      "Implemented HIPAA-compliant security protocols.",
      "Collaborated with healthcare professionals and designers for end-to-end delivery.",
    ],
    achievements: [
      "Launched patient portal used by 10k+ users with HIPAA-grade encryption.",
      "Improved patient scheduling efficiency by 45% via integrated calendar and notifications.",
      "Reduced patient onboarding time through intuitive UI and cross-team collaboration.",
    ],
    skills: [
      "PHP",
      "Laravel",
      "MySQL",
      "HTML",
      "jQuery",
      "Bootstrap",
      "HIPAA",
    ],
    companyUrl: "https://www.avcoconsulting.com",
    logo: "/logos/avco.jpg",
  },
  {
    id: "mobileprogramming",
    position: "Full Stack Developer",
    company: "Mobile Programming LLC",
    location: "New York, NY",
    startDate: new Date("2013-05-01"),
    endDate: new Date("2015-04-01"),
    description: [
      "Built hotel booking UI with HTML5, jQuery, and CSS3.",
      "Integrated Google Maps API and AJAX for enhanced booking experience.",
      "Developed Laravel backend with Ratchet-based real-time features.",
      "Managed data using PostgreSQL with table partitioning and Redis caching.",
      "Tested app performance and UI reliability with PHPUnit and Apache JMeter.",
    ],
    achievements: [
      "Increased booking conversion by 22% through faster search and mapping features.",
      "Handled 100k+ bookings/month using optimized PostgreSQL + Redis architecture.",
      "Achieved 99.9% uptime for booking app after performance tuning and robust testing.",
    ],
    skills: [
      "HTML5",
      "CSS3",
      "jQuery",
      "AJAX",
      "Google Maps API",
      "PHP",
      "Laravel",
      "PostgreSQL",
      "Redis",
      "Ratchet",
      "PHPUnit",
      "JMeter",
    ],
    companyUrl: "https://www.mobileprogramming.com",
    logo: "/logos/mobileprogramming.png",
  },
];

