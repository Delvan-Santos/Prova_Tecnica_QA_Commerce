/// <reference types = 'Cypress' />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/Steps";

let response;
let criar_Usuarios;
let nome_email_Incorreto;

//ID_001
Given('que eu acesse a API do QA-commerce para cadastrar usuários', () => {
  criar_Usuarios = {
    "name": `DELVAN TESTER_${Date.now()}`,
    "email": `delvanautomacao_${Date.now()}@mail.com`,
    "password": Math.random().toString(36).slice(-10),
    "isAdmin": false
  };
});

When('eu enviar uma requisição POST para /users Criar um novo usuário', () => {
  cy.api({
    method: "POST",
    url: 'http://localhost:3000/api/users',
    body: {
      "name": criar_Usuarios.name,
      "email": criar_Usuarios.email,
      "password": "Senha1234*",
      "isAdmin": false
    }
  }).then((res) => {
    response = res;
  });

});

Then("cenário 1: O status code deverá ser 201", () => {
  expect(response.status).to.eq(201);
});

And("exibirá a seguinte mensagem: Usuário criado com sucesso.", () => {
  expect(response.body.message).to.be.eq("Usuário criado com sucesso.");
  expect(response.body).to.have.property("id");
});

//ID_002
Given('que eu acesse a API do QA-commerce para cadastrar usuários', () => {
  criar_Usuarios = {
    "name": `DELVAN TESTER_${Date.now()}`,
    "email": `delvandaautomacao_${Date.now()}@mail.com`,
    "password": Math.random().toString(36).slice(-10),
    "isAdmin": false
  };
});

When('eu enviar uma requisição POST para /users, com um e-mail já cadastrado.', () => {
  cy.api({
    method: "POST",
    url: 'http://localhost:3000/api/users',
    body: {
      "name": criar_Usuarios.name,
      "email": criar_Usuarios.email,
      "password": "Senha1234*",
      "isAdmin": false
    }
  }).then((res) => {
    response = res;
    expect(response.status).to.eq(201);

    cy.api({
      method: "POST",
      url: 'http://localhost:3000/api/users',
      body: {
        "name": criar_Usuarios.name,
        "email": criar_Usuarios.email,
        "password": "Senha1234*",
        "isAdmin": false
      },
      failOnStatusCode: false
    }).then((res) => {
      response = res;
    });
  });
});

Then("o status code deverá ser 400", () => {
  expect(response.status).to.eq(400);
});

And("exibirá a seguinte mensagem: Email já cadastrado.", () => {
  expect(response.body.message).to.be.eq("Email já cadastrado.");
});

//ID_003
Given('que eu acesse a API do QA-commerce para cadastrar novo usuário com seguinte body', () => {
  nome_email_Incorreto = {
    "name": "NOME E EMAIL INCORRETO3",
    "email": "NOME E EMAIL INCORRETO.COM3",
    "password": Math.random().toString(36).slice(-10),
    "isAdmin": false
  };
});

When('eu enviar uma requisição POST para /users Criar um novo usuário, com um e-mail incorreto ou inválido.', () => {
  //TODO: Este cenário não está passando pois contém um erro na API que precisa ser corrigido. A API está aceitando criar usuário com e-mail incorreto/inválidos.
  cy.api({
    method: "POST",
    url: 'http://localhost:3000/api/users',
    body: {
      "name": nome_email_Incorreto.name,
      "email": nome_email_Incorreto.email,
      "password": "Senha1234*",
      "isAdmin": false
    },
    failOnStatusCode: false
  }).then((res) => {
    response = res;
  });

});

Then("o status code deverá ser 400", () => {
  expect(response.status).to.eq(400);
});

And("exibirá a seguinte mensagem: Email inválido.", () => {
  expect(response.body.message).to.be.eq("Email inválido");
});

//ID_004
Given("que eu quero fazer login com usuário João do Teste", () => {
  criar_Usuarios = {
    "name": `DELVAN TESTER_${Date.now()}`,
    "email": `delvandaautomacao_${Date.now()}@mail.com`,
    "password": Math.random().toString(36).slice(-10),
    "isAdmin": false
  };
});

When("eu enviar uma requisição POST para /login, com email e senha corretos", () => {
  cy.api({
    method: "POST",
    url: 'http://localhost:3000/api/users',
    body: {
      "name": criar_Usuarios.name,
      "email": criar_Usuarios.email,
      "password": "Senha1234*",
      "isAdmin": false
    }
  }).then((res) => {
    response = res;
    expect(response.status).to.eq(201);

    cy.api({
      method: "POST",
      url: 'http://localhost:3000/api/login',
      body: {
        "email": criar_Usuarios.email,
        "password": "Senha1234*",
      },
      failOnStatusCode: false
    }).then((res) => {
      response = res;
    });
  });

});

Then("cenário 4: O status code deverá ser 200", () => {
  expect(response.status).to.eq(200);
});

And("no response deverá exibi o ID, Nome e Token do usuário", () => {
  expect(response.body).to.have.property("id");
  expect(response.body.name).to.be.eq(criar_Usuarios.name);
  expect(response.body.token).to.contain('Bearer');
});

//ID_005
Given("que eu acesse a API do QA-commerce com um email incorreto", () => {
  nome_email_Incorreto = {
    "name": "NOME E EMAIL INCORRETO",
    "email": "NOME E EMAIL INCORRETO.COM",
    "password": Math.random().toString(36).slice(-10),
    "isAdmin": false
  };
})

When("eu enviar uma requisição POST para /login, com email incorreto ou inválido", () => {
  //TODO: Após correção da API criar usuários podemos retirar o "Math.random().toString(36).slice(-5) da linha de código"
  cy.api({
    method: "POST",
    url: 'http://localhost:3000/api/login',
    body: {
      "email": `${nome_email_Incorreto.email}_${Math.random().toString(36).slice(-5)}`,
      "password": "Senha1234*",
    },
    failOnStatusCode: false
  }).then((res) => {
    response = res;
  });
})

Then("cenário 5: O status code deverá ser 401", () => {
  expect(response.status).to.eq(401);
})

And("deverá exibir a seguinte mensagem: Email ou senha incorretos.", () => {
  expect(response.body.message).to.be.eq('Email ou senha incorretos.');
});

//ID_006
Given("que eu acesse a API do QA-commerce com uma SENHA incorreta", () => {

});

When("eu enviar uma requisição POST para /login, com a SENHA incorreta", () => {
  cy.api({
    method: "POST",
    url: 'http://localhost:3000/api/login',
    body: {
      "email": criar_Usuarios.email,
      "password": "SENHA*INCORRETA",
    },
    failOnStatusCode: false
  }).then((res) => {
    response = res;
  });
});

Then("o status code deverá ser 401", () => {
  expect(response.status).to.eq(401)
});

And("deverá exibir a seguinte mensagem: Email ou senha incorretos.", () => {
  expect(response.body.message).to.be.eq('Email ou senha incorretos.')
});

//ID_007
Given("que eu acesse a API do QA-commerce para ver todos usuários cadastrados", () => {

});

When("eu enviar uma requisição GET para /users", () => {
  cy.api({
    method: "GET",
    url: "http://localhost:3000/api/users",
  }).then((res) => {
    response = res;
  });
});

Then("cenário 7: O status code deverá ser 200", () => {
  expect(response.status).to.be.eq(200);
});

And("deverá exibir um response com a lista de todos os usuários, contendo ID, NAME, EMAIL e isAdmin.", () => {
  expect(response.body[1]).to.have.property("id");
  expect(response.body[1]).to.have.property("name");
  expect(response.body[1]).to.have.property("email");
  expect(response.body[1]).to.have.property("isAdmin");
  expect(response.body[1].name).contain("João do Teste");
});
//TODO: Cria uma custom command para reaproveitar código e deixar-lo mais limpo.