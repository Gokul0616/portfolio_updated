import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-950 border-t border-cyan-500/20 py-8 px-4">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              Gokul<span className="text-cyan-400">.dev</span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Full Stack Developer passionate about building innovative web and mobile applications.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-3">Quick Links</h4>
            <div className="space-y-1.5">
              <a href="#about" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">About</a>
              <a href="#skills" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">Skills</a>
              <a href="#projects" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">Projects</a>
              <a href="#experience" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">Experience</a>
              <a href="#contact" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-3">Connect</h4>
            <div className="flex gap-3 mb-3">
              <a 
                href={`https://${personalInfo.github}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 text-cyan-400 transition-colors"
              >
                <Github size={18} />
              </a>
              <a 
                href={`https://${personalInfo.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 text-cyan-400 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="p-2 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 text-cyan-400 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
            <p className="text-gray-400 text-xs">{personalInfo.email}</p>
          </div>
        </div>

        <div className="pt-6 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-400 text-xs">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs flex items-center gap-2">
              Made with <Heart className="text-cyan-400" size={14} fill="currentColor" /> by Gokul R
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;