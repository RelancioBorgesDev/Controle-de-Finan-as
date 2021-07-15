const transacaoUL = document.querySelector('#transactions');
const inputNome = document.querySelector('#text');
const inputAmount = document.querySelector('#amount');

console.log(inputAmount);

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
const valorSetupNegativos = valorSetup.filter(valorSetup => valorSetup < 0);

/* Valores das transações total, total positivo e total negativo */
const valorTotalTransacoesSetup = valorSetup.reduce((acc, transacoes) => acc + transacoes, 0).toFixed(2);
const valorTransacoesPositivoTotal = valorSetupPositivos.reduce((acc,transacoes) => acc + transacoes, 0).toFixed(2)
const valorTransacoesNegativoTotal = valorSetupNegativos.reduce((acc,transacoes) => acc + transacoes, 0).toFixed(2)



















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