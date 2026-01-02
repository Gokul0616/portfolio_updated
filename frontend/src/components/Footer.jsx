import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-950 border-t border-cyan-500/20 py-12 px-6">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Gokul<span className="text-cyan-400">.dev</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about building innovative web and mobile applications.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-cyan-400 transition-colors">About</a>
              <a href="#skills" className="block text-gray-400 hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#projects" className="block text-gray-400 hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#experience" className="block text-gray-400 hover:text-cyan-400 transition-colors">Experience</a>
              <a href="#contact" className="block text-gray-400 hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a 
                href={`https://${personalInfo.github}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 text-cyan-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href={`https://${personalInfo.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 text-cyan-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 text-cyan-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">{personalInfo.email}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart className="text-cyan-400" size={16} fill="currentColor" /> by Gokul R
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;