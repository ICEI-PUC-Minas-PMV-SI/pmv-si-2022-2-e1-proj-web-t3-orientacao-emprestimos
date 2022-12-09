document.getElementById('form_analise').addEventListener('submit', function(event) {
    emailjs.init('mc6Vxmtk1LHv_sXwA')
    
    event.preventDefault()
  
    const serviceID = 'default_service'
    const templateID = 'analise_qcjqgub'
  
    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      carregaSolicitacoesAnaliseCadastradas()
      salvaSolicitacaoAnalise()
      carregaPaginaSolicitacaoAnaliseEnviadaSucesso()
    }, (err) => {
      carregaPaginaSolicitacaoAnaliseEnviadaErro()
    })
  })
  
function carregaPaginaSolicitacaoAnaliseEnviadaSucesso() {
  window.location = "solicitacao_analise_sucesso.html"
}

function carregaPaginaSolicitacaoAnaliseEnviadaErro() {
  window.location = "solicitacao_analise_enviada_erro.html"
}

function carregaSolicitacoesAnaliseCadastradas() {
  let solicitacoesCadastradas = [
    {
      instituicaoFinanceira: "Banco São Paulo 123",
      numeroParcelas: 12,
      valorParcela: 100,
      valorContratado: 1000,
      status: "CONCLUIDO",
      analise: "Essa oferta de crédito consignado é recomendada, porque possui taxa de juros e prazo vantajosos."
    },
    {
      instituicaoFinanceira: "BBanco Rio de Janeiro 049",
      numeroParcelas: 24,
      valorParcela: 100,
      valorContratado: 1800,
      status: "CONCLUIDO",
      analise: "Essa oferta de crédito consignado não é recomendada, a taxa de juros está 10% acima do praticado nesse momento."
    },
  ]

  localStorage.setItem("solicitacoes_analise", JSON.stringify(solicitacoesCadastradas))
}

function salvaSolicitacaoAnalise() {
  let select = document.getElementById("instituicao_financeira");

  let solicitacaoAnalise = {
    instituicaoFinanceira: select.options[select.selectedIndex].value,
    numeroParcelas: document.getElementById("numero_parcelas").value,
    valorParcela: document.getElementById("valor_parcela").value,
    valorContratado: document.getElementById("valor_contratado").value,
    status: "PENDENTE",
    analise: ""
  }

  let solicitacoesAnaliseCadastradas = JSON.parse(localStorage.getItem("solicitacoes_analise"))

  solicitacoesAnaliseCadastradas.push(solicitacaoAnalise)

  localStorage.setItem("solicitacoes_analise", JSON.stringify(solicitacoesAnaliseCadastradas))
}