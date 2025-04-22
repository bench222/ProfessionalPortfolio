import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Multimedia Specialist",
    description: "Produced multimedia presentations, photography, and managed the photo studio at Onmedia Creative Solutions Inc.",
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Photography", "Image Retouching", "Multimedia Production"],
    period: "2012-2018",
    company: "Onmedia Creative Solutions Inc."
  },
  {
    title: "UI/UX Designer",
    description: "Created and designed a wide variety of visual materials, maintained trend reviews, and assisted in marketing campaigns at Keywest Technology.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["UI/UX Design", "Marketing Campaigns", "PowerPoint", "Print Production"],
    period: "2018-2022",
    company: "Keywest Technology"
  },
  {
    title: "Graphic Designer",
    description: "Created and managed social media content for advertising campaigns at Atomic DC Advertising Agency.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Graphic Design", "Social Media", "Content Creation"],
    period: "Feb 2022-Sept 2022",
    company: "Atomic DC Advertising Agency"
  },
  {
    title: "Graphic Designer",
    description: "Produced video and graphics for social media content and managed social media accounts at ClearKen.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["Video Production", "Graphics", "Social Media Management"],
    period: "2023",
    company: "ClearKen"
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
            Work Experience
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-secondary mx-auto mb-6"
            variants={itemVariants}
          />
          <motion.p 
            className="font-inter text-lg text-primary/70 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            My professional journey in design, development, and multimedia across various companies and industries.
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
                <div className="flex justify-between items-center mt-2">
                  <div className="text-secondary font-medium text-sm">
                    <span className="font-bold">{project.company}</span>
                  </div>
                  <div className="text-primary/70 font-medium text-sm bg-gray-100 px-2 py-1 rounded">
                    <span>{project.period}</span>
                  </div>
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
            href="#contact" 
            className="inline-flex items-center text-secondary hover:text-secondary/80 font-poppins font-medium transition duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Me For More Details
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
