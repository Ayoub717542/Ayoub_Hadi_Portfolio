import React from 'react';
import { FileText, Linkedin, Github, ShieldCheck, Heart } from 'lucide-react';
import { candidateProfile } from '../data/portfolioData';

interface FooterProps {
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAudit }) => {
  return (
    <footer className="bg-[#0B0F14] border-t border-[#242A33] py-12 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Title */}
          <div className="space-y-1 text-center md:text-left">
            <span className="text-base font-bold text-white tracking-wider">
              {candidateProfile.fullName}
            </span>
            <p className="text-xs text-gray-500">
              {candidateProfile.desiredTitle} • {candidateProfile.location}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-300">
            <a href="#home" className="hover:text-[#8B5CF6] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#8B5CF6] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#8B5CF6] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#8B5CF6] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#8B5CF6] transition-colors">Experience</a>
            <a href="#cv" className="hover:text-[#8B5CF6] transition-colors">Resume</a>
            <a href="#contact" className="hover:text-[#8B5CF6] transition-colors">Contact</a>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAudit}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#151A21] border border-[#242A33] text-purple-300 hover:text-white transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>Step 1 Audit</span>
            </button>
            <a
              href={candidateProfile.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#151A21] border border-[#242A33] rounded-lg text-gray-400 hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={candidateProfile.gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#151A21] border border-[#242A33] rounded-lg text-gray-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-[#242A33]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center text-[11px] text-gray-500">
          <p>© {new Date().getFullYear()} {candidateProfile.fullName}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with React, Tailwind CSS & Spring Boot ecosystem standards.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
