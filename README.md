
## **PROVA DE CONHECIMENTO - KEEGGO**

Essa é uma **PROVA DE CONHECIMENTO** de testes **FUNCIONAIS** com **CYPRESS**.

Esta prova tem como objetivo mostrar meus conhecimentos conceitual e prático
em automação de testes com **Cypress**, considerando boas práticas de escrita,
criação de cenários de testes e capacidade de implementação com o
framework de automação de testes.

### Abaixo segue os requisitos de configurações para rodar o projeto.

### Requisitos Gerais
#### — Node.js: [Download Node.js](https://nodejs.org/en/download)

#### — Visual Studio Code ou outro editor de preferência: [Download Vs Code](https://code.visualstudio.com/download)

#### — Git: [Download Git](https://git-scm.com/)

#### — Cypress: [Download Cypress](https://docs.cypress.io/app/get-started/install-cypress)

### Adicional (Extensão e Plugin)
#### — API de plugins do Cypress: [Download]((https://www.npmjs.com/package/cypress-plugin-api))
#### — Todo Tree (é uma extesão do VS Code)

### Rodando localmente
#### **Via terminal, rode os seguintes comandos.**
_Clone o projeto_
```bash
git clone https://github.com/Delvan-Santos/Prova_Tecnica_QA_Commerce.git
```
_Entre no diretório do projeto_
```bash
cd Prova-Tecnica-Keeggo
cd qa-commerce
```
#### **Para instalar as dependências:**
_Instale as dependências_
```bash
npm install 
```
#### **Para subir o servidor e o banco:**
_Inicie o servidor_
```bash
npm start
```
#### **Para rodar os testes ( em outro terminal dê os seguintes comandos):**
_Entre no diretório do projeto_
```bash
cd Prova-Tecnica-Keeggo
```
_Execute os testes_
```bash
npx cyprees open ou npx cypress run
```

### **Instalação**
<details>
<summary>Observação - em caso de erro ao instalar as dependências siga os seguintes passo:
</summary>

**1  -** _Delete o projeto da sua máquina_

**2 -** _Desinstale o nodes atual que já estava instalado em sua máquina (Provávelmente na versão v24.11)_

**3 -** _Instale o NVM_

**4 -** _Instale o Nodes na versão 20 (versão mais estável e segura)_

**5 -** _Instale as novas dependências ( npm install). Depois disso é só seguir o fluxo normal de clone/fork do projeto e coloca-lo para rodar._
</details>
    
### Sobre os Testes

Abaixo segue um pequeno status report dos testes executados.

Foram executados três baterias de teste:

#### — Testes Funcionais Frontend

#### — Testes Funcionais API

#### — Testes Login API

 **1 - Feature Teste Funcionais Frontend -** testes passaram **100%**.

 **2 - Feature Testes Funcionais API -** temos apenas um cenário com erro devido ao seguinte motivo:

Durante os testes inicialmente a API não aceitava fazer checkout com e-mail já cadastrado, porém ao executar os testes hoje percebi que houve uma alteração na API, pois ao fazer checkout com e-mail já cadastro ela está retornando 200 e não deveria.

Neste caso seria necessário fazer uma correção no endpoint: **'http://localhost:3000/api/checkout'** **"Finalizar Pedido"**.

**3 - Feature Testes Login API -** temos um erro pelo seguinte motivo:

O erro se deu porque inicialmente a **API** não estava aceitando criar usuários com e-mail inválido ou incorreto, porém ao executar os teste hoje percebi que a **API** está aceitando qualquer valor no campo e-mail, porém para fazer cadastro é necessário um e-mail válido, neste caso seria necessário fazer uma correção no endpoint: **http://localhost:3000/api/users' "Criar um novo usuário"**.


## Status

<h1>
<p><span style="font-size: 20px;">✓  Testes Funcionais Frontend</span></p>
<img src="Status Report - Teste_Frontend.jpg"/>
</h1>

<h1>
<p>✓  Testes Funcionais API</p>
<img src="Status Report - Testes Funcionais_API.jpg"/>
</h1>

<h1>
<p>✓  Testes Login API</p>
<img src="Status Report - Teste_Login_API.jpg"/>
</h1>


## 🛠️ Ferramentas

<ul style="list-style-type: square;">
  <li>
    <mark style="background-color: #0078d7; color: black;">
      <strong>Vs Code</strong>
    </mark>
  </li>
</ul>

<ul style="list-style-type: square;">
  <li>
    <mark style="background-color: #ababab; color: black;">
      <strong>Cypress</strong>
    </mark>
  </li>
</ul>

<ul style="list-style-type: square;">
  <li>
    <mark style="background-color: #00ff00; color: black;">
      <strong>Swagger</strong>
    </mark>
  </li>
</ul>


Testando alguns simbolos em HTML no README
<ul style="list-style: none;" >
  <li>&#10003; Check</li>   <!-- ✔ -->
  <li>&#10148;  Seta</li>    <!-- ➤ -->
  <li>&#9733; Estrela</li>  <!-- ★ -->
</ul>


