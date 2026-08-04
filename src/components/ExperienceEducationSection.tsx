import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export const ExperienceEducationSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#0B0F14] border-t border-[#242A33]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151A21] border border-[#242A33] text-xs font-semibold text-purple-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Trajectory & Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & <span className="text-[#8B5CF6]">Education</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Verified academic background and practical software development internship history.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Column 1: Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#242A33]">
              <div className="p-2.5 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#8B5CF6]">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Professional Experience</h3>
                <p className="text-xs text-gray-400">Hands-on frontend engineering role</p>
              </div>
            </div>

            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-[#151A21] border border-[#242A33] rounded-2xl p-6 relative hover:border-[#8B5CF6]/50 transition-all space-y-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                      <p className="text-sm font-semibold text-[#8B5CF6]">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#0B0F14] border border-[#242A33] text-xs text-purple-300 font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-500" />
                      {exp.location}
                    </span>
                    <span>•</span>
                    <span className="text-emerald-400 font-medium">{exp.type}</span>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs font-bold text-gray-200 block">Key Responsibilities & Deliverables:</span>
                    {exp.keyAchievments.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[#242A33] flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-[#0B0F14] text-[11px] font-medium text-gray-400 border border-[#242A33]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#242A33]">
              <div className="p-2.5 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Education & Formations</h3>
                <p className="text-xs text-gray-400">Degrees and institutional certifications</p>
              </div>
            </div>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-[#151A21] border border-[#242A33] rounded-2xl p-5 hover:border-[#3B82F6]/50 transition-all space-y-2"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h4 className="text-base font-bold text-white max-w-xs">{edu.degree}</h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0B0F14] border border-[#242A33] text-[11px] text-blue-300 font-mono">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#3B82F6]">{edu.institution}</p>

                  <div className="flex items-center gap-1.5 text-xs text-gray-400 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-gray-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
