
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-portfolio-blue">
            EEY
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-portfolio-blue transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://linkedin.com/in/eren-eray-yilmaz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-portfolio-blue transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/erenerayyilmaz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-portfolio-blue transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:erenerayyilmaz745@gmail.com"
              className="text-gray-600 hover:text-portfolio-blue transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-portfolio-blue transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-portfolio-blue transition-colors duration-200 font-medium px-4 py-2 text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center justify-center space-x-6 pt-4 border-t">
                <a
                  href="https://linkedin.com/in/eren-eray-yilmaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-portfolio-blue transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/erenerayyilmaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-portfolio-blue transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:erenerayyilmaz745@gmail.com"
                  className="text-gray-600 hover:text-portfolio-blue transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
