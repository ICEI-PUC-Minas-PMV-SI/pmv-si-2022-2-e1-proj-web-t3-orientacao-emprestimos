const chaveUsuarioLogado = "usuario_logado";
const chaveUsuariosCadastrados = "usuarios_cadastrados";

function cadastrar() {
  let nome = document.querySelector("#nome").value;
  let sobrenome = document.querySelector("#sobrenome").value;
  let cpf = document.querySelector("#cpf").value;
  let email = document.querySelector("#email").value;
  let telefone = document.querySelector("#telefone").value;
  let senha = document.querySelector("#senha").value;
  let data = document.querySelector("#data").value;
  let key = "usuarios_cadastrados";

  if (nome && sobrenome && cpf && email && telefone && senha && data != null) {
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

    localStorage.setItem(key, JSON.stringify(usuariosCadastrados));
    alert("Usuario Cadastrado com Sucesso!!");

    window.location.replace("./login.html");
    //limpa os campos do cadastro
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("data").value = "";
    document.getElementById("senha").value = "";

  } else {
    alert("Preencha todos os campos socilitados");
  }
}

function entrar() {
  let email = document.querySelector("#email").value;
  let senha = document.querySelector("#senha").value;

  let usuariosCadastrados = JSON.parse(localStorage.getItem(chaveUsuariosCadastrados))
  let usuarioExiste = false;
  let usuarioLogado;

  if(usuariosCadastrados==null){
    alert ("Cadastro não encontrado")
  } else{
    usuariosCadastrados.forEach(usuarioCadastrado => {

    if (usuarioCadastrado.senha == senha && usuarioCadastrado.email == email) {
      usuarioLogado = usuarioCadastrado;
      localStorage.setItem(chaveUsuarioLogado, JSON.stringify(usuarioLogado));
      usuarioExiste = true;
    }
    })

    if (usuarioExiste == true) {
      window.location.replace("./ofertas.html");
    } else {
      alert("E-mail ou senha incorretos");
    }
  }
}

//formata a data no input
data.addEventListener("keyup", formatarData);
function formatarData(e) {
  let data = document.querySelector("#data");
  var v = e.target.value.replace(/\D/g, "");

  v = v.replace(/(\d{2})(\d)/, "$1/$2")
  v = v.replace(/(\d{2})(\d)/, "$1/$2")

  e.target.value = v;
}

//Formata o cpf no input
function mascaraCpf(i) {
  var v = i.value;

  if (isNaN(v[v.length - 1])) {
    i.value = v.substring(0, v.length - 1);
    return;
  }

  i.setAttribute("maxlength", "14");
  if (v.length == 3 || v.length == 7) i.value += ".";
  if (v.length == 11) i.value += "-";
}

//Formata o telefone
const mascaraTelefone = (event) => {
  let input = event.target
  input.value = telefone(input.value)
}

const telefone = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{2})(\d)/, "($1) $2")
  value = value.replace(/(\d)(\d{4})$/, "$1-$2")
  return value
}

function validarSenha() {
  //verifica se as senhas são iguais
  if (senha.value != confirmSenha.value) {
    confirmSenha.setCustomValidity("Senhas diferentes!");
    confirmSenha.reportValidity();
    return false;
  } else {
    confirmSenha.setCustomValidity("");
    return true;
  }
}

// valida força da senha
confirmSenha.addEventListener('input', validarSenha);
function senhaV() {
  let senha = document.querySelector("#senha").value;
  var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*.&@#]{8,}$/;

  if (senha.length < 8) {
    alert("A senha deve conter no minímo 8 digitos!");
    return false;
  } else if (!regex.exec(senha)) {
    alert("A senha deve conter no mínimo 1 caracteres em maiúsculo, 1 números e 1 caractere especial!");
    return false;
  }

  return true;
}

function alterarSenha() {
  let usuariosCadastrados = JSON.parse(localStorage.getItem(chaveUsuariosCadastrados));
  let usuarioLogado = JSON.parse(localStorage.getItem(chaveUsuarioLogado));
  let def = "4fc0e75b-0735-44b5";
  usuarioExiste = false;
  let novaSenha = document.querySelector("#alteraSenha").value;
  let confirmEmail = document.querySelector("#confirmEmail").value;
  let codigo = document.querySelector("#alterarCodigo").value;
  
  if(usuariosCadastrados!=null) {
  usuariosCadastrados.forEach(usuarioCadastrado => {

    if (def == codigo && usuarioCadastrado.email == confirmEmail) {
      usuarioCadastrado.senha = novaSenha;
      usuarioExiste = true;
    }
  })
  
  if (usuarioExiste == true) {
    usuarioLogado.senha = novaSenha;
    alert("Sua senha foi alterada com sucesso!")
    window.location.replace("./login.html");
  } else {
    alert("E-mail ou código");
  }

  localStorage.setItem(chaveUsuarioLogado, JSON.stringify(usuarioLogado));
  localStorage.setItem(chaveUsuariosCadastrados, JSON.stringify(usuariosCadastrados));
  } else{
    alert("Não foi possível localizar sua conta");
  }
}

function verificarAlterada() {
  let novaSenha = document.querySelector("#alteraSenha").value;
  var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*.&@#]{8,}$/;

  if (novaSenha.length < 8) {
    alert("A senha deve conter no minímo 8 digitos!");
    return false;
  } else if (!regex.exec(novaSenha)) {
    alert("A senha deve conter no mínimo 1 caracteres em maiúsculo, 1 números e 1 caractere especial!");
    return false;
  }
  return true;
}

function alteraCadastroUsuario() {
  let usuarioLogado = JSON.parse(localStorage.getItem(chaveUsuarioLogado))

  let nome = document.querySelector("#nome").value
  let sobreNome = document.querySelector("#sobre_nome").value
  let email = document.querySelector("#email").value
  let senha = document.querySelector("#senha").value

  if(nome != "") {
    usuarioLogado.nome = nome
  }

  if(sobreNome != "") {
    usuarioLogado.sobreNome = sobreNome
  }

  if(email != "") {
    usuarioLogado.email = email
  }

  if(senha != "") {
    usuarioLogado.senha = senha
  }

  localStorage.setItem(chaveUsuarioLogado, JSON.stringify(usuarioLogado))
}
