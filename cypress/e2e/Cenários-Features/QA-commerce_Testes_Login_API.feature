Feature: QA-commerce: Validação da seção de login e cadastro de usuário
  Como usuário do site QA-commerce 
  Quero me cadastrar e logar no site
  Para poder efetuar compras de produtos 

  Background: Acessando a página

  @ID_001 @Teste_API
  Scenario: Criando novo usuários
    Given que eu acesse a API do QA-commerce para cadastrar usuários
    When eu enviar uma requisição POST para /users Criar um novo usuário
    Then cenário 1: O status code deverá ser 201
    And exibirá a seguinte mensagem: Usuário criado com sucesso.

  @ID_002 @Teste_API
  Scenario: Criando novo usuário com e-mail ja cadastrado
    Given que eu acesse a API do QA-commerce para cadastrar usuários
    When eu enviar uma requisição POST para /users, com um e-mail já cadastrado.
    Then o status code deverá ser 400
    And exibirá a seguinte mensagem: Email já cadastrado.

  @ID_003 @Teste_API
  Scenario: Criando novo usuário com e-mail incorreto ou inválido
    Given que eu acesse a API do QA-commerce para cadastrar novo usuário com seguinte body
    When eu enviar uma requisição POST para /users Criar um novo usuário, com um e-mail incorreto ou inválido.
    Then o status code deverá ser 400
    And exibirá a seguinte mensagem: Email inválido.

  @ID_004 @Teste_API
  Scenario: Fazendo login com com sucesso
    Given que eu quero fazer login com usuário João do Teste
    When eu enviar uma requisição POST para /login, com email e senha corretos
    Then cenário 4: O status code deverá ser 200
    And no response deverá exibi o ID, Nome e Token do usuário

  @ID_005 @Teste_API
  Scenario: Fazendo login com apenas o e-mail incorreto ou inválido
    Given que eu acesse a API do QA-commerce com um email incorreto
    When eu enviar uma requisição POST para /login, com email incorreto ou inválido
    Then cenário 5: O status code deverá ser 401
    And deverá exibir a seguinte mensagem: Email ou senha incorretos.

  @ID_006 @Teste_API
  Scenario: Fazendo login com apenas a senha incorreta
    Given que eu acesse a API do QA-commerce com uma SENHA incorreta
    When eu enviar uma requisição POST para /login, com a SENHA incorreta
    Then o status code deverá ser 401
    And deverá exibir a seguinte mensagem: Email ou senha incorretos.

  @ID_007 @Teste_API
  Scenario: Lista usuários cadastrados
    Given que eu acesse a API do QA-commerce para ver todos usuários cadastrados
    When eu enviar uma requisição GET para /users
    Then cenário 7: O status code deverá ser 200
    And deverá exibir um response com a lista de todos os usuários, contendo ID, NAME, EMAIL e isAdmin.
