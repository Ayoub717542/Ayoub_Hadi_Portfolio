import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceEducationSection } from './components/ExperienceEducationSection';
import { CvSection } from './components/CvSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';

export default function App() {
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0F14] text-gray-100 font-sans selection:bg-[#8B5CF6] selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenAudit={() => setIsAuditOpen(true)} />

      {/* Main Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceEducationSection />
        <CvSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenAudit={() => setIsAuditOpen(true)} />

      {/* Audit Step 1 Compliance Modal */}
      <AuditModal
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
      />
    </div>
  );
}
