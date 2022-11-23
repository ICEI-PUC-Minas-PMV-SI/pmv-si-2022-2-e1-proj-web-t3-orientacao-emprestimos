document.getElementById('form_analise').addEventListener('submit', function(event) {
    emailjs.init('mc6Vxmtk1LHv_sXwA')
  
    const btn = document.getElementById('submit')
  
    event.preventDefault()
  
    btn.value = 'Enviando...'
  
    const serviceID = 'default_service'
    const templateID = 'analise_qcjqgub'
  
    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar'
      alert('Solicitação enviada com sucesso!')
    }, (err) => {
      btn.value = 'Enviar'
      alert(JSON.stringify(err))
    })
  })
  