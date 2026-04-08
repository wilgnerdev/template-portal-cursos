/* ========================================
   CURSO-DETALHES.JS
   Carrega e exibe informações dinâmicas dos cursos
======================================== */

// ========================================
// BASE DE DADOS DOS CURSOS
// Aqui você pode expandir com informações reais de cada curso
// ========================================
const cursosData = {
    'asseio': {
        nome: 'Asseio e Conservação',
        icon: '🧹',
        subtitle: 'Profissionalize-se na área de limpeza e conservação',
        sobre: 'O curso de Asseio e Conservação prepara profissionais para atuar em empresas, condomínios, hospitais e diversos ambientes que necessitam de serviços especializados de limpeza. O aluno aprenderá técnicas modernas de higienização, uso correto de produtos químicos e equipamentos, além de normas de segurança e sustentabilidade.',
        objetivo: 'Capacitar o aluno para executar serviços de limpeza e conservação de ambientes de forma técnica, segura e eficiente, utilizando produtos adequados e seguindo normas de higiene e segurança do trabalho.',
        cargaHoraria: '800 horas',
        aprendizados: [
            'Técnicas de limpeza e conservação de diversos ambientes',
            'Uso correto de produtos químicos e equipamentos de limpeza',
            'Normas de segurança do trabalho e uso de EPIs',
            'Organização e planejamento de rotinas de limpeza',
            'Práticas sustentáveis e gestão de resíduos',
            'Atendimento ao cliente e postura profissional'
        ]
    },
    'administrativo': {
        nome: 'Assistente Administrativo',
        icon: '💼',
        subtitle: 'Desenvolva competências para o setor administrativo',
        sobre: 'O curso de Assistente Administrativo forma profissionais capacitados para atuar em rotinas administrativas de empresas de diversos segmentos. Com uma abordagem prática e moderna, o aluno desenvolverá habilidades em organização de documentos, atendimento ao público, uso de ferramentas digitais e processos administrativos essenciais para o mercado de trabalho.',
        objetivo: 'Formar profissionais aptos a executar atividades administrativas, organizando documentos, atendendo clientes, auxiliando em processos de gestão e contribuindo para o bom funcionamento organizacional.',
        cargaHoraria: '800 horas',
        aprendizados: [
            'Rotinas administrativas e organização de documentos',
            'Atendimento ao público presencial e telefônico',
            'Uso de ferramentas de informática (pacote Office)',
            'Comunicação empresarial e redação de documentos',
            'Gestão de arquivos e controle de correspondências',
            'Noções de contabilidade e recursos humanos'
        ]
    },
    'cabeleireiro': {
        nome: 'Assistente de Cabeleireiro',
        icon: '✂️',
        subtitle: 'Inicie sua carreira no setor de beleza',
        sobre: 'O curso de Assistente de Cabeleireiro prepara profissionais para atuar em salões de beleza, barbearias e clínicas de estética. Com foco em técnicas de corte, coloração, tratamentos capilares e atendimento ao cliente, o curso oferece uma formação completa para quem deseja iniciar uma carreira promissora no segmento de beleza.',
        objetivo: 'Capacitar o aluno em técnicas de corte, coloração, tratamento e finalização de cabelos, desenvolvendo habilidades para atuar como assistente de cabeleireiro em estabelecimentos do setor de beleza.',
        cargaHoraria: '800 horas',
        aprendizados: [
            'Técnicas de corte feminino, masculino e infantil',
            'Colorimetria e técnicas de coloração',
            'Tratamentos capilares e química capilar',
            'Técnicas de escova e finalização',
            'Visagismo e análise de perfil do cliente',
            'Atendimento ao cliente e gestão de agenda'
        ]
    },
    'costura': {
        nome: 'Corte, Costura e Modelagem Sustentável',
        icon: '🧵',
        subtitle: 'Moda sustentável e técnicas de costura profissional',
        sobre: 'Este curso une técnicas tradicionais de costura com práticas sustentáveis, formando profissionais conscientes e capacitados para atuar no mercado de moda. O aluno aprenderá desde a modelagem até a confecção de peças, com ênfase em sustentabilidade, reaproveitamento de materiais e criação de peças únicas e personalizadas.',
        objetivo: 'Formar profissionais aptos a desenvolver modelagens, executar cortes e costuras de qualidade, integrando práticas sustentáveis à produção de vestuário e contribuindo para uma moda mais consciente.',
        cargaHoraria: '800 horas',
        aprendizados: [
            'Técnicas de costura à mão e à máquina',
            'Modelagem plana e volumétrica',
            'Corte e montagem de peças do vestuário',
            'Customização e upcycling de roupas',
            'Práticas sustentáveis na moda',
            'Empreendedorismo e gestão de ateliê'
        ]
    },
    'climatizacao': {
        nome: 'Climatização e Refrigeração',
        icon: '❄️',
        subtitle: 'Especialize-se em sistemas de climatização',
        sobre: 'O curso de Climatização e Refrigeração forma técnicos especializados na instalação, manutenção e reparo de sistemas de ar condicionado, refrigeração comercial e residencial. Com grande demanda no mercado, esta formação oferece conhecimentos teóricos e práticos sobre sistemas de climatização, gases refrigerantes e eficiência energética.',
        objetivo: 'Capacitar profissionais para instalar, realizar manutenção preventiva e corretiva em sistemas de ar condicionado e refrigeração, seguindo normas técnicas e de segurança.',
        cargaHoraria: '1.000 horas',
        aprendizados: [
            'Fundamentos de refrigeração e termodinâmica',
            'Instalação de sistemas de ar condicionado',
            'Manutenção preventiva e corretiva',
            'Identificação e reparo de defeitos',
            'Manuseio de gases refrigerantes',
            'Normas de segurança e meio ambiente'
        ]
    },
    'desporto': {
        nome: 'Desporto',
        icon: '⚽',
        subtitle: 'Desenvolva-se profissionalmente no esporte',
        sobre: 'O curso de Desporto prepara profissionais para atuar na área de educação física, recreação e gestão esportiva. Com foco em atividades práticas e teoria do esporte, o aluno desenvolverá competências para trabalhar com diferentes públicos, promovendo saúde, bem-estar e inclusão social através do esporte.',
        objetivo: 'Formar profissionais capacitados para atuar em atividades esportivas, recreativas e de educação física, promovendo a prática esportiva de forma inclusiva e educativa.',
        cargaHoraria: '800 horas',
        aprendizados: [
            'Fundamentos da educação física e esporte',
            'Planejamento de atividades esportivas e recreativas',
            'Técnicas de diferentes modalidades esportivas',
            'Primeiros socorros e prevenção de lesões',
            'Recreação e jogos cooperativos',
            'Gestão de eventos esportivos'
        ]
    },
    'elevadores': {
        nome: 'Eletromecânica de Elevadores',
        icon: '🛗',
        subtitle: 'Especialização técnica em elevadores',
        sobre: 'O curso de Eletromecânica de Elevadores forma técnicos especializados em manutenção de sistemas de transporte vertical. Esta é uma profissão com alta demanda e excelente remuneração, que exige conhecimentos técnicos em elétrica, mecânica e eletrônica aplicados a elevadores, escadas rolantes e equipamentos similares.',
        objetivo: 'Capacitar profissionais para realizar instalação, manutenção preventiva e corretiva em sistemas de elevadores, garantindo segurança e funcionamento adequado dos equipamentos.',
        cargaHoraria: '1.200 horas',
        aprendizados: [
            'Sistemas elétricos e eletrônicos de elevadores',
            'Mecânica de elevadores e componentes',
            'Manutenção preventiva e corretiva',
            'Normas de segurança e legislação específica',
            'Diagnóstico e resolução de problemas',
            'Instalação e modernização de equipamentos'
        ]
    },
    'gastronomia': {
        nome: 'Gastronomia',
        icon: '🍳',
        subtitle: 'Explore o mundo culinário profissional',
        sobre: 'O curso de Gastronomia oferece uma formação completa para quem deseja atuar profissionalmente em cozinhas de restaurantes, hotéis, buffets e outros estabelecimentos do setor alimentício. Com aulas práticas em cozinha experimental, o aluno aprenderá técnicas culinárias, gestão de cozinha e criação de pratos de qualidade.',
        objetivo: 'Formar profissionais capacitados para atuar em cozinhas profissionais, dominando técnicas culinárias, organização de cozinha, higiene alimentar e criação de cardápios.',
        cargaHoraria: '1.000 horas',
        aprendizados: [
            'Técnicas de corte, cocção e preparação',
            'Gestão de cozinha e organização',
            'Higiene e manipulação de alimentos',
            'Gastronomia brasileira e internacional',
            'Criação e apresentação de pratos',
            'Gestão de custos e cardápios'
        ]
    },
    'ambiental': {
        nome: 'Gestão Ambiental',
        icon: '🌱',
        subtitle: 'Sustentabilidade e preservação ambiental',
        sobre: 'O curso de Gestão Ambiental forma profissionais conscientes e capacitados para atuar em empresas, órgãos públicos e ONGs na área de meio ambiente. O aluno desenvolverá competências em gestão de resíduos, preservação ambiental, educação ambiental e implementação de práticas sustentáveis em organizações.',
        objetivo: 'Capacitar profissionais para atuar em gestão ambiental, desenvolvendo e implementando práticas sustentáveis, gerenciando resíduos e contribuindo para a preservação do meio ambiente.',
        cargaHoraria: '800 horas',
        aprendizados: [
            'Legislação ambiental brasileira',
            'Gestão de resíduos sólidos e reciclagem',
            'Educação ambiental e conscientização',
            'Sistemas de gestão ambiental (ISO 14001)',
            'Avaliação de impactos ambientais',
            'Sustentabilidade empresarial'
        ]
    },
    'computadores': {
        nome: 'Manutenção de Computadores',
        icon: '💻',
        subtitle: 'Torne-se um técnico em informática',
        sobre: 'O curso de Manutenção de Computadores prepara técnicos para atuar no mercado de TI, realizando manutenção preventiva e corretiva em equipamentos de informática. Com grande demanda no mercado, o profissional aprenderá sobre hardware, software, redes e resolução de problemas técnicos.',
        objetivo: 'Formar técnicos capacitados para diagnosticar problemas, realizar manutenção preventiva e corretiva em computadores, notebooks e periféricos, além de prestar suporte técnico.',
        cargaHoraria: '800 horas',
        aprendizados: [
            'Arquitetura de computadores e componentes',
            'Montagem e desmontagem de equipamentos',
            'Instalação de sistemas operacionais',
            'Diagnóstico e solução de problemas',
            'Manutenção preventiva e corretiva',
            'Redes de computadores e suporte técnico'
        ]
    },
    'mecanica': {
        nome: 'Mecânica Automotiva',
        icon: '🔧',
        subtitle: 'Especialização em manutenção veicular',
        sobre: 'O curso de Mecânica Automotiva forma profissionais qualificados para atuar no setor automotivo, uma das áreas com maior demanda de mão de obra qualificada. O aluno aprenderá sobre motores, sistemas elétricos, suspensão, freios e todas as áreas fundamentais da manutenção automotiva.',
        objetivo: 'Capacitar mecânicos para realizar diagnósticos, manutenção preventiva e corretiva em veículos, dominando técnicas modernas de mecânica automotiva.',
        cargaHoraria: '1.200 horas',
        aprendizados: [
            'Funcionamento de motores à combustão',
            'Sistemas elétricos e eletrônicos automotivos',
            'Manutenção de freios e suspensão',
            'Diagnóstico com scanner automotivo',
            'Injeção eletrônica e ar-condicionado veicular',
            'Normas de segurança em oficinas'
        ]
    },
    'musica': {
        nome: 'Músico Intérprete Instrumentista',
        icon: '🎸',
        subtitle: 'Desenvolva sua carreira musical',
        sobre: 'O curso de Músico Intérprete Instrumentista oferece formação profissional para músicos que desejam atuar no mercado musical. Com foco em técnica instrumental, teoria musical e prática de conjunto, o aluno desenvolverá habilidades para atuar em bandas, orquestras, estúdios e como instrumentista solo.',
        objetivo: 'Formar músicos capacitados tecnicamente para atuar profissionalmente como instrumentistas, dominando teoria musical, técnica instrumental e práticas de performance.',
        cargaHoraria: '800 horas',
        aprendizados: [
            'Técnica instrumental avançada',
            'Teoria musical e harmonia',
            'Leitura e escrita musical',
            'Prática de conjunto e repertório',
            'História da música e estilos musicais',
            'Mercado musical e carreira artística'
        ]
    },
    'moveis': {
        nome: 'Projetista de Móveis',
        icon: '🪑',
        subtitle: 'Design e execução de móveis planejados',
        sobre: 'O curso de Projetista de Móveis forma profissionais para atuar no mercado de móveis planejados e marcenaria. O aluno aprenderá a criar projetos funcionais e esteticamente agradáveis, utilizando softwares de design, conhecimentos de materiais e técnicas de marcenaria para executar projetos personalizados.',
        objetivo: 'Capacitar profissionais para criar projetos de móveis planejados, desde a concepção do design até a execução, utilizando técnicas modernas e ferramentas de projeto.',
        cargaHoraria: '1.000 horas',
        aprendizados: [
            'Desenho técnico e projeto de móveis',
            'Uso de softwares de design (AutoCAD, SketchUp)',
            'Materiais e ferragens para móveis',
            'Técnicas de marcenaria e acabamento',
            'Orçamento e gestão de projetos',
            'Atendimento ao cliente e vendas'
        ]
    },
    'vendas': {
        nome: 'Vendas e Atendimento',
        icon: '🛍️',
        subtitle: 'Excelência em vendas e relacionamento',
        sobre: 'O curso de Vendas e Atendimento desenvolve habilidades essenciais para profissionais que desejam atuar no varejo, comércio e serviços. Com foco em técnicas de vendas, atendimento ao cliente e comunicação, o aluno estará preparado para conquistar resultados e construir relacionamentos duradouros com clientes.',
        objetivo: 'Formar profissionais com excelência em atendimento ao cliente e técnicas de vendas, desenvolvendo habilidades de comunicação, negociação e relacionamento interpessoal.',
        cargaHoraria: '600 horas',
        aprendizados: [
            'Técnicas de vendas e negociação',
            'Atendimento ao cliente presencial e digital',
            'Comunicação e persuasão',
            'Gestão de relacionamento com clientes',
            'Marketing pessoal e profissionalismo',
            'Uso de sistemas de vendas e CRM'
        ]
    },
    'auxiliar-cozinha': {
        nome: 'Auxiliar de Cozinha',
        icon: '👨‍🍳',
        subtitle: 'Curso de qualificação profissional',
        sobre: 'O curso de Auxiliar de Cozinha é uma qualificação profissional que prepara o aluno para atuar em cozinhas industriais, restaurantes, hotéis e serviços de alimentação. Com foco em higiene, organização e técnicas básicas de preparação, este curso oferece uma porta de entrada rápida para o mercado de trabalho na área de alimentação.',
        objetivo: 'Qualificar profissionais para auxiliar em cozinhas profissionais, executando atividades de preparação de alimentos, higienização e organização, seguindo normas de segurança alimentar.',
        cargaHoraria: '400 horas',
        aprendizados: [
            'Higiene e manipulação de alimentos',
            'Organização de cozinha profissional',
            'Técnicas básicas de preparação',
            'Uso de equipamentos de cozinha',
            'Controle de estoque e validade',
            'Normas de segurança no trabalho'
        ]
    }
};

// ========================================
// CARREGA INFORMAÇÕES DO CURSO
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Pega o parâmetro da URL
    const urlParams = new URLSearchParams(window.location.search);
    const cursoId = urlParams.get('curso');
    
    // Verifica se o curso existe
    if (cursoId && cursosData[cursoId]) {
        const curso = cursosData[cursoId];
        
        // Atualiza os elementos da página
        document.getElementById('breadcrumb-curso').textContent = curso.nome;
        document.getElementById('hero-icon').textContent = curso.icon;
        document.getElementById('hero-title').textContent = curso.nome;
        document.getElementById('hero-subtitle').textContent = curso.subtitle;
        document.getElementById('course-about').textContent = curso.sobre;
        document.getElementById('course-objective').textContent = curso.objetivo;
        document.getElementById('course-duration').textContent = curso.cargaHoraria;
        
        // Atualiza o título da página
        document.title = `${curso.nome} - Pão dos Pobres`;
        
        // Popula a lista de aprendizados
        const learningList = document.getElementById('learning-list');
        learningList.innerHTML = '';
        curso.aprendizados.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            learningList.appendChild(li);
        });
        
        // Carrega cursos relacionados (3 cursos aleatórios diferentes do atual)
        loadRelatedCourses(cursoId);
        
    } else {
        // Se o curso não existe, redireciona para a home
        window.location.href = 'index.html';
    }
});

// ========================================
// CARREGA CURSOS RELACIONADOS
// ========================================
function loadRelatedCourses(currentCursoId) {
    const relatedContainer = document.querySelector('.courses-grid-small');
    if (!relatedContainer) return;
    
    // Pega todos os IDs de cursos exceto o atual
    const allCursosIds = Object.keys(cursosData).filter(id => id !== currentCursoId);
    
    // Embaralha e pega 3 cursos
    const shuffled = allCursosIds.sort(() => 0.5 - Math.random());
    const selectedCursos = shuffled.slice(0, 3);
    
    // Cria os cards
    relatedContainer.innerHTML = '';
    selectedCursos.forEach(cursoId => {
        const curso = cursosData[cursoId];
        const card = createCourseCard(cursoId, curso);
        relatedContainer.appendChild(card);
    });
}

// ========================================
// CRIA CARD DE CURSO
// ========================================
function createCourseCard(cursoId, curso) {
    const card = document.createElement('div');
    card.className = 'course-card';
    
    card.innerHTML = `
        <div class="course-icon">${curso.icon}</div>
        <h3 class="course-title">${curso.nome}</h3>
        <p class="course-description">${curso.subtitle}</p>
        <a href="curso-detalhes.html?curso=${cursoId}" class="btn btn-secondary">Ver Detalhes</a>
    `;
    
    return card;
}
