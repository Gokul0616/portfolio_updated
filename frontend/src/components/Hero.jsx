import React from 'react';
import { personalInfo } from '../mock';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <h2 className="text-cyan-400 text-sm font-medium mb-1 tracking-wide">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-3 tracking-tight">
            {personalInfo.name}
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
        </div>
        
        <h3 className="text-2xl md:text-3xl text-gray-300 font-light mb-4">
          {personalInfo.title}
        </h3>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          {personalInfo.subtitle}
        </p>

        <div className="flex gap-3 justify-center mb-8">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-5 text-base transition-all duration-300"
          >
            View My Work
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-semibold px-6 py-5 text-base transition-all duration-300"
          >
            Get in Touch
          </Button>
        </div>

        <div className="flex gap-5 justify-center items-center">
          <a 
            href={`https://${personalInfo.github}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a 
            href={`https://${personalInfo.linkedin}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-cyan-400" size={28} />
        </div>
      </div>
    </section>
  );
};

export default Hero;