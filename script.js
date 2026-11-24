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
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQ52g299LFIK3YcQyFC0UacojXHUWVMQMB_-Ua8bV4w&s=10",
        destaque: true,
        steam: true
    },
    {
        id: 2,
        nome: "Red Dead Redemption 2",
        preco: 299.90,
        categorias: ["Ação", "Aventura", "Mundo Aberto"],
        descricao: "Uma aventura épica no Velho Oeste americano.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnwawClO1adHCZjeWABPWUsZ5CCvwRPoR32X8Rzwkbg&s=10",
        destaque: true,
        steam: true
    },
    {
        id: 3,
        nome: "Cyberpunk 2077",
        preco: 199.90,
        categorias: ["RPG", "Ação", "Mundo Aberto"],
        descricao: "Explore Night City em uma aventura futurista.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRekeDpwU7xCiO947psRwjCU3Xy0b6WLluSDmkAeOiU5Q&s=10",
        destaque: true,
        steam: true
    },
    {
        id: 4,
        nome: "Elden Ring",
        preco: 229.90,
        categorias: ["RPG", "Ação", "Aventura"],
        descricao: "Explore um vasto mundo de fantasia e desafios.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCQeHYIgFpxYo8efAk3z9dcwkSKEtEoXxbIwQNICRUmQ&s=10",
        destaque: true,
        steam: true
    },
    {
        id: 5,
        nome: "Hogwarts Legacy",
        preco: 249.99,
        categorias: ["RPG", "Aventura"],
        descricao: "Descubra o mundo mágico de Hogwarts.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0UMCHRV9vfrkQWVmUmg0KoIcVVURzAb1YZ-zyAu_4w&s=10",
        destaque: true,
        steam: true
    },
    {
        id: 6,
        nome: "Forza Horizon 5",
        preco: 249.00,
        categorias: ["Corrida", "Mundo Aberto"],
        descricao: "Corra pelas paisagens incríveis do México.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWWRfuC3LlvuSMRtWiRD9SpmftpcB2T6ok2pnsElk9Q&s=10",
        destaque: true,
        steam: true
    },
    {
        id: 7,
        nome: "Resident Evil 4 VR",
        preco: 169.00,
        categorias: ["Terror", "Ação", "Aventura"],
        descricao: "Enfrente criaturas assustadoras nesta experiência de sobrevivência.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0uO46i7A31VkWT7ulJZiktl-OV_jHuDS1Uz8REPX2hw&s",
        destaque: false,
        steam: true
    },
    {
        id: 8,
        nome: "God of War",
        preco: 199.90,
        categorias: ["Ação", "Aventura"],
        descricao: "Acompanhe Kratos e Atreus em uma jornada épica.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYGZvs2rnqJGNEgYlldc-YMSLTwsPwplDbf5-QHQt1pQ&s=10",
        destaque: true,
        steam: true
    },
    {
        id: 9,
        nome: "Marvel's Spider-Man Remastered",
        preco: 249.90,
        categorias: ["Ação", "Aventura", "Mundo Aberto"],
        descricao: "Proteja Nova York como o Homem-Aranha.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMB1QpOvAC2swWgVdmE903kjgRbp_XlQkyryzGT4tkg&s=10",
        destaque: true,
        steam: true
    },
    {
        id: 10,
        nome: "The Witcher 3",
        preco: 129.99,
        categorias: ["RPG", "Aventura", "Mundo Aberto"],
        descricao: "Viva uma grande aventura na pele de Geralt de Rívia.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLG-y4iqS-7x6ihJIzIxs_WgGi1Cv3wQQ9ZewvQzKKg&s=10",
        destaque: false,
        steam: true
    },
    {
        id: 11,
        nome: "EA SPORTS FC 26",
        preco: 299.90,
        categorias: ["Esportes", "Simulação"],
        descricao: "Entre em campo e dispute grandes partidas de futebol.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNU3OS-fMf5LrQHNH4HziOklg8PzoT92Xj-bXz9vCGpg&s=10",
        destaque: true,
        steam: true
    },
    {
        id: 12,
        nome: "Baldur's Gate 3",
        preco: 199.99,
        categorias: ["RPG", "Estratégia", "Aventura"],
        descricao: "Uma aventura de fantasia com escolhas e consequências.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCMo5cWkMZhlPHRTRt_eHiELlXnp5I-PEudjqn8utNQQ&s=10",
        destaque: true,
        steam: true
    },
    {
        id: 13,
        nome: "Minecraft",
        preco: null,
        categorias: ["Aventura", "Simulação"],
        descricao: "Construa, explore e sobreviva em mundos de blocos.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbQDRdHxT7QJqIDlNU9RmcuyyW7TIE5AymCgTE6szgRA&s=10",
        destaque: false,
        steam: false
    },
    {
        id: 14,
        nome: "Hollow Knight: Silksong",
        preco: 59.99,
        categorias: ["Ação", "Aventura"],
        descricao: "Explore um reino desconhecido em uma aventura desafiadora.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTureDEsNsBZ7v3Wjf1vPzbjFA4JkO9RUqHrWss2xs95A&s=10",
        destaque: true,
        steam: true
    },
    {
        id: 15,
        nome: "Terraria",
        preco: 19.99,
        categorias: ["Aventura", "Mundo Aberto"],
        descricao: "Explore, construa e enfrente perigos em um mundo 2D.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQursKRrHWDTLKU-7QOfqRHA-wz2jrbzvAjQC1D0fIA&s=10",
        destaque: false,
        steam: true
    },
    {
        id: 16,
        nome: "Stardew Valley",
        preco: 24.99,
        categorias: ["Simulação", "RPG"],
        descricao: "Construa sua fazenda e viva uma nova vida no campo.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dsOGnbVSFNaBJIGKLwi7l-0RmQ7nf3no5eCRD1H4mA&s=10",
        destaque: false,
        steam: true
    },
    {
        id: 17,
        nome: "Counter-Strike 2",
        preco: 0,
        categorias: ["Ação", "Tiro"],
        descricao: "Enfrente adversários em partidas competitivas.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQdrEzMylpwRYsyYoX4pgajqE-MseF04gNGduv81drMQ&s=10",
        destaque: true,
        steam: true
    },
    {
        id: 18,
        nome: "VALORANT",
        preco: null,
        categorias: ["Ação", "Tiro"],
        descricao: "Dispute partidas táticas com agentes e habilidades.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZCk6ieA2qdgwo_rS3tPudddzkQUO_QGNglhw1bW2xQ&s=10",
        destaque: false,
        steam: false
    },
    {
        id: 19,
        nome: "PUBG: Battlegrounds",
        preco: 0,
        categorias: ["Ação", "Tiro"],
        descricao: "Sobreviva e seja o último jogador em pé.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-t6FAP59nbMHpeKaNk9wEIa_vfrfaQ-4QJ5lCeUYmQ&s=10",
        destaque: true,
        steam: true
    },
    {
        id: 20,
        nome: "Rocket League",
        preco: null,
        categorias: ["Esportes", "Corrida"],
        descricao: "Misture futebol e carros em partidas eletrizantes.",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeljaeef2lOqOef0nUs2VjJh7O-KmFtjiay4m6udC8g&s=10",
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
        <article
            class="game-card"
            data-detalhes="${jogo.id}"
            tabindex="0"
            role="button"
            aria-label="Ver detalhes de ${escaparHTML(jogo.nome)}">

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
   6.1. DETALHES DO JOGO
   O modal e seus estilos são criados pelo próprio JS.
   Não é necessário alterar o HTML ou o CSS.
===================================================== */

let jogoDetalheAberto = null;

function prepararModalDetalhes() {
    if (document.getElementById("nexusDetalhesStyle")) return;

    const estilo = document.createElement("style");

    estilo.id = "nexusDetalhesStyle";

    estilo.textContent = `
        .nexus-details-overlay {
            position: fixed;
            inset: 0;
            z-index: 4000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            background: rgba(0, 0, 0, .78);
            opacity: 0;
            visibility: hidden;
            transition: opacity .25s ease, visibility .25s ease;
        }

        .nexus-details-overlay.active {
            opacity: 1;
            visibility: visible;
        }

        .nexus-details-modal {
            position: relative;
            width: min(760px, 100%);
            max-height: min(90vh, 850px);
            overflow-y: auto;
            background: var(--background-secondary, #171e28);
            color: var(--text-primary, #f2f5f9);
            border: 1px solid var(--border, rgba(255,255,255,.08));
            border-radius: 18px;
            box-shadow: 0 24px 80px rgba(0,0,0,.45);
            transform: translateY(16px) scale(.98);
            transition: transform .25s ease;
        }

        .nexus-details-overlay.active .nexus-details-modal {
            transform: translateY(0) scale(1);
        }

        .nexus-details-close {
            position: absolute;
            z-index: 2;
            top: 14px;
            right: 14px;
            width: 40px;
            height: 40px;
            border: 1px solid rgba(255,255,255,.18);
            border-radius: 10px;
            background: rgba(0,0,0,.65);
            color: #fff;
            font-size: 21px;
            cursor: pointer;
        }

        .nexus-details-image {
            display: block;
            width: 100%;
            max-height: 340px;
            aspect-ratio: 16 / 7;
            object-fit: cover;
            background: #1c2633;
        }

        .nexus-details-body {
            padding: 28px;
        }

        .nexus-details-kicker {
            color: var(--primary-light, #42a5ff);
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 2px;
            margin-bottom: 10px;
        }

        .nexus-details-title {
            margin: 0 45px 14px 0;
            font-size: clamp(23px, 4vw, 32px);
            line-height: 1.2;
        }

        .nexus-details-description {
            color: var(--text-secondary, #a5b0bf);
            font-size: 14px;
            line-height: 1.8;
            margin: 0 0 22px;
            white-space: pre-line;
        }

        .nexus-details-categories {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 22px;
        }

        .nexus-details-category {
            padding: 7px 10px;
            border-radius: 6px;
            background: var(--background-hover, #253344);
            color: var(--text-secondary, #a5b0bf);
            font-size: 11px;
        }

        .nexus-details-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            padding-top: 18px;
            border-top: 1px solid var(--border, rgba(255,255,255,.08));
        }

        .nexus-details-price {
            font-size: 22px;
            font-weight: 800;
        }

        .nexus-details-price.free {
            color: var(--success, #31c48d);
        }

        .nexus-details-status {
            color: var(--text-muted, #778596);
            font-size: 11px;
            margin-top: 5px;
        }

        .nexus-details-add {
            min-height: 42px;
            padding: 0 18px;
            border: 0;
            border-radius: 8px;
            background: var(--primary, #1689e8);
            color: #fff;
            font-weight: 700;
            cursor: pointer;
        }

        .nexus-details-add:hover {
            background: var(--primary-hover, #0874cf);
        }

        .nexus-details-add:disabled {
            opacity: .5;
            cursor: not-allowed;
        }

        .game-card[data-detalhes] {
            cursor: pointer;
        }

        .game-card[data-detalhes] button,
        .game-card[data-detalhes] input {
            cursor: pointer;
        }

        @media (max-width: 560px) {
            .nexus-details-overlay {
                padding: 10px;
            }

            .nexus-details-body {
                padding: 20px;
            }

            .nexus-details-image {
                aspect-ratio: 16 / 9;
            }

            .nexus-details-footer {
                align-items: stretch;
                flex-direction: column;
            }

            .nexus-details-add {
                width: 100%;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .nexus-details-overlay,
            .nexus-details-modal {
                transition: none;
            }
        }
    `;

    document.head.appendChild(estilo);

    const overlay = document.createElement("div");

    overlay.id = "nexusDetalhesOverlay";
    overlay.className = "nexus-details-overlay";
    overlay.setAttribute("aria-hidden", "true");

    overlay.innerHTML = `
        <section
            class="nexus-details-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="nexusDetalhesTitulo">

            <button
                type="button"
                class="nexus-details-close"
                id="nexusDetalhesFechar"
                aria-label="Fechar detalhes">
                ×
            </button>

            <div id="nexusDetalhesConteudo"></div>
        </section>
    `;

    document.body.appendChild(overlay);

    overlay.addEventListener("click", evento => {
        if (evento.target === overlay) {
            fecharDetalhesJogo();
        }
    });

    document.getElementById("nexusDetalhesFechar")
        .addEventListener("click", fecharDetalhesJogo);
}

function abrirDetalhesJogo(id) {
    const jogo = encontrarJogo(id);

    if (!jogo) return;

    prepararModalDetalhes();

    jogoDetalheAberto = jogo.id;

    const overlay = document.getElementById("nexusDetalhesOverlay");
    const conteudo = document.getElementById("nexusDetalhesConteudo");

    const descricao = jogo.descricaoDetalhada || jogo.descricao ||
        "Descrição não disponível.";

    const categorias = (jogo.categorias || []).map(categoria => `
        <span class="nexus-details-category">
            ${escaparHTML(categoria)}
        </span>
    `).join("");

    const disponivel = Boolean(jogo.steam) && jogo.preco !== null;

    const precoClasse = jogo.preco === 0 ? "free" : "";

    conteudo.innerHTML = `
        <img
            class="nexus-details-image"
            src="${escaparHTML(jogo.imagem)}"
            alt="${escaparHTML(jogo.nome)}"
            onerror="this.onerror=null;this.src='https://placehold.co/760x340/1c2633/ffffff?text=Imagem+indisponivel';">

        <div class="nexus-details-body">

            <div class="nexus-details-kicker">
                NEXUS GAMES · DETALHES DO JOGO
            </div>

            <h2
                class="nexus-details-title"
                id="nexusDetalhesTitulo">
                ${escaparHTML(jogo.nome)}
            </h2>

            <p class="nexus-details-description">
                ${escaparHTML(descricao)}
            </p>

            <div class="nexus-details-categories">
                ${categorias}
            </div>

            <div class="nexus-details-footer">

                <div>
                    <div class="nexus-details-price ${precoClasse}">
                        ${formatarPreco(jogo.preco)}
                    </div>

                    <div class="nexus-details-status">
                        ${disponivel
                            ? "Disponível para adicionar ao carrinho"
                            : "Não disponível para compra nesta demonstração"}
                    </div>
                </div>

                <button
                    type="button"
                    class="nexus-details-add"
                    id="nexusDetalhesAdicionar"
                    ${disponivel ? "" : "disabled"}>

                    ${disponivel
                        ? "+ Adicionar ao carrinho"
                        : "Não disponível"}

                </button>

            </div>
        </div>
    `;

    const botaoAdicionar = document.getElementById(
        "nexusDetalhesAdicionar"
    );

    if (botaoAdicionar && disponivel) {
        botaoAdicionar.addEventListener("click", () => {
            adicionarCarrinho(jogo.id);
        });
    }

    overlay.classList.add("active");
    overlay.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    document.getElementById("nexusDetalhesFechar").focus();
}

function fecharDetalhesJogo() {
    const overlay = document.getElementById("nexusDetalhesOverlay");

    if (!overlay) return;

    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");

    jogoDetalheAberto = null;

    const carrinhoAberto =
        elementos.carrinho?.classList.contains("active");

    const compraAberta =
        elementos.modal?.classList.contains("active");

    if (!carrinhoAberto && !compraAberta) {
        document.body.style.overflow = "";
    }
}

// Clique em qualquer parte do card abre os detalhes.
// Cliques nos botões internos continuam executando sua função.
document.addEventListener("click", evento => {
    if (evento.target.closest("button, a, input, label")) {
        return;
    }

    const card = evento.target.closest(".game-card[data-detalhes]");

    if (!card) return;

    abrirDetalhesJogo(card.dataset.detalhes);
});

// Permite abrir o card pelo teclado usando Enter ou Espaço.
document.addEventListener("keydown", evento => {
    if (evento.key === "Escape") {
        fecharDetalhesJogo();
        return;
    }

    if (evento.key !== "Enter" && evento.key !== " ") return;

    const card = evento.target.closest?.(".game-card[data-detalhes]");

    if (!card || evento.target.closest("button, a, input")) {
        return;
    }

    evento.preventDefault();

    abrirDetalhesJogo(card.dataset.detalhes);
});

/* =====================================================
   7. PESQUISA, FILTROS E ORDENAÇÃO
===================================================== */

function filtrarJogos() {
    if (
        !elementos.pesquisa ||
        !elementos.categoria ||
        !elementos.ordenacao
    ) {
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

    const existente = carrinho.find(
        item => item.id === jogo.id
    );

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
    carrinho = carrinho.filter(
        item => item.id !== Number(id)
    );

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

    const item = carrinho.find(
        produto => produto.id === id
    );

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

elementos.btnAbrirCarrinho?.addEventListener(
    "click",
    abrirCarrinho
);

elementos.btnFecharCarrinho?.addEventListener(
    "click",
    fecharCarrinho
);

elementos.overlay?.addEventListener(
    "click",
    fecharCarrinho
);

/* =====================================================
   16. FINALIZAÇÃO DA COMPRA
===================================================== */

function abrirModalCompra() {
    const quantidadeSelecionada = calcularQuantidadeSelecionada();

    if (quantidadeSelecionada === 0) {
        mostrarNotificacao(
            "Selecione pelo menos um jogo para comprar!"
        );

        return;
    }

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

elementos.btnFinalizar?.addEventListener(
    "click",
    abrirModalCompra
);

elementos.btnFecharModal?.addEventListener(
    "click",
    fecharModalCompra
);

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
        fecharDetalhesJogo();
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