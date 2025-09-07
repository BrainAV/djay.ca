// Unified particle creation system
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    
    // Support both bg-animation class and bgAnimation id
    const bgAnimation = document.querySelector('.bg-animation') || document.getElementById('bgAnimation');
    if (bgAnimation) {
        bgAnimation.appendChild(particle);
    }
    
    // Clean up after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, 25000);
}

// Enhanced particle generation for sub-pages
function createBatchParticles() {
    const bgAnimation = document.querySelector('.bg-animation');
    if (bgAnimation) {
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            bgAnimation.appendChild(particle);
        }
    }
}

// Initialize particles when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Create initial batch for sub-pages
    createBatchParticles();
    
    // Continue with periodic creation for main page
    const bgElement = document.querySelector('.bg-animation') || document.getElementById('bgAnimation');
    if (bgElement) {
        setInterval(createParticle, 500);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Enhanced Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    // Auto-add fade-in class to content sections
    document.querySelectorAll('.content-page section, .content-page div').forEach(el => {
        if (!el.classList.contains('fade-in')) {
            el.classList.add('fade-in');
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        }
    });

    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Enhanced form handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        
        contactForm.addEventListener('submit', function(e) {
            if (submitButton) {
                submitButton.innerHTML = '<span style="opacity: 0.7;">Sending...</span>';
                submitButton.disabled = true;
                
                // Add subtle loading animation
                submitButton.style.opacity = '0.8';
                submitButton.style.transform = 'scale(0.98)';
            }
        });
        
        // Reset form state if needed
        const resetFormState = () => {
            if (submitButton) {
                submitButton.innerHTML = 'Send Message';
                submitButton.disabled = false;
                submitButton.style.opacity = '';
                submitButton.style.transform = '';
            }
        };
        
        // Reset after 5 seconds if form is still on page (in case of errors)
        setTimeout(resetFormState, 5000);
    }
});

// Enhanced header transparency on scroll
let lastScrollY = window.scrollY;
let ticking = false;

function updateHeader() {
    const header = document.querySelector('header');
    if (header) {
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.8)';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        }
        
        // Add slight shadow when scrolled
        if (scrollY > 50) {
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScrollY = scrollY;
    }
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
    }
});

// Add loading states and micro-interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to feature items
    document.querySelectorAll('.feature-item, .instruction-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Add click ripple effect to buttons
    document.querySelectorAll('.cta-button, .version-badge').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
                z-index: 1;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        .cta-button, .version-badge {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);

    // Enhanced mobile menu handling (if needed in future)
    const handleResize = () => {
        const nav = document.querySelector('nav ul');
        if (nav && window.innerWidth <= 768) {
            // Mobile optimizations
            nav.style.flexDirection = 'column';
            nav.style.gap = '1rem';
        } else if (nav) {
            nav.style.flexDirection = 'row';
            nav.style.gap = '2rem';
        }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Run once on load

    // Preload critical images/resources
    const preloadLinks = [
        // Add any critical resources that should be preloaded
    ];

    preloadLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        document.head.appendChild(link);
    });

    // Add performance optimizations
    if ('IntersectionObserver' in window) {
        // Lazy load non-critical elements
        const lazyElements = document.querySelectorAll('[data-lazy]');
        const lazyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    // Perform lazy loading action
                    element.classList.add('loaded');
                    lazyObserver.unobserve(element);
                }
            });
        });

        lazyElements.forEach(el => lazyObserver.observe(el));
    }
});
