import React from 'react';
import { personalInfo } from '../mock';
import { Card, CardContent } from './ui/card';
import { MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-12 px-4">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-3">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">My Story</h3>
              <p className="text-gray-300 leading-relaxed text-base mb-4">
                {personalInfo.bio}
              </p>
              <div className="space-y-2 text-gray-300 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="text-cyan-400" size={18} />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="text-cyan-400" size={18} />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="text-cyan-400" size={18} />
                  <span>{personalInfo.phone}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">What I Do</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Full Stack Development</h4>
                  <p className="text-gray-400 text-sm">Building scalable web applications using React, Node.js, and modern frameworks.</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Mobile App Development</h4>
                  <p className="text-gray-400 text-sm">Creating cross-platform mobile applications with React Native.</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Backend Architecture</h4>
                  <p className="text-gray-400 text-sm">Designing robust backend systems with Java Springboot and databases.</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Innovation & Research</h4>
                  <p className="text-gray-400 text-sm">Exploring AR/VR technologies and innovative solutions.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;