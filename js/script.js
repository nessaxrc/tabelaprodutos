
function formatarMoeda (valor)
{
    const numero = Number(valor);
    const formatoMoeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'});
    const valorFormatado = formatoMoeda.format(numero);
    return valorFormatado;
}
 
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
    
    const linhasProdutos = document.querySelectorAll('.linha-produto');
    let indiceUltimaLinha = linhasProdutos.length -1;
    const localUltimaCod = linhasProdutos[indiceUltimaLinha].children[0];
    let valorCodigo = Number(localUltimaCod.textContent) + 1;

    const caixaCod = document.querySelector('#txtCodigo');
    const caixaNome = document.querySelector('#txtNome');
    const caixaQtd = document.querySelector('#txtQtd');
    const caixaValor = document.querySelector('#txtValor');

    caixaCod.value = valorCodigo;
    caixaNome.value = "";
    caixaQtd.value = "";
    caixaValor.value="";
    caixaNome.focus();

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

        let codigo = document.querySelector('#txtCodigo').value;
        let nome = document.querySelector('#txtNome').value;
        let qtd = Number(document.querySelector('#txtQtd').value);
        let valor = Number(document.querySelector('#txtValor').value);

        const produto = {
            'codigo': codigo,
            'nome': nome,
            'qtd': qtd,
            'valor': formatarMoeda(valor)
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
    novaLinha.innerHTML = `<td>${produto.codigo}</td>
                            <td>${produto.nome}</td>
                            <td>${produto.qtd}</td>
                            <td>${produto.valor}</td>
                            <td></td>`;
    tabelaProdutos.appendChild(novaLinha);

    verificarEstoque(novaLinha);
}

let valorP = Number(linha.children[3].textContent);
formatarMoeda(valorP)
