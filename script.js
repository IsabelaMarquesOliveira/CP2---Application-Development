const container = document.querySelector("#container-atores");
const inputBusca = document.querySelector("#busca");

function renderizar(lista) {
    
    container.innerHTML = "";

    
    lista.forEach((ator) => {
        
        container.innerHTML += `
            <div class="card-ator">
                <img src="${ator.foto}" alt="Foto de ${ator.nome}">
                <h2>${ator.nome}</h2>
                <p><strong>País:</strong> ${ator.pais}</p>
                <p><strong>Nascimento:</strong> ${ator.nascimento}</p>
            </div>
        `;
    });
}


function filtrarAtores() {
    
    const textoBusca = inputBusca.value.toLowerCase();

    
    const listaFiltrada = atores.filter((ator) => {
        
        const nomeDoAtor = ator.nome.toLowerCase();
        
        
        return nomeDoAtor.includes(textoBusca);
    });

    
    renderizar(listaFiltrada);
}


renderizar(atores);