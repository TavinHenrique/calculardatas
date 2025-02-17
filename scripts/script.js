const hoje = new Date();
const ano = hoje.getUTCFullYear();

function natal() {
    const resultado=document.getElementById("calcular")
    resultado.innerHTML=''
    let dataNatal = new Date(ano, 11, 25); // Mudei para 'dataNatal'

    // Se já passou do Natal, ajusta para o próximo ano
    if (hoje > dataNatal) {
        dataNatal = new Date(anoAtual + 1, 11, 25); // Ajuste para o próximo Natal
    }

    // Calcula a diferença em milissegundos e converte para dias
    const diferencaN = dataNatal - hoje; // Comparando com 'dataNatal'
    const diasRestantes = Math.ceil(diferencaN / (1000 * 60 * 60 * 24)); // Convertendo para dias

    // Exibe o resultado
    document.getElementById("res").innerText = `Faltam ${diasRestantes} dias para o Natal! 🎄`;
    div.innerHTML = '';
}

function anonovo() {
    const resultado=document.getElementById("calcular")
    resultado.innerHTML=''
    let dataAnoNovo = new Date(ano, 11, 31);

    if (hoje > dataAnoNovo) {
        dataAnoNovo = new Date(ano + 1, 11, 31);
    }
    const diferencaAN = dataAnoNovo - hoje;
    const diasRestantes = Math.ceil(diferencaAN / (1000 * 60 * 60 * 24)); // Convertendo para dias

    // Exibe o resultado
    document.getElementById("res").innerText = `Faltam ${diasRestantes} dias para o Ano Novo`;
    div.innerHTML = '';
}

function criança() {
    const resultado=document.getElementById("calcular")
    resultado.innerHTML=''
    let datacriança = new Date(ano, 9, 12);

    if (hoje > datacriança) {
        datacriança = new Date(ano + 1, 9, 12);
    }
    const diferencaC = datacriança - hoje;
    const diasRestantes = Math.ceil(diferencaC / (1000 * 60 * 60 * 24)); // Convertendo para dias

    // Exibe o resultado
    document.getElementById("res").innerText = `Faltam ${diasRestantes} dias para o Dia das criança`;
    div.innerHTML = '';
}

function calculardata() {
    const resultado=document.getElementById("res")
    resultado.innerHTML=''
    const inicio = document.createElement('input');
    inicio.type = 'date';
    const final = document.createElement('input');
    final.type = 'date';
    const calcular = document.createElement('button');
    calcular.textContent = 'calcular';

    const div = document.querySelector('#calcular');

    if (div.querySelector('input') || div.querySelector('button')) {
        return; // Sai da função se os elementos já existirem
    }

    div.appendChild(inicio);
    div.appendChild(final);
    div.appendChild(calcular);

    calcular.addEventListener('click', () => {
        const datainico = new Date(inicio.value);
        const datafinal = new Date(final.value);
    
        if (!inicio.value || !final.value) {  // Corrigido para checar se os inputs estão vazios
            resultado.textContent = 'Por favor, coloque as datas';
            return;
        }
    
        const diferencaI = datafinal - datainico;
        const diasRestantes = Math.ceil(Math.abs(diferencaI) / (1000 * 60 * 60 * 24)); // Convertendo para dias
    
        // Exibe o resultado no elemento com id "res"
        resultado.innerText = `Faltam ${diasRestantes} dias para a data selecionada`;
        div.innerHTML = '';
    })}; // Aqui está a chave de fechamento correta
