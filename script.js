// --- 1. DICCIONARIO DE TRADUCCIONES ---
const translations = {
    es: {
        "nav-bio": "Perfil", "nav-stack": "Stack", "nav-projects": "Proyectos", "nav-contact": "Contacto",
        "hero-role-prefix": "Desarrollador", "hero-desc": "Estudiante en Desarrollo de Aplicaciones Multiplataforma con base sólida en desarrollo Full-Stack, Java y entornos Cloud.", "hero-btn": "Ver Proyectos", "section-bio": "Sobre mí", "bio-text": "Actualmente cursando el Grado Superior de DAM en el Instituto Nebrija. Mi enfoque es el aprendizaje continuo y la resolución de desafíos técnicos.", "section-projects": "Proyectos Destacados", "proj-1-title": "CRM Empresarial", "proj-1-desc": "Sistema de gestión empresarial completo.", "proj-2-title": "Interacción 3D", "proj-2-desc": "Ambientación interactiva con Unity.", "footer-title": "Hablemos", "btn-code": "Ver Código",
        "form-name": "Nombre", "form-email": "Correo", "form-msg": "Mensaje", "form-btn": "Enviar Mensaje"
    },
    en: {
        "nav-bio": "Profile", "nav-stack": "Stack", "nav-projects": "Projects", "nav-contact": "Contact",
        "hero-role-prefix": "Developer", "hero-desc": "Cross-Platform Application student with a solid foundation in Full-Stack, Java, and Cloud environments.", "hero-btn": "View Projects", "section-bio": "About Me", "bio-text": "Currently studying DAM at Instituto Nebrija. I focus on continuous learning and solving technical challenges.", "section-projects": "Featured Projects", "proj-1-title": "Business CRM", "proj-1-desc": "Complete business management system.", "proj-2-title": "3D Interaction", "proj-2-desc": "Interactive environment with Unity.", "footer-title": "Let's Talk", "btn-code": "View Code",
        "form-name": "Name", "form-email": "Email", "form-msg": "Message", "form-btn": "Send Message"
    }
};

const typewriterPhrases = {
    es: ['Full Stack', 'Multiplataforma', 'Angular & Spring', 'Backend Java'],
    en: ['Full Stack', 'Cross-Platform', 'Angular & Spring', 'Java Backend']
};

let currentLang = 'es';

// --- 2. CAMBIAR IDIOMA ---
function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');
    phraseIndex = 0; charIndex = 0; isDeleting = false;
}

// --- 3. CURSOR PERSONALIZADO ---
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', (e) => {
    const { clientX: posX, clientY: posY } = e;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    cursorOutline.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 500, fill: "forwards" });
});

// Delegación de eventos para el hover (más eficiente)
document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.hover-target, a, button, input, textarea')) {
        document.body.classList.add('hovering');
    }
});
document.addEventListener('mouseout', (e) => {
    if (e.target.closest('.hover-target, a, button, input, textarea')) {
        document.body.classList.remove('hovering');
    }
});

// --- 4. SCROLL REVEAL ---
const revealElements = document.querySelectorAll('.reveal-item');
const scrollReveal = () => {
    revealElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.style.opacity = '1'; 
            el.style.transform = 'translateY(0)';
        }
    });
};
window.addEventListener('scroll', scrollReveal);

// --- 5. TYPEWRITER ---
const textElement = document.querySelector('.typewriter-text');
let phraseIndex = 0, charIndex = 0, isDeleting = false;

function type() {
    const phrases = typewriterPhrases[currentLang];
    const current = phrases[phraseIndex];
    textElement.textContent = isDeleting ? current.substring(0, charIndex - 1) : current.substring(0, charIndex + 1);
    charIndex = isDeleting ? charIndex - 1 : charIndex + 1;

    let speed = isDeleting ? 50 : 100;
    if (!isDeleting && charIndex === current.length) { isDeleting = true; speed = 2000; }
    else if (isDeleting && charIndex === 0) { isDeleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; speed = 500; }
    setTimeout(type, speed);
}

// --- 6. MENÚ MÓVIL ---
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
menuToggle.onclick = () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
};
document.querySelectorAll('.nav-links a').forEach(a => a.onclick = () => {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
});

// --- 7. CARRUSEL 3D ---
const cards = document.querySelectorAll('.project-card');
let currentIndex = 0;

function updateCarousel() {
    cards.forEach((card, index) => {
        card.className = 'project-card hover-target';
        if (index === currentIndex) card.classList.add('active');
        else if (index === (currentIndex + 1) % cards.length) card.classList.add('next');
        else if (index === (currentIndex - 1 + cards.length) % cards.length) card.classList.add('prev');
    });
}
document.getElementById('nextBtn').onclick = () => { currentIndex = (currentIndex + 1) % cards.length; updateCarousel(); };
document.getElementById('prevBtn').onclick = () => { currentIndex = (currentIndex - 1 + cards.length) % cards.length; updateCarousel(); };

// Iniciar procesos
document.addEventListener('DOMContentLoaded', () => {
    type();
    scrollReveal();
    updateCarousel();
});