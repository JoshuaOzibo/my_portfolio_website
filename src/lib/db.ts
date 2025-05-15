import SwiftcareerPreview from "@/assets/swiftcareerPreviewImage.webp";
import UrlShortnerPreview from "@/assets/UrlShortnerPreview.webp";
import AltschoolClonePreview from "@/assets/AltschoolClonePreview.webp";
import DonatePreview from "@/assets/DonatePreview.webp";
import BlinksPreview from "@/assets/BlinksPreview.webp";
import MrMunchPreview from "@/assets/MrMunchPreview.webp";
import QuestionPreview from "@/assets/QuestionPreview.webp";
import MentlyImage from "@/assets/MentlyImage.png"
import chromeExtensionImage from '@/assets/extention images_Stay Organized – Track all your job applications, interviews, and follow-ups in one place.(purple).webp'

export const projectLis = [
  {
    id: 1,
    Image: MrMunchPreview,
    header: "Mr Munch",
    description: `I developed a snacks website from the ground up using react js, designed to simplify the management and display of snack offerings. This dynamic web application enables the owner to effortlessly create, update, read, and delete snack items, while providing customers with an intuitive interface to browse the available snacks.`,
    liveUrl: "https://dazzling-lokum-b3b899.netlify.app/",
    githubUrl: "https://github.com/JoshuaOzibo/mr-munch-snacks-app",
  },
  {
    id: 2,
    Image: BlinksPreview,
    header: "Blinks App",
    description: `I designed Blinks website using bootstrap and little javascript, a visually stunning website interface crafted with care to showcase elegance and creativity. While this project focuses solely on the aesthetic aspect and is not yet functional, it demonstrates the potential for a fully immersive user experience.`,
    liveUrl:
      "https://65ba5e387e7101eb6dfafaa1--meek-tarsier-7da7eb.netlify.app/",
    githubUrl: "https://github.com/JoshuaOzibo/My-Food-App",
  },
  {
    id: 3,
    Image: DonatePreview,
    header: "Donate Platform",
    description: `I developed an orphanage website designed to foster trust and transparency between the organization and its donors. This project focuses on creating an engaging platform where users can see real-time updates on donations, including pop-up messages displaying donor names and contributions.`,
    liveUrl: "https://prismatic-croquembouche-29970f.netlify.app/",
    githubUrl:
      "https://github.com/JoshuaOzibo/Life-Donate-school-group-project",
  },
  {
    id: 4,
    Image: AltschoolClonePreview,
    header: "Altschool Clone",
    description: `As part of my second-year coursework and driven by my admiration for AltSchool, I successfully replicated their website using just React js. This project not only reflects my technical skills but also serves as a tribute to the institution that inspires my educational journey.`,
    liveUrl: "https://sage-meerkat-6d3f72.netlify.app/",
    githubUrl: "https://github.com/JoshuaOzibo/Alt-Schools-Clone",
  },
  {
    id: 5,
    Image: QuestionPreview,
    header: "Quiz App",
    description: `I developed a fully functional quiz application from scratch using React js, and Firebase. This project is designed to provide users with an engaging and interactive platform to test their knowledge and track their performance.`,
    liveUrl:
      "https://65ba59e7225667e94bab3e2d--lucent-moonbeam-bde399.netlify.app/",
    githubUrl: "https://github.com/JoshuaOzibo/Quiz-app",
  },
  {
    id: 6,
    Image: UrlShortnerPreview,
    header: "URL Shortener",
    description: `I developed a feature-rich URL shortener application that empowers users to transform long, cumbersome URLs into concise, shareable links. Beyond just shortening links, this app provides comprehensive activity tracking and customization options, offering a seamless user experience. includes react js, typescript and tailwind css for the frontend, while on the backend i used express js, node js, firebase,`,
    liveUrl: "https://thriving-gumption-6dce4b.netlify.app/",
    githubUrl: "https://github.com/JoshuaOzibo/capstone-project",
  },
  {
    id: 7,
    Image: SwiftcareerPreview,
    header: "Swiftcareer",
    description: `I designed and developed a feature-rich website for SwiftCareer.co using react js, tailwind css and gsap for animations, combining modern design principles with powerful functionality to empower users in their career journey. The project not only showcases my skills in web development but also highlights my contributions to the platform's core tools and extensions.`,
    liveUrl: "https://jade-parfait-8a5d6d.netlify.app/",
    githubUrl: "",
  },
];

export const skillsList = [
  {
    name: "Next js",
    description:
      "React framework for production-grade applications with server-side rendering and static site generation",
  },
  {
    name: "React js",
    description:
      "JavaScript library for building user interfaces with reusable components and efficient DOM manipulation",
  },
  {
    name: "Type script",
    description:
      "Strongly typed programming language that builds on JavaScript, adding static type definitions",
  },
  {
    name: "Javascript",
    description:
      "Dynamic programming language that enables interactive web pages and is essential for web development",
  },
  {
    name: "Vue js",
    description:
      "Progressive JavaScript framework for building user interfaces with a gentle learning curve",
  },
  {
    name: "Tailwindcss",
    description:
      "Utility-first CSS framework for rapidly building custom user interfaces",
  },
  {
    name: "Gsap",
    description:
      "Professional-grade animation library for creating high-performance, complex animations",
  },
  {
    name: "Express js",
    description:
      "Fast, unopinionated web framework for Node.js, used for building web applications and APIs",
  },
  {
    name: "Node js",
    description:
      "Server-side JavaScript runtime environment that executes JavaScript code outside a web browser",
  },
  {
    name: "Firebase",
    description:
      "Google's platform for building web and mobile applications with real-time database and authentication",
  },
  {
    name: "Git & Github",
    description:
      "Version control system and platform for collaborative software development",
  },
  {
    name: "Framer motion",
    description:
      "Production-ready motion library for React that makes creating animations easy",
  },
  {
    name: "Bootstrap",
    description:
      "Popular CSS framework for developing responsive and mobile-first websites",
  },
  {
    name: "Html",
    description:
      "Standard markup language for creating web pages and web applications",
  },
  {
    name: "Css",
    description:
      "Style sheet language used for describing the presentation of a document written in HTML",
  },
];

export const Socials = {
  Instagram:
    "https://www.instagram.com/only1josh_code/profilecard/?igsh=bHdwMTF0a2hqbzU5",
  Linkedin: "https://www.linkedin.com/in/joshua-ozibo-chinedu",
  Github: "https://github.com/JoshuaOzibo",
  TikTok: "https://www.tiktok.com/@only1josh_code?_t=ZM-8slGV0Dm4er&_r=1",
};

export const HeroCardData = [
  {
    h1: '15',
    p: 'Years of Experience'
  },
  {
    h1: '120',
    p: 'Satisfied Clients'
  },
  {
    h1: '108',
    p: 'Completed Projects'
  },
];

export const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

export const project =[
  {
    image: SwiftcareerPreview,
    text: 'On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde'
  },
  {
    image: chromeExtensionImage,
    text: 'On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde'
  },
  {
    image: MentlyImage,
    text: 'On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde'
  },
]

export const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

export const experienceCards = [
  {
    review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: SwiftcareerPreview,
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: SwiftcareerPreview,
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: SwiftcareerPreview,
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];