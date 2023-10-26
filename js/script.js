function verificarEstoque(linha)
{
    let valorQuantidade = Number(linha.children[2].textContent );
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