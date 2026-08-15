import { useState } from 'react';
import { 
  X, 
  Globe, 
  Terminal, 
  Copy, 
  Check, 
  GitBranch, 
  ExternalLink, 
  CheckCircle2, 
  FolderCheck,
  Sparkles
} from 'lucide-react';

interface GitHubPagesGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GitHubPagesGuideModal({ isOpen, onClose }: GitHubPagesGuideModalProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const workflowYaml = `name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build-and-deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Install Dependencies
        run: npm install

      - name: Build Website
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`;

  const commands = [
    {
      title: 'Step 1: Install & Build Locally (Optional check)',
      code: `npm install\nnpm run build`
    },
    {
      title: 'Step 2: Commit & Push to your GitHub repository',
      code: `git add .\ngit commit -m "feat: Add Kannikesh Prabhu resume website"\ngit branch -M main\ngit push -u origin main`
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs no-print">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-2xl p-6 sm:p-7 space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-600 dark:bg-emerald-500 text-white flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-stone-900 dark:text-stone-100">
                GitHub Pages Hosting Guide
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                How to deploy Kannikesh Prabhu's resume to your free GitHub Pages domain
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

        {/* Method 1: Automatic GitHub Actions (Recommended) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Method 1: 1-Click GitHub Actions Deployment (Recommended)
            </h4>
            <span className="text-2xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
              Zero Config
            </span>
          </div>

          <p className="text-xs text-stone-600 dark:text-stone-300">
            Create a file at <code className="px-1.5 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-emerald-700 dark:text-emerald-400 font-mono text-2xs">.github/workflows/deploy.yml</code> in your repository with this content:
          </p>

          <div className="relative">
            <pre className="p-3.5 rounded-xl bg-stone-950 text-stone-200 font-mono text-2xs overflow-x-auto max-h-52 border border-stone-800">
              {workflowYaml}
            </pre>
            <button
              onClick={() => handleCopy(workflowYaml, 99)}
              className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md bg-stone-800 hover:bg-stone-700 text-stone-200 text-2xs font-medium flex items-center gap-1 transition-colors"
            >
              {copiedIndex === 99 ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy Workflow</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Steps */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 dark:text-stone-200">
            Enable GitHub Pages in 3 Quick Steps:
          </h4>

          <div className="space-y-2.5">
            <div className="p-3 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-xs text-stone-700 dark:text-stone-300 flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-2xs flex items-center justify-center shrink-0 mt-0.5">
                1
              </span>
              <div>
                <strong>Push your code to GitHub:</strong>
                <p className="text-stone-500 dark:text-stone-400 text-2xs mt-0.5">
                  Push this project to a repository like <code className="font-mono text-emerald-600 dark:text-emerald-400">kannikesh.github.io</code> or <code className="font-mono text-emerald-600 dark:text-emerald-400">resume</code>.
                </p>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-xs text-stone-700 dark:text-stone-300 flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-2xs flex items-center justify-center shrink-0 mt-0.5">
                2
              </span>
              <div>
                <strong>Configure GitHub Repository Settings:</strong>
                <p className="text-stone-500 dark:text-stone-400 text-2xs mt-0.5">
                  Go to <strong>Settings</strong> &rarr; <strong>Pages</strong> &rarr; Set "Build and deployment source" to <strong>GitHub Actions</strong>.
                </p>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-xs text-stone-700 dark:text-stone-300 flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-2xs flex items-center justify-center shrink-0 mt-0.5">
                3
              </span>
              <div>
                <strong>Live Instantly!</strong>
                <p className="text-stone-500 dark:text-stone-400 text-2xs mt-0.5">
                  Your website is automatically published to <code className="font-mono text-emerald-600 dark:text-emerald-400">https://kannikesh.github.io</code>!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-white bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white rounded-lg transition-colors"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
}
