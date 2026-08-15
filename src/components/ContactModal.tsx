import { useState, type FormEvent } from 'react';
import { 
  X, 
  Mail, 
  Linkedin, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink, 
  Send,
  MessageSquare
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = (e: FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${resumeData.email}?subject=${encodeURIComponent(
      subject || 'Software Engineering / Android Role Discussion'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs no-print">
      <div className="relative w-full max-w-lg bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-2xl p-6 sm:p-7 space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-600 dark:bg-emerald-500 text-white flex items-center justify-center">
              <Send className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-stone-900 dark:text-stone-100">
                Get in Touch
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Connect with {resumeData.name}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {/* Email Card */}
          <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 flex flex-col justify-between">
            <div>
              <span className="text-2xs font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 block mb-1">
                Direct Email
              </span>
              <p className="text-xs font-semibold text-stone-900 dark:text-stone-100 truncate">
                {resumeData.email}
              </p>
            </div>
            <button
              onClick={handleCopyEmail}
              className="mt-2.5 inline-flex items-center gap-1.5 text-2xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-500" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* LinkedIn Card */}
          <div className="p-3 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 flex flex-col justify-between">
            <div>
              <span className="text-2xs font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 block mb-1">
                LinkedIn Profile
              </span>
              <p className="text-xs font-semibold text-stone-900 dark:text-stone-100 truncate">
                {resumeData.linkedinDisplay}
              </p>
            </div>
            <a
              href={resumeData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 inline-flex items-center gap-1.5 text-2xs font-bold text-[#0077B5] hover:underline"
            >
              <ExternalLink className="w-3 h-3" />
              <span>View Profile</span>
            </a>
          </div>
        </div>

        {/* Quick Message Form */}
        <form onSubmit={handleSendEmail} className="space-y-3 pt-1">
          <div>
            <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
              Subject
            </label>
            <input
              type="text"
              placeholder="e.g. Android Lead Role / Engineering Inquiry"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 text-stone-800 dark:text-stone-200 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
              Message
            </label>
            <textarea
              rows={3}
              placeholder="Hi Kannikesh, I came across your profile and would love to discuss..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 text-stone-800 dark:text-stone-200 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 resize-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-2xs text-stone-400 dark:text-stone-500 flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              Karnataka, India
            </span>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-2 text-xs font-semibold text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 rounded-lg transition-all shadow-xs"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Launch Email Client</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
