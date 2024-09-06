async function pesquisar() {
    let termoPesquisa = document.querySelector('#campo-pesquisa').value.toLowerCase();
    let section = document.getElementById("resultados-pesquisa");

    section.innerHTML = "";

    // Buscar cotações em tempo real antes de exibir os resultados
    await buscarCotacoes();

    let resultadosFiltrados = dados.filter(dado =>
        dado.titulo.toLowerCase().includes(termoPesquisa)
    );

    if (resultadosFiltrados.length > 0) {
        let resultados = "";

        for (let dado of resultadosFiltrados) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p class="descricao-meta">Preço atual: R$ ${dado.precoAtual || "Indisponível"}</p>
                    <a href="${dado.link}" target="_blank">Mais informações no InfoMoney</a>
                </div>
            `;
        }

        section.innerHTML = resultados;
    } else {
        section.innerHTML = "<p>Nenhuma empresa encontrada.</p>";
    }
}
