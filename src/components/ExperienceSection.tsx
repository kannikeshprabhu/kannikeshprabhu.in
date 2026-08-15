import { Briefcase, Building2, Calendar, MapPin, CheckCircle, ChevronRight, Award, Layers } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-10 sm:py-14 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block mb-1">
              Career Trajectory
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              Professional Experience
            </h2>
          </div>
          
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-stone-800 text-xs font-semibold text-stone-600 dark:text-stone-300">
            <Building2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>FareFirst &bull; 2 Years Total</span>
          </div>
        </div>

        {/* Company Overview Header */}
        <div className="mb-6 p-4 rounded-xl bg-stone-100/70 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 print-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-700 dark:bg-emerald-600 text-white flex items-center justify-center font-black text-lg">
              FF
            </div>
            <div>
              <h3 className="font-bold text-stone-900 dark:text-stone-100 text-base">FareFirst</h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Mangaluru, Karnataka, India (On-site)
              </p>
            </div>
          </div>
          <div className="text-xs font-semibold text-stone-700 dark:text-stone-300 flex items-center gap-1.5 sm:self-center">
            <Calendar className="w-3.5 h-3.5 text-stone-400" />
            <span>July 2024 – Present (2 Years Total Duration)</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-emerald-600/30 dark:before:bg-emerald-500/20">
          {resumeData.experience.map((exp, index) => (
            <div 
              key={exp.id} 
              id={`experience-${exp.id}`}
              className="relative print-break-inside-avoid"
            >
              {/* Timeline Bullet Node */}
              <div 
                className={`absolute -left-6 sm:-left-8 top-1.5 w-4 h-4 rounded-full border-2 ${
                  exp.isLeadRole 
                    ? 'bg-emerald-600 border-white dark:border-stone-900 ring-4 ring-emerald-500/20' 
                    : 'bg-stone-300 dark:bg-stone-700 border-white dark:border-stone-900'
                }`}
              />

              {/* Experience Card */}
              <div className="p-5 sm:p-6 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs hover:border-emerald-500/50 transition-colors print-card">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                        {exp.role}
                      </h4>
                      {exp.isLeadRole && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-2xs font-bold rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                          <Award className="w-3 h-3" />
                          Lead Role
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mt-0.5">
                      {exp.company} &bull; {exp.locationType}
                    </p>
                  </div>

                  <div className="text-xs text-stone-500 dark:text-stone-400 font-medium sm:text-right shrink-0">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-stone-700 dark:text-stone-300 text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Achievements Bullet points */}
                <div className="space-y-2 mb-5">
                  {exp.bulletPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="pt-3 border-t border-stone-100 dark:border-stone-800/80">
                  <span className="text-2xs font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 block mb-2">
                    Technologies & Skills Utilized:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/50 dark:hover:text-emerald-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
