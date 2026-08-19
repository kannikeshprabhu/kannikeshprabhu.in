/**
 * Kannikesh Prabhu - Resume Website
 * Pure Vanilla JavaScript (Zero framework dependencies)
 */

(function () {
  'use strict';

  // --- 1. Theme Management (Light / Dark Mode) ---
  const THEME_KEY = 'kp-theme-pref';
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
      updateThemeButtons(true);
    } else {
      htmlEl.removeAttribute('data-theme');
      localStorage.setItem(THEME_KEY, 'light');
      updateThemeButtons(false);
    }
  }

  function toggleTheme() {
    const currentTheme = htmlEl.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  function updateThemeButtons(isDark) {
    const icons = document.querySelectorAll('.theme-icon');
    icons.forEach((icon) => {
      icon.textContent = isDark ? '☀️' : '🌙';
    });
  }

  // --- 2. Toast Notification System ---
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
    toast.innerHTML = `
      <span class="toast-icon">✓</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('is-show');
    });

    setTimeout(() => {
      toast.classList.remove('is-show');
      setTimeout(() => {
        toast.remove();
      }, 250);
    }, 2500);
  }

  // --- 3. Clipboard Copy Helper ---
  function copyToClipboard(text, successMessage) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMessage);
      }).catch(() => {
        fallbackCopyText(text, successMessage);
      });
    } else {
      fallbackCopyText(text, successMessage);
    }
  }

  function fallbackCopyText(text, successMessage) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    tempInput.style.position = 'fixed';
    tempInput.style.left = '-9999px';
    document.body.appendChild(tempInput);
    tempInput.focus();
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast(successMessage);
    } catch (err) {
      console.error('Copy failed', err);
    }
    document.body.removeChild(tempInput);
  }

  // --- 4. Interactive Skills Search & Category Filtering ---
  function initSkillsFilter() {
    const searchInput = document.getElementById('skills-search-input');
    const clearBtn = document.getElementById('skills-search-clear');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-category-card');
    let currentCategory = 'all';

    function filterSkills() {
      const query = (searchInput ? searchInput.value : '').toLowerCase().trim();

      if (clearBtn) {
        if (query.length > 0) {
          clearBtn.classList.add('is-visible');
        } else {
          clearBtn.classList.remove('is-visible');
        }
      }

      skillCards.forEach((card) => {
        const catId = card.getAttribute('data-category');
        const matchesCategory = currentCategory === 'all' || currentCategory === catId;
        const chips = card.querySelectorAll('.skill-chip');
        let cardHasMatch = false;

        chips.forEach((chip) => {
          const text = chip.textContent.toLowerCase();
          if (query && text.includes(query)) {
            chip.classList.add('matched');
            cardHasMatch = true;
          } else {
            chip.classList.remove('matched');
            if (query && !matchesCategory) {
              // hidden
            }
          }
        });

        const categoryTitle = card.querySelector('.skill-cat-title')?.textContent.toLowerCase() || '';
        if (query && categoryTitle.includes(query)) {
          cardHasMatch = true;
        }

        if (!query && matchesCategory) {
          card.style.display = '';
        } else if (query && matchesCategory && cardHasMatch) {
          card.style.display = '';
        } else if (query && currentCategory === 'all' && cardHasMatch) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', filterSkills);
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        filterSkills();
      });
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        currentCategory = btn.getAttribute('data-filter') || 'all';
        filterSkills();
      });
    });
  }

  // --- 5. Modal Windows (GitHub Guide & Contact) ---
  function initModals() {
    const guideModal = document.getElementById('github-guide-modal');
    const contactModal = document.getElementById('contact-modal');

    const openGuideBtns = document.querySelectorAll('.js-open-guide');
    const openContactBtns = document.querySelectorAll('.js-open-contact');
    const closeBtns = document.querySelectorAll('.js-modal-close');

    function openModal(modal) {
      if (modal) {
        modal.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeModal(modal) {
      if (modal) {
        modal.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    }

    openGuideBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(guideModal);
      });
    });

    openContactBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(contactModal);
      });
    });

    closeBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        closeModal(guideModal);
        closeModal(contactModal);
      });
    });

    // Close on backdrop click
    [guideModal, contactModal].forEach((modal) => {
      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            closeModal(modal);
          }
        });
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal(guideModal);
        closeModal(contactModal);
      }
    });

    // Copy Workflow button inside modal
    const copyWorkflowBtn = document.getElementById('btn-copy-workflow');
    if (copyWorkflowBtn) {
      copyWorkflowBtn.addEventListener('click', () => {
        const snippet = document.getElementById('workflow-yaml-code')?.textContent || '';
        copyToClipboard(snippet, 'GitHub Actions YAML copied to clipboard!');
      });
    }
  }

  // --- 6. Mobile Menu Drawer ---
  function initMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-drawer');

    if (toggleBtn && drawer) {
      toggleBtn.addEventListener('click', () => {
        drawer.classList.toggle('is-open');
      });

      const drawerLinks = drawer.querySelectorAll('a, button');
      drawerLinks.forEach((link) => {
        link.addEventListener('click', () => {
          drawer.classList.remove('is-open');
        });
      });
    }
  }

  // --- 7. Event Delegations & Initialization ---
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSkillsFilter();
    initModals();
    initMobileMenu();

    // Theme toggle buttons
    document.querySelectorAll('.js-theme-toggle').forEach((btn) => {
      btn.addEventListener('click', toggleTheme);
    });

    // Print buttons
    document.querySelectorAll('.js-print-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        window.print();
      });
    });

    // Copy email button
    const copyEmailBtn = document.getElementById('btn-copy-email');
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', () => {
        copyToClipboard('me@kannikeshprabhu.in', 'Email copied: me@kannikeshprabhu.in');
      });
    }

    // Copy phone button
    const copyPhoneBtn = document.getElementById('btn-copy-phone');
    if (copyPhoneBtn) {
      copyPhoneBtn.addEventListener('click', () => {
        copyToClipboard('+917259858227', 'Phone copied: +91 7259858227');
      });
    }

    // Banner dismiss
    const bannerClose = document.getElementById('deploy-banner-close');
    const banner = document.getElementById('deploy-banner');
    if (bannerClose && banner) {
      bannerClose.addEventListener('click', () => {
        banner.style.display = 'none';
      });
    }
  });
})();
