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
  else {
    alert("Preencha todos os campos socilitados");
  }

}

function entrar() {
  let email = document.querySelector("#email").value;
  let senha = document.querySelector("#senha").value;

  let chaveUsuariosCadastrados = "usuarios_cadastrados";
  let chaveUsuarioLogado = "usuario_logado";

  let usuariosCadastrados = JSON.parse(localStorage.getItem(chaveUsuariosCadastrados))
  let usuarioExiste = false;
  console.log(usuariosCadastrados)
  let usuarioLogado;
  usuariosCadastrados.forEach(usuarioCadastrado => {


    if (usuarioCadastrado.senha == senha && usuarioCadastrado.email == email) {
      usuarioLogado = usuarioCadastrado;
      localStorage.setItem(chaveUsuarioLogado, JSON.stringify(usuarioLogado));
      usuarioExiste = true;


    }
  }
  )

  if (usuarioExiste == true) {
    window.location.replace("https://icei-puc-minas-pmv-si.github.io/pmv-si-2022-2-e1-proj-web-t3-orientacao-emprestimos/ofertas.html");
  }

  else {
    alert("E-mail ou senha incorretos");
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
  }
  else if (!regex.exec(senha)) {
    alert("A senha deve conter no mínimo 1 caracteres em maiúsculo, 1 números e 1 caractere especial!");
    return false;
  }
  return true;
} 
function alterarSenha() {
  let chaveUsuarioLogado = "usuario_logado";
  let chaveUsuariosCadastrados = "usuarios_cadastrados";
  let usuariosCadastrados = JSON.parse(localStorage.getItem(chaveUsuariosCadastrados));
  let usuarioLogado = JSON.parse(localStorage.getItem(chaveUsuarioLogado));
  let def = "3598";
  usuarioExiste = false;
  let novaSenha = document.querySelector("#alteraSenha").value;
  let confirmEmail = document.querySelector("#confirmEmail").value;
  let codigo = document.querySelector("#alterarCodigo").value;
  console.log(codigo);
  usuariosCadastrados.forEach(usuarioCadastrado => {


    if (def == codigo && usuarioCadastrado.email == confirmEmail) {
      usuarioCadastrado.senha = novaSenha;
      usuarioExiste = true;
    }
  }
  )

  if (usuarioExiste == true) {
    usuarioLogado.senha = novaSenha;
    alert("Sua senha foi alterada com sucesso!")
    window.location.replace("./login.html");
  }

  else {
    alert("E-mail ou senha incorretos");
  }
  localStorage.setItem(chaveUsuarioLogado, JSON.stringify(usuarioLogado));
  localStorage.setItem(chaveUsuariosCadastrados, JSON.stringify(usuariosCadastrados));
}
