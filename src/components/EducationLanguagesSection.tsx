import { GraduationCap, Languages, Calendar, MapPin, CheckCircle, BookOpen } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export function EducationLanguagesSection() {
  return (
    <section id="education" className="py-10 sm:py-14 border-b border-stone-200 dark:border-stone-800">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education - 2 Cols */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block mb-1">
                Academic Background
              </span>
              <h2 className="text-2xl font-extrabold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                Education
              </h2>
            </div>

            <div className="space-y-4">
              {resumeData.education.map((edu) => (
                <div
                  key={edu.id}
                  id={`edu-${edu.id}`}
                  className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs print-card print-break-inside-avoid"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-2">
                    <h3 className="font-bold text-stone-900 dark:text-stone-100 text-base">
                      {edu.institution}
                    </h3>
                    <span className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-1 shrink-0 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
                    {edu.degree}
                  </p>

                  <p className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-1 mb-3">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </p>

                  {edu.details && (
                    <p className="text-xs text-stone-600 dark:text-stone-300 mb-3 leading-relaxed">
                      {edu.details}
                    </p>
                  )}

                  <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex flex-wrap gap-1.5 items-center">
                    <span className="text-2xs font-bold text-stone-400 dark:text-stone-500 mr-1">
                      Skills:
                    </span>
                    {edu.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-2xs font-medium rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Location Summary - 1 Col */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block mb-1">
                Communication
              </span>
              <h2 className="text-2xl font-extrabold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Languages className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                Languages
              </h2>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs print-card print-break-inside-avoid space-y-4">
              {resumeData.languages.map((lang) => (
                <div key={lang.language} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-stone-900 dark:text-stone-100">
                      {lang.language}
                    </span>
                    <span className="text-stone-500 dark:text-stone-400 text-2xs font-medium">
                      {lang.proficiency}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-stone-100 dark:bg-stone-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-emerald-600 dark:bg-emerald-500"
                      style={{ width: `${lang.levelPercent}%` }}
                    />
                  </div>
                </div>
              ))}

              <div className="pt-3 border-t border-stone-100 dark:border-stone-800 text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                📍 Based in <strong>Karkala taluk, Karnataka, India</strong>. Flexible for on-site, hybrid, or remote engineering team collaboration.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
