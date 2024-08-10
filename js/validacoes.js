
function validarCampoVazio() {
    // ? - usado para que o codigo nao lance um erro ao tentar acessar um elemento que nao existe, em vez disso retorna undefined 
    const nome = document.getElementById("nome")?.value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (nome !== undefined) {
        return nome !== "" && email !== "" && senha !== "";
    }

    return email !== "" && senha !== "";
}

function validarNome() {
    const nome = document.getElementById("nome").value.trim().replace(/\s{2,}/g, " ");
    const validacaoNome = /^[a-zA-ZÀ-ÿ]+(?: [a-zA-ZÀ-ÿ]+)+$/;

    if (validacaoNome.test(nome) && nome.length >= 5 && nome.length <= 30) {
        return nome;
    }

    return false;
}

function validarEmail() {
    const email = document.getElementById("email").value.trim();
    const validacaoEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (validacaoEmail.test(email)) {
        return email;
    }

    return false;
}

function validarSenha() {
    const senha = document.getElementById("senha").value.trim();
    const validacaoSenha = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&+_-])[A-Za-z\d@$!%*?&+_-]+$/;

    if (validacaoSenha.test(senha) && senha.length >= 8 && senha.length <= 30) {
        return senha;
    }

    return false;
}

function exibirAlerta(id, visivel) {
    const alerta = document.getElementById(id);
    alerta.style.visibility = visivel ? "visible" : "hidden";
}

function mudarTipoSenha() {
    const senha = document.getElementById('senha');
    const olhoSenha = document.getElementById('olho-senha-icone');
    
    if (senha.type === 'password') {
        senha.type = 'text';
        olhoSenha.src = 'assets/icons/olho-aberto-senha-icone.png';
    } else {
        senha.type = 'password';
        olhoSenha.src = 'assets/icons/olho-fechado-senha-icone.png';
    }
}

// a funcao desse trecho e disparar um evento quando o HTML for completamente carregado
// a function verifica se o elemento olho-senha-icone existe na pagina
// caso exista, e adicionado um evento a ele quando clicado que aciona a function mudarTipoSenha
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('olho-senha-icone')) {
        document.getElementById('olho-senha-icone').addEventListener('click', mudarTipoSenha);
    }
});
