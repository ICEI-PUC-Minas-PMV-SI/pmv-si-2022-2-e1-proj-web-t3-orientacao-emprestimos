// Dados do perfil

function buscaUsuarioLogado() {
    let chaveUsuarioLogado = "usuario_logado"
    let usuarioPerfil = JSON.parse(localStorage.getItem(chaveUsuarioLogado))

    document.getElementById("pnome").innerHTML = usuarioPerfil.nome + ` ${usuarioPerfil.sobrenome}`
    document.getElementById("pemail").innerHTML = usuarioPerfil.email
    document.getElementById("pcpf").innerHTML = usuarioPerfil.cpf
    document.getElementById("pdata").innerHTML = usuarioPerfil.data
    document.getElementById("ptel").innerHTML = usuarioPerfil.telefone
}


// Sobre mim

var sobre = document.getElementById('descricao');
var editarButton = document.getElementById('editar');
var salvarButton = document.getElementById('salvar');

editarButton.addEventListener('click', function() {
  sobre.disabled = false;
  sobre.style.border = '1px solid #51B68E';
  sobre.style.boxShadow = '2px 2px 2px rgba(0,0,0,0.2)';
});

salvarButton.addEventListener('click', function() {
  sobre.disabled = true;
  sobre.style.border = 'none';
  sobre.style.boxShadow = 'none';
});