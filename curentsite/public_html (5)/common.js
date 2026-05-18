/**
 * CogNexa Technologies - Common Components
 * Loads header and footer dynamically
 */

// Header HTML Template
const headerHTML = `
<div class="animated-bg"></div>
<div class="grid-overlay"></div>

<header>
    <nav class="container">
        <div class="logo-section">
            <div class="logo">
                <img src="cognexa-logo-final-small.webp" alt="CogNexa Technologies">
            </div>
        </div>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html#services">Services</a></li>
            <li><a href="cybersecurity.html">Cybersecurity</a></li>
            <li><a href="data-management.html">Data Management</a></li>
            <li><a href="ai-automation.html">AI & Automation</a></li>
            <li><a href="vidya-ai.html">Vidya AI</a></li>
            <li><a href="index.html#contact">Contact</a></li>
        </ul>
        <div class="nav-right">
            <a href="tel:+919898931509" class="cta-btn pulse-cta">📞 Call Now</a>
        </div>
        <button class="mobile-menu-btn">☰</button>
    </nav>
</header>
`;

// Footer HTML Template
const footerHTML = `
<footer>
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h4>CogNexa Technologies</h4>
                <p style="color: rgba(255,255,255,0.7); margin-bottom: 1rem;">
                    Advanced Cybersecurity & Network Solutions Provider
                </p>
                <p style="color: rgba(255,255,255,0.6);">
                    Intelligence Connected
                </p>
            </div>
            <div class="footer-section">
                <h4>Services</h4>
                <ul>
                    <li><a href="cybersecurity.html">Cybersecurity</a></li>
                    <li><a href="data-management.html">Data Management</a></li>
                    <li><a href="ai-automation.html">AI & Automation</a></li>
                    <li><a href="vidya-ai.html">Vidya AI</a></li>
                    <li><a href="index.html#contact">Custom Development</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Solutions</h4>
                <ul>
                    <li><a href="cybersecurity.html#kavach">Kavach Firewall</a></li>
                    <li><a href="cybersecurity.html#durg">Durg Vulnerability Scanner</a></li>
                    <li><a href="cybersecurity.html#shastra">Shastra Penetration Testing</a></li>
                    <li><a href="ai-automation.html">Aurobit Platform</a></li>
                    <li><a href="vidya-ai.html">Vidya AI Knowledge Base</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Contact</h4>
                <ul>
                    <li><a href="tel:+919898931509">+91 98989 31509</a></li>
                    <li><a href="mailto:sales@cognexa.in">sales@cognexa.in</a></li>
                    <li><a href="https://cognexa.in">cognexa.in</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 CogNexa Technologies. All rights reserved.</p>
        </div>
    </div>
</footer>
`;

// Load header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Insert header at the beginning of body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    
    // Insert footer at the end of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
    
    // Highlight current page in navigation
    highlightCurrentPage();
    
    // Setup smooth scrolling
    setupSmoothScrolling();
    
    // Setup fade-in animations
    setupFadeInAnimations();
    
    // Setup mobile menu
    setupMobileMenu();
});

// Highlight current page in navigation
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html')) {
            link.style.color = 'var(--gold)';
            link.style.fontWeight = 'bold';
        }
    });
}

// Smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.addEventListener('click', function(e) {
        const target = e.target.closest('a[href^="#"]');
        if (target) {
            e.preventDefault();
            const targetId = target.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
}

// Fade-in animations on scroll
function setupFadeInAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Mobile menu toggle
function setupMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function() {
            const isOpen = navLinks.classList.contains('mobile-menu-open');
            
            if (isOpen) {
                navLinks.classList.remove('mobile-menu-open');
                menuBtn.textContent = '☰';
            } else {
                navLinks.classList.add('mobile-menu-open');
                menuBtn.textContent = '✕';
            }
        });
        
        // Close menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('mobile-menu-open');
                menuBtn.textContent = '☰';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('nav') && navLinks.classList.contains('mobile-menu-open')) {
                navLinks.classList.remove('mobile-menu-open');
                menuBtn.textContent = '☰';
            }
        });
    }
}