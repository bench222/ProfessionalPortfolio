import { motion } from "framer-motion";

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

export default function Hero() {
  return (
    <header className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.span 
              className="text-secondary font-inter font-medium block mb-3"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.span>
            <motion.h1 
              className="text-5xl md:text-6xl font-poppins font-bold text-primary mb-4"
              variants={itemVariants}
            >
              Benjamin Fajardo
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl font-poppins font-medium text-primary/70 mb-6"
              variants={itemVariants}
            >
              Graphic Designer / Web Developer
            </motion.h2>
            <motion.p 
              className="font-inter text-lg text-primary/80 mb-8 max-w-lg"
              variants={itemVariants}
            >
              Experienced multimedia specialist with expertise in WordPress, UI/UX design, and graphic design. Creating visually appealing, user-friendly websites and engaging multimedia content.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <a 
                href="#contact" 
                className="bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="bg-transparent border-2 border-secondary text-secondary hover:bg-secondary/5 font-medium py-3 px-8 rounded-full transition duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects
              </a>
            </motion.div>
          </div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Professional portrait of Benjamin Fajardo" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
