import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Navbar from './components/Navbar';
import SkillChart from './components/SkillChart';
import ProjectCard from './components/ProjectCard';
import BlogCard from './components/BlogCard';
import ContactForm from './components/ContactForm';
import { skills } from './data/skills';
import { projects } from './data/projects';
import { blogPosts } from './data/blog';

function App() {
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true });
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80"
                alt="Profile"
                className="w-40 h-40 rounded-full mx-auto md:mx-0 mb-8 object-cover"
              />
              <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                John Doe
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Full Stack Developer & Data Visualization Expert
              </p>
              <div className="flex justify-center md:justify-start space-x-6">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="w-full h-[764px] bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <iframe 
                width="100%" 
                height="764" 
                frameBorder="0"
                src="https://observablehq.com/embed/@d3/disjoint-force-directed-graph/2?cells=chart"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div ref={skillsRef} className={`transition-opacity duration-1000 ${skillsInView ? 'opacity-100' : 'opacity-0'}`}>
            <SkillChart skills={skills} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;