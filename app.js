function pesquisar() {

    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value


    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
    section.innerHTML = "<p>Sem resultados. Por favor digite uma palavra de seu interesse para realizar a busca.</p>"
    return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = ""; 
    let nacionalidade = "";
    let atuacao = "";
    let contribuicao = "";
    let relevancia = "";
    //let tags = "";//

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        nacionalidade = dado.nacionalidade.toLowerCase()
        atuacao = dado.atuacao.toLowerCase()
        contribuicao = dado.contribuicao.toLowerCase()
        relevancia = dado.relevancia.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (nome.includes(campoPesquisa) || nacionalidade.includes(campoPesquisa) || atuacao.includes(campoPesquisa) || contribuicao.includes(campoPesquisa) || relevancia.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
                <div class="item-resultado">
                    <h2> ${dado.nome} </h2>
                    <p class="descricao-meta">${dado.nacionalidade}</p>
                    <p class="descricao-meta">${dado.atuacao}</p>
                    <p class="descricao-meta">${dado.contribuicao}</p>
                    <p class="descricao-meta">${dado.relevancia}</p>
                    <a href=${dado.link} target="_blank">Saiba mais</a>
                </div>
        `;
        }
    }
                    
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;

}