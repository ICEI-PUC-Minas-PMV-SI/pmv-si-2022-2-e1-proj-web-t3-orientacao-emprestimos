# Programação de Funcionalidades

## Relação de Requisitos Funcionais com Artefatos

|ID    | Descrição do Requisito  | Artefato | Responsável
|------|-----------------------------------------|----|----|
|RF-001| O sistema deve permitir que o usuário cadastrado realize seu login informando e-mail e senha | login.html | Matheus | 
|RF-002| O sistema deve permitir que o usuário crie uma conta | cadastro.html | Matheus |
|RF-003| O sistema deve permitir que o usuário edite os dados do seu cadastro | ???? | Rafael |
|RF-004| O sistema deve permitir que o usuário consulte os dados do seu cadastro | conta.html | Gabriel |
|RF-005| O sistema deve permitir que o usuário exclua seu cadastro | ???? | Marcio |
|RF-006| O sistema deve permitir que um usuário logado possa preencher um formulário de análise de crédito consignado | analise.html | Rafael |
|RF-007| Todo formulário que for submetido para análise entrará na lista do usuário com o status de pendente | historico.html | Matheus |
|RF-008| Todo formulário de solicitação de análise com o status de pendente será analisado e respondido através do e-mail previamente cadastrado pelo cliente | ???? | Indefinido |
|RF-009| O sistema deve fornecer ao usuário materiais para auxiliar na conscientização financeira | index.html | Marcio |
|RF-010| O sistema deve fornecer uma lista de bancos com seus respectivos parâmetros negociais | ofertas.html | Gabriel |
|RF-011| O sistema deve permitir que o cliente envie um feedback sobre as instituições previamente cadastradas no sistema | ofertas.html | Gabriel |

## Descrição das Estruturas de Dados

### Usuário
|Nome       | Tipo   | Descrição                                              | Exemplo            |
|---------- |------- |------------------------------------------------------- |------------------- |
|Nome	      |Texto	 |Nome da pessoa                                          |João José           |
|Sobrenome	|Texto	 |Sobrenome da pessoa                                     |Silva Santos        |
|Email	    |Texto	 |Email da pessoa	                                        |joao@exemplo.com.br |
|Cpf	      |Texto	 |CPF da pessoa                                           |123.456.789-00      |
|Senha	    |Texto	 |Senha do cadastro                                       |1@A#z.H             |
|Imagem	    |Texto	 |Referência para arquivo de imagem do avatar do usuário  |image/users/avatar  |

### Ofertas
|Nome                    | Tipo             | Descrição                                               | Exemplo            |
|----------------------- |----------------- |-------------------------------------------------------- |------------------- |
|Instituição  financeira |Texto	            |Nome da instituição financeira	                          |Banco São Paulo S.A |
|Taxa de juros           |Texto	            |Percentual da taxa de juros                              |1.10% a.m.          | 
|Quantidade de parcelas  |Número (Inteiro)  |Número de parcelas do empréstimo	                        |10                  |
|Valor de crédito        |Número (Decimal)	|Valor de crédito a ser contratado no empréstimo	        |10.550              |
|Valor da parcela        |Número (Decimal)	|Valor a ser pago como parcela	                          |890.99              |

### Avaliação da Instituição Financeira
|Nome                    | Tipo  | Descrição                                                            | Exemplo                                |
|----------------------- |------ |--------------------------------------------------------------------- |--------------------------------------- |
|Instituição financeira	 |Texto  |Nome da instituição financeira                                        |Banco São Paulo S.A                     |
|Descrição               |Texto  |Relato da experiência do usuário na contratação de crédito consignado	|Gostei do atendimento e das condições de pagamento.|

### Proposta de Credito
|Nome                   | Tipo            | Descrição                                      | Exemplo            |
|---------------------- |---------------- |----------------------------------------------- |------------------- |
|Instituição financeira |Texto            |Nome da instituição financeira	                 |Banco São Paulo S.A | 
|Quantidade parcelas    |Número (Inteiro) |Número de parcelas do empréstimo	               |10                  |  
|Valor da parcela	      |Número (Decimal) |Valor a ser pago da parcela   	                 |890.99              | 
|Valor de crédito	      |Número (Decimal) |Valor de crédito a ser contratado no empréstimo |10.550              |

### Proposta de Credito Analisada
|Nome                   | Tipo            | Descrição                                                               | Exemplo              |
|---------------------- |---------------- |------------------------------------------------------------------------ |--------------------- |
|Id                     |Número (Inteiro) |Identificador da proposta de crédito na plataforma                       |123563                |
|Status                 |Texto            |Status para informar a etapa da análise                                  |Pendente ou Concluido |
|Analise                |Texto            |Análise da equipe de crédito, informando se recomenda ou não a proposta. |Essa proposta de crédito consignado não é recomendada porque a taxa de juros está muito acima do comum.|
|Instituição financeira |Texto            |Nome da instituição financeira	                    |Banco São Paulo S.A   | 
|Quantidade parcelas    |Número (Inteiro) |Número de parcelas do empréstimo	                  |10                    |  
|Valor da parcela	      |Número (Decimal) |Valor a ser pago da parcela	                      |890.99              | 
|Valor de crédito	      |Número (Decimal) |Valor de crédito a ser contratado no empréstimo    |10.550              |

### Hospedagem do Site
GitHub Pages: https://icei-puc-minas-pmv-si.github.io/pmv-si-2022-2-e1-proj-web-t3-orientacao-emprestimos/index.html#


