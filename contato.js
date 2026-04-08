/* ========================================
   CONTATO.JS
   Gerencia o formulário de inscrição
======================================== */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inscricaoForm');
    const successMessage = document.getElementById('successMessage');
    
    // ========================================
    // FORMATAÇÃO AUTOMÁTICA DOS CAMPOS
    // ========================================
    
    // CPF
    const cpfInput = document.getElementById('cpf');
    if (cpfInput) {
        cpfInput.addEventListener('input', function() {
            formatCPF(this);
        });
    }
    
    // Telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function() {
            formatPhone(this);
        });
    }
    
    // CEP
    const cepInput = document.getElementById('cep');
    if (cepInput) {
        cepInput.addEventListener('input', function() {
            formatCEP(this);
        });
        
        // Busca endereço ao completar CEP (integração com ViaCEP)
        cepInput.addEventListener('blur', function() {
            const cep = this.value.replace(/\D/g, '');
            if (cep.length === 8) {
                buscarEnderecoPorCEP(cep);
            }
        });
    }
    
    // ========================================
    // VALIDAÇÃO CUSTOM DO FORMULÁRIO
    // ========================================
    
    // Validação de CPF
    if (cpfInput) {
        cpfInput.addEventListener('blur', function() {
            if (this.value && !validarCPF(this.value)) {
                this.setCustomValidity('CPF inválido');
                this.reportValidity();
            } else {
                this.setCustomValidity('');
            }
        });
    }
    
    // Validação de idade
    const dataNascimentoInput = document.getElementById('dataNascimento');
    if (dataNascimentoInput) {
        dataNascimentoInput.addEventListener('blur', function() {
            const idade = calcularIdade(this.value);
            const deficienciaCheckbox = document.getElementById('deficiencia');
            
            if (idade < 14 || (idade > 24 && !deficienciaCheckbox.checked)) {
                this.setCustomValidity('Idade fora do requisito (14-24 anos, ou qualquer idade para PCD)');
                this.reportValidity();
            } else {
                this.setCustomValidity('');
            }
        });
    }
    
    // ========================================
    // SUBMISSÃO DO FORMULÁRIO
    // ========================================
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação final
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }
            
            // Coleta os dados do formulário
            const formData = new FormData(form);
            const dados = {};
            for (let [key, value] of formData.entries()) {
                dados[key] = value;
            }
            
            // Simula envio (aqui você integraria com backend)
            enviarInscricao(dados);
        });
    }
});

// ========================================
// FUNÇÕES DE FORMATAÇÃO
// ========================================

function formatCPF(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    input.value = value;
}

function formatPhone(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
        value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }
    
    input.value = value;
}

function formatCEP(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, 8);
    value = value.replace(/(\d{5})(\d{3})/, '$1-$2');
    input.value = value;
}

// ========================================
// VALIDAÇÃO DE CPF
// ========================================
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    
    if (cpf.length !== 11) return false;
    
    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) return false;
    
    // Valida o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let digito1 = resto < 2 ? 0 : 11 - resto;
    
    if (digito1 !== parseInt(cpf.charAt(9))) return false;
    
    // Valida o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let digito2 = resto < 2 ? 0 : 11 - resto;
    
    if (digito2 !== parseInt(cpf.charAt(10))) return false;
    
    return true;
}

// ========================================
// CALCULAR IDADE
// ========================================
function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    
    return idade;
}

// ========================================
// BUSCAR ENDEREÇO POR CEP (ViaCEP API)
// ========================================
function buscarEnderecoPorCEP(cep) {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading-overlay';
    loadingDiv.innerHTML = '<p>Buscando endereço...</p>';
    loadingDiv.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 1.2rem;
        z-index: 9999;
    `;
    document.body.appendChild(loadingDiv);
    
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert('CEP não encontrado');
            } else {
                // Preenche os campos automaticamente
                document.getElementById('endereco').value = data.logradouro || '';
                document.getElementById('bairro').value = data.bairro || '';
                document.getElementById('cidade').value = data.localidade || '';
                
                // Seleciona o estado
                const estadoSelect = document.getElementById('estado');
                const ufOption = Array.from(estadoSelect.options).find(
                    option => option.value === data.uf
                );
                if (ufOption) {
                    estadoSelect.value = data.uf;
                }
                
                // Foca no campo de número
                document.getElementById('numero').focus();
            }
        })
        .catch(error => {
            console.error('Erro ao buscar CEP:', error);
            alert('Erro ao buscar CEP. Preencha manualmente.');
        })
        .finally(() => {
            document.body.removeChild(loadingDiv);
        });
}

// ========================================
// ENVIAR INSCRIÇÃO
// ========================================
function enviarInscricao(dados) {
    // Mostra loading no botão
    const submitButton = document.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '⏳ Enviando...';
    submitButton.disabled = true;
    
    // Simula envio para servidor (substitua por sua integração real)
    setTimeout(() => {
        // Salva no localStorage (apenas para demonstração)
        salvarInscricaoLocal(dados);
        
        // Esconde o formulário e mostra mensagem de sucesso
        document.getElementById('inscricaoForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
        
        // Rola para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Log para desenvolvedor
        console.log('Inscrição enviada:', dados);
        
        // Em produção, aqui você faria:
        /*
        fetch('/api/inscricoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados)
        })
        .then(response => response.json())
        .then(data => {
            // Mostra mensagem de sucesso
            document.getElementById('inscricaoForm').style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
        })
        .catch(error => {
            alert('Erro ao enviar inscrição. Tente novamente.');
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        });
        */
    }, 2000); // Simula delay de rede
}

// ========================================
// SALVAR NO LOCALSTORAGE (DEMONSTRAÇÃO)
// ========================================
function salvarInscricaoLocal(dados) {
    const inscricoes = JSON.parse(localStorage.getItem('inscricoes') || '[]');
    dados.dataInscricao = new Date().toISOString();
    inscricoes.push(dados);
    localStorage.setItem('inscricoes', JSON.stringify(inscricoes));
    
    console.log('Total de inscrições salvas:', inscricoes.length);
}

// ========================================
// ADICIONA ESTADOS DO BRASIL AO SELECT
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const estadoSelect = document.getElementById('estado');
    if (estadoSelect && estadoSelect.options.length <= 3) { // Se tem poucos estados
        const estados = [
            { uf: 'AC', nome: 'Acre' },
            { uf: 'AL', nome: 'Alagoas' },
            { uf: 'AP', nome: 'Amapá' },
            { uf: 'AM', nome: 'Amazonas' },
            { uf: 'BA', nome: 'Bahia' },
            { uf: 'CE', nome: 'Ceará' },
            { uf: 'DF', nome: 'Distrito Federal' },
            { uf: 'ES', nome: 'Espírito Santo' },
            { uf: 'GO', nome: 'Goiás' },
            { uf: 'MA', nome: 'Maranhão' },
            { uf: 'MT', nome: 'Mato Grosso' },
            { uf: 'MS', nome: 'Mato Grosso do Sul' },
            { uf: 'MG', nome: 'Minas Gerais' },
            { uf: 'PA', nome: 'Pará' },
            { uf: 'PB', nome: 'Paraíba' },
            { uf: 'PR', nome: 'Paraná' },
            { uf: 'PE', nome: 'Pernambuco' },
            { uf: 'PI', nome: 'Piauí' },
            { uf: 'RJ', nome: 'Rio de Janeiro' },
            { uf: 'RN', nome: 'Rio Grande do Norte' },
            { uf: 'RS', nome: 'Rio Grande do Sul' },
            { uf: 'RO', nome: 'Rondônia' },
            { uf: 'RR', nome: 'Roraima' },
            { uf: 'SC', nome: 'Santa Catarina' },
            { uf: 'SP', nome: 'São Paulo' },
            { uf: 'SE', nome: 'Sergipe' },
            { uf: 'TO', nome: 'Tocantins' }
        ];
        
        // Limpa opções existentes (exceto a primeira)
        while (estadoSelect.options.length > 1) {
            estadoSelect.remove(1);
        }
        
        // Adiciona todos os estados
        estados.forEach(estado => {
            const option = document.createElement('option');
            option.value = estado.uf;
            option.textContent = estado.nome;
            estadoSelect.appendChild(option);
        });
    }
});
