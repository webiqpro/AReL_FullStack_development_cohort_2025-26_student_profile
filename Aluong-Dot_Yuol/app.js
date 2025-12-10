// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form Handling
const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');

if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showMessage('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showMessage('Thank you! Your message has been sent successfully.', 'success');
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;
            
            // Clear form
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
        }, 1500);
    });
}

function showMessage(msg, type) {
    if (formMessage) {
        formMessage.textContent = msg;
        formMessage.className = `form-message ${type}`;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Scroll Animation - Add 'visible' class when elements come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections for animation
const animatedElements = document.querySelectorAll('.skill-card, .training-card, .expertise-card, .project-card, .badge');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Active Navigation Highlighting based on current page
const currentLocation = window.location.pathname.split('/').pop();
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href === currentLocation || (currentLocation === '' && href === 'index.html')) {
        item.classList.add('active');
    } else {
        item.classList.remove('active');
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Project Card Hover Effects (Enhanced)
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Console Easter Egg
console.log('%cHey there! 👋', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cLooking at the code? I like your style!', 'color: #764ba2; font-size: 14px;');
console.log('%cLet\'s connect: hello@aluongdot.com', 'color: #4facfe; font-size: 12px;');