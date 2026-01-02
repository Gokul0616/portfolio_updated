import React from 'react';
import { projects } from '../mock';
import { Card, CardContent } from './ui/card';
import { ExternalLink, Github, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Projects = () => {
  return (
    <section id="projects" className="relative py-12 px-4">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-3">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <CardContent className="p-5">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-3 text-sm">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="border-cyan-500/50 text-cyan-400 bg-cyan-500/10 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {project.note && (
                  <p className="text-xs text-gray-500 italic mb-3">{project.note}</p>
                )}

                <div className="flex gap-2 flex-wrap">
                  {project.liveUrl && (
                    <Button 
                      asChild
                      size="sm"
                      className="bg-cyan-500 hover:bg-cyan-600 text-black font-medium text-xs h-8"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-1" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button 
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black text-xs h-8"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={14} className="mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.paperUrl && (
                    <Button 
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black text-xs h-8"
                    >
                      <a href={project.paperUrl} target="_blank" rel="noopener noreferrer">
                        <FileText size={14} className="mr-1" />
                        Paper
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;