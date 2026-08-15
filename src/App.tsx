import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationLanguagesSection } from './components/EducationLanguagesSection';
import { Footer } from './components/Footer';
import { GitHubPagesGuideModal } from './components/GitHubPagesGuideModal';
import { ContactModal } from './components/ContactModal';
import { Globe, X, Sparkles } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('kp-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isGitHubGuideOpen, setIsGitHubGuideOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showDeployBanner, setShowDeployBanner] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('kp-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('kp-theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col selection:bg-emerald-500 selection:text-white transition-colors duration-150">
      {/* Top Banner for GitHub Pages Hosting Note */}
      {showDeployBanner && (
        <div className="bg-emerald-700 dark:bg-emerald-900 text-white text-xs px-4 py-2 flex items-center justify-between no-print shadow-xs z-50">
          <div className="max-w-4xl mx-auto w-full flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-300 animate-ping"></span>
              <span className="font-medium text-2xs sm:text-xs">
                <strong>GitHub Pages Ready:</strong> Static client-side build with automated deployment workflow included.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsGitHubGuideOpen(true)}
                className="underline hover:text-emerald-200 font-bold text-2xs sm:text-xs cursor-pointer"
              >
                View Setup Guide &rarr;
              </button>
              <button
                onClick={() => setShowDeployBanner(false)}
                className="text-emerald-200 hover:text-white p-0.5"
                title="Dismiss"
                aria-label="Dismiss banner"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Top Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenGitHubGuide={() => setIsGitHubGuideOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection
          onOpenContact={() => setIsContactOpen(true)}
          onOpenGitHubGuide={() => setIsGitHubGuideOpen(true)}
        />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationLanguagesSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenGitHubGuide={() => setIsGitHubGuideOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Modals */}
      <GitHubPagesGuideModal
        isOpen={isGitHubGuideOpen}
        onClose={() => setIsGitHubGuideOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
