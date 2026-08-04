import React from 'react';
import { FileText, Download, ExternalLink, Clock, CheckCircle2, Award, Briefcase } from 'lucide-react';
import { candidateProfile } from '../data/portfolioData';

export const CvSection: React.FC = () => {
  return (
    <section id="cv" className="py-20 bg-[#0B0F14] border-t border-[#242A33]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151A21] border border-[#242A33] text-xs font-semibold text-emerald-400">
            <FileText className="w-3.5 h-3.5" />
            <span>Official Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Consult My <span className="text-emerald-400">CV & Qualifications</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Synthesized professional document with direct access to the downloadable Google Doc CV.
          </p>
        </div>

        {/* CV Card Container */}
        <div className="max-w-4xl mx-auto bg-[#151A21] border border-[#242A33] rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden">
          
          {/* Accent glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Top Bar with Status & Download Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#242A33]">
            <div className="space-y-1">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block">Targeted Role</span>
              <h3 className="text-2xl font-black text-white">{candidateProfile.desiredTitle}</h3>
              <div className="flex items-center gap-2 text-xs text-gray-400 pt-0.5">
                <Clock className="w-3.5 h-3.5 text-gray-500" />
                <span>Last Updated: {candidateProfile.cvLastUpdated}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={candidateProfile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm shadow-lg hover:opacity-90 transition-opacity"
              >
                <Download className="w-4 h-4" />
                <span>Consult / Download CV</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* CV Highlights Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            
            {/* Left Col: Core Competencies */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B5CF6] flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Key Technical Highlights in CV</span>
              </h4>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Full-Stack Stack:</strong> Java, Spring Boot, Spring Security, JWT, React.js, Tailwind CSS</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Persistence & Cache:</strong> MySQL, PostgreSQL, Redis Cache, Hibernate ORM, MapStruct</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>DevOps & Containerization:</strong> Docker, Docker Compose, Git/GitHub, CI/CD Actions, Render</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>API Quality:</strong> Swagger/OpenAPI documentation, Mockito testing framework</span>
                </li>
              </ul>
            </div>

            {/* Right Col: Academic & Experience Summary */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#3B82F6] flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>CV Academic & Career Credentials</span>
              </h4>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span><strong>École Numérique Ahmed AL HANSALI:</strong> Full Stack Java Development (2025–Present)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span><strong>Institut BILLGATES:</strong> DTS Computer Development (2022–2024)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span><strong>Sultan Moulay Slimane:</strong> Bachelor Degree in English Studies - Linguistics (2020–2023)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span><strong>Frontend Internship:</strong> Web Development Stage (July–August 2024, Beni Mellal)</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Verification Footnote */}
          <div className="p-4 rounded-xl bg-[#0B0F14] border border-[#242A33] text-center text-xs text-gray-400">
            📄 The official CV is available in Google Docs format for real-time viewing and downloading.
          </div>

        </div>

      </div>
    </section>
  );
};
