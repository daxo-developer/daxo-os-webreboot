/**
 * Daxo OS – Terminal‑style website
 * Adds a subtle boot‑animation effect to the ASCII logo
 * and a typewriter effect on the tagline.
 */
(function() {
    'use strict';

    // ----- 1. Glow pulse on the ASCII logo -----
    const logo = document.querySelector('.ascii-logo');
    if (logo) {
        logo.style.transition = 'text-shadow 0.3s ease';
        setTimeout(() => {
            logo.style.textShadow = '0 0 18px rgba(210,153,34,0.3)';
        }, 300);
        setTimeout(() => {
            logo.style.textShadow = '0 0 6px rgba(210,153,34,0.15)';
        }, 1200);
    }

    // ----- 2. Typewriter effect on the command inside .tagline -----
    const cmdSpan = document.querySelector('.tagline .cmd');
    if (cmdSpan) {
        const originalText = cmdSpan.textContent.trim();
        cmdSpan.textContent = '';
        let index = 0;
        const typeInterval = setInterval(() => {
            if (index < originalText.length) {
                cmdSpan.textContent += originalText.charAt(index);
                index++;
            } else {
                clearInterval(typeInterval);
                const outputSpan = document.querySelector('.tagline .output');
                if (outputSpan) {
                    outputSpan.style.opacity = '1';
                    outputSpan.style.transition = 'opacity 0.4s ease';
                }
            }
        }, 40);
    }

    // ----- 3. Smooth scroll for anchor links -----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ----- 4. Console Easter Egg -----
    console.log('%c Daxo OS %c Booted successfully. ',
        'background:#d29922;color:#0d1117;font-weight:bold;font-size:1.2rem;padding:4px 8px;border-radius:4px 0 0 4px;',
        'background:#21262d;color:#e6edf3;padding:4px 8px;border-radius:0 4px 4px 0;'
    );
    console.log('%c 🖥️  Running on bare metal. No emulators. ',
        'color:#8b949e;font-size:0.9rem;'
    );
})();