import { useState } from 'react';
import { 
  FolderGit2, 
  MapPin, 
  Layers, 
  Zap, 
  CheckCircle2, 
  Calendar, 
  Building2, 
  ExternalLink,
  Smartphone,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'caching'>('overview');

  return (
    <section id="projects" className="py-10 sm:py-14 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block mb-1">
              Key Engineering Projects
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <FolderGit2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              Featured Projects
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-xs font-bold text-emerald-800 dark:text-emerald-300">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Active Production Project</span>
          </div>
        </div>

        {/* Project Cards */}
        {resumeData.projects.map((project) => (
          <div
            key={project.id}
            id={`project-${project.id}`}
            className="rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs overflow-hidden print-card print-break-inside-avoid"
          >
            {/* Project Header Bar */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-stone-900 to-stone-800 dark:from-stone-950 dark:to-stone-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="px-2 py-0.5 text-2xs font-bold rounded-md bg-emerald-500 text-white">
                    Lead Mobile Project
                  </span>
                  {project.association && (
                    <span className="text-2xs font-medium text-stone-300 flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-emerald-400" />
                      Associated with {project.association}
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {project.title}
                </h3>
              </div>

              <div className="text-xs text-stone-300 font-medium flex items-center gap-1.5 shrink-0">
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>{project.period}</span>
              </div>
            </div>

            {/* Interactive Tab Navigation (Web view only) */}
            <div className="flex border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950/60 no-print px-5 pt-2 gap-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-2 text-xs font-bold border-b-2 transition-all ${
                  activeTab === 'overview'
                    ? 'border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400'
                    : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-300'
                }`}
              >
                Overview & Impact
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                className={`px-3 py-2 text-xs font-bold border-b-2 transition-all ${
                  activeTab === 'architecture'
                    ? 'border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400'
                    : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-300'
                }`}
              >
                Clean Architecture Design
              </button>
              <button
                onClick={() => setActiveTab('caching')}
                className={`px-3 py-2 text-xs font-bold border-b-2 transition-all ${
                  activeTab === 'caching'
                    ? 'border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400'
                    : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-300'
                }`}
              >
                Caching & SDUI Pipeline
              </button>
            </div>

            {/* Tab Contents */}
            <div className="p-5 sm:p-6 space-y-5">
              {/* Tab 1: Overview */}
              {(activeTab === 'overview' || true) && (
                <div className={activeTab === 'overview' ? 'block' : 'hidden print:block'}>
                  <p className="text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 mb-5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100">
                      Technical Highlights & Architecture Implementations:
                    </h4>
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 2: Architecture Deep-Dive */}
              {activeTab === 'architecture' && (
                <div className="space-y-3 no-print">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                    Modular Layer Breakdown
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
                      <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-xs mb-1">
                        <Smartphone className="w-3.5 h-3.5" />
                        <span>:app & :feature:ui</span>
                      </div>
                      <p className="text-2xs text-stone-600 dark:text-stone-400 leading-relaxed">
                        Jetpack Compose UI components, state holders, and Google Maps views driven by reactive flows.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
                      <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-xs mb-1">
                        <Layers className="w-3.5 h-3.5" />
                        <span>:core:domain</span>
                      </div>
                      <p className="text-2xs text-stone-600 dark:text-stone-400 leading-relaxed">
                        Pure Kotlin business entities, Sattvik dietary verification use cases, and repository interfaces.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
                      <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-xs mb-1">
                        <Cpu className="w-3.5 h-3.5" />
                        <span>:core:data & :network</span>
                      </div>
                      <p className="text-2xs text-stone-600 dark:text-stone-400 leading-relaxed">
                        Retrofit + OkHttp clients, multi-tier disk/memory cache engine, and Google Maps API adapters.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Caching & SDUI */}
              {activeTab === 'caching' && (
                <div className="space-y-3 no-print">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                    Performance & Server-Driven UI Flow
                  </h4>
                  <div className="p-4 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-xs text-stone-700 dark:text-stone-300 space-y-2">
                    <p>
                      <strong>Server-Driven UI (SDUI):</strong> Dynamic JSON layout contracts streamed from backend/Firebase to render regional banners, special Sattvik festivals, and custom restaurant sections without app store re-submissions.
                    </p>
                    <p>
                      <strong>Cache Management:</strong> Two-tiered image cache (LRU memory cache + persistent disk storage) alongside network response caching with ETag headers, keeping bandwidth low and UI responses instantaneous.
                    </p>
                  </div>
                </div>
              )}

              {/* Tags Footer */}
              <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-2xs font-semibold rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="text-2xs font-bold text-emerald-700 dark:text-emerald-400">
                  FareFirst Ecosystem &bull; Karnataka, India
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
