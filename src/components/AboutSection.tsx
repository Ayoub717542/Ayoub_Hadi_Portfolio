import React from 'react';
import { User, Target, Compass, Award, Globe, Shield, Terminal, CheckCircle } from 'lucide-react';
import { candidateProfile } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0B0F14] border-t border-[#242A33]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151A21] border border-[#242A33] text-xs font-semibold text-[#8B5CF6]">
            <User className="w-3.5 h-3.5" />
            <span>Profile & Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-[#8B5CF6]">{candidateProfile.fullName}</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            A look into my background, engineering philosophy, and professional goals.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Specialization & Focus */}
          <div className="bg-[#151A21] border border-[#242A33] rounded-xl p-6 hover:border-[#8B5CF6]/60 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6]">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Full-Stack Specialization</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Specialized in combining powerful Java Spring Boot backends with sleek React frontend user interfaces. Deep experience in REST API architecture, stateless JWT security, JPA ORM, Redis caching, and Docker containerization.
            </p>
          </div>

          {/* Card 2: Career Path & Goal */}
          <div className="bg-[#151A21] border border-[#242A33] rounded-xl p-6 hover:border-[#3B82F6]/60 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center text-[#3B82F6]">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Professional Objective</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Seeking a permanent position (CDI), internship, or freelance missions within a progressive engineering team where I can build reliable, scalable web applications, collaborate on code reviews, and deliver clean software.
            </p>
          </div>

          {/* Card 3: Work Philosophy */}
          <div className="bg-[#151A21] border border-[#242A33] rounded-xl p-6 hover:border-emerald-500/60 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Way of Working</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Pragmatic, autonomous, and curious. I practice clean code standards, follow SOLID design principles, write unit tests with Mockito, document APIs with Swagger, and maintain disciplined version control via Git/GitHub.
            </p>
          </div>

        </div>

        {/* Additional Details Row */}
        <div className="mt-10 bg-[#151A21] border border-[#242A33] rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#242A33]">
            
            {/* Column 1: Mobility & Location */}
            <div className="space-y-3 md:pr-6">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <Shield className="w-5 h-5 text-[#8B5CF6]" />
                <span>Location & Mobility</span>
              </div>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span><strong>City:</strong> {candidateProfile.location}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span><strong>Mobility:</strong> {candidateProfile.mobilityZone}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span><strong>Work Setup:</strong> On-site, Hybrid, or Remote</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Core Values */}
            <div className="space-y-3 pt-6 md:pt-0 md:px-6">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <Award className="w-5 h-5 text-[#3B82F6]" />
                <span>Key Professional Value</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                "Relentless drive to transform ideas into reliable, production-ready code. Rapid adaptability to new tech stacks and disciplined focus on performance."
              </p>
            </div>

            {/* Column 3: Languages */}
            <div className="space-y-3 pt-6 md:pt-0 md:pl-6">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <Globe className="w-5 h-5 text-purple-400" />
                <span>Language Proficiency</span>
              </div>
              <div className="space-y-2">
                {candidateProfile.languages.map((lang) => (
                  <div key={lang.language} className="flex justify-between items-center text-xs">
                    <span className="text-gray-200 font-semibold">{lang.language}</span>
                    <span className="px-2 py-0.5 bg-[#0B0F14] border border-[#242A33] rounded text-gray-400">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
