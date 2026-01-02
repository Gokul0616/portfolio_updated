import React from 'react';
import { experience, education, certificates, workshops } from '../mock';
import { Card, CardContent } from './ui/card';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';
import { Badge } from './ui/badge';

const Experience = () => {
  return (
    <section id="experience" className="relative py-12 px-4">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-3">Experience & Education</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="text-cyan-400" size={28} />
              <h3 className="text-2xl font-semibold text-white">Work Experience</h3>
            </div>
            <div className="space-y-3">
              {experience.map((exp) => (
                <Card key={exp.id} className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{exp.role}</h4>
                        <p className="text-cyan-400 font-medium text-sm">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <Badge className="bg-cyan-500 text-black text-xs">Current</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 mb-2 text-sm">
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="text-cyan-400" size={28} />
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-3">
              {education.map((edu) => (
                <Card key={edu.id} className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                        <p className="text-cyan-400 mb-1 text-sm">{edu.institution}</p>
                        <p className="text-gray-400 text-xs">{edu.years}</p>
                      </div>
                      {edu.cgpa && (
                        <Badge variant="outline" className="border-cyan-500 text-cyan-400 text-xs">{edu.cgpa}</Badge>
                      )}
                      {edu.percentage && (
                        <Badge variant="outline" className="border-cyan-500 text-cyan-400 text-xs">{edu.percentage}</Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-cyan-400" size={28} />
              <h3 className="text-2xl font-semibold text-white">Certifications & Workshops</h3>
            </div>
            <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
              <CardContent className="p-5">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Certifications</h4>
                  <ul className="space-y-1.5">
                    {certificates.map((cert, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start text-sm">
                        <span className="text-cyan-400 mr-2">•</span>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Workshops</h4>
                  <ul className="space-y-1.5">
                    {workshops.map((workshop, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start text-sm">
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