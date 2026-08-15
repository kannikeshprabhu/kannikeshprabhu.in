import { useState, useEffect } from 'react';
import { 
  Printer, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  FileText, 
  Globe, 
  Send,
  Linkedin,
  Mail,
  HelpCircle
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenGitHubGuide: () => void;
  onOpenContact: () => void;
}

export function Navbar({ darkMode, setDarkMode, onOpenGitHubGuide, onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const navLinks = [
    { label: 'Summary', href: '#summary' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
  ];

  return (
    <header 
      id="site-navbar"
      className={`sticky top-0 z-40 w-full transition-all duration-200 no-print ${
        isScrolled 
          ? 'bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800/80 shadow-xs' 
          : 'bg-stone-50/60 dark:bg-stone-950/60 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Name */}
        <a 
          id="nav-brand-logo"
          href="#" 
          className="flex items-center gap-3 group focus:outline-hidden"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-600 dark:bg-emerald-500 text-white flex items-center justify-center font-bold text-base shadow-xs group-hover:scale-105 transition-transform">
            KP
          </div>
          <div>
            <span className="font-bold text-stone-900 dark:text-stone-100 text-base tracking-tight block">
              {resumeData.name}
            </span>
            <span className="text-xs text-emerald-700 dark:text-emerald-400 font-medium block">
              Android Team Lead
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs font-semibold text-stone-600 hover:text-emerald-600 dark:text-stone-300 dark:hover:text-emerald-400 rounded-md transition-colors hover:bg-stone-100 dark:hover:bg-stone-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2">
          {/* GitHub Pages Host Guide */}
          <button
            id="nav-github-guide-btn"
            onClick={onOpenGitHubGuide}
            title="GitHub Pages Deployment Guide"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 dark:text-stone-200 bg-stone-200/70 hover:bg-stone-300/80 dark:bg-stone-800 dark:hover:bg-stone-700 rounded-lg transition-colors border border-stone-300/60 dark:border-stone-700"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>GitHub Pages</span>
          </button>

          {/* Print PDF Button */}
          <button
            id="nav-print-resume-btn"
            onClick={handlePrint}
            title="Print or Save Resume as PDF"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 dark:text-stone-200 bg-white hover:bg-stone-100 dark:bg-stone-900 dark:hover:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-lg transition-colors shadow-2xs"
          >
            <Printer className="w-3.5 h-3.5 text-stone-500 dark:text-stone-400" />
            <span>Print PDF</span>
          </button>

          {/* Dark / Light Toggle */}
          <button
            id="nav-theme-toggle-btn"
            onClick={() => setDarkMode((prev) => !prev)}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2 text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-stone-100 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-600" />}
          </button>

          {/* Contact Button */}
          <button
            id="nav-contact-btn"
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 rounded-lg transition-all shadow-xs"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Contact</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="p-2 text-stone-600 dark:text-stone-300 rounded-lg bg-stone-100 dark:bg-stone-800"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <button
            id="nav-mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 dark:text-stone-200 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 px-4 pt-2 pb-5 space-y-3">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-semibold text-stone-700 dark:text-stone-200 rounded-md bg-stone-100 dark:bg-stone-900 text-center"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-stone-200 dark:border-stone-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handlePrint();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-stone-800 dark:text-stone-200 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-lg"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Export PDF Resume</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGitHubGuide();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-stone-800 dark:text-stone-200 bg-stone-200 dark:bg-stone-800 rounded-lg"
            >
              <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>GitHub Pages Hosting Guide</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-bold text-white bg-emerald-600 dark:bg-emerald-500 rounded-lg"
            >
              <Send className="w-4 h-4" />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
