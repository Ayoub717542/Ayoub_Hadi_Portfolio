import React from 'react';
import { Code2, Layout, Server, Database, Cpu, Workflow, Check } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#8B5CF6]" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#3B82F6]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-purple-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-teal-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-indigo-400" />;
      default:
        return <Code2 className="w-5 h-5 text-[#8B5CF6]" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#0B0F14] border-t border-[#242A33]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151A21] border border-[#242A33] text-xs font-semibold text-[#3B82F6]">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="text-[#3B82F6]">Skills & Stack</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Validated technical skills directly confirmed by project implementations and CV records.
          </p>
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-[#151A21] border border-[#242A33] rounded-xl p-6 hover:border-[#8B5CF6]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-[#0B0F14] border border-[#242A33] group-hover:scale-105 transition-transform">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#8B5CF6] transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs text-gray-400 mb-4 min-h-[36px]">
                  {cat.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B0F14] border border-[#242A33] text-xs font-semibold text-gray-200 hover:border-[#8B5CF6] hover:text-white transition-colors"
                    >
                      <Check className="w-3 h-3 text-[#8B5CF6]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Badge */}
              <div className="mt-6 pt-3 border-t border-[#242A33]/60 flex items-center justify-between text-[11px] text-gray-500 font-medium">
                <span>Verified by Projects</span>
                <span className="text-emerald-400 font-semibold">100% Authenticated</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
