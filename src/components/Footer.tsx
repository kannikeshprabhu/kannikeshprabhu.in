import { ArrowUp, Globe, Printer, Linkedin, Mail, MapPin, Heart } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface FooterProps {
  onOpenGitHubGuide: () => void;
  onOpenContact: () => void;
}

export function Footer({ onOpenGitHubGuide, onOpenContact }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <footer className="bg-white dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800 py-10 no-print">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-emerald-600 dark:bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">
                KP
              </div>
              <span className="font-bold text-stone-900 dark:text-stone-100 text-base">
                {resumeData.name}
              </span>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
              {resumeData.title} &bull; {resumeData.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenGitHubGuide}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-lg transition-colors border border-stone-200 dark:border-stone-800"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>GitHub Pages Guide</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-lg transition-colors border border-stone-200 dark:border-stone-800"
            >
              <Printer className="w-3.5 h-3.5 text-stone-500" />
              <span>Print Resume</span>
            </button>

            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="p-2 rounded-lg bg-stone-100 dark:bg-stone-900 hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Links row */}
        <div className="pt-6 border-t border-stone-100 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 dark:text-stone-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {resumeData.name}. Ready for deployment on GitHub Pages.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${resumeData.email}`}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{resumeData.email}</span>
            </a>

            <a
              href={resumeData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0077B5] flex items-center gap-1 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
