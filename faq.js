/* ========================================
   FAQ.JS
   Gerencia o accordion de perguntas frequentes
======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // ========================================
    // ACCORDION - PERGUNTAS E RESPOSTAS
    // ========================================
    
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Fecha todos os itens abertos
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Se o item clicado não estava ativo, abre ele
            if (!isActive) {
                faqItem.classList.add('active');
                
                // Rola suavemente até o item (com offset do header)
                const headerHeight = document.querySelector('.header-fixed').offsetHeight;
                const elementPosition = faqItem.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // ABRIR PERGUNTA VIA URL (DEEP LINKING)
    // Permite compartilhar links diretos para perguntas específicas
    // Exemplo: faq.html#pergunta-3
    // ========================================
    
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement && targetElement.classList.contains('faq-item')) {
            // Aguarda um pouco para a página carregar
            setTimeout(() => {
                targetElement.classList.add('active');
                
                const headerHeight = document.querySelector('.header-fixed').offsetHeight;
                const elementPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }, 500);
        }
    }
    
    // ========================================
    // BUSCA/FILTRO DE PERGUNTAS (FUTURO)
    // Este é um placeholder para quando você quiser adicionar
    // uma funcionalidade de busca nas perguntas
    // ========================================
    
    // Você pode adicionar um campo de busca no HTML e descomentar isso:
    /*
    const searchInput = document.getElementById('faq-search');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question span').textContent.toLowerCase();
                const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
                
                if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
    */
    
    // ========================================
    // ESTATÍSTICAS DE FAQ (PARA ANALYTICS)
    // Rastreia quais perguntas são mais visualizadas
    // ========================================
    
    faqQuestions.forEach((question, index) => {
        question.addEventListener('click', function() {
            // Aqui você pode integrar com Google Analytics ou outra ferramenta
            const questionText = this.querySelector('span').textContent;
            
            // Log para o console (em produção, enviaria para analytics)
            console.log('Pergunta visualizada:', questionText);
            
            // Exemplo de como enviar para Google Analytics:
            /*
            if (typeof gtag !== 'undefined') {
                gtag('event', 'faq_question_clicked', {
                    'event_category': 'FAQ',
                    'event_label': questionText,
                    'value': index + 1
                });
            }
            */
            
            // Salva no localStorage para análise local
            salvarVisualizacaoFAQ(questionText);
        });
    });
});

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

/**
 * Salva visualizações de perguntas FAQ no localStorage
 * Útil para análise de quais perguntas são mais consultadas
 */
function salvarVisualizacaoFAQ(pergunta) {
    const visualizacoes = JSON.parse(localStorage.getItem('faq_visualizacoes') || '{}');
    
    if (visualizacoes[pergunta]) {
        visualizacoes[pergunta]++;
    } else {
        visualizacoes[pergunta] = 1;
    }
    
    localStorage.setItem('faq_visualizacoes', JSON.stringify(visualizacoes));
}

/**
 * Retorna as perguntas mais visualizadas
 * Útil para identificar dúvidas comuns
 */
function obterPerguntasMaisVistas() {
    const visualizacoes = JSON.parse(localStorage.getItem('faq_visualizacoes') || '{}');
    
    const sorted = Object.entries(visualizacoes)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5);
    
    console.log('Top 5 perguntas mais visualizadas:', sorted);
    return sorted;
}

// ========================================
// CHATBOT PLACEHOLDER - PREPARAÇÃO
// Este código prepara a estrutura para quando você
// integrar um chatbot de IA futuramente
// ========================================

/**
 * Função placeholder para inicializar o chatbot
 * Quando você tiver um chatbot, pode chamar esta função
 */
function inicializarChatbot() {
    const chatbotContainer = document.querySelector('.chatbot-placeholder');
    
    if (chatbotContainer) {
        // Aqui você integrará seu chatbot
        // Exemplos de plataformas:
        // - Dialogflow
        // - IBM Watson
        // - Microsoft Bot Framework
        // - Chatbot personalizado com API do OpenAI
        
        console.log('Placeholder para chatbot está pronto');
        console.log('Para integrar, adicione o código do seu chatbot aqui');
        
        // Exemplo de estrutura:
        /*
        chatbotContainer.innerHTML = `
            <div id="chatbot-widget">
                <div class="chat-header">
                    <h3>Assistente Virtual</h3>
                </div>
                <div class="chat-messages" id="chat-messages">
                    <!-- Mensagens aparecerão aqui -->
                </div>
                <div class="chat-input">
                    <input type="text" placeholder="Digite sua pergunta...">
                    <button>Enviar</button>
                </div>
            </div>
        `;
        */
    }
}

// ========================================
// IMPRESSÃO DE FAQ
// Permite ao usuário imprimir as perguntas e respostas
// ========================================

function imprimirFAQ() {
    // Abre todas as perguntas antes de imprimir
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.add('active');
    });
    
    // Aguarda um momento e imprime
    setTimeout(() => {
        window.print();
    }, 500);
}

// Você pode adicionar um botão de impressão no HTML:
// <button onclick="imprimirFAQ()" class="btn btn-secondary">Imprimir FAQ</button>

// ========================================
// EXPORTAR FAQ PARA PDF (FUTURO)
// Placeholder para funcionalidade de exportação
// ========================================

function exportarFAQParaPDF() {
    // Para implementar isso, você pode usar bibliotecas como:
    // - jsPDF
    // - html2pdf
    // - pdfmake
    
    console.log('Funcionalidade de exportação para PDF em desenvolvimento');
    alert('Funcionalidade em desenvolvimento. Use o botão de impressão e salve como PDF.');
}

// ========================================
// FEEDBACK DO FAQ
// Permite usuários indicarem se a resposta foi útil
// ========================================

function adicionarBotoesFeedback() {
    const faqAnswers = document.querySelectorAll('.faq-answer');
    
    faqAnswers.forEach((answer, index) => {
        // Cria container de feedback
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'faq-feedback';
        feedbackDiv.style.cssText = `
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid #e0e0e0;
            text-align: center;
        `;
        
        feedbackDiv.innerHTML = `
            <p style="margin-bottom: 0.5rem; color: #666;">Esta resposta foi útil?</p>
            <button class="feedback-btn" data-index="${index}" data-type="sim" style="margin: 0 0.5rem; padding: 0.5rem 1rem; border: 1px solid #0066cc; background: white; color: #0066cc; border-radius: 5px; cursor: pointer;">
                👍 Sim
            </button>
            <button class="feedback-btn" data-index="${index}" data-type="nao" style="margin: 0 0.5rem; padding: 0.5rem 1rem; border: 1px solid #ff6600; background: white; color: #ff6600; border-radius: 5px; cursor: pointer;">
                👎 Não
            </button>
        `;
        
        answer.appendChild(feedbackDiv);
    });
    
    // Event listeners para os botões
    document.querySelectorAll('.feedback-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            const type = this.getAttribute('data-type');
            
            // Salva feedback
            salvarFeedbackFAQ(index, type);
            
            // Feedback visual
            const feedbackDiv = this.parentElement;
            feedbackDiv.innerHTML = `
                <p style="color: #10b981; font-weight: 600;">
                    ✓ Obrigado pelo seu feedback!
                </p>
            `;
        });
    });
}

function salvarFeedbackFAQ(index, type) {
    const feedbacks = JSON.parse(localStorage.getItem('faq_feedbacks') || '{}');
    
    if (!feedbacks[index]) {
        feedbacks[index] = { sim: 0, nao: 0 };
    }
    
    feedbacks[index][type]++;
    localStorage.setItem('faq_feedbacks', JSON.stringify(feedbacks));
    
    console.log('Feedback salvo:', { index, type });
}

// Inicializa os botões de feedback quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    // Descomente para ativar os botões de feedback:
    // adicionarBotoesFeedback();
});

// ========================================
// LOG PARA DESENVOLVEDORES
// ========================================
console.log('%c📚 FAQ System Loaded', 'color: #0066cc; font-size: 16px; font-weight: bold;');
console.log('Funcionalidades disponíveis:');
console.log('- Accordion de perguntas');
console.log('- Deep linking para perguntas');
console.log('- Rastreamento de visualizações');
console.log('- Placeholder para chatbot');
console.log('');
console.log('Para ver estatísticas, digite: obterPerguntasMaisVistas()');
