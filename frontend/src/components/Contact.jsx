import React from 'react';
import { personalInfo } from '../mock';
import { Card, CardContent } from './ui/card';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  return (
    <section id="contact" className="relative py-12 px-4">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-3">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-5">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <Mail className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-0.5 text-sm">Email</h4>
                    <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <Phone className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-0.5 text-sm">Phone</h4>
                    <a href={`tel:${personalInfo.phone}`} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <MapPin className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-0.5 text-sm">Location</h4>
                    <p className="text-gray-400 text-sm">{personalInfo.location}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-cyan-500/20">
                  <h4 className="text-white font-medium mb-3 text-sm">Social Links</h4>
                  <div className="flex gap-3">
                    <a 
                      href={`https://${personalInfo.github}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 transition-colors"
                    >
                      <Github className="text-cyan-400" size={20} />
                    </a>
                    <a 
                      href={`https://${personalInfo.linkedin}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 transition-colors"
                    >
                      <Linkedin className="text-cyan-400" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-5">Send a Message</h3>
              <p className="text-gray-400 mb-5 text-sm">
                Feel free to reach out directly via email or connect with me on LinkedIn for professional inquiries and collaboration opportunities.
              </p>
              <div className="space-y-3">
                <Button 
                  asChild
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-5 text-base transition-all duration-300"
                >
                  <a href={`mailto:${personalInfo.email}`}>
                    <Send size={18} className="mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="w-full border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-semibold py-5 text-base transition-all duration-300"
                >
                  <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                    <Linkedin size={18} className="mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
              <div className="mt-6 p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-lg">
                <p className="text-gray-300 text-xs leading-relaxed">
                  <strong className="text-cyan-400">Open to opportunities:</strong> Currently exploring full-stack development roles, freelance projects, and entrepreneurial ventures.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;