
function verificarEntrarConta() {
    document.getElementById("login").addEventListener("submit", function (evento) {
        evento.preventDefault();

        exibirAlerta("alerta-campos", false);
        exibirAlerta("alerta-email", false);
        exibirAlerta("alerta-senha", false);

        if (!validarCampoVazio()) {
            exibirAlerta("alerta-campos", true);
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
    if (document.getElementById("login")) {
        verificarEntrarConta();
    }
});
