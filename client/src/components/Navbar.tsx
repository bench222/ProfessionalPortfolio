import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { useLocation } from "wouter";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      const id = href.substring(1);
      scrollToSection(id);
      setMobileMenuOpen(false);
    } else {
      setLocation(href);
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="font-poppins font-bold text-2xl"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="text-primary">Port</span>
          <span className="text-secondary">folio</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-primary hover:text-secondary transition duration-300 navbar-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Nav Button */}
        <button 
          className="md:hidden text-primary focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div 
        className={`md:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-primary hover:text-secondary transition duration-300"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
