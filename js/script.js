const btnNovo = document.querySelector(".btnNovo");
const form = document.querySelector(".areaNovoProduto");
const bloqueio  = document.querySelector(".block");
const botaoCancelar = document.querySelector(".btnCancelar");
const botaoSalvar = document.querySelector(".btnSalvar");

function verificarEstoque(linha)
{
    let valorQuantidade = Number(linha.children[2].textContent );
    if (valorQuantidade <= 60)
    {
        linha.children[4].innerHTML = "<span class='vermelho'>Comprar</span>";
    }
    else
    {
        linha.children[4].textContent = "Regular";
    }
}

const linhasProdutos = document.querySelectorAll('.linha-produto');

for (let i = 0; i < linhasProdutos.length; i++) {
    verificarEstoque( linhasProdutos[i]);
}

function ClicouBotaoAdicionar(event)
{
	event.preventDefault();

	form.classList.remove("escondido");
	bloqueio.classList.remove("escondido");
}

btnNovo.addEventListener("click", ClicouBotaoAdicionar);


// ---------------------------------------------------------------

function cancelarProduto(event)
{
	event.preventDefault();
    form.classList.add("escondido");
	bloqueio.classList.add("escondido");
}

botaoCancelar.addEventListener("click", cancelarProduto);
