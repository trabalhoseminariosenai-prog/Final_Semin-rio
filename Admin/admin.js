
/* =====================================================
   NEXUS GAMES - ADMIN.JS
   ===================================================== */


/* =====================================================
   1. CREDENCIAIS ADMINISTRATIVAS
   ===================================================== */

const USUARIO_ADMIN = "nexusteste";
const SENHA_ADMIN = "22102009";


/* =====================================================
   2. ELEMENTOS DO HTML
   ===================================================== */

const telaLogin =
    document.getElementById("telaLogin");

const painelAdmin =
    document.getElementById("painelAdmin");

const formLogin =
    document.getElementById("formLogin");

const campoUsuario =
    document.getElementById("usuario");

const campoSenha =
    document.getElementById("senha");

const mensagemErro =
    document.getElementById("mensagemErro");

const btnSair =
    document.getElementById("btnSair");


/* =====================================================
   3. LOGIN ADMINISTRATIVO
   ===================================================== */

formLogin.addEventListener("submit", function(event) {

    event.preventDefault();

    const usuario = campoUsuario.value.trim();

    const senha = campoSenha.value;

    if (
        usuario === USUARIO_ADMIN &&
        senha === SENHA_ADMIN
    ) {

        mensagemErro.textContent = "";

        telaLogin.hidden = true;

        painelAdmin.hidden = false;

        sessionStorage.setItem(
            "nexusAdminLogado",
            "true"
        );

    } else {

        mensagemErro.textContent =
            "Usuário ou senha incorretos.";

        campoSenha.value = "";

        campoSenha.focus();

    }

});


/* =====================================================
   4. SAIR DA ADMINISTRAÇÃO
   ===================================================== */

btnSair.addEventListener("click", function() {

    sessionStorage.removeItem(
        "nexusAdminLogado"
    );

    painelAdmin.hidden = true;

    telaLogin.hidden = false;

    formLogin.reset();

    campoUsuario.focus();

});


/* =====================================================
   5. VERIFICAR SESSÃO
   ===================================================== */

function verificarLogin() {

    const logado =
        sessionStorage.getItem("nexusAdminLogado");

    if (logado === "true") {

        telaLogin.hidden = true;

        painelAdmin.hidden = false;

    } else {

        telaLogin.hidden = false;

        painelAdmin.hidden = true;

    }

}

verificarLogin();


/* =====================================================
   6. SISTEMA DE TEMA
   ===================================================== */

function aplicarTema(tema) {

    document.documentElement.setAttribute(
        "data-theme",
        tema
    );

    localStorage.setItem(
        "nexusAdminTema",
        tema
    );

}


/* =====================================================
   7. CARREGAR TEMA SALVO
   ===================================================== */

function carregarTema() {

    const temaSalvo =
        localStorage.getItem("nexusAdminTema");

    aplicarTema(
        temaSalvo || "escuro"
    );

}

carregarTema();


/* =====================================================
   8. ALTERNAR TEMA
   ===================================================== */

function alternarTema() {

    const temaAtual =
        document.documentElement.getAttribute(
            "data-theme"
        );

    const novoTema =
        temaAtual === "escuro"
            ? "claro"
            : "escuro";

    aplicarTema(novoTema);

}


/* =====================================================
   FIM DO ADMIN.JS
   ===================================================== */
