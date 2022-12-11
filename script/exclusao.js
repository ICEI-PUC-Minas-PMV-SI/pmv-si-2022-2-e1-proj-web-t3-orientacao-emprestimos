let usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios_cadastrados'))
let usuarioLog = JSON.parse(localStorage.getItem('usuario_logado'))
cpf = usuarioLog.cpf
email = usuarioLog.email

function excluiUsuario() {
    excluirbtn = window.document.getElementById("btn-solid-lg")

    usuariosCadastrados.forEach(usuarioCadastrado => {
        if (usuarioCadastrado.cpf == cpf && usuarioCadastrado.email == email) {
            index = usuariosCadastrados.indexOf(usuarioCadastrado)
            chaveUsuarioCadastrado = usuarioCadastrado
            let novosUsuariosCadastrados = usuariosCadastrados.slice(0, index).concat(usuariosCadastrados.slice(index + 1))
            localStorage.setItem('usuarios_cadastrados', JSON.stringify(novosUsuariosCadastrados))
            localStorage.removeItem('usuario_logado')
            window.alert('Sua conta foi excluída com sucesso')
            window.location.href = "index.html";
        };
    });
}
