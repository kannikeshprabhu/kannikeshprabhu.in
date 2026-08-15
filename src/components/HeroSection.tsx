import { useState } from 'react';
import { 
  MapPin, 
  Linkedin, 
  Mail, 
  Copy, 
  Check, 
  Sparkles, 
  Download, 
  ShieldCheck,
  Layers,
  Smartphone,
  Users,
  Compass
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenGitHubGuide: () => void;
}

export function HeroSection({ onOpenContact, onOpenGitHubGuide }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="summary" className="pt-8 pb-10 sm:pt-12 sm:pb-14 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-4xl mx-auto">
        {/* Availability Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 dark:border dark:border-emerald-800/60">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Android Team Lead & Senior Engineer
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-stone-500 dark:text-stone-400 font-medium">
            <MapPin className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500" />
            {resumeData.location}
          </span>
        </div>

        {/* Main Name & Title */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight">
              {resumeData.name}
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-emerald-700 dark:text-emerald-400">
              {resumeData.title}
            </p>
            <p className="text-stone-600 dark:text-stone-300 text-base max-w-2xl italic leading-relaxed pt-1">
              "{resumeData.headline}"
            </p>
          </div>

          {/* Quick Contact & Action Buttons */}
          <div className="flex flex-wrap md:flex-col gap-2.5 no-print shrink-0">
            {/* Copy Email Button */}
            <button
              id="hero-copy-email-btn"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-stone-900 text-white hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white transition-all shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-stone-300 dark:text-stone-600" />
                  <span>{resumeData.email}</span>
                </>
              )}
            </button>

            {/* LinkedIn Profile */}
            <a
              id="hero-linkedin-link"
              href={resumeData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shadow-2xs"
            >
              <Linkedin className="w-4 h-4 text-[#0077B5]" />
              <span>LinkedIn Profile</span>
            </a>

            {/* Print / Save PDF */}
            <button
              id="hero-download-pdf-btn"
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border border-stone-300 dark:border-stone-700 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition-colors"
            >
              <Download className="w-4 h-4 text-stone-500" />
              <span>Export PDF Resume</span>
            </button>
          </div>
        </div>

        {/* Print-Only Header info for clean PDF layout */}
        <div className="hidden print-only mt-3 pt-3 border-t border-stone-300 text-xs text-stone-700 space-y-1">
          <p><strong>Email:</strong> {resumeData.email} &bull; <strong>LinkedIn:</strong> {resumeData.linkedinUrl}</p>
          <p><strong>Location:</strong> {resumeData.location} &bull; <strong>Role:</strong> {resumeData.title}</p>
        </div>

        {/* Executive Summary Card */}
        <div className="mt-8 p-5 sm:p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs print-card">
          <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Executive Summary
          </h2>
          <p className="text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
            {resumeData.summary}
          </p>

          {/* Quick Metrics / Key Strengths */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-stone-100 dark:border-stone-800/80">
            <div className="p-3 rounded-lg bg-stone-50 dark:bg-stone-950/60 border border-stone-100 dark:border-stone-800/50">
              <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 font-medium">
                <Users className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Leadership
              </div>
              <p className="font-bold text-stone-900 dark:text-stone-100 text-sm mt-0.5">Android Team Lead</p>
              <p className="text-2xs text-stone-500 dark:text-stone-400 mt-0.5">FareFirst (Mangaluru)</p>
            </div>

            <div className="p-3 rounded-lg bg-stone-50 dark:bg-stone-950/60 border border-stone-100 dark:border-stone-800/50">
              <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 font-medium">
                <Layers className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Architecture
              </div>
              <p className="font-bold text-stone-900 dark:text-stone-100 text-sm mt-0.5">Clean & Multi-Module</p>
              <p className="text-2xs text-stone-500 dark:text-stone-400 mt-0.5">MVVM, Coroutines & Flow</p>
            </div>

            <div className="p-3 rounded-lg bg-stone-50 dark:bg-stone-950/60 border border-stone-100 dark:border-stone-800/50">
              <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 font-medium">
                <Smartphone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Ecosystem
              </div>
              <p className="font-bold text-stone-900 dark:text-stone-100 text-sm mt-0.5">Jetpack & Compose</p>
              <p className="text-2xs text-stone-500 dark:text-stone-400 mt-0.5">SDUI & OTA Updates</p>
            </div>

            <div className="p-3 rounded-lg bg-stone-50 dark:bg-stone-950/60 border border-stone-100 dark:border-stone-800/50">
              <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Performance
              </div>
              <p className="font-bold text-stone-900 dark:text-stone-100 text-sm mt-0.5">Image & Cache Tuning</p>
              <p className="text-2xs text-stone-500 dark:text-stone-400 mt-0.5">Offline-first Resilience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
