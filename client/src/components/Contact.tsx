import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Dribbble } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const mainControls = useAnimation();
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

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

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // In a real app, you would send the form data to a backend
    // Simulating API call with timeout
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24" ref={ref}>
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
            Get In Touch
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-secondary mx-auto mb-6"
            variants={itemVariants}
          />
          <motion.p 
            className="font-inter text-lg text-primary/70 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col lg:flex-row gap-12"
          initial="hidden"
          animate={mainControls}
          variants={containerVariants}
        >
          <motion.div 
            className="lg:w-2/5"
            variants={itemVariants}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-poppins font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
                    <Mail className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-primary/60 mb-1">Email</p>
                    <a href="mailto:benjamin.fajardo24@gmail.com" className="text-primary hover:text-secondary transition duration-300">
                      benjamin.fajardo24@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
                    <Phone className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-primary/60 mb-1">Phone</p>
                    <a href="tel:+639760670034" className="text-primary hover:text-secondary transition duration-300">
                      +63 976 067 0034
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
                    <MapPin className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-primary/60 mb-1">Location</p>
                    <p className="text-primary">Philippines</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-primary/70 mb-4">Connect with me on social media:</p>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-secondary text-primary hover:text-white flex items-center justify-center transition duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-secondary text-primary hover:text-white flex items-center justify-center transition duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-secondary text-primary hover:text-white flex items-center justify-center transition duration-300"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href="https://dribbble.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-secondary text-primary hover:text-white flex items-center justify-center transition duration-300"
                  >
                    <Dribbble size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-3/5"
            variants={itemVariants}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-poppins font-semibold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary/70 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-secondary/50'} focus:outline-none focus:ring-2 focus:border-secondary`}
                      placeholder="Your name"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary/70 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-secondary/50'} focus:outline-none focus:ring-2 focus:border-secondary`}
                      placeholder="Your email"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-primary/70 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-secondary/50'} focus:outline-none focus:ring-2 focus:border-secondary`}
                    placeholder="Subject of your message"
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-primary/70 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-secondary/50'} focus:outline-none focus:ring-2 focus:border-secondary`}
                    placeholder="Your message"
                    {...register("message")}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <button 
                  type="submit" 
                  className="bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
