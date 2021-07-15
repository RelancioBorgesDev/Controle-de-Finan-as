const transacaoUL = document.querySelector('#transactions');
const inputNome = document.querySelector('#text');
const inputAmount = document.querySelector('#amount');
const form = document.querySelector('#form');
const balance = document.querySelector('#balance');
const moneyPlus = document.querySelector('#money-plus');
const moneyMinus = document.querySelector('#money-minus');
const deleteBTN = document.querySelector('.delete-btn');



//Array de Transações
const transacoesSetup = [
    {id: 1, nome: 'Compra Teclado Razer', amount:-200 },
    {id: 2, nome: 'Vender Mouse Razer', amount:300 },
    {id: 3, nome: 'Venda Monitor AOC', amount: 1000 },
    {id: 4, nome: 'Compra Microfone HyperX', amount:-600 },
    {id: 5, nome: 'Compra Mousepad HyperX', amount: -250 },
    {id: 6, nome: 'Venda Teclado Logitech', amount: 250 },
];
//Percorrendo o Array e aplicando 
const transacoesPercorridas = transacoesSetup.forEach(transacoes =>{
    const sinalTransacao = transacoes.amount < 0 ? '-' : '+';
    const amountSemSinal = Math.abs(transacoes.amount)
    const classeCSS = transacoes.amount < 0 ? 'minus' : 'plus';

    const li = document.createElement('li');
    li.classList.add(classeCSS);
    li.innerHTML = `${transacoes.nome} <span>${sinalTransacao} R$ ${amountSemSinal}</span/><button class="delete-btn">x</button>`
    transacaoUL.append(li)
})

/* Array com os valores dos produtos do Setup */
const valorSetup = transacoesSetup.map(transacoes => transacoes.amount);
/* Filtrar valores positivos e negativos do Setup */
const valorSetupPositivos = valorSetup.filter(valorSetup => valorSetup > 0);
console.log(valorSetupPositivos) 
const valorSetupNegativos = valorSetup.filter(valorSetup => valorSetup < 0);

/* Valores das transações total, total positivo e total negativo */
const valorTotalTransacoesSetup = valorSetup.reduce((acc, transacoes) => acc + transacoes, 0).toFixed(2);
const valorTransacoesPositivoTotal = valorSetupPositivos.reduce((acc,transacoes) => acc + transacoes, 0).toFixed(2)
const valorTransacoesNegativoTotal = valorSetupNegativos.reduce((acc,transacoes) => acc + transacoes, 0).toFixed(2)

/* Inserir os valores no HTML */
balance.innerHTML = `R$ ${valorTotalTransacoesSetup}`;
moneyPlus.innerHTML = `R$ ${valorTransacoesPositivoTotal}`;
moneyMinus.innerHTML = `R$ ${valorTransacoesNegativoTotal}`;

/* Form  */
const formEnviar = form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const valorNome = inputNome.value;
    const valorAmount = inputAmount.value;

    if(valorNome && valorAmount != "" || 0){
        const classeCSS = valorAmount < 0 ? 'minus' : 'plus';
        const li = document.createElement('li');
        const amountSemSinal = Math.abs(valorAmount)
        li.classList.add(classeCSS);
        const sinalTransacao = valorAmount < 0 ? '-' : '+';
        li.innerHTML = `${valorNome} <span> ${sinalTransacao} R$ ${amountSemSinal} </span/><button class="delete-btn">x</button>`;
        localStorage.setItem('Valor', transacaoUL.append(li));

        const valorTotalTransacoesSetupFormatado = parseFloat(valorTotalTransacoesSetup);
        const valorTransacoesPositivoTotalFormatado = parseFloat(valorTransacoesPositivoTotal);
        const valorTransacoesNegativoTotalFormatado = parseFloat(valorTransacoesNegativoTotal);
        const valorAmountFormatado = Number(valorAmount);

        const novoTotal = (valorTotalTransacoesSetupFormatado + valorAmountFormatado).toFixed(2);
        const novoTotalPositivo = (valorTransacoesPositivoTotalFormatado + valorAmountFormatado).toFixed(2);
        const novoTotalNegativo = (valorTransacoesNegativoTotalFormatado + valorAmountFormatado).toFixed(2);
        console.log(novoTotal)

        balance.innerHTML = `R$ ${novoTotal}`;
        moneyPlus.innerHTML = `R$ ${novoTotalPositivo}`;
        moneyMinus.innerHTML = `R$ ${novoTotalNegativo}`;

 }
   
   
    
})














//Função que adiciona as Transações
/* const adicionarTransacoes = transacao => {
    const sinalTransacao = transacao.amount < 0 ? '-' : '+';
    const amountSemSinal = Math.abs(transacao.amount)
    const classeCSS = transacao.amount < 0 ? 'minus' : 'plus';

    const li = document.createElement('li');
    li.classList.add(classeCSS);
    li.innerHTML = `${transacao.nome} <span>${sinalTransacao} R$ ${amountSemSinal}</span/><button class="delete-btn">x</button>`
    transacaoUL.append(li)
}

adicionarTransacoes() */