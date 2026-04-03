// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    themeToggle.textContent = isLight ? 'Dark Theme' : 'Light Theme';
});

// Particle Animation
const particlesContainer = document.querySelector('.particles');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.width = Math.random() * 5 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDuration = Math.random() * 5 + 5 + 's';
    particlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 10000);
}

setInterval(createParticle, 200);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission (Placeholder)
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! (This is a placeholder)');
});