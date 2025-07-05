
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-portfolio-blue to-portfolio-purple relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-white/5 rounded-full animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center animate-float">
            <span className="text-4xl font-bold text-white">EY</span>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Eren Eray <span className="text-yellow-300">Yılmaz</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-blue-100 mb-8 font-light">
            Aspiring Full-Stack Developer
          </h2>
          
          <p className="text-lg md:text-xl text-blue-50 mb-12 max-w-3xl mx-auto leading-relaxed">
            Computer Engineering graduate passionate about building modern, scalable web applications. 
            Solution-oriented and eager to learn new technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-portfolio-blue px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </button>
            <button
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-portfolio-blue transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
          </div>

          {/* Scroll Down Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce-slow text-white hover:text-yellow-300 transition-colors duration-300"
            aria-label="Scroll down"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
