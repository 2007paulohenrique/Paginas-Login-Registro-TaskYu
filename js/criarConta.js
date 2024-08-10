
function verificarCriarConta() {
    document.getElementById("criar-conta").addEventListener("submit", function (evento) {
        evento.preventDefault();

        exibirAlerta("alerta-campos", false);
        exibirAlerta("alerta-nome", false);
        exibirAlerta("alerta-email", false);
        exibirAlerta("alerta-senha", false);

        if (!validarCampoVazio()) {
            exibirAlerta("alerta-campos", true);
            return;
        }

        const nome = validarNome();
        if (!nome) {
            exibirAlerta("alerta-nome", true);
            return;
        }

        const email = validarEmail();
        if (!email) {
            exibirAlerta("alerta-email", true);
            return;
        }

        const senha = validarSenha();
        if (!senha) {
            exibirAlerta("alerta-senha", true);
            return;
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById("criar-conta")) {
        verificarCriarConta();
    }
});
