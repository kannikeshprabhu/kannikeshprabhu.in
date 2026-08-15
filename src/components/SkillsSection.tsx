import { useState, useMemo } from 'react';
import { 
  Cpu, 
  Smartphone, 
  Code, 
  Globe, 
  Wrench, 
  CheckCircle2, 
  Search, 
  X,
  Sparkles,
  Layers,
  Terminal
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export function SkillsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'mobile-android':
        return <Smartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'languages':
        return <Code className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'web-crossplatform':
        return <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'tools-cloud':
        return <Wrench className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'testing-quality':
        return <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  const filteredCategories = useMemo(() => {
    return resumeData.skillCategories.map((cat) => {
      const isCatSelected = selectedCategory === 'all' || selectedCategory === cat.id;
      if (!isCatSelected) {
        return { ...cat, skills: [] };
      }

      if (!searchTerm.trim()) {
        return cat;
      }

      const term = searchTerm.toLowerCase();
      const filteredSkills = cat.skills.filter((skill) =>
        skill.toLowerCase().includes(term) || cat.title.toLowerCase().includes(term)
      );

      return {
        ...cat,
        skills: filteredSkills,
      };
    }).filter((cat) => cat.skills.length > 0);
  }, [searchTerm, selectedCategory]);

  const totalSkillCount = useMemo(() => {
    return resumeData.skillCategories.reduce((acc, curr) => acc + curr.skills.length, 0);
  }, []);

  return (
    <section id="skills" className="py-10 sm:py-14 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block mb-1">
              Competencies & Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              Technical Skills Matrix
            </h2>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72 no-print">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              id="skills-search-input"
              type="text"
              placeholder="Search skills (e.g. Kotlin, Compose)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-8 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 p-0.5"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-6 no-print">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
              selectedCategory === 'all'
                ? 'bg-emerald-600 text-white dark:bg-emerald-500'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            All Categories ({totalSkillCount})
          </button>
          {resumeData.skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white dark:bg-emerald-500'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.title.split('&')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              id={`skill-cat-${cat.id}`}
              className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs hover:border-emerald-500/40 transition-all flex flex-col justify-between print-card print-break-inside-avoid"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-stone-100 dark:border-stone-800">
                  <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm flex items-center gap-2">
                    {getCategoryIcon(cat.id)}
                    {cat.title}
                  </h3>
                  <span className="text-2xs font-semibold px-2 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400">
                    {cat.skills.length} skills
                  </span>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cat.skills.map((skill) => {
                    const isMatched = searchTerm && skill.toLowerCase().includes(searchTerm.toLowerCase());
                    const isFeatured = cat.featuredSkills?.includes(skill);

                    return (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 text-xs rounded-md font-medium transition-all ${
                          isMatched
                            ? 'bg-emerald-500 text-white ring-2 ring-emerald-400 shadow-xs'
                            : isFeatured
                            ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200/70 dark:border-emerald-800/60 font-semibold'
                            : 'bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300 border border-stone-200/50 dark:border-stone-700/50'
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="p-8 text-center bg-stone-100 dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800">
            <p className="text-sm text-stone-500 dark:text-stone-400">
              No skills found matching "<span className="font-semibold text-stone-800 dark:text-stone-200">{searchTerm}</span>"
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-3 px-3 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 underline"
            >
              Reset filter
            </button>
          </div>
        )}

        {/* Clean Architecture Highlight Box */}
        <div className="mt-6 p-4 sm:p-5 rounded-xl bg-stone-900 text-white dark:bg-stone-950 dark:border dark:border-stone-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-400" />
              <h4 className="font-bold text-sm tracking-tight text-white">
                Core Architectural Philosophy & Patterns
              </h4>
            </div>
            <span className="text-2xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-900/80 text-emerald-300 border border-emerald-700/50">
              Engineering Standard
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-300">
            <div className="p-3 rounded-lg bg-stone-800/80 dark:bg-stone-900/80 border border-stone-700/60">
              <span className="font-bold text-emerald-400 block mb-1">Presentation Layer</span>
              <p className="text-2xs text-stone-400 leading-relaxed">
                Jetpack Compose & Server-Driven UI (SDUI), unidirectional state flow with StateFlow & SharedFlow.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-stone-800/80 dark:bg-stone-900/80 border border-stone-700/60">
              <span className="font-bold text-emerald-400 block mb-1">Domain Layer</span>
              <p className="text-2xs text-stone-400 leading-relaxed">
                Pure Kotlin business use cases, repository abstractions, multi-modular domain isolation without framework coupling.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-stone-800/80 dark:bg-stone-900/80 border border-stone-700/60">
              <span className="font-bold text-emerald-400 block mb-1">Data & Cache Layer</span>
              <p className="text-2xs text-stone-400 leading-relaxed">
                Multi-tier caching (memory + disk + network), RESTful JSON parsers, Google Maps API services, Firebase sync.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
