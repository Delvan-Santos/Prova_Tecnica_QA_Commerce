Feature: QA-commerce: Validação dos fluxos funcionais
  Como usuário do site QA-commerce 
  Quero adicionar Produtos ao Carrinho
  Para poder comprar 

  Background: Acessando a página

  @ID_001 @Teste_API
  #Rule: Adicionar um produto
  Scenario: Adicionando Produto ao Carrinho
    Given que eu acesse a API do QA-commerce para adicionar produtos ao carrinho
    When eu enviar uma requisição POST para /carrinho
    Then o status code deverá ser 201
    And exibirá a seguinte mensagem: Produto adicionado ao carrinho com sucesso.

  @ID_002 @Teste_API
  #Rule: Deve adicionar mais que um produto.
  Scenario Outline: Adicionando vários Produtos ao Carrinho
    Given que eu acesse a API do QA-commerce para adicionar vários produtos ao carrinho
    When eu enviar uma requisição POST para /carrinho com userId <userId> , productId <productId> e quantity <quantity>
    Then o status code deverá ser 201
    And exibirá a seguinte mensagem: Produto adicionado ao carrinho com sucesso.

    Examples:
      | userId | productId          | quantity|
      | "2"    | "Dinânicos"        | "25"    |
      | "2"    | "Dinânicos"        | "30"    |
      | "5"    | "Dinânicos"        | "35"    |
      | "5"    | "Dinânicos"        | "40"    |

@ID_003 @Teste_API
#Rule: Todo os campos devem ser preenchidos
  Scenario: Finalizar Checkout
    Given que eu tenha produtos adicionados ao carrinho
    When eu enviar uma requisição POST para /checkout
    Then o status code deverá ser 201, e exibirá um response com ID e orderNumber

@ID_004 @Teste_API
#Rule: O campo e-mail deve conter um e-mail válido Ex: email@.com
  Scenario: Finalizar Checkout com email inválido
    Given que eu tenha produtos adicionados ao carrinho
    When eu enviar uma requisição POST para /checkout, e o campo email conter um email inválido
    Then o status code deverá ser 400, e exibirá a seguinte mensagem: Deve ser um e-mail inválido.

@ID_005 @Teste_API
#Rule: O campo CEP deve conter 8 caracteres
  Scenario: Finalizar Checkout com campo CEP diferente de 8 caracteres
    Given que eu tenha produtos adicionados ao carrinho
    When eu enviar uma requisição POST para /checkout, e o campo CEP for diferente de 8 caracteres 
    Then o status code deverá ser 400, e exibirá a seguinte mensagem: O comprimento deve ser de 8 caracteres.

@ID_006 @Teste_API
#Rule: Todos os campos são obrigatórios e devem ser preenchidos.
  Scenario: Finalizar Checkout com algum campo vazio
    Given que eu tenha produtos adicionados ao carrinho
    When eu enviar uma requisição POST para /checkout, e houver algum campo vazio 
    Then o status code deverá ser 400, e exibirá a seguinte mensagem: Campo X Não pode estar vazio.

@ID_007 @Teste_API
#Rule: O campo cardExpiry não pode conter letras.
  Scenario: Finalizar Checkout com campo cardExpiry contendo letras
    Given que eu tenha produtos adicionados ao carrinho
    When eu enviar uma requisição POST para /checkout, e o campo cardExpiry tiver letras 
    Then o status code deverá ser 400, e exibirá a seguinte mensagem: O valor MMAAAA não corresponde ao padrão exigido

@ID_008 @Teste_API
#Rule: O email não pode ser cadastrado duas.
  Scenario: Finalizar Checkout com e-mail ja cadastrado.
    Given que eu tenha produtos adicionados ao carrinho
    When eu enviar uma requisição POST para /checkout, com um e-mail já cadastrado 
    Then o status code deverá ser 400, e exibirá a seguinte mensagem: E-mail já registrado. Tente um email diferente

@ID_009 @Teste_API
#Rule: O objeto deve ter todos os campos Id, Name, Description, Price, Image
  Scenario: Lista Produtos
    Given que eu queira obter a lista de produtos cadastrados
    When eu enviar uma requisição GET para /produtos 
    Then o status code deverá ser 200
    And o response deve exibir um objeto com a lista de produtos cadastrados, contendo Id, Name, Description, Price, Image.
  
@ID_010 @Teste_API
#Rule: Usuário deve pegar um produto especifico
  Scenario: Obter detalhes do produto
    Given que eu queira obter detalhes do produto ID 8
    When eu enviar uma requisição GET para /produtos id 
    Then o status code deverá ser 200
    And o response deve exibir um objeto com detalhes do produto ID 8, contendo Id, Name, Description, Price, Image.
    And devo verificar se o preço do produto é maior que zero         


     