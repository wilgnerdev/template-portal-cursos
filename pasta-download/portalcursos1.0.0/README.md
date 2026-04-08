# 🎓 Portal de Cursos - Fundação O Pão dos Pobres

Portal de cursos profissionalizantes desenvolvido como **Trabalho de Conclusão de Curso (TCC)** para a Fundação O Pão dos Pobres.

> **"Transformando o Amanhã através da Educação e do Trabalho"**

---

## 📋 Sobre o Projeto

Este portal foi desenvolvido para apresentar os cursos de aprendizagem profissional oferecidos pela Fundação O Pão dos Pobres de forma moderna, acessível e profissional. O objetivo é facilitar o acesso à informação sobre os cursos e permitir que candidatos realizem inscrições de forma simples e organizada.

### 🎯 Objetivos

- ✅ Apresentar todos os cursos de forma clara e atrativa
- ✅ Facilitar o processo de inscrição online
- ✅ Fornecer informações detalhadas sobre cada curso
- ✅ Responder dúvidas frequentes dos candidatos
- ✅ Demonstrar profissionalismo compatível com uso institucional

---

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com Flexbox e Grid
- **JavaScript (Vanilla)** - Funcionalidades interativas
- **Design Responsivo** - Mobile-first approach

### 🎨 Paleta de Cores

- **Azul Principal**: `#0066cc` - Confiança e profissionalismo
- **Azul Escuro**: `#004a99` - Estabilidade
- **Laranja Principal**: `#ff6600` - Energia e entusiasmo
- **Cinza Claro**: `#f5f5f5` - Fundo suave

---

## 📁 Estrutura do Projeto

```
portal-cursos/
│
├── index.html              # Página principal
├── curso-detalhes.html     # Template de detalhes do curso
├── contato.html            # Formulário de inscrição
├── faq.html                # Perguntas frequentes
│
├── styles.css              # Estilos globais
├── curso-detalhes.css      # Estilos da página de detalhes
├── contato.css             # Estilos do formulário
├── faq.css                 # Estilos do FAQ
│
├── script.js               # JavaScript principal
├── curso-detalhes.js       # Lógica dos detalhes do curso
├── contato.js              # Validação do formulário
├── faq.js                  # Accordion do FAQ
│
└── README.md               # Documentação
```

---

## 🎓 Cursos Disponíveis

### Cursos de Aprendizagem Profissional

1. **Asseio e Conservação** 🧹
2. **Assistente Administrativo** 💼
3. **Assistente de Cabeleireiro** ✂️
4. **Corte, Costura e Modelagem Sustentável** 🧵
5. **Climatização e Refrigeração** ❄️
6. **Desporto** ⚽
7. **Eletromecânica de Elevadores** 🛗
8. **Gastronomia** 🍳
9. **Gestão Ambiental** 🌱
10. **Manutenção de Computadores** 💻
11. **Mecânica Automotiva** 🔧
12. **Músico Intérprete Instrumentista** 🎸
13. **Projetista de Móveis** 🪑
14. **Vendas e Atendimento** 🛍️

### Curso de Qualificação

15. **Auxiliar de Cozinha** 👨‍🍳

---

## ✨ Funcionalidades Principais

### 🏠 Home Page
- Header fixo com navegação responsiva
- Seção hero com frase impactante
- Grid de cards de cursos com animações
- Informações sobre objetivo e público-alvo
- Call-to-action para inscrição

### 📄 Página de Detalhes
- Informações completas do curso
- Lista de aprendizados
- Sidebar com informações rápidas
- Seção de cursos relacionados
- Design focado em conversão

### ✉️ Página de Contato
- Formulário completo de inscrição
- Validação em tempo real
- Formatação automática (CPF, telefone, CEP)
- Busca automática de endereço por CEP (ViaCEP API)
- Mensagem de confirmação animada

### ❓ Página de FAQ
- Accordion de perguntas e respostas
- Categorização por temas
- Placeholder para chatbot de IA (futuro)
- Design limpo e organizado

### 📱 Menu Mobile
- Menu hamburguer animado
- Navegação intuitiva
- Fecha automaticamente ao clicar em links

### 🔄 Recursos Adicionais
- Smooth scroll para âncoras
- Botão "Voltar ao topo"
- Animações de entrada nos cards
- Loading states em formulários
- Salvamento local de inscrições (demonstração)

---

## 🔧 Como Usar

### Instalação

1. Clone ou baixe o projeto
2. Abra o arquivo `index.html` em um navegador moderno
3. Navegue pelas páginas usando o menu

### Personalização

#### Adicionar Novo Curso

1. Abra `curso-detalhes.js`
2. Adicione um novo objeto no `cursosData`:

```javascript
'id-do-curso': {
    nome: 'Nome do Curso',
    icon: '🎯',
    subtitle: 'Descrição curta',
    sobre: 'Descrição completa...',
    objetivo: 'Objetivo do curso...',
    cargaHoraria: '800 horas',
    aprendizados: [
        'Item 1',
        'Item 2',
        // ...
    ]
}
```

3. Adicione o card na home (`index.html`):

```html
<div class="course-card">
    <div class="course-icon">🎯</div>
    <h3 class="course-title">Nome do Curso</h3>
    <p class="course-description">Descrição...</p>
    <a href="curso-detalhes.html?curso=id-do-curso" class="btn btn-secondary">Ver Detalhes</a>
</div>
```

#### Mudar Cores

Edite as variáveis CSS em `styles.css`:

```css
:root {
    --cor-azul-principal: #0066cc;
    --cor-laranja-principal: #ff6600;
    /* ... */
}
```

#### Integrar com Backend

No arquivo `contato.js`, substitua a função `enviarInscricao()` com sua chamada de API:

```javascript
fetch('/api/inscricoes', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados)
})
.then(response => response.json())
.then(data => {
    // Sucesso
})
.catch(error => {
    // Erro
});
```

---

## 🎨 Destaques de Design

### Mobile-First
O projeto foi desenvolvido pensando primeiro em dispositivos móveis, garantindo uma experiência excelente em smartphones.

### Acessibilidade
- Labels semânticos
- Contraste adequado de cores
- Navegação por teclado
- Atributos ARIA onde necessário

### Performance
- CSS otimizado
- Sem dependências externas pesadas
- Imagens substituídas por emojis (mais leve)
- Code splitting nos JavaScripts

### UX/UI
- Animações suaves
- Feedback visual em todas as ações
- Loading states
- Mensagens de erro e sucesso claras

---

## 🔮 Funcionalidades Futuras

### Integração de Chatbot IA
O projeto já possui um **placeholder** na página de FAQ preparado para receber um chatbot. Sugestões de implementação:

- **Dialogflow** (Google)
- **IBM Watson Assistant**
- **Microsoft Bot Framework**
- **API OpenAI/Claude** (chatbot personalizado)

### Backend
- Sistema de autenticação
- Dashboard administrativo
- Gestão de inscrições
- Geração de relatórios
- E-mails automáticos

### Melhorias
- Sistema de busca de cursos
- Filtros por categoria
- Depoimentos de alunos
- Galeria de fotos
- Blog de notícias
- Integração com redes sociais

---

## 📱 Responsividade

O portal é totalmente responsivo e funciona perfeitamente em:

- ✅ Smartphones (320px+)
- ✅ Tablets (768px+)
- ✅ Laptops (992px+)
- ✅ Desktops (1200px+)

---

## 🧪 Testes Recomendados

Antes de entregar para produção, teste:

- [ ] Todas as páginas em diferentes navegadores (Chrome, Firefox, Safari, Edge)
- [ ] Responsividade em diversos tamanhos de tela
- [ ] Validação do formulário com dados inválidos
- [ ] Navegação pelo menu mobile
- [ ] Accordion do FAQ
- [ ] Links entre páginas
- [ ] Smooth scroll
- [ ] Busca de CEP
- [ ] Formatação automática de campos

---

## 📊 Métricas e Analytics

O projeto está preparado para integração com:

- **Google Analytics** - Rastreamento de visitantes
- **Google Tag Manager** - Gestão de tags
- **Hotjar** - Mapas de calor e gravações de sessão

Pontos de rastreamento já implementados:
- Cliques em perguntas do FAQ
- Visualizações de cursos
- Submissões de formulário

---

## 👨‍💻 Desenvolvimento

### Desenvolvedor
**[Seu Nome]**  
Estudante de Suporte em TI e Desenvolvedor Front-end  
TCC - 2025

### Instituição
**Fundação O Pão dos Pobres**  
Rua da República, 801 - Cidade Baixa  
Porto Alegre/RS - CEP: 90050-321  
Tel: (51) 3433-6900 / 3433-6902

---

## 📝 Licença

Este projeto foi desenvolvido como trabalho acadêmico para a Fundação O Pão dos Pobres.

---

## 🙏 Agradecimentos

- À Fundação O Pão dos Pobres pela oportunidade
- Aos professores e orientadores
- À comunidade de desenvolvedores

---

## 📞 Suporte

Para dúvidas sobre o projeto:
- **E-mail**: relacaoinstitucional@paodospobres.com.br
- **Telefone**: (51) 3433-6900

---

## 🔄 Histórico de Versões

### v1.0.0 (2025)
- ✅ Lançamento inicial
- ✅ 15 cursos cadastrados
- ✅ Sistema de inscrição completo
- ✅ FAQ com 20+ perguntas
- ✅ Design responsivo
- ✅ Animações e interatividade

---

**Desenvolvido com 💙 e 🧡 para a Fundação O Pão dos Pobres**
