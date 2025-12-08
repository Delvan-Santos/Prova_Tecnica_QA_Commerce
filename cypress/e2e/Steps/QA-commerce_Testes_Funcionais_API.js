/// <reference types = 'Cypress' />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/Steps";
import { alterarCamposCheckout } from "../../support/function_Altera_Body";

let response;
let adicionando_Produto;
let checkout;



//ID_001
Given('que eu acesse a API do QA-commerce para adicionar produtos ao carrinho', () => {
  adicionando_Produto = {
    "userId": Date.now().toString().slice(-3),
    "productId": Date.now().toString().slice(-4),
    "quantity": Date.now().toString().slice(-2)
  }
});

When('eu enviar uma requisição POST para /carrinho', () => {
  cy.api({
    method: "POST",
    url: 'http://localhost:3000/api/carrinho',
    body: {
      "userId": adicionando_Produto.userId,
      "productId": adicionando_Produto.productId,
      "quantity": adicionando_Produto.quantity,
    }
  }).then((res) => {
    response = res;
  });

});

Then("o status code deverá ser 201", () => {
  expect(response.status).to.eq(201);
});

And("exibirá a seguinte mensagem: Produto adicionado ao carrinho com sucesso.", () => {
  expect(response.body.message).to.be.eq("Produto adicionado ao carrinho com sucesso.");
  expect(response.body).to.have.property("id");

});

//ID_002
Given('que eu acesse a API do QA-commerce para adicionar vários produtos ao carrinho', () => {

});

When('eu enviar uma requisição POST para /carrinho com userId {string} , productId {string} e quantity {string}', (userId, productId, quantity) => {
  //TODO: Tive que deixar o campo productId dinâmico pois ao envia a primeira requisição a API retorna 201, porém ao enviar uma segunda requisição ela retorna 200.
  //TODO: Se os dados estivesse sendo salvos no banco seria possível contornar isso fazendo apenas um IF.
  cy.api({
    method: "POST",
    url: 'http://localhost:3000/api/carrinho',
    body: {
      "userId": userId,
      "productId": Date.now().toString().slice(-4),
      "quantity": quantity,
    }
  }).then((res) => {
    response = res;
  });

});

Then("o status code deverá ser 201", () => {
  expect(response.status).to.eq(201);
});

And("exibirá a seguinte mensagem: Produto adicionado ao carrinho com sucesso.", () => {
  expect(response.body.message).to.be.eq("Produto adicionado ao carrinho com sucesso.");
  expect(response.body).to.have.property("id");

});

//ID_003
Given('que eu tenha produtos adicionados ao carrinho', () => {
  checkout = {
    "userId": 1,
    "firstName": `TESTER${Date.now().toString().slice(-3)}`,
    "lastName": `Teste Sobrenome${Date.now().toString().slice(-3)}`,
    "address": `Rua da Automação${Date.now().toString().slice(-3)}`,
    "number": Date.now().toString().slice(-3),
    "cep": Date.now().toString().slice(-8),
    "phone": `11${Date.now().toString().slice(-8)}`,
    "email": `emailteste_${Date.now().toString().slice(-3)}@mail.com`,
    "paymentMethod": "credit_card",
    "cardNumber": `123${Date.now().toString()}`,
    "cardExpiry": `12/2${Date.now().toString().slice(-3)}`,
    "cardCvc": "123",
    "boletoCode": "23793.38128 60082.677139 66003.996498 1 89440000010000",
    "pixKey": "123e4567-e89b-12d3-a456-426614174000",
    "createAccount": false,
    "password": "Senha1234*"
  }

});

When("eu enviar uma requisição POST para /checkout", () => {
  cy.api({
    method: "POST",
    url: 'http://localhost:3000/api/checkout',
    body: {
      "userId": checkout.userId,
      "firstName": checkout.firstName,
      "lastName": checkout.lastName,
      "address": checkout.address,
      "number": checkout.number,
      "cep": checkout.cep,
      "phone": checkout.phone,
      "email": checkout.email,
      "paymentMethod": checkout.paymentMethod,
      "cardNumber": checkout.cardNumber,
      "cardExpiry": checkout.cardExpiry,
      "cardCvc": checkout.cardCvc,
      "boletoCode": checkout.boletoCode,
      "pixKey": checkout.pixKey,
      "createAccount": checkout.createAccount,
      "password": checkout.password
    },
  }).then((res) => {
    response = res;
  });
});

Then("o status code deverá ser 201, e exibirá um response com ID e orderNumber", () => {
  expect(response.status).to.be.eq(201);
  expect(response.body).contain.property("id");
  expect(response.body).contain.property("orderNumber");
});

//ID_004
Given('que eu tenha produtos adicionados ao carrinho', () => {
  checkout = {
    "userId": 1,
    "firstName": `TESTER${Date.now().toString().slice(-3)}`,
    "lastName": `Teste Sobrenome${Date.now().toString().slice(-3)}`,
    "address": `Rua da Automação${Date.now().toString().slice(-3)}`,
    "number": Date.now().toString().slice(-3),
    "cep": Date.now().toString().slice(-8),
    "phone": `11${Date.now().toString().slice(-8)}`,
    "email": `emailteste_${Date.now().toString().slice(-3)}@mail.com`,
    "paymentMethod": "credit_card",
    "cardNumber": `123${Date.now().toString()}`,
    "cardExpiry": `12/2${Date.now().toString().slice(-3)}`,
    "cardCvc": "123",
    "boletoCode": "23793.38128 60082.677139 66003.996498 1 89440000010000",
    "pixKey": "123e4567-e89b-12d3-a456-426614174000",
    "createAccount": false,
    "password": "Senha1234*"
  }
});

When("eu enviar uma requisição POST para /checkout, e o campo email conter um email inválido", () => {
  const bodyAlterado = alterarCamposCheckout(checkout, {
    email: "emailincorreto.com.br",
  });
  cy.api({
    method: "POST",
    url: 'http://localhost:3000/api/checkout',
    body: bodyAlterado,
    failOnStatusCode: false
  }).then((res) => {
    response = res;
  });
});

Then("o status code deverá ser 400, e exibirá a seguinte mensagem: Deve ser um e-mail inválido.", () => {
  expect(response.status).to.be.eq(400);
  expect(response.body).to.contain('"email" must be a valid email');
});

//ID_005
Given('que eu tenha produtos adicionados ao carrinho', () => {
  checkout = {
    "userId": 1,
    "firstName": `TESTER${Date.now().toString().slice(-3)}`,
    "lastName": `Teste Sobrenome${Date.now().toString().slice(-3)}`,
    "address": `Rua da Automação${Date.now().toString().slice(-3)}`,
    "number": Date.now().toString().slice(-3),
    "cep": Date.now().toString().slice(-8),
    "phone": `11${Date.now().toString().slice(-8)}`,
    "email": `emailteste_${Date.now().toString().slice(-3)}@mail.com`,
    "paymentMethod": "credit_card",
    "cardNumber": `123${Date.now().toString()}`,
    "cardExpiry": `12/2${Date.now().toString().slice(-3)}`,
    "cardCvc": "123",
    "boletoCode": "23793.38128 60082.677139 66003.996498 1 89440000010000",
    "pixKey": "123e4567-e89b-12d3-a456-426614174000",
    "createAccount": false,
    "password": "Senha1234*"
  }
});

When("eu enviar uma requisição POST para /checkout, e o campo CEP for diferente de 8 caracteres", () => {
  const bodyAlterado = alterarCamposCheckout(checkout, { cep: "123456789", });
  cy.api({
    method: "POST",
    url: 'http://localhost:3000/api/checkout',
    body: bodyAlterado,
    failOnStatusCode: false
  }).then((res) => {
    response = res;
  });
});

Then("o status code deverá ser 400, e exibirá a seguinte mensagem: O comprimento deve ser de 8 caracteres.", () => {
  expect(response.status).to.be.eq(400);
  expect(response.body).to.contain('"cep" length must be 8 characters long');
});

//ID_006
Given('que eu tenha produtos adicionados ao carrinho', () => {
  checkout = {
    "userId": 1,
    "firstName": `TESTER${Date.now().toString().slice(-3)}`,
    "lastName": `Teste Sobrenome${Date.now().toString().slice(-3)}`,
    "address": `Rua da Automação${Date.now().toString().slice(-3)}`,
    "number": Date.now().toString().slice(-3),
    "cep": Date.now().toString().slice(-8),
    "phone": `11${Date.now().toString().slice(-8)}`,
    "email": `emailteste_${Date.now().toString().slice(-3)}@mail.com`,
    "paymentMethod": "credit_card",
    "cardNumber": `123${Date.now().toString()}`,
    "cardExpiry": `12/2${Date.now().toString().slice(-3)}`,
    "cardCvc": "123",
    "boletoCode": "23793.38128 60082.677139 66003.996498 1 89440000010000",
    "pixKey": "123e4567-e89b-12d3-a456-426614174000",
    "createAccount": false,
    "password": "Senha1234*"
  }
});

When("eu enviar uma requisição POST para /checkout, e houver algum campo vazio", () => {
  const bodyAlterado = alterarCamposCheckout(checkout, { lastName: "", });
  cy.api({
    method: "POST",
    url: 'http://localhost:3000/api/checkout',
    body: bodyAlterado,
    failOnStatusCode: false
  }).then((res) => {
    response = res;
  });
});

Then("o status code deverá ser 400, e exibirá a seguinte mensagem: Campo X Não pode estar vazio.", () => {
  expect(response.status).to.be.eq(400);
  expect(response.body).to.contain('"lastName" is not allowed to be empty');
});

//ID_007
Given('que eu tenha produtos adicionados ao carrinho', () => {
  checkout = {
    "userId": 1,
    "firstName": `TESTER${Date.now().toString().slice(-3)}`,
    "lastName": `Teste Sobrenome${Date.now().toString().slice(-3)}`,
    "address": `Rua da Automação${Date.now().toString().slice(-3)}`,
    "number": Date.now().toString().slice(-3),
    "cep": Date.now().toString().slice(-8),
    "phone": `11${Date.now().toString().slice(-8)}`,
    "email": `emailteste_${Date.now().toString().slice(-3)}@mail.com`,
    "paymentMethod": "credit_card",
    "cardNumber": `123${Date.now().toString()}`,
    "cardExpiry": `12/2${Date.now().toString().slice(-3)}`,
    "cardCvc": "123",
    "boletoCode": "23793.38128 60082.677139 66003.996498 1 89440000010000",
    "pixKey": "123e4567-e89b-12d3-a456-426614174000",
    "createAccount": false,
    "password": "Senha1234*"
  }
});

When("eu enviar uma requisição POST para /checkout, e o campo cardExpiry tiver letras", () => {
  const bodyAlterado = alterarCamposCheckout(checkout, {
    cardExpiry: "DEZ/2025",
  });
  cy.api({
    method: "POST",
    url: 'http://localhost:3000/api/checkout',
    body: bodyAlterado,
    failOnStatusCode: false
  }).then((res) => {
    response = res;
  });
});

Then("o status code deverá ser 400, e exibirá a seguinte mensagem: O valor MMAAAA não corresponde ao padrão exigido", () => {
  expect(response.status).to.be.eq(400);
  expect(response.body).to.match(/"cardExpiry" /);
  expect(response.body).to.match(/DEZ\/2025/);
  expect(response.body).to.match(/fails to match the required pattern/);
});

//ID_008
Given('que eu tenha produtos adicionados ao carrinho', () => {
  checkout = {
    "userId": 1,
    "firstName": `TESTER${Date.now().toString().slice(-3)}`,
    "lastName": `Teste Sobrenome${Date.now().toString().slice(-3)}`,
    "address": `Rua da Automação${Date.now().toString().slice(-3)}`,
    "number": Date.now().toString().slice(-3),
    "cep": Date.now().toString().slice(-8),
    "phone": `11${Date.now().toString().slice(-8)}`,
    "email": `emailteste_${Date.now().toString().slice(-3)}@mail.com`,
    "paymentMethod": "credit_card",
    "cardNumber": `123${Date.now().toString()}`,
    "cardExpiry": `12/2${Date.now().toString().slice(-3)}`,
    "cardCvc": "123",
    "boletoCode": "23793.38128 60082.677139 66003.996498 1 89440000010000",
    "pixKey": "123e4567-e89b-12d3-a456-426614174000",
    "createAccount": false,
    "password": "Senha1234*"
  }
});

When("eu enviar uma requisição POST para /checkout, com um e-mail já cadastrado", () => {
  //TODO: Melhoria - deixar o valor da propriedade e-mail dinâmico
  //TODO: A API está instavel pois durante os testes a mesma não estava permitindo fazer checkout com email já cadastrado e agora está aceitando.
  const bodyAlterado = alterarCamposCheckout(checkout, { email: "emailteste1@teste1.com", });
  cy.api({
    method: "POST",
    url: 'http://localhost:3000/api/checkout',
    body: bodyAlterado,
    failOnStatusCode: false
  }).then((res) => {
    response = res;
  });
});

Then("o status code deverá ser 400, e exibirá a seguinte mensagem: E-mail já registrado. Tente um email diferente", () => {
  expect(response.status).to.be.eq(400);
  expect(response.body).to.contain('"lastName" is not allowed to be empty');
});

//ID_009
Given('que eu queira obter a lista de produtos cadastrados', () => {
});

When("eu enviar uma requisição GET para /produtos", () => {
  cy.api({
    method: "GET",
    url: 'http://localhost:3000/api/produtos?page=1&limit=5',
  }).then((res) => {
    response = res;
  });
});

Then("o status code deverá ser 200", () => {
  expect(response.status).to.be.eq(200);
});

And("o response deve exibir um objeto com a lista de produtos cadastrados, contendo Id, Name, Description, Price, Image.", () => {
  expect(response.body).to.have.property("products");
  const listadeProduto = response.body.products[0];
  expect(listadeProduto).to.have.property('id');
  expect(listadeProduto).to.have.property('name');
  expect(listadeProduto).to.have.property('description');
  expect(listadeProduto).to.have.property('price');
  expect(listadeProduto).to.have.property('image');
});

And("devo verificar se o primeiro produto é id 1, Moletom com capuz", () => {
  const listadeProduto = response.body.products[0];
  expect(listadeProduto).to.have.property('id', 1);
  expect(listadeProduto).to.have.property('name').that.includes('Moletom com capuz');
  expect(listadeProduto).to.have.property('price', 59);
  expect(listadeProduto).to.have.property('image').that.includes('imagem1.jpeg');
})

//ID_010
Given('que eu queira obter a lista de produtos cadastrados', () => {
});

When("eu enviar uma requisição GET para /produtos", () => {
  cy.api({
    method: "GET",
    url: 'http://localhost:3000/api/produtos?page=1&limit=5',
  }).then((res) => {
    response = res;
  });
});

Then("o status code deverá ser 200", () => {
  expect(response.status).to.be.eq(200);
});

And("o response deve exibir um objeto com a lista de produtos cadastrados, contendo Id, Name, Description, Price, Image.", () => {
  expect(response.body).to.have.property("products");
  const listadeProduto = response.body.products[0];
  expect(listadeProduto).to.have.property('id');
  expect(listadeProduto).to.have.property('name');
  expect(listadeProduto).to.have.property('description');
  expect(listadeProduto).to.have.property('price');
  expect(listadeProduto).to.have.property('image');
});

//ID_011
Given('que eu queira obter detalhes do produto ID 8', () => {
});

When("eu enviar uma requisição GET para /produtos id", () => {
  cy.api({
    method: "GET",
    url: 'http://localhost:3000/api/produtos/8',
  }).then((res) => {
    response = res;
  });
});

Then("o status code deverá ser 200", () => {
  expect(response.status).to.be.eq(200);
});

And("o response deve exibir um objeto com detalhes do produto ID 8, contendo Id, Name, Description, Price, Image.", () => {
  expect(response.body).to.have.property('id', 8);
  expect(response.body).to.have.property('name', 'Xícara Const');
  expect(response.body).to.have.property('description', 'Xícara em porcelana. Capacidade: 270ml.');
  expect(response.body).to.have.property('price', 40);
  expect(response.body).to.have.property('image', 'images/produtos/imagem8.jpeg');
});

And("devo verificar se o preço do produto é maior que zero", () => {
  expect(response.body.price).to.be.greaterThan(0);
});

//TODO: Cria uma custom command para reaproveitar código e deixar-lo mais limpo.