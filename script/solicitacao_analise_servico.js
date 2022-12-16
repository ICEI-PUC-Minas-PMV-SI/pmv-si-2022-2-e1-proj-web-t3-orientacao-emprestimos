const chaveSolicitacoesAnaliseCadastradas = "solicitacoes_analise_cadastradas"
const chaveSolicitacoesAnaliseEnviadas = "solicitacoes_analise_enviadas"
const chaveUsuarioLogado = "usuario_logado"

function carregarSolicitacoesAnalise() {
  salvaSolicitacoesAnaliseCadastradas()

  let solicitacoesAnaliseCadastradas = JSON.parse(localStorage.getItem(chaveSolicitacoesAnaliseCadastradas))
  let solicitacoesAnaliseEnviadas = JSON.parse(localStorage.getItem(chaveSolicitacoesAnaliseEnviadas))

  let solicitacoesAnalise = solicitacoesAnaliseCadastradas.concat(solicitacoesAnaliseEnviadas)

  let solicitacoesDiv = document.getElementById("solicitacoes_analise")
  let solicitacoesLista = document.createElement("ul")

  solicitacoesAnalise.forEach(solicitacaoAnalise => {
    if(solicitacaoAnalise != null) {
      let item = document.createElement("li")
      let itemComCamposEValores = criaCamposValoresHtml(item, solicitacaoAnalise)
      
      solicitacoesLista.appendChild(itemComCamposEValores)
    }
  });

  solicitacoesDiv.appendChild(solicitacoesLista)
}

function salvaSolicitacoesAnaliseCadastradas() {
  let solicitacoesCadastradas = [
    {
      instituicaoFinanceira: "Banco São Paulo 123",
      numeroParcelas: 12,
      valorParcela: 100,
      valorContratado: 1000,
      status: "CONCLUIDO",
      analise: "Essa oferta de crédito consignado é recomendada, porque possui taxa de juros e prazo vantajosos.",
      data: "15/11/2022"
    },
    {
      instituicaoFinanceira: "BBanco Rio de Janeiro 049",
      numeroParcelas: 24,
      valorParcela: 100,
      valorContratado: 1800,
      status: "CONCLUIDO",
      analise: "Essa oferta de crédito consignado não é recomendada, a taxa de juros está 10% acima do praticado nesse momento.",
      data: "20/11/2022"
    },
  ]

  localStorage.setItem(chaveSolicitacoesAnaliseCadastradas, JSON.stringify(solicitacoesCadastradas))
}

function criaCamposValoresHtml(item, solicitacaoAnalise) {
  criaCampoValorStatus(item, solicitacaoAnalise)
  criaCampoValorInstituicaoFinanceira(item, solicitacaoAnalise)
  criaCampoValorDataSolicitacao(item, solicitacaoAnalise)
  criaCampoValorValorParcela(item, solicitacaoAnalise)
  criaCampoValorValorContratado(item, solicitacaoAnalise)
  criaCampoValorNumeroParcelas(item, solicitacaoAnalise)
  criaCampoValorAnalise(item, solicitacaoAnalise)
  criaQuebraEspacoItem(item)

  return item 
}

function criaCampoValorStatus(item, solicitacaoAnalise) {
  let campoSubTitulo = document.createElement("h2")
  let valorLabel = document.createElement("label")

  campoSubTitulo.innerHTML = "Status"
  valorLabel.innerHTML = solicitacaoAnalise.status

  item.appendChild(campoSubTitulo)
  item.appendChild(valorLabel)
}

function criaCampoValorInstituicaoFinanceira(item, solicitacaoAnalise) {
  let instituicaoFinanceiraSubTitulo = document.createElement("h2")
  let instituicaoFinanceiraLabel = document.createElement("label")

  instituicaoFinanceiraSubTitulo.innerHTML = "Instituição Financeira"
  instituicaoFinanceiraLabel.innerHTML = solicitacaoAnalise.instituicaoFinanceira

  item.appendChild(instituicaoFinanceiraSubTitulo)
  item.appendChild(instituicaoFinanceiraLabel)
}

function criaCampoValorDataSolicitacao(item, solicitacaoAnalise) {
  let campoSubTitulo = document.createElement("h2")
  let valorLabel = document.createElement("label")

  valorLabel.setAttribute("id", "teste")

  campoSubTitulo.innerHTML = "Data da solicitação"
  valorLabel.innerHTML = solicitacaoAnalise.data

  item.appendChild(campoSubTitulo)
  item.appendChild(valorLabel)
}

function criaCampoValorAnalise(item, solicitacaoAnalise) {
  let campoSubTitulo = document.createElement("h2")
  let valorLabel = document.createElement("label")

  campoSubTitulo.innerHTML = "Análise"
  valorLabel.innerHTML = solicitacaoAnalise.analise

  item.appendChild(campoSubTitulo)
  item.appendChild(valorLabel)
}

function criaCampoValorValorParcela(item, solicitacaoAnalise) {
  let campoSubTitulo = document.createElement("h2")
  let valorLabel = document.createElement("label")

  campoSubTitulo.innerHTML = "Valor da Parcela"
  valorLabel.innerHTML = `R$ ${solicitacaoAnalise.valorParcela}`

  item.appendChild(campoSubTitulo)
  item.appendChild(valorLabel)
}

function criaCampoValorValorContratado(item, solicitacaoAnalise) {
  let campoSubTitulo = document.createElement("h2")
  let valorLabel = document.createElement("label")

  campoSubTitulo.innerHTML = "Valor Contratado"
  valorLabel.innerHTML = `R$ ${solicitacaoAnalise.valorContratado}`

  item.appendChild(campoSubTitulo)
  item.appendChild(valorLabel)
}

function criaCampoValorNumeroParcelas(item, solicitacaoAnalise) {
  let campoSubTitulo = document.createElement("h2")
  let valorLabel = document.createElement("label")

  campoSubTitulo.innerHTML = "Número de Parcelas"
  valorLabel.innerHTML = solicitacaoAnalise.numeroParcelas

  item.appendChild(campoSubTitulo)
  item.appendChild(valorLabel)
}

function criaQuebraEspacoItem(item) {
  let quebraItem = document.createElement("hr")
  item.appendChild(quebraItem)
}

document.getElementById('form_analise').addEventListener('submit', function(event) {
  emailjs.init('Rd1rqJESmjJAXIyUK')
  
  event.preventDefault()

  const serviceID = 'service_qyk4qm5'
  const templateID = 'template_2ki0r5m'

  let dataAtual = new Date()

  let solicitacaoAnalise = {
    valor_parcela: `R$ ${this.valor_parcela.value}`,
    valor_contratado: `R$ ${this.valor_contratado.value}`,
    numero_parcelas: this.numero_parcelas.value,
    instituicao_financeira: this.instituicao_financeira.value,
    id_solicitacao: Math.floor(Math.random() * 65536),
    data_solicitacao: `${dataAtual.getDate()}/${dataAtual.getMonth() + 1}/${dataAtual.getFullYear()}`,
    cpf: JSON.parse(localStorage.getItem(chaveUsuarioLogado)).cpf
  }

  emailjs.send(serviceID, templateID, solicitacaoAnalise).then(() => {
    alert("Solicitação de análise enviada com sucesso!")
    carregaPaginaHistoricoSolicitacoesAnalise()
  }, (err) => {
    carregaPaginaSolicitacaoAnaliseEnviadaErro()
  })
})

function carregaPaginaSolicitacaoAnaliseEnviadaSucesso() {
  window.location = "solicitacao_analise_sucesso.html"
}

function carregaPaginaSolicitacaoAnaliseEnviadaErro() {
  window.location = "solicitacao_analise_erro.html"
}

function carregaPaginaHistoricoSolicitacoesAnalise() {
  window.location = "historico.html"
}

function salvaSolicitacaoAnalise() {
  let select = document.getElementById("instituicao_financeira");
  let dataAtual = new Date()

  let solicitacaoAnalise = {
    instituicaoFinanceira: select.options[select.selectedIndex].value,
    numeroParcelas: document.getElementById("numero_parcelas").value,
    valorParcela: document.getElementById("valor_parcela").value,
    valorContratado: document.getElementById("valor_contratado").value,
    data: `${dataAtual.getDate()}/${dataAtual.getMonth() + 1}/${dataAtual.getFullYear()}`,
    status: "PENDENTE",
    analise: "Essa solicitação ainda na fila do nosso time de crédito, em breve será analisada e você vai saber se é recomendada ou não."
  }

  let solicitacoesAnaliseEnviadas
  
  if(localStorage.getItem(chaveSolicitacoesAnaliseEnviadas) == null) {
    solicitacoesAnaliseEnviadas = new Array()
  } else {
    solicitacoesAnaliseEnviadas = JSON.parse(localStorage.getItem(chaveSolicitacoesAnaliseEnviadas))
  }

  solicitacoesAnaliseEnviadas.push(solicitacaoAnalise)

  localStorage.setItem(chaveSolicitacoesAnaliseEnviadas, JSON.stringify(solicitacoesAnaliseEnviadas))
}
