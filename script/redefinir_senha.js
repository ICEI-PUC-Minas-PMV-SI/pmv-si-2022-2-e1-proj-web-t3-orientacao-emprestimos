document.getElementById('redefinir_senha').addEventListener('submit', function (event) {
    emailjs.init('Rd1rqJESmjJAXIyUK')

    event.preventDefault()
    usuarioExiste = false;
    const serviceID = 'service_qyk4qm5'
    const templateID = 'template_4eqbg2w'
    let email = document.getElementById("email").value;
    console.log(email);
    emailjs.send(serviceID, templateID, {
        codigo_confirmacao: "4fc0e75b-0735-44b5",
        email: email,
    }).then(() => {
        window.location = "esquecisenha2.html"
    }, (err) => {
        alert("Erro ao enviar o e-mail, tente novamente!")
    })


})


