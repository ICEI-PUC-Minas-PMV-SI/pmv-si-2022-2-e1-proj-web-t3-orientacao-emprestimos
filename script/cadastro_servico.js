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
//função de cadastro js com json e local storage
function cadastrar() {
    let nome = document.querySelector("#nome").value;
    let sobrenome = document.querySelector("#sobrenome").value;
    let cpf = document.querySelector("#cpf").value;
    let email = document.querySelector("#email").value;
    let telefone = document.querySelector("#telefone").value;
    let senha = document.querySelector("#senha").value;
    let data = document.querySelector("#data").value;
    let key = "usuarios_cadastrados";
  if(nome&&sobrenome&&cpf&&email&&telefone&&senha&&data!=null){
    let usuariosCadastrados = JSON.parse(localStorage.getItem(key))
  
    console.log("antes do push")
    console.log(usuariosCadastrados)
  
    if (usuariosCadastrados == null) {
      usuariosCadastrados = new Array()
    }
  
    usuariosCadastrados.push(
      {
        nome: `${nome}`,
        sobrenome: `${sobrenome}`,
        cpf: `${cpf}`,
        email: `${email}`,
        telefone: `${telefone}`,
        senha: `${senha}`,
        data: `${data}`,
      }
    )
    console.log("depois do push")
    console.log(usuariosCadastrados)
    localStorage.setItem(key, JSON.stringify(usuariosCadastrados));
    alert("Usuario Cadastrado com Sucesso!!");
    window.location.replace("https://icei-puc-minas-pmv-si.github.io/pmv-si-2022-2-e1-proj-web-t3-orientacao-emprestimos/login.html");
    //limpa os campos do cadastro
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("data").value = "";
    document.getElementById("senha").value = "";
  }
  else{
    alert("Preencha todos os campos socilitados");
  }

  }

  function entrar() {
    let email = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value;
  
    let chaveUsuariosCadastrados= "usuarios_cadastrados";
    let chaveUsuarioLogado = "usuario_logado";
  
    let usuariosCadastrados = JSON.parse(localStorage.getItem(chaveUsuariosCadastrados))
    let usuarioExiste=false;
    console.log(usuariosCadastrados)
    let usuarioLogado;
    usuariosCadastrados.forEach(usuarioCadastrado => {
  
  
      if (usuarioCadastrado.senha == senha && usuarioCadastrado.email == email) {
        usuarioLogado=usuarioCadastrado;
          localStorage.setItem(chaveUsuarioLogado, JSON.stringify(usuarioLogado));    
        usuarioExiste=true;
  
  
      }
    }
    )      
  
    if (usuarioExiste==true) {
        window.location.replace("https://icei-puc-minas-pmv-si.github.io/pmv-si-2022-2-e1-proj-web-t3-orientacao-emprestimos/ofertas.html");
    }
  
    else{
      alert("E-mail ou senha incorretos");
    }
  }
  
