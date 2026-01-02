import React from 'react';
import { personalInfo } from '../mock';
import { Card, CardContent } from './ui/card';
import { MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6">My Story</h3>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                {personalInfo.bio}
              </p>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <MapPin className="text-cyan-400" size={20} />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-cyan-400" size={20} />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-cyan-400" size={20} />
                  <span>{personalInfo.phone}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6">What I Do</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-medium text-white mb-2">Full Stack Development</h4>
                  <p className="text-gray-400">Building scalable web applications using React, Node.js, and modern frameworks.</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white mb-2">Mobile App Development</h4>
                  <p className="text-gray-400">Creating cross-platform mobile applications with React Native.</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white mb-2">Backend Architecture</h4>
                  <p className="text-gray-400">Designing robust backend systems with Java Springboot and databases.</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white mb-2">Innovation & Research</h4>
                  <p className="text-gray-400">Exploring AR/VR technologies and innovative solutions.</p>
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