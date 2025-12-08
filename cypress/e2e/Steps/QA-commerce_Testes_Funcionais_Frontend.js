/// <reference types = 'Cypress' />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/Steps";
import { alterarCamposCheckout } from "../../support/function_Altera_Body";
import campo from "../../support/localizadores_QA-commerce";

//ID_001
Given('que eu esteja logado no site QA-commerce', () => {
  cy.visit(campo.LOGIN.SITE);
  cy.get(campo.MENU.MINHA_CONTA).click();
  cy.get(campo.LOGIN.EMAIL).type('emaildaautomacao@teste.com');
  cy.get(campo.LOGIN.SENHA).type('Senha1234*');
  cy.get(campo.LOGIN.BTN_LOGIN).click();
  cy.get(campo.LOGIN.NOME_DO_USUÁRIO).should('be.visible');
  cy.get(campo.LOGIN.BTN_LOGOUT).should('be.visible');
});

When('eu adicionar produtos ao carrinho', () => {
  cy.contains(campo.MENU.HOME, 'HOME').click();
  cy.get(campo.PRODUTOS.ADICIONAR_PRODUTO_2_MOLETON_COM_CAPUZ_NA_MINHA_MÁQUINA_FUNCIONA).click();
  cy.get(campo.PRODUTOS.ADICIONAR_PRODUTO_5_GARRFA).click();
  cy.get(campo.PRODUTOS.ADICIONAR_PRODUTO_9_MOLETON_CAPUZ_CONST).click();
  cy.get(campo.PRODUTOS.ADICIONAR_PRODUTO_8_XICARÁ_CONST).click();
  cy.get(campo.PRODUTOS.ADICIONAR_PRODUTO_3_ECOBAG).click();
  cy.contains(campo.PRODUTOS.ALERT_PRODUTO_ADICIONADO_AO_CARRINHO, 'Produto adicionado ao carrinho!').should('be.visible');
});

Then("as informações dos produtos devem ser exibidas no carrinho.", () => {
  cy.contains(campo.MENU.CARRINHO, 'CARRINHO').click();
  cy.reload();
  cy.contains(campo.PRODUTOS.CARD_PRODUTO, 'Moletom com capuz "Na minha máquina funciona"');
  cy.contains(campo.PRODUTOS.CARD_PRODUTO, 'Testar é o único lugar onde falhar é realmente uma vitória!');
  cy.contains(campo.PRODUTOS.CARD_PRODUTO, 'Moletom com capuz "Const"');
  cy.contains(campo.PRODUTOS.CARD_PRODUTO, 'Xícara Const');
  cy.contains(campo.PRODUTOS.CARD_PRODUTO, 'Ecobag "Na minha máquina funciona"');
});

//ID_002
Given('que eu esteja logado no site QA-commerce e tenha os produtos XÍCARA e MOLETON CAPUZ adicionado ao meu carrinho', () => {
  cy.visit(campo.LOGIN.SITE);
  cy.get(campo.MENU.MINHA_CONTA).click();
  cy.get(campo.LOGIN.EMAIL).type('emaildaautomacao@teste.com');
  cy.get(campo.LOGIN.SENHA).type('Senha1234*');
  cy.get(campo.LOGIN.BTN_LOGIN).click();
  cy.get(campo.LOGIN.NOME_DO_USUÁRIO).should('be.visible');
  cy.get(campo.LOGIN.BTN_LOGOUT).should('be.visible');
  //Adicionando produtos ao carrinho para deixar o cenário independente.
  cy.contains(campo.MENU.HOME, 'HOME').click();
  cy.get(campo.PRODUTOS.ADICIONAR_PRODUTO_3_ECOBAG).click();
  cy.get(campo.PRODUTOS.ADICIONAR_PRODUTO_9_MOLETON_CAPUZ_CONST).click();
  cy.contains(campo.PRODUTOS.ALERT_PRODUTO_ADICIONADO_AO_CARRINHO, 'Produto adicionado ao carrinho!').should('be.visible');
});

When('eu clicar em REMOVER produtos do carrinho, deverá exibir a seguinte mensagem: Produto removido do carrinho.', () => {
  cy.contains(campo.MENU.CARRINHO, 'CARRINHO').click();
  cy.get(campo.PRODUTOS.REMOVER_PRODUTO_3_ECOBAG).click();
  cy.get(campo.PRODUTOS.REMOVER_PRODUTO_9_MOLETON_CAPUZ_CONST).click();
  cy.contains(campo.PRODUTOS.ALERT_PRODUTO_REMOVIDO_DO_CARRINHO, 'Produto removido do carrinho!').should('be.visible');
});

Then("os produtos devem ser removidos do carrinho", () => {
  cy.contains(campo.PRODUTOS.CARD_PRODUTO, 'Moletom com capuz "Const"').should('not.exist');
  cy.contains(campo.PRODUTOS.CARD_PRODUTO, 'Ecobag "Na minha máquina funciona"').should('not.exist');
});

//ID_003
Given('que o usuário tenha produtos adicionados ao carrinho', () => {
  cy.visit(campo.LOGIN.SITE);
  cy.get(campo.MENU.MINHA_CONTA).click();
  cy.get(campo.LOGIN.EMAIL).type('emaildaautomacao@teste.com');
  cy.get(campo.LOGIN.SENHA).type('Senha1234*');
  cy.get(campo.LOGIN.BTN_LOGIN).click();
  cy.get(campo.LOGIN.NOME_DO_USUÁRIO).should('be.visible');
  cy.get(campo.LOGIN.BTN_LOGOUT).should('be.visible');
});

When('eu fizer o chekout', () => {
  cy.contains(campo.MENU.CARRINHO, 'CARRINHO').click();
  cy.contains(campo.SEU_CARRINHO.IR_PARA_CHECKOUT, 'Ir para o Checkout').click();
  cy.get(campo.SEU_CARRINHO.NOME).type('DELVAN DO TESTE');
  cy.get(campo.SEU_CARRINHO.SOBRENOME).type('SANTOS');
  cy.get(campo.SEU_CARRINHO.ENDEREÇO).type('Rua da Automação');
  cy.get(campo.SEU_CARRINHO.NÚMERO).type('41');
  cy.get(campo.SEU_CARRINHO.CEP).type('05281220');
  cy.get(campo.SEU_CARRINHO.TELEFONE).type('11949312525');
  cy.get(campo.SEU_CARRINHO.EMAIL).type('emaildaautomacao@teste.com');
  cy.get(campo.SEU_CARRINHO.CHECK_FORMA_PAGAMENTO).click();
  cy.get(campo.SEU_CARRINHO.NUMERO_CARTÃO).type('5398 5819 0209 5809');
  cy.get(campo.SEU_CARRINHO.VALIDADE).type('01/2027');
  cy.get(campo.SEU_CARRINHO.CVC).type('555');
  cy.get(campo.SEU_CARRINHO.CHECK_TERMOS).click();
  cy.contains(campo.SEU_CARRINHO.FINALIZAR_PEDIDO, 'Finalizar Pedido').click();
});

Then("deverá exibir a seguinte mensagem: STATUS DO PEDIDO", () => {
  cy.get(campo.SEU_CARRINHO.TEXTO_STATUS).should('contain', 'STATUS DO PEDIDO');
  cy.contains(campo.SEU_CARRINHO.TEXTO_PGTO_APROVADO, 'Pagamento aprovado');
  cy.get(campo.SEU_CARRINHO.TEXTO_OBRIGADO).should('contain', 'Obrigado pelo seu pedido DELVAN DO TESTE.');
});

//ID_004
Given("eu esteja logado no site QA-commerce na tela de fazer checkout", () => {
  cy.visit(campo.LOGIN.SITE);
  cy.get(campo.MENU.MINHA_CONTA).click({ force: true });
  cy.get(campo.LOGIN.EMAIL).type('emaildaautomacao@teste.com');
  cy.get(campo.LOGIN.SENHA).type('Senha1234*');
  cy.get(campo.LOGIN.BTN_LOGIN).click();

  cy.contains(campo.MENU.HOME, 'HOME').click({ force: true });
  cy.get(campo.PRODUTOS.ADICIONAR_PRODUTO_2_MOLETON_COM_CAPUZ_NA_MINHA_MÁQUINA_FUNCIONA).click();
  cy.contains(campo.MENU.CARRINHO, 'CARRINHO').click();
});

When("eu deixar campos obrigatórios sem preencher e clicar em finalizar", () => {
  cy.contains(campo.SEU_CARRINHO.IR_PARA_CHECKOUT, 'Ir para o Checkout').click();
  cy.contains(campo.SEU_CARRINHO.FINALIZAR_PEDIDO, 'Finalizar Pedido').click();

});

Then("deverá exibi a seguinte mensagem abaixo de cada campo: Este campo é obrigatório.", () => {
  cy.contains(campo.SEU_CARRINHO.TEXTO_CAMPOS_OBRIGATÓRIO, 'Por favor, preencha todos os campos obrigatório marcados com asteriscos!').should('be.visible');
});

//ID_005
Given("que o usuário Delvan queira alterar seu Nome e Email", () => {
  cy.visit(campo.LOGIN.SITE);
  cy.get(campo.MENU.MINHA_CONTA).click();
  cy.get(campo.LOGIN.EMAIL).type('emaildaautomacao@teste.com');
  cy.get(campo.LOGIN.SENHA).type('Senha1234*');
  cy.get(campo.LOGIN.BTN_LOGIN).click({ force: true });
  cy.reload();
});

When("inserir os novos dados e clicar em Atualizar", () => {
  cy.get(campo.MENU.MINHA_CONTA).click();
  cy.get(campo.LOGIN.EMAIL).type('emaildaautomacao@teste.com');
  cy.get(campo.LOGIN.SENHA).type('Senha1234*');
  cy.get(campo.LOGIN.BTN_LOGIN).click({ force: true });
  cy.get(campo.CADASTRO.BTN_ATUALIZAR_CADASTRO).click();
  cy.get(campo.CADASTRO.NOVO_NOME).type('DELVAN DA AUTOMAÇÃO');
  cy.get(campo.CADASTRO.NOVO_EMAIL).type('emaildaautomacao2@teste2.com');
  cy.get(campo.CADASTRO.NOVA_SENHA).type('Senha12345*');
  cy.get(campo.CADASTRO.BTN_SALVAR_ATUALIZAÇÃO).click();

});

Then("deverá exibir a seguinte mensagem: Usuário atualizado com sucesso.", () => {
  cy.contains(campo.CADASTRO.MSG_USUÁRIO_ATUALIZADO, 'Usuário atualizado com sucesso!').should('be.visible');
});


