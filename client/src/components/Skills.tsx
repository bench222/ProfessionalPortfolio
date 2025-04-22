import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Code, Server, Wrench } from "lucide-react";

const skillsData = {
  frontend: [
    "HTML/CSS",
    "JavaScript",
    "React",
    "Vue.js",
    "Tailwind CSS",
    "SASS",
    "TypeScript",
  ],
  backend: [
    "Node.js",
    "Express",
    "Python",
    "Django",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
  ],
  tools: [
    "Git",
    "Docker",
    "CI/CD",
    "Jest",
    "Figma",
    "AWS",
    "Vercel",
  ],
};

export default function Skills() {
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
    <section id="skills" className="py-24" ref={ref}>
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
            Skills & Expertise
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-secondary mx-auto mb-6"
            variants={itemVariants}
          />
          <motion.p 
            className="font-inter text-lg text-primary/70 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Here are the technologies and tools I work with to bring ideas to life.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial="hidden"
          animate={mainControls}
          variants={containerVariants}
        >
          {/* Frontend Skills */}
          <motion.div 
            className="p-8 bg-white rounded-xl shadow-lg"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Code className="text-secondary text-2xl" />
            </div>
            <h3 className="text-2xl font-poppins font-semibold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.frontend.map((skill, index) => (
                <motion.span 
                  key={index}
                  className="skill-tag bg-gray-100 text-primary px-3 py-1 rounded-full text-sm"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          {/* Backend Skills */}
          <motion.div 
            className="p-8 bg-white rounded-xl shadow-lg"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Server className="text-accent text-2xl" />
            </div>
            <h3 className="text-2xl font-poppins font-semibold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.backend.map((skill, index) => (
                <motion.span 
                  key={index}
                  className="skill-tag bg-gray-100 text-primary px-3 py-1 rounded-full text-sm"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          {/* Other Skills */}
          <motion.div 
            className="p-8 bg-white rounded-xl shadow-lg"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <Wrench className="text-purple-500 text-2xl" />
            </div>
            <h3 className="text-2xl font-poppins font-semibold mb-4">Tools & Others</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.tools.map((skill, index) => (
                <motion.span 
                  key={index}
                  className="skill-tag bg-gray-100 text-primary px-3 py-1 rounded-full text-sm"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
