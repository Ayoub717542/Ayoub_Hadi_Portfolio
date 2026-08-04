import React, { useState } from 'react';
import { FolderGit2, Star, Github, ExternalLink, ArrowRight, Layers, FileText, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'Backend API', 'Frontend', 'Logistics'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-[#0B0F14] border-t border-[#242A33]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151A21] border border-[#242A33] text-xs font-semibold text-[#8B5CF6]">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Validated Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-[#8B5CF6]">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Real software applications built with Spring Boot, React, Docker, and RESTful API design.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white shadow-lg'
                  : 'bg-[#151A21] border border-[#242A33] text-gray-400 hover:text-white hover:border-[#8B5CF6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-[#151A21] border rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all group ${
                project.isFeatured
                  ? 'border-[#8B5CF6]/60 shadow-xl shadow-purple-950/20'
                  : 'border-[#242A33] hover:border-[#8B5CF6]/40'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0B0F14] border border-[#242A33] text-[#8B5CF6]">
                    {project.category}
                  </span>
                  {project.isFeatured && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-950/40 border border-amber-800/40 px-2.5 py-0.5 rounded-full">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>Featured Project</span>
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#8B5CF6] transition-colors mb-2">
                  {project.name}
                </h3>

                {/* Short Need & Solution */}
                <div className="space-y-2 mb-4">
                  <p className="text-xs text-gray-300 line-clamp-2">
                    <strong className="text-gray-100 font-semibold">Treated Need:</strong> {project.problem}
                  </p>
                  <p className="text-xs text-gray-400 line-clamp-2">
                    <strong className="text-gray-200 font-semibold">Solution:</strong> {project.solution}
                  </p>
                </div>

                {/* Contribution Snapshot */}
                <div className="bg-[#0B0F14] p-3 rounded-xl border border-[#242A33] mb-5 space-y-1 text-xs">
                  <span className="font-semibold text-[#8B5CF6] block text-[11px] uppercase tracking-wider">
                    Personal Contribution
                  </span>
                  {project.personalContribution.slice(0, 2).map((c, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-gray-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{c}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className="px-2.5 py-1 rounded-md bg-[#0B0F14] border border-[#242A33] text-[11px] font-medium text-gray-300"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-[#242A33] flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#8B5CF6] hover:text-purple-300 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Full Spec Sheet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#0B0F14] border border-[#242A33] rounded-lg text-gray-400 hover:text-white hover:border-[#8B5CF6] transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-[10px] text-gray-500 font-mono">GitHub: À compléter</span>
                  )}

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-[#0B0F14] border border-[#242A33] rounded-lg text-gray-400 hover:text-white hover:border-[#3B82F6] transition-colors"
                      title="View Live App Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : null}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Sheet Component */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
