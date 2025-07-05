
import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="text-3xl font-bold text-portfolio-blue mb-4">
              Eren Eray Yılmaz
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Aspiring Full-Stack Developer passionate about creating innovative web solutions. 
              Always learning, always building.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/eren-eray-yilmaz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-portfolio-blue hover:bg-gray-700 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/erenerayyilmaz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-portfolio-blue hover:bg-gray-700 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:erenerayyilmaz745@gmail.com"
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-portfolio-blue hover:bg-gray-700 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-400 hover:text-portfolio-blue transition-colors duration-200 text-left py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-3 text-gray-400">
              <div>
                <span className="font-medium">Email:</span><br />
                <a
                  href="mailto:erenerayyilmaz745@gmail.com"
                  className="hover:text-portfolio-blue transition-colors duration-200"
                >
                  erenerayyilmaz745@gmail.com
                </a>
              </div>
              <div>
                <span className="font-medium">Phone:</span><br />
                <a
                  href="tel:+905526011674"
                  className="hover:text-portfolio-blue transition-colors duration-200"
                >
                  +90 552 601 1674
                </a>
              </div>
              <div>
                <span className="font-medium">Location:</span><br />
                <span>Yıldırım, Bursa, Turkey</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-2" fill="currentColor" />
              <span>by Eren Eray Yılmaz</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">
                © {currentYear} All rights reserved.
              </span>
              <button
                onClick={scrollToTop}
                className="bg-portfolio-blue text-white px-4 py-2 rounded-lg hover:bg-portfolio-blue-dark transition-all duration-200 transform hover:scale-105"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
