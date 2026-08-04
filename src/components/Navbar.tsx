import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Linkedin, Github, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { candidateProfile } from '../data/portfolioData';

interface NavbarProps {
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Resume CV', href: '#cv' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0F14]/90 backdrop-blur-md border-b border-[#242A33] shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center font-bold text-white text-lg shadow-md group-hover:scale-105 transition-transform">
              HA
            </div>
            <div>
              <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-[#8B5CF6] transition-colors">
                {candidateProfile.fullName}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Full-Stack Junior</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-[#8B5CF6] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions & Links */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenAudit}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#151A21] border border-[#242A33] text-xs font-semibold text-purple-300 hover:text-white hover:border-[#8B5CF6] transition-all"
              title="View Step 1 Portfolio Audit & Verification"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>Audit Step 1</span>
              <span className="px-1.5 py-0.2 rounded bg-purple-900/60 text-[10px] text-purple-200">
                Validated
              </span>
            </button>

            <a
              href={candidateProfile.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-[#151A21] rounded-lg transition-colors border border-transparent hover:border-[#242A33]"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={candidateProfile.gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white hover:bg-[#151A21] rounded-lg transition-colors border border-transparent hover:border-[#242A33]"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={candidateProfile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] rounded-lg shadow-md hover:opacity-90 transition-opacity"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenAudit}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#151A21] border border-[#242A33] text-xs text-purple-300"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>Audit</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white bg-[#151A21] border border-[#242A33] rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0F14] border-b border-[#242A33] px-4 pt-3 pb-6 space-y-3 mt-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-gray-200 hover:text-[#8B5CF6] py-2 border-b border-[#151A21]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={candidateProfile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] rounded-lg"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume (CV)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <div className="flex justify-center gap-4 pt-2">
              <a
                href={candidateProfile.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-xs text-gray-300 bg-[#151A21] border border-[#242A33] rounded-lg"
              >
                <Linkedin className="w-4 h-4 text-[#3B82F6]" />
                <span>LinkedIn</span>
              </a>
              <a
                href={candidateProfile.gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-xs text-gray-300 bg-[#151A21] border border-[#242A33] rounded-lg"
              >
                <Github className="w-4 h-4 text-purple-400" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
