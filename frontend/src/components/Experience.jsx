import React from 'react';
import { experience, education, certificates, workshops } from '../mock';
import { Card, CardContent } from './ui/card';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';
import { Badge } from './ui/badge';

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Experience & Education</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-cyan-400" size={32} />
              <h3 className="text-3xl font-semibold text-white">Work Experience</h3>
            </div>
            <div className="space-y-4">
              {experience.map((exp) => (
                <Card key={exp.id} className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-1">{exp.role}</h4>
                        <p className="text-cyan-400 font-medium">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <Badge className="bg-cyan-500 text-black">Current</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 mb-3">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-cyan-400" size={32} />
              <h3 className="text-3xl font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu) => (
                <Card key={edu.id} className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-1">{edu.degree}</h4>
                        <p className="text-cyan-400 mb-2">{edu.institution}</p>
                        <p className="text-gray-400 text-sm">{edu.years}</p>
                      </div>
                      {edu.cgpa && (
                        <Badge variant="outline" className="border-cyan-500 text-cyan-400">{edu.cgpa}</Badge>
                      )}
                      {edu.percentage && (
                        <Badge variant="outline" className="border-cyan-500 text-cyan-400">{edu.percentage}</Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-cyan-400" size={32} />
              <h3 className="text-3xl font-semibold text-white">Certifications & Workshops</h3>
            </div>
            <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-cyan-400 mb-4">Certifications</h4>
                  <ul className="space-y-2">
                    {certificates.map((cert, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-cyan-400 mb-4">Workshops</h4>
                  <ul className="space-y-2">
                    {workshops.map((workshop, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {workshop}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;