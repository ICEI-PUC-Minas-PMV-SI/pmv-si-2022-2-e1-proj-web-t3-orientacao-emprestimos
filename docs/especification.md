# Especificações do Projeto

Devido a grande demanda por empréstimos bancários e a grande variedade de  empréstimos que você pode encontrar ao pesquisar na internet, nosso web app tem como ideia organizar essas opções e apresentar algumas alternativas para que usuários iniciantes possam identificar com mais facilidade instituições confiáveis e possíveis abusos de juros taxas para encontrar o empréstimo que mais se adequa ao perfil do cliente.

Com isso, pretendemos mostrar algumas opções de empréstimo e alguns conteúdos e materiais que são mais relevantes sobre o assunto.



## Personas

José tem 60 anos e é um recém aposentado que mora em Londrina, Paraná. Ele esteve em Londrina durante toda a sua vida, criou seus 3 filhos e vive ao lado de sua esposa. Ele formou-se em Pedagogia e exerceu a profissão durante 40 anos. Fez um empréstimo para pagar as contas de seu advogado em uma ação judicial envolvendo uma de suas propriedades. Tudo ficou em R$15.000 Ele não tinha esse dinheiro, então teve que fazer um empréstimo consignado. Com R$500 de sua aposentadoria usados diretamente para pagar o empréstimo, José diz que tem medo de tentar crédito não consignado e evita mais dívidas em seu cartão de crédito.

Samuel tem 31 anos e é formado em engenharia civil. Vive em São Paulo, é casado e sua esposa está grávida. Ele nunca se interessou por economia, mercados financeiros e outras disciplinas relacionadas. Sempre gasta toda sua renda às pressas. Está procurando uma agência para ajudá-lo a encontrar as melhores taxas para um financiamento bancário para fazer uma reforma em sua casa, para a construção do quarto para o seu primeiro filho que irá nascer. Seu objetivo profissional é se especializar em recursos energéticos. Atualmente, Samuel quer investir em sua educação financeira para ter uma vida mais estável, mas ele nunca teve uma orientação de como ganhar mais dinheiro e como gastar seu salário, então ele busca na internet ferramentas que possam ajudá-lo em sua educação financeira.

Bruno tem 18 anos e faz 3 meses que conseguiu o primeiro emprego e acabou de se matricular na faculdade, no curso de Análise e Desenvolvimento de Sistemas. Reside em Osasco, São Paulo, mora com os pais. Essa é a primeira vez que precisa administrar dinheiro e ainda não consegue fazer uma boa gestão do seu salário e nem um planejamento financeiro. Se deparou com o primeiro imprevisto que exige recurso financeiro, ele precisa pagar a matrícula da faculdade e comprar um computador para realizar atividades do curso. Como Bruno está empregado faz pouco tempo, o cartão de crédito que possui não tem o limite suficiente para pagar a matrícula e comprar um computador, então está procurando por empréstimo consignado para iniciar seus estudos.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                    |PARA ... `MOTIVO/VALOR`                 |
|--------------------|-------------------------------------------------------|----------------------------------------|
|Usuário do sistema  | Possuir acesso a conteúdos financeiro                 | Ganhar novos conhecimentos e assistência em gestão financeira |
|Usuário do sistema  | Saber quais são os melhores bancos para empréstimo    | Conseguir um empréstimo com a menor taxa de juros possível |
|Usuário do sistema  | Contrair um empréstimo bancário                       | Usar o dinheiro para pagar outras dívidas mais caras ou para alguma conta do dia a dia|
|Administrador       | Disponibilizar conteúdos relacionados à educação financeira| Ajudar usuários não especialistas em busca de novos conhecimentos |
|Administrador       | Ajudar os tomadores de empréstimo com informações comparativas de mercado reduzindo a exposição a ofertas abusivas| Oferecer as melhores opções de financiamento bancário |
|Administrador       | Formulário para solicitação de análise de empréstimo  | Auxiliar o consumidor na busca pelas melhores taxas |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Sistema de login | ALTA |  |
|RF-002| Sistema de cadastro   | ALTA | |
|RF-003| O usuário precisará estar logado para acessar o formulário de solicitação de análise   | ALTA | |
|RF-004| O site deve fornecer ao usuário matérias para auxiliar na conscientização financeira   | MÉDIA | |
|RF-005| Lista de bancos com seus respectivos parâmetros negociais   | ALTA | |
|RF-006| Mecanismo de busca por instituições   | MÉDIA | |
|RF-007| Formulário para solicitação de análise de empréstimo   | ALTA | |
|RF-008| Mecanismo de avaliação sobre ofertas de créditos de bancos cadastrados na plataforma   | MÉDIA | |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-002| O site deve ter uma interface amigável |  MÉDIA | 
|RNF-003| O envio do formulário de análise deve ser realizado por uma API |  ALTA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Nenhum conteúdo educacional adicionado ao site será de autoria do grupo |
|03| Não pode ser desenvolvido um módulo de backend |
