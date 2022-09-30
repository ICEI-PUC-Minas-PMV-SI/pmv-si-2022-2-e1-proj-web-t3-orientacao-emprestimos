# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

José tem 60 anos e é um recém aposentado que mora em Londrina, Paraná. Ele esteve em Londrina durante toda a sua vida, criou seus 3 filhos e vive ao lado de sua esposa. Ele formou-se em Pedagogia e exerceu a profissão durante 40 anos. Fez um empréstimo para pagar as contas de seu advogado em uma ação judicial envolvendo uma de suas propriedades. Tudo ficou em R$15.000 Ele não tinha esse dinheiro, então teve que fazer um empréstimo consignado. Com R$500 de sua aposentadoria usados diretamente para pagar o empréstimo, José diz que tem medo de tentar crédito não consignado e evita mais dívidas em seu cartão de crédito.

Samuel tem 31 anos e é formado em engenharia civil. Vive em São Paulo, é casado e sua esposa está grávida. Ele nunca se interessou por economia, mercados financeiros e outras disciplinas relacionadas. Sempre gasta toda sua renda às pressas. Está procurando uma agência para ajudá-lo a encontrar as melhores taxas para um financiamento bancário para fazer uma reforma em sua casa, para a construção do quarto para o seu primeiro filho que irá nascer. Seu objetivo profissional é se especializar em recursos energéticos. Atualmente, Samuel quer investir em sua educação financeira para ter uma vida mais estável, mas ele nunca teve uma orientação de como ganhar mais dinheiro e como gastar seu salário, então ele busca na internet ferramentas que possam ajudá-lo em sua educação financeira.

Bruno tem 18 anos e faz 3 meses que conseguiu o primeiro emprego e acabou de se matricular na faculdade, no curso de Análise e Desenvolvimento de Sistemas. Reside em Osasco, São Paulo, mora com os pais. Essa é a primeira vez que precisa administrar dinheiro e ainda não consegue fazer uma boa gestão do seu salário e nem um planejamento financeiro. Se deparou com o primeiro imprevisto que exige recurso financeiro, ele precisa pagar a matrícula da faculdade e comprar um computador para realizar atividades do curso. Como Bruno está empregado faz pouco tempo, o cartão de crédito que possui não tem o limite suficiente para pagar a matrícula e comprar um computador, então está procurando por empréstimo consignado para iniciar seus estudos.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

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
