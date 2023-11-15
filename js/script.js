function verificarEstoque(linha) 
{
    let valorQuantidade = Number(linha.children[2].textContent);
    if (valorQuantidade <= 60) 
    {
        linha.children[4].innerHTML = "<span class='vermelho'>Comprar</span>";
    } 
    else 
    {
        linha.children[4].innerHTML = "Regular";
    }
}

const linhasProdutos = document.querySelectorAll('.linha-produto');

for (let i = 0; i < linhasProdutos.length; i++) {
    verificarEstoque( linhasProdutos[i]);
}

const botaoNovo = document.querySelector('.btnNovo');
const bloqueio = document.querySelector('.block');
const form = document.querySelector('.areaNovoProduto');

botaoNovo.addEventListener('click', function(e){
    e.preventDefault();

    const caixaNome = document.querySelector('#txtNome');
    const caixaQtd = document.querySelector('#txtQtd');
    const caixaValor = document.querySelector('#txtValor');

    caixaNome.value = "";
    caixaQtd.value = "";
    caixaValor.value="";

    bloqueio.classList.remove('escondido');
    form.classList.remove('escondido');
});


const botaoCancelar = document.querySelector('#btnCancelarNovoProduto');
if (botaoCancelar)
{
    botaoCancelar.addEventListener('click', function(e){
        e.preventDefault();
        bloqueio.classList.add('escondido');
        form.classList.add('escondido');
    });
}

const botaoSalvar = document.querySelector('#btnSalvarNovoProduto');
if(botaoSalvar)
{
    botaoSalvar.addEventListener('click', function(e){
        e.preventDefault();

        let nome = document.querySelector('#txtNome').value;
        let qtd = Number(document.querySelector('#txtQtd').value);
        let valor = Number(document.querySelector('#txtValor').value);

        const produto = {
            'nome': nome,
            'qtd': qtd,
            'valor': valor
        }

        AdicionarLinha(produto);

        bloqueio.classList.add('escondido');
        form.classList.add('escondido');
    });    
}

function AdicionarLinha(produto) 
{
    const tabelaProdutos = document.querySelector('.conteudoTabelaProdutos');
    const novaLinha = document.createElement('tr');
    novaLinha.classList.add('linha-produto');
    novaLinha.innerHTML = `<td></td>
                            <td>${produto.nome}</td>
                            <td>${produto.qtd}</td>
                            <td>${produto.valor}</td>
                            <td></td>`;
    tabelaProdutos.appendChild(novaLinha);

    verificarEstoque(novaLinha);
}

