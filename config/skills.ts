import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "JavaScript",
    description: "Dynamic programming language used for web development.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "TypeScript",
    description: "Typed superset of JavaScript that compiles to plain JavaScript.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Next.js",
    description: "React framework with hybrid static & server rendering.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description: "JavaScript library for building user interfaces.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Redux",
    description: "State management library for JavaScript apps.",
    rating: 4,
    icon: Icons.redux,
  },

  {
    name: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 engine.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "Express",
    description: "Fast, minimalist web framework for Node.js.",
    rating: 4,
    icon: Icons.express,
  },
  {
    name: "NestJS",
    description: "Progressive Node.js framework for building efficient, scalable apps.",
    rating: 4,
    icon: Icons.nestjs,
  },
  {
    name: "HTML5",
    description: "Standard markup language for creating web pages.",
    rating: 5,
    icon: Icons.html5,
  },
  {
    name: "CSS3",
    description: "Style sheet language used for describing the look of a document.",
    rating: 5,
    icon: Icons.css3,
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "Bootstrap",
    description: "Front-end framework for developing responsive web applications.",
    rating: 4,
    icon: Icons.bootstrap,
  },
  {
    name: "MUI",
    description: "React UI framework with pre-built components.",
    rating: 4,
    icon: Icons.mui,
  },
  {
    name: "MongoDB",
    description: "NoSQL database known for its flexibility and scalability.",
    rating: 4,
    icon: Icons.mongodb,
  },
  {
    name: "MySQL",
    description: "Relational database management system.",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "GraphQL",
    description: "Query language for APIs and a runtime for fulfilling those queries.",
    rating: 4,
    icon: Icons.graphql,
  },
  {
    name: "Socket.IO",
    description: "Enables real-time, bidirectional and event-based communication.",
    rating: 4,
    icon: Icons.socketio,
  },
  {
    name: "Netlify",
    description: "Platform for deploying and hosting web applications.",
    rating: 4,
    icon: Icons.netlify,
  },
  {
    name: "Amazon AWS",
    description: "Cloud computing platform offering scalable solutions.",
    rating: 4,
    icon: Icons.amazonaws,
  },
  {
    name: "Microsoft Azure",
    description: "Cloud computing service for building, testing, and managing apps.",
    rating: 3,
    icon: Icons.azure,
  },
  {
    name: "Python",
    description: "Interpreted, high-level programming language for general-purpose programming.",
    rating: 4,
    icon: Icons.python,
  },
  {
    name: "Django",
    description: "High-level Python web framework that encourages rapid development.",
    rating: 3,
    icon: Icons.django,
  },
  {
    name: "PHP",
    description: "Popular general-purpose scripting language suited for web development.",
    rating: 3,
    icon: Icons.php,
  },
  {
    name: "Laravel",
    description: "PHP framework for building modern web applications.",
    rating: 3,
    icon: Icons.laravel,
  },
  {
    name: "Redis",
    description: "In-memory data structure store, used as a database, cache, and message broker.",
    rating: 4,
    icon: Icons.redis,
  },
  {
    name: "Postman",
    description: "API platform for building and testing APIs.",
    rating: 5,
    icon: Icons.postman,
  },
  {
    name: "JWT",
    description: "Compact URL-safe means of representing claims to be transferred between two parties.",
    rating: 4,
    icon: Icons.jwt,
  },
  {
    name: "Stripe",
    description: "Online payment processing for internet businesses.",
    rating: 4,
    icon: Icons.stripe,
  },
  {
    name: "Apache JMeter",
    description: "Open-source load testing tool to analyze and measure performance.",
    rating: 3,
    icon: Icons.jmeter,
  },
  {
    name: "Jest",
    description: "Delightful JavaScript testing framework by Facebook.",
    rating: 4,
    icon: Icons.jest,
  },
  {
    name: "Selenium",
    description: "Open-source tool for automating web browsers.",
    rating: 3,
    icon: Icons.selenium,
  },
  {
    name: "PHPUnit",
    description: "Unit testing framework for PHP.",
    rating: 3,
    icon: Icons.php,
  },
  {
    name: "Angular",
    description: "TypeScript-based web application framework.",
    rating: 3,
    icon: Icons.angular,
  },
];


export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
