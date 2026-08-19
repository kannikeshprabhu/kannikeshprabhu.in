/**
 * Kannikesh Prabhu - Resume PDF Replica
 * Pure Vanilla JavaScript (0 framework dependencies)
 */

(function () {
  'use strict';

  // --- 1. Theme Management (Light / Dark Mode) ---
  const THEME_KEY = 'kp-pdf-theme';
  const htmlEl = document.documentElement;

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }

  function setTheme(theme) {
    if (theme === 'dark') {
      htmlEl.setAttribute('data-theme', 'dark');
      localStorage.setItem(THEME_KEY, 'dark');
      updateThemeIcon(true);
    } else {
      htmlEl.removeAttribute('data-theme');
      localStorage.setItem(THEME_KEY, 'light');
      updateThemeIcon(false);
    }
  }

  function toggleTheme() {
    const isDark = htmlEl.getAttribute('data-theme') === 'dark';
    setTheme(isDark ? 'light' : 'dark');
  }

  function updateThemeIcon(isDark) {
    const icon = document.getElementById('theme-icon');
    if (icon) {
      icon.textContent = isDark ? '☀️ Light' : '🌙 Dark';
    }
  }

  // --- 2. Toast Notification ---
  function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 200);
    }, 2400);
  }

  // --- 3. Clipboard Copy Helper ---
  function copyText(text, successMsg) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg);
      }).catch(() => {
        fallbackCopy(text, successMsg);
      });
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    const el = document.createElement('textarea');
    el.value = text;
    el.style.position = 'fixed';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.focus();
    el.select();
    try {
      document.execCommand('copy');
      showToast(successMsg);
    } catch (e) {
      console.error(e);
    }
    document.body.removeChild(el);
  }

  // --- 4. Plain Text Resume Extraction ---
  function getPlainTextResume() {
    const paper = document.getElementById('resume-paper');
    return paper ? paper.innerText : '';
  }

  // --- 5. Event Listeners ---
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    // Theme toggle button
    const themeBtn = document.getElementById('btn-toggle-theme');
    if (themeBtn) {
      themeBtn.addEventListener('click', toggleTheme);
    }

    // Print button
    const printBtn = document.getElementById('btn-print');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Copy text resume button
    const copyTextBtn = document.getElementById('btn-copy-text');
    if (copyTextBtn) {
      copyTextBtn.addEventListener('click', () => {
        copyText(getPlainTextResume(), 'Full resume copied as plain text!');
      });
    }

    // Copy Email button
    const copyEmailBtn = document.getElementById('btn-copy-email');
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', () => {
        copyText('me@kannikeshprabhu.in', 'Email copied: me@kannikeshprabhu.in');
      });
    }

    // Copy Phone button
    const copyPhoneBtn = document.getElementById('btn-copy-phone');
    if (copyPhoneBtn) {
      copyPhoneBtn.addEventListener('click', () => {
        copyText('+917259858227', 'Phone copied: +91 7259858227');
      });
    }
  });
})();
