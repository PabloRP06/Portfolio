// --- 1. DICCIONARIO DE TRADUCCIONES ---
const translations = {
    es: {
        "nav-bio": "Perfil",
        "nav-stack": "Stack",
        "nav-projects": "Proyectos",
        "nav-contact": "Contacto",
        "hero-role-prefix": "Desarrollador",
        "hero-desc": "Estudiante en Desarrollo de Aplicaciones Multiplataforma con base sólida en desarrollo Full-Stack, Java y entornos Cloud.",
        "hero-btn": "Ver Proyectos",
        "section-bio": "Sobre mí",
        "bio-text": "Actualmente cursando el Grado Superior de DAM en el Instituto Nebrija (Madrid). Tengo un nivel B2 de inglés y un enfoque competitivo hacia el aprendizaje continuo y la innovación tecnológica.",
        "section-projects": "Proyectos Destacados",
        "proj-1-title": "CRM Empresarial Full Stack",
        "proj-1-desc": "Desarrollo completo de un sistema de gestión empresarial (Backend & Frontend).",
        "proj-2-title": "Interacción Digital 3D",
        "proj-2-desc": "Proyecto de ambientación tridimensional desarrollado con Unity y Blender.",
        "proj-3-title": "API REST Cloud",
        "proj-3-desc": "Microservicios escalables desplegados en AWS con contenedores Docker.",
        "footer-title": "Hablemos",
        "btn-code": "Ver Código"
    },
    en: {
        "nav-bio": "Profile",
        "nav-stack": "Stack",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "hero-role-prefix": "Developer",
        "hero-desc": "Cross-Platform Application Development student with a solid foundation in Full-Stack, Java, and Cloud environments.",
        "hero-btn": "View Projects",
        "section-bio": "About Me",
        "bio-text": "Currently studying DAM at Instituto Nebrija (Madrid). I hold a B2 English certificate and have a competitive approach towards continuous learning and technological innovation.",
        "section-projects": "Selected Projects",
        "proj-1-title": "Full Stack Business CRM",
        "proj-1-desc": "Complete development of a business management system (Backend & Frontend).",
        "proj-2-title": "3D Digital Interaction",
        "proj-2-desc": "Three-dimensional ambientation project developed with Unity and Blender.",
        "proj-3-title": "Cloud REST API",
        "proj-3-desc": "Scalable microservices deployed on AWS using Docker containers.",
        "footer-title": "Let's Talk",
        "btn-code": "View Code"
    },
    de: {
        "nav-bio": "Profil",
        "nav-stack": "Technologie",
        "nav-projects": "Projekte",
        "nav-contact": "Kontakt",
        "hero-role-prefix": "Entwickler",
        "hero-desc": "Student der plattformübergreifenden Anwendungsentwicklung mit soliden Kenntnissen in Full-Stack, Java und Cloud.",
        "hero-btn": "Projekte ansehen",
        "section-bio": "Über mich",
        "bio-text": "Ich studiere derzeit am Instituto Nebrija (Madrid). Ich habe ein B2-Englischzertifikat und konzentriere mich auf ständiges Lernen und Innovation.",
        "section-projects": "Ausgewählte Projekte",
        "proj-1-title": "Full Stack Business CRM",
        "proj-1-desc": "Komplette Entwicklung eines Unternehmensmanagementsystems.",
        "proj-2-title": "Digitale 3D-Interaktion",
        "proj-2-desc": "Dreidimensionales Umgebungsprojekt entwickelt mit Unity und Blender.",
        "proj-3-title": "Cloud REST API",
        "proj-3-desc": "Skalierbare Microservices, die mit Docker auf AWS bereitgestellt werden.",
        "footer-title": "Kontakt",
        "btn-code": "Code ansehen"
    },
    fr: {
        "nav-bio": "Profil",
        "nav-stack": "Stack",
        "nav-projects": "Projets",
        "nav-contact": "Contact",
        "hero-role-prefix": "Développeur",
        "hero-desc": "Étudiant en développement d'applications multiplateformes avec une base solide en Full-Stack, Java et Cloud.",
        "hero-btn": "Voir les projets",
        "section-bio": "À propos",
        "bio-text": "Je suis actuellement étudiant à l'Instituto Nebrija (Madrid). J'ai un niveau d'anglais B2 et une approche compétitive de l'apprentissage continu.",
        "section-projects": "Projets Sélectionnés",
        "proj-1-title": "CRM d'Entreprise Full Stack",
        "proj-1-desc": "Développement complet d'un système de gestion d'entreprise.",
        "proj-2-title": "Interaction Numérique 3D",
        "proj-2-desc": "Projet d'ambiance tridimensionnelle développé avec Unity et Blender.",
        "proj-3-title": "API REST Cloud",
        "proj-3-desc": "Microservices évolutifs déployés sur AWS à l'aide de conteneurs Docker.",
        "footer-title": "Contactez-moi",
        "btn-code": "Voir le code"
    }
};

// --- 2. FRASES ANIMADAS ---
const typewriterPhrases = {
    es: ['Full Stack', 'Multiplataforma', 'Angular & Spring', 'Unity 3D', 'Backend Java'],
    en: ['Full Stack', 'Cross-Platform', 'Angular & Spring', 'Unity 3D', 'Java Backend'],
    de: ['Full Stack', 'Plattformübergreifend', 'Angular & Spring', 'Unity 3D', 'Java Backend'],
    fr: ['Full Stack', 'Multiplateforme', 'Angular & Spring', 'Unity 3D', 'Backend Java']
};

let currentLang = 'es';

// --- 3. CAMBIAR IDIOMA ---
function changeLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');
    phraseIndex = 0;
    charIndex = 0;
    isDeleting = false;
}

// --- 4. CURSOR ---
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');
const hoverTargets = document.querySelectorAll('.hover-target, a, button, .lang-btn');

window.addEventListener('mousemove', function (e) {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
});

// --- 5. SCROLL REVEAL ---
const revealElements = document.querySelectorAll('.reveal-item');
const scrollReveal = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        } else {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
        }
    });
};
window.addEventListener('scroll', scrollReveal);
scrollReveal();

// --- 6. TYPEWRITER ---
const textElement = document.querySelector('.typewriter-text');
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrases = typewriterPhrases[currentLang];
    if (phraseIndex >= currentPhrases.length) phraseIndex = 0;
    const currentPhrase = currentPhrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % currentPhrases.length;
        typeSpeed = 500;
    }
    setTimeout(type, typeSpeed);
}
document.addEventListener('DOMContentLoaded', type);

// --- 7. MENÚ MÓVIL LOGIC (NUEVO) ---
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-links a');

// Abrir/Cerrar menú
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Cerrar al pulsar un enlace
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});


// --- 8. LOGICA DEL CARRUSEL 3D ---
const cards = document.querySelectorAll('.project-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function updateCarousel() {
    cards.forEach((card, index) => {
        // Reset classes
        card.className = 'project-card hover-target';
        
        if (index === currentIndex) {
            card.classList.add('active');
        } else if (index === (currentIndex + 1) % cards.length) {
            card.classList.add('next');
        } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
            card.classList.add('prev');
        } else {
            card.style.opacity = '0';
        }
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
});

updateCarousel();