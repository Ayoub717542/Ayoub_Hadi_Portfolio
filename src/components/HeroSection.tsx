import React from 'react';
import { FileText, Linkedin, Github, ExternalLink, ArrowRight, MapPin, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';
import { candidateProfile } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-pattern">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#3B82F6]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151A21] border border-[#242A33] text-xs font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Available Immediately</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-300">{candidateProfile.soughtOpportunity}</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-purple-400 bg-clip-text text-transparent">{candidateProfile.fullName}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-gray-300 mt-2">
                {candidateProfile.desiredTitle}
              </p>
            </div>

            {/* Short presentation phrase */}
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">
              {candidateProfile.shortBio}
            </p>

            {/* Location & Mobility Details */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-400 pt-1">
              <div className="flex items-center gap-1.5 bg-[#151A21] px-3 py-1.5 rounded-md border border-[#242A33]">
                <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>{candidateProfile.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#151A21] px-3 py-1.5 rounded-md border border-[#242A33]">
                <Briefcase className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>{candidateProfile.mobilityZone}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-semibold text-sm shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02] transition-all"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={candidateProfile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#151A21] border border-[#242A33] text-gray-200 font-semibold text-sm hover:border-[#8B5CF6] hover:text-white transition-all"
              >
                <FileText className="w-4 h-4 text-[#8B5CF6]" />
                <span>View CV (Google Doc)</span>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </a>

              <a
                href={candidateProfile.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#151A21] border border-[#242A33] text-gray-300 hover:text-white hover:border-[#3B82F6] transition-all text-sm font-semibold"
              >
                <Linkedin className="w-4 h-4 text-[#3B82F6]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={candidateProfile.gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#151A21] border border-[#242A33] text-gray-300 hover:text-white hover:border-purple-400 transition-all text-sm font-semibold"
              >
                <Github className="w-4 h-4 text-purple-400" />
                <span>GitHub</span>
              </a>

              <a
                href={candidateProfile.generalDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-950/80 to-teal-950/80 border border-emerald-800/50 text-emerald-300 hover:text-emerald-100 transition-all text-sm font-semibold"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick Proof Pills */}
            <div className="pt-4 border-t border-[#242A33]/60 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-2xl font-extrabold text-white">4 Major</p>
                <p className="text-xs text-gray-400 font-medium">Full-Stack & API Projects</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#8B5CF6]">Java & React</p>
                <p className="text-xs text-gray-400 font-medium">Core Stack Expertise</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#3B82F6]">Dockerized</p>
                <p className="text-xs text-gray-400 font-medium">Production-Ready Code</p>
              </div>
            </div>

          </div>

          {/* Visual Profile Card (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#151A21] border border-[#242A33] rounded-2xl p-6 shadow-2xl relative group hover:border-[#8B5CF6]/50 transition-colors">
              
              {/* Profile Avatar Container */}
              <div className="relative mb-6">
                <div className="w-28 h-28 mx-auto rounded-2xl bg-gradient-to-tr from-[#8B5CF6] via-indigo-600 to-[#3B82F6] p-1 shadow-xl">
                  <div className="w-full h-full bg-[#0B0F14] rounded-xl flex items-center justify-center text-4xl font-extrabold text-white">
                    HA
                  </div>
                </div>
                
                {/* Status Badge on Profile */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#0B0F14] border border-[#242A33] px-3 py-1 rounded-full text-[11px] font-bold text-gray-300 shadow-md flex items-center gap-1.5 whitespace-nowrap">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Full-Stack Verified</span>
                </div>
              </div>

              {/* Bio Highlights */}
              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-white">{candidateProfile.fullName}</h3>
                <p className="text-xs text-[#8B5CF6] font-semibold tracking-wide uppercase">
                  Junior Software Engineer
                </p>
                <p className="text-xs text-gray-400 leading-relaxed italic">
                  "{candidateProfile.longBio}"
                </p>
              </div>

              {/* Floating Tech Badges */}
              <div className="mt-6 pt-4 border-t border-[#242A33] flex flex-wrap justify-center gap-2">
                {['Spring Boot', 'React', 'Spring Security', 'JWT', 'Redis', 'Docker', 'MySQL', 'PostgreSQL'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-[#0B0F14] border border-[#242A33] text-[11px] font-semibold text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
