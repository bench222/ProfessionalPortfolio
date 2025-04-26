import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const portfolioItems = [
  {
    title: "E-commerce Website",
    description: "A full-stack e-commerce platform built with React and Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my work and skills",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A task management application with real-time updates",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Firebase", "Material-UI"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export default function Portfolio() {
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
    <section id="portfolio" className="py-24 bg-background" ref={ref}>
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
            Portfolio
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-secondary mx-auto mb-6"
            variants={itemVariants}
          />
          <motion.p 
            className="font-inter text-lg text-primary/70 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Explore my latest projects and creative works
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={mainControls}
          variants={containerVariants}
        >
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-4">
                    <a 
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-secondary hover:text-secondary/80 transition-colors"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-secondary hover:text-secondary/80 transition-colors"
                    >
                      Source Code
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}