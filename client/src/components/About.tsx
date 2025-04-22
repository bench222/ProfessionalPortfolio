import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "15+", label: "Satisfied Clients" },
  { value: "10+", label: "Open Source Contributions" },
];

export default function About() {
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
    <section id="about" className="py-24 bg-gray-50" ref={ref}>
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
            About Me
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-secondary mx-auto"
            variants={itemVariants}
          />
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-12 items-center"
          initial="hidden"
          animate={mainControls}
          variants={containerVariants}
        >
          <motion.div 
            className="md:w-1/2"
            variants={itemVariants}
          >
            <p className="font-inter text-lg text-primary/80 mb-6">
              I'm a Full Stack Developer with over 5 years of experience building web applications and digital experiences that are both beautiful and functional. My journey in development began when I built my first website at 15, and I've been hooked ever since.
            </p>
            <p className="font-inter text-lg text-primary/80 mb-6">
              Prior to my current role at TechSolutions Inc, I worked with various startups to help them establish their digital presence. I hold a Bachelor's degree in Computer Science from University of Technology and continue to expand my skills through ongoing learning.
            </p>
            <p className="font-inter text-lg text-primary/80">
              When I'm not coding, you can find me hiking mountain trails, experimenting with new recipes, or contributing to open-source projects that make a difference.
            </p>
          </motion.div>

          <motion.div 
            className="md:w-1/2"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-5xl font-poppins font-bold text-secondary mb-2">{stat.value}</div>
                  <p className="text-primary/70 font-inter">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
