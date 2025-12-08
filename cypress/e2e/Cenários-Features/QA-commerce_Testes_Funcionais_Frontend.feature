Feature: QA-commerce: Validação dos fluxos funcionais a nivel de frontend
  Como usuário do site QA-commerce 
  Quero adicionar Produtos ao Carrinho
  Para poder comprar 

  @ID_001 @Frontend
  Scenario: Adicionando Produto ao Carrinho via Frontend
    Given que eu esteja logado no site QA-commerce
    When eu adicionar produtos ao carrinho
    Then as informações dos produtos devem ser exibidas no carrinho.

  @ID_002 @Frontend
  Scenario: Remover proutos do carrinho
    Given que eu esteja logado no site QA-commerce e tenha os produtos XÍCARA e MOLETON CAPUZ adicionado ao meu carrinho
    When eu clicar em REMOVER produtos do carrinho, deverá exibir a seguinte mensagem: Produto removido do carrinho.
    Then os produtos devem ser removidos do carrinho

  @ID_003 @Frontend
  Scenario: Checkout Simples
    Given que o usuário tenha produtos adicionados ao carrinho
    When eu fizer o chekout
    Then deverá exibir a seguinte mensagem: STATUS DO PEDIDO

  @ID_004 @Frontend
  Scenario: Validar campos obrigatórios
    Given eu esteja logado no site QA-commerce na tela de fazer checkout
    When eu deixar campos obrigatórios sem preencher e clicar em finalizar
    Then deverá exibi a seguinte mensagem abaixo de cada campo: Este campo é obrigatório.

  @ID_005 @Frontend
  Scenario: Atualizar cadastro
    Given que o usuário Delvan queira alterar seu Nome e Email
    When inserir os novos dados e clicar em Atualizar
    Then deverá exibir a seguinte mensagem: Usuário atualizado com sucesso.
