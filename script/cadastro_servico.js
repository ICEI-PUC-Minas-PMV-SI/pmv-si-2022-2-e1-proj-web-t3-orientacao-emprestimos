let chaveUsuarioAutenticado = "usuario_autenticado"
let chaveUsuariosCadastrados = "usuarios_cadastrados"

function carregaUsuarioMock() {
    let usuarioAutenticado = {
        nome: "Rafael",
        sobreNome: "martins",
        email: "rafael@teste.com.br",
        cpf: "123.456.789-00",
        senha: "1234567"
    }

    localStorage.setItem(chaveUsuarioAutenticado, JSON.stringify(usuarioAutenticado))

    let usuariosCadastrados = new Array(usuarioAutenticado)

    localStorage.setItem(chaveUsuariosCadastrados, JSON.stringify(usuariosCadastrados))
}

function alteraCadastroUsuario() {
    let usuarioAutenticado = JSON.parse(localStorage.getItem(chaveUsuarioAutenticado))
    let usuariosCadastrados = JSON.parse(localStorage.getItem(chaveUsuariosCadastrados))

    let nome = document.querySelector("#nome").value
    let sobreNome = document.querySelector("#sobre_nome").value
    let email = document.querySelector("#email").value
    let senha = document.querySelector("#senha").value

    if(nome != "") {
        usuarioAutenticado.nome = nome
    }

    if(sobreNome != "") {
        usuarioAutenticado.sobreNome = sobreNome
    }

    if(email != "") {
        usuarioAutenticado.email = email
    }

    if(senha != "") {
        usuarioAutenticado.senha = senha
    }

    localStorage.setItem(chaveUsuarioAutenticado, JSON.stringify(usuarioAutenticado))
}
