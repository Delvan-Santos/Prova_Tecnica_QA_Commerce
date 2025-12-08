
# PROVA DE CONHECIMENTO - KEEGGO

Essa é uma PROVA DE CONHECIMENTO de testes FUNCIONAIS com Cypress.

Esta prova tem como objetivo mostrar meus conhecimentos conceitual e prático
em automação de testes com Cypress, considerando boas práticas de escrita,
criação de cenários de testes e capacidade de implementação com o
framework de automação de testes.

### Abaixo segue os requisitos de configurações para rodar o projeto.

### Requisitos Gerais
#### — Node.js: https://nodejs.org/en/download

#### — Visual Studio Code ou outro editor de preferência: https://code.visualstudio.com/download

#### — Git: https://git-scm.com/

#### — Cypress: https://docs.cypress.io/app/get-started/install-cypress

### Adicional (Extensão e Plugin)
#### — API de plugins do Cypress (https://www.npmjs.com/package/cypress-plugin-api)
#### — Todo Tree (é uma extesão do VS Code)

## Rodando localmente
#### Via terminal, rode os seguintes comandos.
Clone o projeto
```bash
git clone https://github.com/fabioaraujoqa/qa-commerce.git
```
Entre no diretório do projeto
```bash
cd Prova-Tecnica-Keeggo
cd qa-commerce
```
#### Para instalar as dependências:
Instale as dependências
```bash
npm install 
```
#### Para subir o servidor e o banco:
Inicie o servidor
```bash
npm start
```
#### Para rodar os testes ( em outro terminal dê os seguintes comandos):
Entre no diretório do projeto
```bash
cd Prova-Tecnica-Keeggo
```
Execute os testes
```bash
npx cyprees open ou npx cypress run
```

### Instalação




#### Observação - em caso de erro ao instalar as dependências siga os seguintes passo:
1  - Delete o projeto da sua máquina

2 - Desinstale o nodes atual que já estava instalado em sua máquina (Provávelmente na versão v24.11)

3 - Instale o NVM

4 - Instale o Nodes na versão 20 (versão mais estável e segura)

5 - Instale as novas dependências ( npm install). Depois disso é só seguir o fluxo normal de clone/fork do projeto e coloca-lo para rodar.
    
## Sobre os Testes

Abaixo segue um pequeno status report dos testes executados.

Foram executados três baterias de teste:

#### — Testes Funcionais Frontend

#### — Testes Funcionais API

#### — Testes Login API

 1 - Feature Teste Funcionais Frontend - cenários passaram 100%

 2 - Feature Testes Funcionais API - temos apenas um cenário com erro devido ao seguinte motivo:

Durante os testes inicialmente a API não aceitava fazer checkout com e-mail já cadastrado, porém ao executar os testes hoje percebi que houve uma alteração na API, pois ao fazer checkout com e-mail já cadastro ela está retornando 200 e não deveria.

Neste caso seria necessário fazer uma correção no endpoint: http://localhost:3000/api/checkout' "Finalizar Pedido".

2 - Feature Testes Login API - temos um erro pelo seguinte motivo:

O erro se deu porque inicialmente a API não estava aceitando criar usuários com e-mail inválido ou incorreto, porém ao executar os teste hoje percebi que a API está aceitando qualquer valor no campo e-mail, porém para fazer cadastro é necessário um e-mail válido, neste caso seria necessário fazer uma correção no endpoint: http://localhost:3000/api/users' "Criar um novo usuário".


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

