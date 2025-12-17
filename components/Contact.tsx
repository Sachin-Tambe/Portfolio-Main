import React from 'react';
import { Mail, Github, Linkedin, Twitter, Database, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-surface border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Whether you need to automate reporting, build predictive models, or discuss data strategy, I'm ready to help.
            </p>
            
            <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-flex items-center text-xl font-medium text-white hover:text-primary transition-colors mb-4 block">
              <Mail className="w-6 h-6 mr-3 text-secondary" />
              {PERSONAL_INFO.email}
            </a>
            
            {PERSONAL_INFO.phone && (
                <div className="text-gray-400 mb-6">{PERSONAL_INFO.phone}</div>
            )}

            <div className="flex gap-6 mt-8">
              {PERSONAL_INFO.socials.github && (
                <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110" aria-label="GitHub">
                  <Github className="w-6 h-6" />
                </a>
              )}
              {PERSONAL_INFO.socials.linkedin && (
                <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
              )}
              {PERSONAL_INFO.socials.kaggle && (
                <a href={PERSONAL_INFO.socials.kaggle} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110" aria-label="Kaggle">
                  <Database className="w-6 h-6" />
                </a>
              )}
              {PERSONAL_INFO.socials.twitter && (
                <a href={PERSONAL_INFO.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110" aria-label="Twitter">
                  <Twitter className="w-6 h-6" />
                </a>
              )}
              {PERSONAL_INFO.socials.medium && (
                <a href={PERSONAL_INFO.socials.medium} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110" aria-label="Medium">
                  <BookOpen className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>

          <div className="bg-dark p-8 rounded-2xl border border-white/5">
             <h3 className="text-white font-bold mb-4">Quick Links</h3>
             <ul className="space-y-3">
                <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About</a></li>
                <li><a href="#experience" className="text-gray-400 hover:text-primary transition-colors">Experience</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#education" className="text-gray-400 hover:text-primary transition-colors">Education</a></li>
             </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-2 md:mt-0 flex items-center">
            Mumbai, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
