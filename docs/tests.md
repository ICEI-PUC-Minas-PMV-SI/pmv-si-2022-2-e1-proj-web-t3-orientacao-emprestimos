# Plano de Testes de Software

|Caso de teste    | CT-01 - Realizar o login no site  |
|------|-----------------------------------------|
|Requisito associado| RF-001 O sistema deve permitir que o usuário cadastrado realize seu login informando e-mail e senha |
|Objetivo do teste | Validar se o usuário consegue acessar sua conta no site |
|Passos| 1. Acessar o navegador <br> 2. Informar o endereço do site. <br> 3. Clicar na opção Entrar<br>4. Informar o e-mail e senha cadastrados<br> 5. Clicar em Entrar|
|Critério de êxito|Logar no site|

|Caso de teste    | CT-02 - Realizar o cadastro no site |
|------|-----------------------------------------|
|Requisito associado| RF-002 O sistema deve permitir que o usuário crie uma conta |
|Objetivo do teste | Validar se o usuário consigue criar uma conta no site |
|Passos| 1. Acessar o navegador <br> 2. Informar o endereço do site. <br> 3. Clicar na opção Entrar<br>4. Clicar na opção Catrastre-se<br> 5. Preencher os campos do formulário<br> 6. Clicar em Cadastrar<br>|
|Critério de êxito|Efetuar o Cadastro no site|

|Caso de teste    | CT-03 - Aterar dados do cadastro |
|------|-----------------------------------------|
|Requisito associado| RF-003 O sistema deve permitir que o usuário edite os dados do seu cadastro |
|Objetivo do teste | Validar que usuário consegue alterar seus dados cadatrais |
|Passos| 1 - Acessar o navegador.<br> 2 - Informar o endereço do site.<br> 3 - Clicar na opção Entrar.<br> 4 - Realizar Login.<br> 5 - Acessar página Perfil.<br> 6 - Acessar página Alteração de Cadastro.<br> 7 - Preencher Nome, Email e Confirme Senha.<br> 8 - Clique no botão Alterar.<br> 9 - Acesse a página Perfil.<br> 10 - Valida que os dados preenchidos no formulário de alteração refletiram na tela de Perfil. |
|Critério de êxito| Alterar do cadastro do usuário |

|Caso de teste    | CT-03NF - Validar que aplicação dispara requisição HTTP |
|------|-----------------------------------------|
|Requisito associado| RNF-003 O envio do formulário de análise deve ser realizado por uma API |
|Objetivo do teste | Validar que aplicação envia requisição HTTP para uma API REST |
|Passos| 1 - Acessar o navegador.<br> 2 - Informar o endereço do site.<br> 3 - Clicar na opção Entrar.<br> 4 - Realizar Login.<br> 5 - Acessar página Análise.<br> 6 - Preencher dados da Proposta de Crédito Consignado.<br> 7 - Clique no botão Enviar.<br> 8 - Valique que requisição HTTP para servidor do EmailJs. |
|Critério de êxito| Validar integração da aplicação com a API EmailJs para solicitação de análise |

|Caso de teste    | CT-04 - Realizar consulta de cadastro  |
|------|-----------------------------------------|
|Requisito associado| RF-004 O sistema deve permitir que o usuário consulte os dados do seu cadastro |
|Objetivo do teste | Validar que o usuário consiga visualizar os dados do seu cadastro. |
|Passos| 1. Acessar o navegador <br> 2. Informar o endereço do site <br>  3. Clicar na opção Entrar <br> 4. Realizar Login <br> 5. Clicar na opção Perfil <br> 6. Ao acessar o perfil, o usuário terá a visualização dos dados do cadastro|
|Critério de êxito| O site deve mostrar as informações do cadastro do usuário |

|Caso de teste    | CT-05 - Realizar a alteração da senha cadastrada  |
|------|-----------------------------------------|
|Requisito associado| RF-001 O sistema deve permitir que o usuário cadastrado realize seu login informando e-mail e senha |
|Objetivo do teste | Validar se o usuário consigue acessar sua conta no site |
|Passos| 1. Acessar o navegador <br> 2. Informar o endereço do site. <br> 3. Clicar na opção Entrar<br>4. Caso possua cadastro, clicar na oção Esqueci minha senha<br> 5. Informar o e-mail cadastrado <br> 6. Clicar em Enviar<br> 7. Verificar a caixa de entrada do e-mail informado e encontrar o código de alteração <br> 8. CConfirmar o e-mail cadastrado <br> 9. Informar o código de alteração <br> 10. Digitar uma nova senha <br> 11. Clicar em Enviar|
|Critério de êxito|Alterar a senha cadastrada|

|Caso de teste    | CT-06 - Realizar a exclusão do cadastro  |
|------|-----------------------------------------|
|Requisito associado| RF-006 O sistema deve permitir que o usuário exclua seu cadastro |
|Objetivo do teste | Validar que o usuário consiga excluir o seu cadastro. |
|Passos| 1. Acessar o navegador <br> 2. Informar o endereço do site <br>  3. Clicar na opção Entrar <br> 4. Realizar Login <br> 5. Clicar na opção Perfil <br> 6. Clicar na opção "Deseja excluir sua conta? Clique aqui" <br> 7. Clicar na opção "Excluir meu cadastro" |
|Critério de êxito| O site deve mostrar uma mensagem de confirmação de que o usuário foi excluído e redireciona-lo para a pagina inicial |

|Caso de teste    | CT-07 - Enviar solicitação de análise de proposta de crédito consignado  |
|------|-----------------------------------------|
|Requisito associado| RF-007 O sistema deve permitir que um usuário logado possa preencher um formulário de análise de crédito consignado |
|Objetivo do teste | Validar que usuário consegue solicitar análise de proposta de crédito consignado |
|Passos| 1 - Acessar o navegador.<br> 2 - Informar o endereço do site.<br> 3 - Clicar na opção Entrar.<br> 4 - Realizar Login.<br> 5 - Acessar página Análise.<br> 6 - Preencher dados da Proposta de Crédito Consignado.<br> 7 - Clique no botão Enviar.<br> 8 - Valique que foi redirecionado para página de Sucesso. |
|Critério de êxito| Enviar solicitação de análise para proposta de crédito consignado usuário |

|Caso de teste    | CT-08 - Consultar histórico de análise após solicitar análise |
|------|-----------------------------------------|
|Requisito associado| RF-008 Todo formulário que for submetido para análise entrará na lista do usuário com o status de pendente |
|Objetivo do teste | Validar que usuário consegue visualizar solicitações de análise de propostas em página de Histórico |
|Passos| 1 - Acessar o navegador.<br> 2 - Informar o endereço do site.<br> 3 - Clicar na opção Entrar.<br> 4 - Realizar Login.<br> 5 - Acessar página Análise.<br> 6 - Preencher dados da Proposta de Crédito Consignado.<br> 7 - Clique no botão Enviar.<br> 8 - Acesse página Histórico.<br> 9 - Valide que solicitação de análise enviada consta no histórico com status PENDENTE. |
|Critério de êxito| Consultar histórico das solicitações de análise das propostas enviadas pelo usuário |

|Caso de teste    | CT-09 - Acessar email de notificação da solicitação de análise de crédito consignado |
|------|-----------------------------------------|
|Requisito associado| RF-009 Todo formulário de solicitação de análise com o status de pendente será analisado e respondido através do e-mail previamente cadastrado pelo cliente |
|Objetivo do teste | Validar que colaborador do time de Analistas de Crédito recebe email com solicitação de análise da proposta |
|Passos| 1 - Acessar o navegador.<br> 2 - Informar o endereço do site.<br> 3 - Clicar na opção Entrar.<br> 4 - Realizar Login.<br> 5 - Acessar página Análise.<br> 6 - Preencher dados da Proposta de Crédito Consignado.<br> 7 - Clique no botão Enviar.<br> 8 - Valique que email foi disparado para endereço de time de Analistas de Crédito. |
|Critério de êxito| Consultar email da solicitação de análise das propostas enviadas pelo usuário |

|Caso de teste    | CT-010 - Acessar os conteúdos de Educação Financeira  |
|------|-----------------------------------------|
|Requisito associado| RF-010 O sistema deve fornecer ao usuário materiais para auxiliar na conscientização financeira |
|Objetivo do teste | Validar se o usuário consegue acessar o conteúdo de educação financeira |
|Passos| 1. Acessar o navegador <br> 2. Informar o endereço do site. <br> 3. Acessar a Tela de Incio|
|Critério de êxito|Acessar a tela de Inicio|

|Caso de teste    | CT-11 - Visualizar lista de bancos  |
|------|-----------------------------------------|
|Requisito associado| RF-011 O sistema deve fornecer uma lista de bancos com seus respectivos parâmetros negociais |
|Objetivo do teste | Validar que o usuário consiga visualizar a lista de bancos cadastrados. |
|Passos| 1. Acessar o navegador <br> 2. Informar o endereço do site <br>  3. Clicar na opção Ofertas |
|Critério de êxito| O site deve mostrar as ofertas dos bancos cadastrados |

|Caso de teste    | CT-12 - Realizar avaliação de uma instituição cadastrada |
|------|-----------------------------------------|
|Requisito associado| RF-012 O sistema deve permitir que o cliente envie um feedback sobre as instituições previamente cadastradas no sistema |
|Objetivo do teste | Validar que o usuário consiga enviar uma avaliação de uma das instituições da lista de bancos cadastrados. |
|Passos| 1. Acessar o navegador <br> 2. Informar o endereço do site <br>  3. Clicar na opção Entrar <br> 4. Realizar Login <br> 5. Selecionar o banco desejado e escrever a avaliação <br> 7. Clicar no botão de enviar|
|Critério de êxito| O site deve mostrar uma mensagem de confirmação de que a avaliação foi enviada |


# Registro de Testes de Software

CT-04 - Realizar consulta de cadastro
https://drive.google.com/file/d/18Ugs6WvDB9r-1m6FVLaSXVYfhnEesysR/view?usp=sharing

CT-06 - Realizar a exclusão do cadastro
https://drive.google.com/file/d/1OmY3kNadso-6CCJFbMf3TxVJtspwOSNk/view?usp=sharing

CT-11 - Visualizar lista de bancos
https://drive.google.com/file/d/1GgMXRft5tkAi6kwRJLjYWC7JdOrg1dJS/view?usp=sharing

CT-12 - Realizar avaliação de uma instituição cadastrada
https://drive.google.com/file/d/1k3GR2aIA8mTdObQHIx-f7PrZtVV6uXCX/view?usp=sharing

## Avaliação

A aplicação apresenta um bom funcionamento com base nos requisitos funcionais previamente definidos, a interface é amigável e intuitiva permitindo fácil acesso ao conteúdo sobre educação financeira, criação e acesso à conta, acesso a páginas de  análise, histórico de solicitações e ofertas.

Por outro lado, a forma com que o sistema se comunica com o usuário ( Telas de sucesso e Alertas) não está 100% padronizada, o sistema não é responsivo em sua totalidade apresentando bugs visuais em determinados momentos do uso.

Onde tais requisitos não foram atendidos por falta de habilidade técnica da equipe, e a ausência de membros no decorrer da etapa.  

