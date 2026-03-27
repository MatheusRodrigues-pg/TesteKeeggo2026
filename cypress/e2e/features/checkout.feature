Feature: Checkout
  
  # Cenário de fundo para garantir que o usuário tenha um produto no carrinho e esteja na página de checkout antes de cada cenário
  Background:
    Given possui um produto no carrinho
    And está na página de checkout
  
  # Cenário para testar o fluxo de finalização de compra com preenchimento correto dos dados
  Scenario: Finalizar checkout preenchendo todos os dados corretamente
    When ele preenche os dados obrigatórios:
      | nome      | João        |
      | sobrenome | Silva       |
      | endereço  | Rua A, 123  |
      | numero    |        1234 |
      | cep       |    12345678 |
      | email     | 123@123.com |
    And seleciona o método de pagamento "Cartão de Crédito"
    And confirma a compra
    And deve ser finalizado com sucesso e exibida a mensagem "Agradecemos a sua preferência!"

  # Cenário para testar a validação de campos obrigatórios no checkout
  Scenario: Mensagem de erro ao tentar finalizar checkout sem preencher os dados obrigatórios
    When ele tenta confirmar a compra sem preencher os dados obrigatórios
    Then deve ser exibida uma mensagem de erro em cada um dos campos obrigatórios que estão faltando
