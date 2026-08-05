import React from 'react';
import { Mail, Phone, MapPin, Briefcase, Linkedin, Github, FileText, ExternalLink, Send } from 'lucide-react';
import { candidateProfile } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#0B0F14] border-t border-[#242A33]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151A21] border border-[#242A33] text-xs font-semibold text-[#3B82F6]">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="text-[#3B82F6]">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Open for hiring, interview requests, technical discussions, and software engineering opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Direct Contact Methods */}
          <div className="bg-[#151A21] border border-[#242A33] rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-white">Direct Contact Channels</h3>

            <div className="space-y-4 text-xs sm:text-sm">
              
              {/* Primary Email */}
              <a
                href={`mailto:${candidateProfile.emails.primary}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#0B0F14] border border-[#242A33] hover:border-[#8B5CF6] transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-[#8B5CF6]/10 text-[#8B5CF6] group-hover:bg-[#8B5CF6] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-gray-400 text-xs block font-medium">Primary Email</span>
                  <span className="font-semibold text-white group-hover:text-[#8B5CF6] transition-colors">
                    {candidateProfile.emails.primary}
                  </span>
                </div>
              </a>

              {/* Secondary Email */}
              <a
                href={`mailto:${candidateProfile.emails.secondary}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#0B0F14] border border-[#242A33] hover:border-[#3B82F6] transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-[#3B82F6]/10 text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-gray-400 text-xs block font-medium">Secondary Email</span>
                  <span className="font-semibold text-white group-hover:text-[#3B82F6] transition-colors">
                    {candidateProfile.emails.secondary}
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${candidateProfile.phone}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#0B0F14] border border-[#242A33] hover:border-emerald-500 transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-gray-400 text-xs block font-medium">Phone Number</span>
                  <span className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {candidateProfile.phone}
                  </span>
                </div>
              </a>

            </div>
          </div>

          {/* Card 2: Location & Professional Profile */}
          <div className="bg-[#151A21] border border-[#242A33] rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Mobility & Network</h3>

              <div className="space-y-3 text-xs sm:text-sm text-gray-300">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#0B0F14] border border-[#242A33]">
                  <MapPin className="w-4 h-4 text-[#8B5CF6]" />
                  <span><strong>City:</strong> {candidateProfile.location}</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#0B0F14] border border-[#242A33]">
                  <Briefcase className="w-4 h-4 text-[#3B82F6]" />
                  <span><strong>Mobility:</strong> {candidateProfile.mobilityZone}</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#0B0F14] border border-[#242A33]">
                  <Send className="w-4 h-4 text-emerald-400" />
                  <span><strong>Availability:</strong> Immediate</span>
                </div>
              </div>
            </div>
            
            {/* Quick Link Buttons */}
            <div className="pt-4 space-y-2">
              <a
                href={`mailto:${candidateProfile.emails.primary}?subject=Opportunity%20Inquiry%20-%20Hadi%20Ayoub`}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-bold text-xs sm:text-sm hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={candidateProfile.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#0B0F14] border border-[#242A33] text-gray-300 hover:text-white hover:border-[#3B82F6] text-xs font-semibold transition-all"
                >
                  <Linkedin className="w-4 h-4 text-[#3B82F6]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={candidateProfile.gitHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#0B0F14] border border-[#242A33] text-gray-300 hover:text-white hover:border-purple-400 text-xs font-semibold transition-all"
                >
                  <Github className="w-4 h-4 text-purple-400" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
