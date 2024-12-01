import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time chat app with AI-powered responses",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&q=80",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    technologies: ["React", "OpenAI", "WebSocket", "Redis"]
  }
];