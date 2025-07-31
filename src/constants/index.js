import { address } from "motion/react-client";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a strong foundation in building scalable and user-centric web applications. With hands-on experience in technologies like React.js, Next.js, Node.js, MongoDB, MySQL, and PHP, I have developed and deployed projects ranging from AI-powered interview platforms to real-time discussion forums. My expertise lies in crafting clean, maintainable code and delivering seamless user experiences. I continuously strive to improve my skills and aim to build impactful software that bridges technology and user needs.
`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a strong inclination toward building intuitive and impactful web applications. My development journey is backed by hands-on experience with technologies such as React, Next.js, Node.js, PHP, MySQL, and MongoDB. From crafting ed-tech platforms and AI-powered mock interview systems to developing secure real-time Q&A forums, I’ve tackled diverse challenges that strengthened both my technical and problem-solving skills. I thrive in team settings that value clean code and thoughtful design, and I’m constantly eager to explore new technologies and contribute to meaningful projects that make a difference.`;

export const EXPERIENCES = [
  {
    year: "Aug 2024 – Aug 2024",
    role: "Campus Intern — IBM",
    company: "IBM",
    description: `Contributed to IBM Cloud-based application development using services like Watson, AppID, and Cloudant. Implemented text-to-speech and speech-to-text features using Node-RED, and collaborated on a real-time communication pipeline.`,
    technologies: ["IBM Cloud Watson", "Node-RED"],
  },
  {
    year: "Dec 2023 – Jan 2024",
    role: "Hackathon Contributor — She Builds Hackathon",
    company: "MLH",
    description: `Built a centralized platform for women-centric government schemes to improve accessibility and user engagement. Focused on problem-solving, UI development, and database integration for public-facing information systems.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "shopNex - E-Commerce Website",
    image: project1,
    description:
      "Designed and developed a dynamic e-commerce web application featuring secure user authentication, product listings with category filters, and a functional shopping cart system. Built an admin dashboard for managing products and orders. Ensured responsive design using Bootstrap and handled all backend operations using Core PHP and MySQL.",
    technologies: ["HTML", "CSS", "MySQL", "PHP", "XAMPP"],
  },
  {
    title: "Discuss-Q-A-Forum-Website",
    image: project2,
    description:
      "Built a real-time discussion forum enabling users to post questions and provide answers. Implemented session-based authentication, secure CRUD operations, and dynamic content rendering. Designed a responsive, user-friendly interface with Bootstrap, and integrated MySQL for structured data management.",
    technologies: ["HTML", "CSS", "Core PHP", "XAMPP"],
  },
  {
    title: " AI-Powered Mock Interview Platform",
    image: project3,
    description:
      "Developed a full-stack platform that simulates real interview scenarios using AI-generated questions and voice/text input. Integrated real-time feedback, user authentication, and interview session tracking. Leveraged Google Gemini API for intelligent response generation and Tailwind for a modern, responsive UI.",
    technologies: ["Next.js", "Tailwind CSS", "Clerk", "JavaScript","Gemini API"],
  },
];

export const EDUCATION =[
  {
    year: "December 2021 - August 2025",
    title: "BTech. in Information Technology at Shri Ramswaroop Memorial College of Engineering and Management",
    address: "Lucknow, Uttar Pradesh"
},
 {
    year: "2020 - 2021",
    title: "Red Rose Senior Secondary School (12th-CBSE)",
    address: "Lucknow, Uttar Pradesh"
}];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+91 6393281011",
  email: "prakharguptadev01@gmail.com",
};
