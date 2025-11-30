
import { Project, SkillCategory } from './types';
import { FrontendIcon, BackendIcon, ToolsIcon, DatabasesIcon } from './components/icons/SkillIcons';

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <FrontendIcon />, level: 95 },
      { name: 'TypeScript', icon: <FrontendIcon />, level: 90 },
      { name: 'Next.js', icon: <FrontendIcon />, level: 85 },
      { name: 'Tailwind CSS', icon: <FrontendIcon />, level: 98 },
      { name: 'Framer Motion', icon: <FrontendIcon />, level: 80 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <BackendIcon />, level: 85 },
      { name: 'Express', icon: <BackendIcon />, level: 80 },
      { name: 'Python', icon: <BackendIcon />, level: 70 },
    ],
  },
  {
    title: 'Databases',
    skills: [
        { name: 'PostgreSQL', icon: <DatabasesIcon />, level: 75 },
        { name: 'MongoDB', icon: <DatabasesIcon />, level: 80 },
        { name: 'Firebase', icon: <DatabasesIcon />, level: 85 },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git & GitHub', icon: <ToolsIcon />, level: 95 },
      { name: 'Docker', icon: <ToolsIcon />, level: 70 },
      { name: 'Vite', icon: <ToolsIcon />, level: 90 },
      { name: 'Figma', icon: <ToolsIcon />, level: 65 },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web App',
    description: 'A modern, full-stack e-commerce solution with a sleek user interface.',
    longDescription: 'This project is a feature-rich e-commerce platform built with Next.js, TypeScript, and Stripe for payments. It includes user authentication, product management, a shopping cart, and a fully responsive design. The backend is powered by Node.js and PostgreSQL.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    tags: ['Next.js', 'React', 'TypeScript', 'Stripe', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    category: 'Productivity Tool',
    description: 'A Kanban-style task manager to boost productivity and organization.',
    longDescription: 'A collaborative task management application inspired by Trello. It features drag-and-drop functionality for tasks, real-time updates with WebSockets, and a clean, intuitive interface built with React and Tailwind CSS. Firebase is used for the backend and real-time database.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'WebSockets'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Data Visualization Dashboard',
    category: 'Data Analytics',
    description: 'An interactive dashboard for visualizing complex datasets.',
    longDescription: 'This dashboard allows users to upload datasets and generate various interactive charts and graphs. It is built using React, D3.js, and Framer Motion for smooth animations and transitions, providing an engaging way to explore data.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    tags: ['React', 'D3.js', 'Framer Motion', 'Data Viz'],
    githubUrl: 'https://github.com',
  },
  {
    id: 4,
    title: 'Personal Portfolio Website',
    category: 'Web Design',
    description: 'A dynamic personal portfolio to showcase my skills and projects.',
    longDescription: 'The very portfolio you are looking at! Built from scratch with React, TypeScript, and Tailwind CSS, and heavily featuring Framer Motion for a fluid and engaging user experience. It includes a dark mode and is fully responsive.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];
