import React from 'react';
import { X, Github, ExternalLink, ShieldAlert, CheckCircle2, Cpu, Wrench, Layers, AlertCircle, FileText, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="bg-[#151A21] border border-[#242A33] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative my-8">
        
        {/* Top Sticky Header */}
        <div className="sticky top-0 bg-[#151A21]/95 backdrop-blur-md px-6 py-4 border-b border-[#242A33] flex items-center justify-between z-10">
          <div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#8B5CF6]/20 text-purple-300 border border-[#8B5CF6]/40 uppercase tracking-wider">
              {project.category} Spec Sheet
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
              {project.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#0B0F14] border border-[#242A33] text-gray-400 hover:text-white hover:border-[#8B5CF6] transition-all"
            aria-label="Close Project Specification Sheet"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 space-y-8 text-gray-200">
          
          {/* Quick Meta Info Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#0B0F14] p-4 rounded-xl border border-[#242A33] text-xs">
            <div>
              <span className="text-gray-500 font-medium block">Period</span>
              <span className="font-semibold text-white">{project.realizedDate}</span>
            </div>
            <div>
              <span className="text-gray-500 font-medium block">Project Type</span>
              <span className="font-semibold text-white">{project.isTeamProject ? 'Team Project' : 'Personal Project'}</span>
            </div>
            <div>
              <span className="text-gray-500 font-medium block">Audience</span>
              <span className="font-semibold text-white">{project.targetAudience}</span>
            </div>
            <div>
              <span className="text-gray-500 font-medium block">Code Access</span>
              <span className="font-semibold text-purple-400">GitHub Verified</span>
            </div>
          </div>

          {/* Context & Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0B0F14] p-5 rounded-xl border border-[#242A33] space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>Problem & Treated Need</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="bg-[#0B0F14] p-5 rounded-xl border border-[#242A33] space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Implemented Solution</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#8B5CF6] flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Core Application Features</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-[#0B0F14] p-3 rounded-lg border border-[#242A33] text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-1.5 shrink-0"></span>
                  <span className="text-gray-300">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies & Specific Roles */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#3B82F6] flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>Technologies & Architectural Roles</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.technologies.map((tech) => (
                <div key={tech.name} className="bg-[#0B0F14] p-3 rounded-lg border border-[#242A33] text-xs">
                  <span className="font-bold text-white block">{tech.name}</span>
                  <span className="text-[11px] text-gray-400">{tech.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Contribution */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-purple-400 flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              <span>Personal Engineering Contributions</span>
            </h4>
            <div className="bg-[#0B0F14] p-4 rounded-xl border border-[#242A33] space-y-2 text-xs">
              {project.personalContribution.map((contrib, idx) => (
                <div key={idx} className="flex items-start gap-2 text-gray-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{contrib}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          {project.challengesAndSolutions.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" />
                <span>Technical Challenges & Implemented Fixes</span>
              </h4>
              <div className="space-y-2">
                {project.challengesAndSolutions.map((cs, idx) => (
                  <div key={idx} className="bg-[#0B0F14] p-4 rounded-xl border border-[#242A33] space-y-1 text-xs">
                    <p className="text-amber-300 font-semibold">Challenge: {cs.challenge}</p>
                    <p className="text-gray-300">Solution: {cs.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results & Limitations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="bg-[#0B0F14] p-4 rounded-xl border border-[#242A33] space-y-2">
              <span className="font-bold text-emerald-400 block uppercase tracking-wider">Results & Deliverables</span>
              <ul className="space-y-1 text-gray-300 list-disc list-inside">
                {project.resultsAndMetrics.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0B0F14] p-4 rounded-xl border border-[#242A33] space-y-2">
              <span className="font-bold text-indigo-400 block uppercase tracking-wider">Limitations & Future Work</span>
              <ul className="space-y-1 text-gray-300 list-disc list-inside">
                {project.limitationsAndFutureWork.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Deliverables & Real Links Status */}
          <div className="pt-4 border-t border-[#242A33] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#0B0F14] border border-[#242A33] rounded-lg text-xs font-semibold text-gray-200 hover:border-[#8B5CF6] hover:text-white transition-all"
                >
                  <Github className="w-4 h-4 text-purple-400" />
                  <span>GitHub Repository</span>
                </a>
              ) : (
                <span className="px-3 py-1.5 bg-gray-900 text-gray-500 rounded text-xs">GitHub: À compléter</span>
              )}

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] rounded-lg text-xs font-semibold text-white hover:opacity-90 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live App Demo</span>
                </a>
              ) : (
                <span className="px-3 py-1.5 bg-[#0B0F14] border border-[#242A33] text-gray-500 rounded text-xs">
                  Live Demo: À compléter
                </span>
              )}

              <span className="px-3 py-1.5 bg-[#0B0F14] border border-[#242A33] text-gray-500 rounded text-xs">
                Video Demo: À compléter
              </span>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#0B0F14] border border-[#242A33] hover:border-gray-500 text-xs font-semibold text-gray-300 rounded-lg transition-colors"
            >
              Close Spec Sheet
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
