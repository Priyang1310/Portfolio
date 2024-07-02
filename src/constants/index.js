import {
  mobile,
  backend,
  web,
  mined,
  sidcup,
  cynthia,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  upwork,
  threejs,
  guru,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Upwork (Freelancing)",
    icon: upwork,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with clients for creating high-quality products for them.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Guru.com (Freelancing)",
    icon: guru,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Maintained a high level of self-motivation and time management discipline to independently manage projects and deliver results.",
      "Actively sought out opportunities to learn and improve technical skills by attending workshops, conferences, and online courses, ensuring I deliver the latest and most effective solutions for clients.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MINeD'2024 website",
    description:
      "Collaborated on a website showcasing technical skills and teamwork (deployed on a .tech domain). ",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "ChakraUI",
        color: "pink-text-gradient",
      },
    ],
    image: mined,
    source_code_link: "https://github.com/VanshilPatel/MINeD-24",
    preview_link: "https://www.mined2024.tech/",
  },
  {
    name: "Sidcup Family Golf UI",
    description:
      "Independently recreated the Sidcup Family Golf UI with GSAP & Locomotive for a smooth, engaging experience.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: sidcup,
    source_code_link:
      "https://github.com/Priyang1310/Projects/tree/main/FrontEnd/SidCupFamilyGolf",
    preview_link:
      "https://priyang1310.github.io/Projects/FrontEnd/SidCupFamilyGolf/index.html",
  },
  {
    name: "Cynthia Ugwu UI",
    description:
      " Built a working clone of Cynthia Ugwu's UI, utilizing GSAP & Locomotive Scroll for interactive elements.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: cynthia,
    source_code_link:
      "https://github.com/Priyang1310/Projects/tree/main/FrontEnd/Cynithia%20Ugwu",
    preview_link:
      "https://priyang1310.github.io/Projects/FrontEnd/Cynithia%20Ugwu/index.html",
  },
];

export { services, technologies, experiences, testimonials, projects };
