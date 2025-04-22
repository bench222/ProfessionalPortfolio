import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with payment processing, inventory management, and customer accounts.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB"],
    liveLink: "https://example.com",
    codeLink: "https://github.com/example/project"
  },
  {
    title: "Task Management App",
    description: "A collaboration tool that helps teams organize tasks, track progress, and meet deadlines.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    liveLink: "https://example.com",
    codeLink: "https://github.com/example/project"
  },
  {
    title: "Health Tracking Dashboard",
    description: "A data visualization platform that helps users monitor their health metrics and activities.",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "D3.js", "Firebase"],
    liveLink: "https://example.com",
    codeLink: "https://github.com/example/project"
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-24 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={mainControls}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-poppins font-bold text-primary mb-3"
            variants={itemVariants}
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-secondary mx-auto mb-6"
            variants={itemVariants}
          />
          <motion.p 
            className="font-inter text-lg text-primary/70 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            A selection of my recent work, demonstrating my technical abilities and creative problem-solving.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={mainControls}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-2">{project.title}</h3>
                <p className="text-primary/70 font-inter text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs bg-gray-100 text-primary/80 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-secondary font-medium text-sm flex items-center"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary/70 font-medium text-sm flex items-center"
                  >
                    <span>Source Code</span>
                    <Github className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
        >
          <a 
            href="#" 
            className="inline-flex items-center text-secondary hover:text-secondary/80 font-poppins font-medium transition duration-300"
          >
            View All Projects
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
