/* ========================================
   SCRIPT PRINCIPAL - script.js
   Funcionalidades globais do portal
======================================== */

// ========================================
// MENU MOBILE - Toggle do menu hamburguer
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Verifica se os elementos existem na página
    if (menuToggle && navMenu) {
        // Ao clicar no botão hamburguer
        menuToggle.addEventListener('click', function() {
            // Alterna a classe 'active' no menu
            navMenu.classList.toggle('active');
            
            // Alterna a animação do ícone hamburguer
            menuToggle.classList.toggle('active');
            
            // Acessibilidade: atualiza o aria-expanded
            const isExpanded = navMenu.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Fecha o menu ao clicar em um link (mobile)
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
        
        // Fecha o menu ao clicar fora dele
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
});

// ========================================
// SMOOTH SCROLL - Rolagem suave para âncoras
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Ignora links # vazios ou apenas #
        if (href === '#' || href === '') return;
        
        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            
            // Calcula a posição considerando o header fixo
            const headerHeight = document.querySelector('.header-fixed').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            // Rolagem suave
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// HEADER SCROLL - Efeito ao rolar a página
// ========================================
let lastScroll = 0;
const header = document.querySelector('.header-fixed');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    // Adiciona sombra extra quando rolar para baixo
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// ANIMAÇÕES DE ENTRADA - Fade in ao scrollar
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplica animação aos cards de curso
document.addEventListener('DOMContentLoaded', function() {
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach((card, index) => {
        // Define estado inicial
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        
        // Observa o elemento
        observer.observe(card);
    });
});

// ========================================
// BOTÃO VOLTAR AO TOPO
// ========================================
// Cria o botão dinamicamente
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.className = 'back-to-top';
backToTopButton.setAttribute('aria-label', 'Voltar ao topo');
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--cor-laranja-principal, #ff6600);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    display: none;
    z-index: 999;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
`;

document.body.appendChild(backToTopButton);

// Mostra/oculta o botão baseado na posição do scroll
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Ação do botão
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effect
backToTopButton.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.backgroundColor = 'var(--cor-laranja-hover, #e65c00)';
});

backToTopButton.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.backgroundColor = 'var(--cor-laranja-principal, #ff6600)';
});

// ========================================
// LOADING STATE - Feedback visual
// ========================================
// Função auxiliar para mostrar loading
function showLoading(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<span style="display:inline-block;width:16px;height:16px;border:2px solid #fff;border-top-color:transparent;border-radius:50%;animation:spin 0.8s linear infinite;"></span>';
    button.disabled = true;
    
    // Adiciona a animação de spin
    if (!document.querySelector('#spin-animation')) {
        const style = document.createElement('style');
        style.id = 'spin-animation';
        style.textContent = `
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
    
    return originalText;
}

// Função auxiliar para remover loading
function hideLoading(button, originalText) {
    button.innerHTML = originalText;
    button.disabled = false;
}

// ========================================
// VALIDAÇÃO GENÉRICA DE EMAIL
// ========================================
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ========================================
// FORMATAÇÃO DE TELEFONE
// ========================================
function formatPhone(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
        value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }
    
    input.value = value;
}

// ========================================
// FORMATAÇÃO DE CPF
// ========================================
function formatCPF(input) {
    let value = input.value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    input.value = value;
}

// ========================================
// FORMATAÇÃO DE CEP
// ========================================
function formatCEP(input) {
    let value = input.value.replace(/\D/g, '');
    value = value.replace(/(\d{5})(\d{3})/, '$1-$2');
    input.value = value;
}

// ========================================
// CONSOLE MESSAGE - Mensagem para desenvolvedores
// ========================================
console.log('%c🎓 Portal de Cursos - Pão dos Pobres', 'font-size: 20px; font-weight: bold; color: #0066cc;');
console.log('%cDesenvolvido como TCC - 2025', 'font-size: 14px; color: #ff6600;');
console.log('%cTransformando o Amanhã através da Educação e do Trabalho', 'font-size: 12px; color: #666;');
