import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-poppins font-bold">
              <span className="text-secondary">Portfolio</span>
            </h2>
            <p className="text-white/70 mt-2">
              Creating digital experiences that make a difference.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center md:items-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-white/70 mb-2">
              © {currentYear} All Rights Reserved
            </p>
            <a href="#" className="text-accent hover:text-white transition duration-300">
              Privacy Policy
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
