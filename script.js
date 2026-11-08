
/* =====================================================
   NEXUS GAMES
   Desenvolvido por Nexus Link
   JavaScript principal
===================================================== */


/* =====================================================
   1. ARRAY DE JOGOS
===================================================== */

const jogos = [

    {
        id: 1,
        nome: "GTA V Enhanced",
        preco: 149.90,
        categorias: ["Ação", "Mundo Aberto"],
        descricao: "Explore Los Santos e viva aventuras em um mundo aberto.",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3240220/header.jpg",
        destaque: true,
        steam: true
    },

    {
        id: 2,
        nome: "Red Dead Redemption 2",
        preco: 299.90,
        categorias: ["Ação", "Aventura", "Mundo Aberto"],
        descricao: "Uma aventura épica no Velho Oeste americano.",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg",
        destaque: true,
        steam: true
    },

    {
        id: 3,
        nome: "Cyberpunk 2077",
        preco: 199.90,
        categorias: ["RPG", "Ação", "Mundo Aberto"],
        descricao: "Explore Night City em uma aventura futurista.",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
        destaque: true,
        steam: true
    },

    {
        id: 4,
        nome: "Elden Ring",
        preco: 229.90,
        categorias: ["RPG", "Ação", "Aventura"],
        descricao: "Explore um vasto mundo de fantasia e desafios.",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
        destaque: true,
        steam: true
    },

    {
        id: 5,
        nome: "Hogwarts Legacy",
        preco: 249.99,
        categorias: ["RPG", "Aventura"],
        descricao: "Descubra o mundo mágico de Hogwarts.",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg",
        destaque: true,
        steam: true
    },

    {
        id: 6,
        nome: "Forza Horizon 5",
        preco: 249.00,
        categorias: ["Corrida", "Mundo Aberto"],
        descricao: "Corra pelas paisagens incríveis do México.",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg",
        destaque: true,
        steam: true
    },

    {
        id: 7,
        nome: "Resident Evil 4",
        preco: 169.00,
        categorias: ["Terror", "Ação", "Aventura"],
        descricao: "Enfrente criaturas assustadoras nesta experiência de sobrevivência.",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg",
        destaque: false,
        steam: true
    },

    {
        id: 8,
        nome: "God of War",
        preco: 199.90,
        categorias: ["Ação", "Aventura"],
        descricao: "Acompanhe Kratos e Atreus em uma jornada épica.",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg",
        destaque: true,
        steam: true
    },

    {
        id: 9,
        nome: "Marvel's Spider-Man Remastered",
        preco: 249.90,
        categorias: ["Ação", "Aventura", "Mundo Aberto"],
        descricao: "Proteja Nova York como o Homem-Aranha.",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg",
        destaque: true,
        steam: true
    },

    {
        id: 10,
        nome: "The Witcher 3",
        preco: 129.99,
        categorias: ["RPG", "Aventura", "Mundo Aberto"],
        descricao: "Viva uma grande aventura na pele de Geralt de Rívia.",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg",
        destaque: false,
        steam: true
    },

    {
        id: 11,
        nome: "EA SPORTS FC 26",
        preco: 299.90,
        categorias: ["Esportes", "Simulação"],
        descricao: "Entre em campo e dispute grandes partidas de futebol.",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3405690/header.jpg",
        destaque: true,
        steam: true
    },

    {
        id: 12,
        nome: "Baldur's Gate 3",
        preco: 199.99,
        categorias: ["RPG", "Estratégia", "Aventura"],
        descricao: "Uma aventura de fantasia com escolhas e consequências.",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg",
        destaque: true,
        steam: true
    },

    {
        id: 13,
        nome: "Minecraft",
        preco: null,
        categorias: ["Aventura", "Simulação"],
        descricao: "Construa, explore e sobreviva em mundos de blocos.",
        imagem: "https://placehold.co/460x215/1c2633/ffffff?text=Minecraft",
        destaque: false,
        steam: false
    },

    {
        id: 14,
        nome: "Hollow Knight: Silksong",
        preco: 59.99,
        categorias: ["Ação", "Aventura"],
        descricao: "Explore um reino desconhecido em uma aventura desafiadora.",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030300/header.jpg",
        destaque: true,
        steam: true
    },

    {
        id: 15,
        nome: "Terraria",
        preco: 19.99,
        categorias: ["Aventura", "Mundo Aberto"],
        descricao: "Explore, construa e enfrente perigos em um mundo 2D.",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg",
        destaque: false,
        steam: true
    },

    {
        id: 16,
        nome: "Stardew Valley",
        preco: 24.99,
        categorias: ["Simulação", "RPG"],
        descricao: "Construa sua fazenda e viva uma nova vida no campo.",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg",
        destaque: false,
        steam: true
    },

    {
        id: 17,
        nome: "Counter-Strike 2",
        preco: 0,
        categorias: ["Ação", "Tiro"],
        descricao: "Enfrente adversários em partidas competitivas.",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
        destaque: true,
        steam: true
    },

    {
        id: 18,
        nome: "VALORANT",
        preco: null,
        categorias: ["Ação", "Tiro"],
        descricao: "Dispute partidas táticas com agentes e habilidades.",
        imagem: "https://placehold.co/460x215/1c2633/ffffff?text=VALORANT",
        destaque: false,
        steam: false
    },

    {
        id: 19,
        nome: "PUBG: Battlegrounds",
        preco: 0,
        categorias: ["Ação", "Tiro"],
        descricao: "Sobreviva e seja o último jogador em pé.",
        imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/578080/header.jpg",
        destaque: true,
        steam: true
    },

    {
        id: 20,
        nome: "Rocket League",
        preco: null,
        categorias: ["Esportes", "Corrida"],
        descricao: "Misture futebol e carros em partidas eletrizantes.",
        imagem: "https://placehold.co/460x215/1c2633/ffffff?text=Rocket+League",
        destaque: false,
        steam: false
    }

];


/* =====================================================
   2. ELEMENTOS DO HTML
===================================================== */

const elementos = {

    paginas: document.querySelectorAll(".page-section"),
    linksNavegacao: document.querySelectorAll(".nav-link"),

    btnTema: document.getElementById("btnTema"),
    iconeTema: document.getElementById("iconeTema"),

    listaJogos: document.getElementById("listaJogos"),
    listaOfertas: document.getElementById("listaOfertas"),

    pesquisa: document.getElementById("pesquisaJogos"),
    categoria: document.getElementById("filtroCategoria"),
    ordenacao: document.getElementById("ordenacaoJogos"),

    quantidade: document.getElementById("quantidadeJogos"),
    nenhumJogo: document.getElementById("nenhumJogo"),

    btnAbrirCarrinho: document.getElementById("btnAbrirCarrinho"),
    btnFecharCarrinho: document.getElementById("btnFecharCarrinho"),

    carrinho: document.getElementById("cartDrawer"),
    overlay: document.getElementById("cartOverlay"),

    itensCarrinho: document.getElementById("itensCarrinho"),

    contadorCarrinho: document.getElementById("contadorCarrinho"),
    totalCarrinho: document.getElementById("valorTotalCarrinho"),

    btnFinalizar: document.getElementById("btnFinalizarCompra"),

    modal: document.getElementById("modalCompra"),
    btnFecharModal: document.getElementById("btnFecharModal"),
    btnConfirmarCompra: document.getElementById("btnConfirmarCompra"),

    totalModal: document.getElementById("totalCompraModal")

};


/* =====================================================
   3. CONFIGURAÇÕES
===================================================== */

const CHAVE_CARRINHO = "nexusGamesCarrinho";
const CHAVE_TEMA = "nexusGamesTema";

let carrinho = carregarCarrinho();


/* =====================================================
   4. FUNÇÕES AUXILIARES
===================================================== */

function formatarPreco(valor) {

    if (valor === null || valor === undefined) {
        return "Indisponível";
    }

    if (valor === 0) {
        return "Grátis";
    }

    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}


function encontrarJogo(id) {

    return jogos.find(jogo => jogo.id === Number(id));

}


function escaparHTML(valor) {

    return String(valor).replace(/[&<>"']/g, caractere => ({

        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"

    })[caractere]);

}


function normalizarTexto(texto) {

    return String(texto)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

}


/* =====================================================
   5. NAVEGAÇÃO ENTRE PÁGINAS
===================================================== */

function navegarPara(pagina) {

    const destino = document.getElementById(pagina);

    if (!destino || !destino.classList.contains("page-section")) {
        return;
    }

    elementos.paginas.forEach(secao => {

        const ativa = secao === destino;

        secao.classList.toggle("active", ativa);
        secao.hidden = !ativa;

    });


    elementos.linksNavegacao.forEach(link => {

        link.classList.toggle(
            "active",
            link.dataset.page === pagina
        );

    });


    history.replaceState(null, "", `#${pagina}`);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    fecharCarrinho();

}


// Navegação pelos links do menu.

elementos.linksNavegacao.forEach(link => {

    link.addEventListener("click", evento => {

        evento.preventDefault();

        navegarPara(link.dataset.page);

    });

});


// Navegação por botões, inclusive os criados dinamicamente.

document.addEventListener("click", evento => {

    const botao = evento.target.closest("[data-navigate]");

    if (!botao) return;

    evento.preventDefault();

    navegarPara(botao.dataset.navigate);

});


// Navegação pelos links internos do rodapé.

document.querySelectorAll('footer a[href^="#"]').forEach(link => {

    link.addEventListener("click", evento => {

        evento.preventDefault();

        const pagina = link.getAttribute("href").substring(1);

        navegarPara(pagina);

    });

});


// Abrir a página correspondente ao endereço inicial.

const paginaInicial = location.hash.replace("#", "");

if (
    paginaInicial &&
    document.getElementById(paginaInicial)?.classList.contains("page-section")
) {

    navegarPara(paginaInicial);

} else {

    navegarPara("inicio");

}


/* =====================================================
   6. CRIAÇÃO DOS CARDS DE JOGOS
===================================================== */

function criarCardJogo(jogo) {

    const categorias = jogo.categorias.map(categoria => {

        return `
            <span class="game-category">
                ${escaparHTML(categoria)}
            </span>
        `;

    }).join("");


    let etiqueta = "";

    if (jogo.preco === 0) {

        etiqueta = `<span class="game-badge free">GRÁTIS</span>`;

    } else if (jogo.destaque) {

        etiqueta = `<span class="game-badge featured">DESTAQUE</span>`;

    }


    let botao;

    if (!jogo.steam || jogo.preco === null) {

        botao = `
            <button class="add-cart-button" disabled>
                Não disponível
            </button>
        `;

    } else {

        botao = `
            <button
                class="add-cart-button"
                data-adicionar="${jogo.id}"
                type="button">

                + Adicionar

            </button>
        `;

    }


    return `

        <article class="game-card">

            <div class="game-image-container">

                <img
                    src="${escaparHTML(jogo.imagem)}"
                    alt="${escaparHTML(jogo.nome)}"
                    class="game-image"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://placehold.co/460x215/1c2633/ffffff?text=Imagem+indisponivel';">

                ${etiqueta}

            </div>


            <div class="game-info">

                <h3>${escaparHTML(jogo.nome)}</h3>

                <p class="game-description">
                    ${escaparHTML(jogo.descricao)}
                </p>

                <div class="game-categories">
                    ${categorias}
                </div>


                <div class="game-footer">

                    <span class="game-price ${jogo.preco === 0 ? "free" : ""}">
                        ${formatarPreco(jogo.preco)}
                    </span>

                    ${botao}

                </div>

            </div>

        </article>

    `;

}


// Renderizar catálogo.

function renderizarJogos(lista = jogos) {

    if (!elementos.listaJogos) return;

    elementos.listaJogos.innerHTML = lista
        .map(criarCardJogo)
        .join("");


    if (elementos.quantidade) {

        elementos.quantidade.textContent =
            `${lista.length} jogo(s) encontrado(s)`;

    }


    if (elementos.nenhumJogo) {

        elementos.nenhumJogo.hidden = lista.length !== 0;

    }

}


// Renderizar jogos em destaque.

function renderizarOfertas() {

    if (!elementos.listaOfertas) return;

    const destaques = jogos.filter(jogo => jogo.destaque);

    elementos.listaOfertas.innerHTML = destaques
        .map(criarCardJogo)
        .join("");

}


/* =====================================================
   7. PESQUISA, FILTROS E ORDENAÇÃO
===================================================== */

function filtrarJogos() {

    if (!elementos.pesquisa || !elementos.categoria || !elementos.ordenacao) {
        return;
    }

    const pesquisa = normalizarTexto(elementos.pesquisa.value);

    const categoria = elementos.categoria.value;

    const ordenacao = elementos.ordenacao.value;


    let resultado = jogos.filter(jogo => {

        const nome = normalizarTexto(jogo.nome);

        const descricao = normalizarTexto(jogo.descricao);

        const categorias = normalizarTexto(
            jogo.categorias.join(" ")
        );


        const correspondePesquisa =
            nome.includes(pesquisa) ||
            descricao.includes(pesquisa) ||
            categorias.includes(pesquisa);


        const correspondeCategoria =
            categoria === "todos" ||
            jogo.categorias.some(item => {

                const categoriaNormalizada = normalizarTexto(item)
                    .replace(/\s+/g, "-");

                return categoriaNormalizada === categoria;

            });


        return correspondePesquisa && correspondeCategoria;

    });


    switch (ordenacao) {

        case "menor-preco":

            resultado.sort((a, b) => {

                const precoA = a.preco ?? Infinity;
                const precoB = b.preco ?? Infinity;

                return precoA - precoB;

            });

            break;


        case "maior-preco":

            resultado.sort((a, b) => {

                const precoA = a.preco ?? -Infinity;
                const precoB = b.preco ?? -Infinity;

                return precoB - precoA;

            });

            break;


        case "a-z":

            resultado.sort((a, b) =>
                a.nome.localeCompare(b.nome)
            );

            break;


        case "z-a":

            resultado.sort((a, b) =>
                b.nome.localeCompare(a.nome)
            );

            break;

    }


    renderizarJogos(resultado);

}


if (elementos.pesquisa) {
    elementos.pesquisa.addEventListener("input", filtrarJogos);
}

if (elementos.categoria) {
    elementos.categoria.addEventListener("change", filtrarJogos);
}

if (elementos.ordenacao) {
    elementos.ordenacao.addEventListener("change", filtrarJogos);
}


/* =====================================================
   8. TEMA CLARO E ESCURO
===================================================== */

function aplicarTema(tema) {

    const claro = tema === "claro";

    document.body.classList.toggle("light-theme", claro);

    if (elementos.iconeTema) {
        elementos.iconeTema.textContent = claro ? "☾" : "☀";
    }

    if (elementos.btnTema) {

        elementos.btnTema.setAttribute(
            "aria-label",
            claro ? "Ativar tema escuro" : "Ativar tema claro"
        );

    }

    localStorage.setItem(CHAVE_TEMA, tema);

}


function alternarTema() {

    const temaAtual = document.body.classList.contains("light-theme")
        ? "claro"
        : "escuro";

    aplicarTema(temaAtual === "claro" ? "escuro" : "claro");

}


const temaSalvo = localStorage.getItem(CHAVE_TEMA) || "escuro";

aplicarTema(temaSalvo);


if (elementos.btnTema) {
    elementos.btnTema.addEventListener("click", alternarTema);
}


/* =====================================================
   9. CARREGAR E SALVAR CARRINHO
===================================================== */

function carregarCarrinho() {

    try {

        const dados = JSON.parse(
            localStorage.getItem(CHAVE_CARRINHO)
        );

        if (!Array.isArray(dados)) return [];


        const idsEncontrados = new Set();

        return dados
            .filter(item => {

                const jogo = encontrarJogo(item.id);

                if (!jogo || !jogo.steam || jogo.preco === null) {
                    return false;
                }

                // Impede duplicatas antigas já salvas.
                if (idsEncontrados.has(jogo.id)) {
                    return false;
                }

                idsEncontrados.add(jogo.id);

                return true;

            })
            .map(item => ({

                id: Number(item.id),

                preco: encontrarJogo(item.id).preco,

                quantidade: 1,

                selecionado: item.selecionado !== false

            }));

    } catch (erro) {

        console.error("Erro ao carregar carrinho:", erro);

        return [];

    }

}


function salvarCarrinho() {

    localStorage.setItem(
        CHAVE_CARRINHO,
        JSON.stringify(carrinho)
    );

}


/* =====================================================
   10. ADICIONAR PRODUTO AO CARRINHO
===================================================== */

function adicionarCarrinho(id) {

    const jogo = encontrarJogo(id);

    if (!jogo || !jogo.steam || jogo.preco === null) {
        return;
    }


    const existente = carrinho.find(item => item.id === jogo.id);


    // CORREÇÃO 1:
    // Não permite adicionar o mesmo produto novamente.

    if (existente) {

        mostrarNotificacao(`${jogo.nome} já está no carrinho!`);

        return;

    }


    carrinho.push({

        id: jogo.id,

        preco: jogo.preco,

        quantidade: 1,

        selecionado: true

    });


    salvarCarrinho();

    renderizarCarrinho();

    mostrarNotificacao(`${jogo.nome} adicionado ao carrinho!`);

}


// Evento dos botões de adicionar.

document.addEventListener("click", evento => {

    const botao = evento.target.closest("[data-adicionar]");

    if (!botao) return;

    adicionarCarrinho(botao.dataset.adicionar);

});


/* =====================================================
   11. REMOVER PRODUTO DO CARRINHO
===================================================== */

function removerCarrinho(id) {

    carrinho = carrinho.filter(item => item.id !== Number(id));

    salvarCarrinho();

    renderizarCarrinho();

    mostrarNotificacao("Produto removido do carrinho.");

}


/* =====================================================
   12. CÁLCULOS DO CARRINHO
===================================================== */

// Total de todos os produtos.

function calcularTotal() {

    return carrinho.reduce((total, item) => {

        return total + (item.preco * item.quantidade);

    }, 0);

}


// Total somente dos produtos selecionados.

function calcularTotalSelecionado() {

    return carrinho.reduce((total, item) => {

        if (!item.selecionado) return total;

        return total + (item.preco * item.quantidade);

    }, 0);

}


// Quantidade total de produtos.

function calcularQuantidade() {

    return carrinho.reduce((total, item) => {

        return total + item.quantidade;

    }, 0);

}


// Quantidade de produtos selecionados.

function calcularQuantidadeSelecionada() {

    return carrinho.reduce((total, item) => {

        if (!item.selecionado) return total;

        return total + item.quantidade;

    }, 0);

}


/* =====================================================
   13. RENDERIZAR CARRINHO
===================================================== */

function renderizarCarrinho() {

    if (!elementos.itensCarrinho) return;


    const quantidade = calcularQuantidade();

    const quantidadeSelecionada = calcularQuantidadeSelecionada();

    const totalSelecionado = calcularTotalSelecionado();


    // Atualizar contador do cabeçalho.

    if (elementos.contadorCarrinho) {

        elementos.contadorCarrinho.textContent = quantidade;

    }


    // CORREÇÃO 3:
    // O total mostrado considera apenas os produtos selecionados.

    if (elementos.totalCarrinho) {

        elementos.totalCarrinho.textContent =
            formatarPreco(totalSelecionado);

    }


    // Só permite finalizar se houver algum produto selecionado.

    if (elementos.btnFinalizar) {

        elementos.btnFinalizar.disabled =
            quantidadeSelecionada === 0;

    }


    // Carrinho vazio.

    if (quantidade === 0) {

        elementos.itensCarrinho.innerHTML = `

            <div class="cart-empty" id="carrinhoVazio">

                <span>🛒</span>

                <h3>Seu carrinho está vazio</h3>

                <p>
                    Explore nosso catálogo e adicione seus jogos favoritos.
                </p>

                <button
                    type="button"
                    class="btn-primary"
                    data-navigate="catalogo">

                    Explorar catálogo

                </button>

            </div>

        `;

        return;

    }


    // Criar os itens do carrinho.

    const itensHTML = carrinho.map(item => {

        const jogo = encontrarJogo(item.id);

        if (!jogo) return "";


        return `

            <div class="cart-item">

                <input
                    type="checkbox"
                    class="cart-item-checkbox"
                    data-selecionar="${jogo.id}"
                    ${item.selecionado ? "checked" : ""}
                    aria-label="Selecionar ${escaparHTML(jogo.nome)} para comprar">


                <img
                    src="${escaparHTML(jogo.imagem)}"
                    alt="${escaparHTML(jogo.nome)}">


                <div class="cart-item-info">

                    <h4>${escaparHTML(jogo.nome)}</h4>

                    <p>${formatarPreco(item.preco)}</p>

                    <small>
                        ${item.selecionado
                            ? "Selecionado para compra"
                            : "Não selecionado"}
                    </small>

                </div>


                <button
                    type="button"
                    class="remove-cart-item"
                    data-remover="${jogo.id}"
                    aria-label="Remover ${escaparHTML(jogo.nome)}">

                    ×

                </button>

            </div>

        `;

    }).join("");


    elementos.itensCarrinho.innerHTML = itensHTML;

}


/* =====================================================
   14. SELECIONAR E DESELECIONAR PRODUTOS
===================================================== */

elementos.itensCarrinho?.addEventListener("change", evento => {

    const checkbox = evento.target.closest("[data-selecionar]");

    if (!checkbox) return;


    const id = Number(checkbox.dataset.selecionar);

    const item = carrinho.find(produto => produto.id === id);

    if (!item) return;


    item.selecionado = checkbox.checked;


    salvarCarrinho();

    renderizarCarrinho();

});


// Remover produtos com delegação de eventos.

elementos.itensCarrinho?.addEventListener("click", evento => {

    const botao = evento.target.closest("[data-remover]");

    if (!botao) return;

    removerCarrinho(botao.dataset.remover);

});


/* =====================================================
   15. ABRIR E FECHAR CARRINHO
===================================================== */

function abrirCarrinho() {

    if (!elementos.carrinho || !elementos.overlay) return;

    elementos.carrinho.classList.add("active");

    elementos.overlay.classList.add("active");

    elementos.carrinho.setAttribute("aria-hidden", "false");

    elementos.overlay.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

}


function fecharCarrinho() {

    if (!elementos.carrinho || !elementos.overlay) return;

    elementos.carrinho.classList.remove("active");

    elementos.overlay.classList.remove("active");

    elementos.carrinho.setAttribute("aria-hidden", "true");

    elementos.overlay.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

}


elementos.btnAbrirCarrinho?.addEventListener("click", abrirCarrinho);

elementos.btnFecharCarrinho?.addEventListener("click", fecharCarrinho);

elementos.overlay?.addEventListener("click", fecharCarrinho);


/* =====================================================
   16. FINALIZAÇÃO DA COMPRA
===================================================== */

function abrirModalCompra() {

    const quantidadeSelecionada = calcularQuantidadeSelecionada();


    if (quantidadeSelecionada === 0) {

        mostrarNotificacao("Selecione pelo menos um jogo para comprar!");

        return;

    }


    // CORREÇÃO 3:
    // O modal apresenta somente o total dos produtos selecionados.

    elementos.totalModal.textContent =
        formatarPreco(calcularTotalSelecionado());


    elementos.modal.classList.add("active");

    elementos.modal.setAttribute("aria-hidden", "false");

    fecharCarrinho();

}


function fecharModalCompra() {

    if (!elementos.modal) return;

    elementos.modal.classList.remove("active");

    elementos.modal.setAttribute("aria-hidden", "true");

}


elementos.btnFinalizar?.addEventListener("click", abrirModalCompra);

elementos.btnFecharModal?.addEventListener("click", fecharModalCompra);


elementos.modal?.addEventListener("click", evento => {

    if (evento.target === elementos.modal) {

        fecharModalCompra();

    }

});


// Confirmar compra demonstrativa.

elementos.btnConfirmarCompra?.addEventListener("click", () => {

    const quantidadeSelecionada = calcularQuantidadeSelecionada();

    if (quantidadeSelecionada === 0) return;


    const total = calcularTotalSelecionado();


    // Remove somente os produtos selecionados.
    // Os produtos desmarcados permanecem no carrinho.

    carrinho = carrinho.filter(item => !item.selecionado);


    salvarCarrinho();

    renderizarCarrinho();

    fecharModalCompra();


    mostrarNotificacao(
        `Compra demonstrativa concluída! Total: ${formatarPreco(total)}`
    );

});


/* =====================================================
   17. NOTIFICAÇÕES
===================================================== */

function mostrarNotificacao(mensagem) {

    const anterior = document.querySelector(".nexus-notification");

    if (anterior) anterior.remove();


    const notificacao = document.createElement("div");

    notificacao.className = "nexus-notification";

    notificacao.textContent = mensagem;


    notificacao.style.cssText = `

        position: fixed;
        bottom: 25px;
        right: 25px;
        z-index: 5000;

        max-width: calc(100% - 40px);

        padding: 15px 22px;

        background: #1689e8;
        color: white;

        border-radius: 10px;

        font-size: 13px;
        font-weight: 700;

        box-shadow: 0 8px 25px rgba(0,0,0,0.25);

        animation: fadeIn 0.25s ease;

    `;


    document.body.appendChild(notificacao);


    setTimeout(() => {

        notificacao.remove();

    }, 3000);

}


/* =====================================================
   18. TECLA ESC
===================================================== */

document.addEventListener("keydown", evento => {

    if (evento.key === "Escape") {

        fecharCarrinho();

        fecharModalCompra();

    }

});


/* =====================================================
   19. INICIALIZAÇÃO
===================================================== */

function iniciarNexusGames() {

    renderizarJogos();

    renderizarOfertas();

    renderizarCarrinho();

    console.log("Nexus Games iniciado com sucesso!");

    console.log(`${jogos.length} jogos cadastrados.`);

}


iniciarNexusGames();
