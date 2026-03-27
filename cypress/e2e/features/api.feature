Feature: Testes de API
  
  # 201 se for criado com sucesso, ou apresenta 400 se o email já existir
  Scenario: Criar usuário (POST)
    When eu faço uma requisição POST para "/api/users" com:
      | nome  | Joao           |
      | email | Joao@email.com |
      | senha |         123456 |
    Then o status code deve ser 201
    And a resposta deve conter "Usuário criado com sucesso."

  Scenario: Adicionar um produto ao carrinho (POST)
    When faço uma requisição POST para "/api/carrinho" com:
      | userId    | 3 |
      | productId | 9 |
      | quantity  | 1 |
    Then o status code deve ser 201 com mensagem "Produto adicionado ao carrinho com sucesso."
    # Pode ser 201 ou 200 de acordo se o recurso é criado ou atualizado   

  Scenario: Obter detalhes de um produto (GET)
    When faço uma requisição GET para "/api/produtos/1":
    Then Retorna o status code 200 e detalhes do produto:
      | productId   |                                                                                    1 |
      | name        | Moletom com capuz "Se você acha que nada é impossível..."                            |
      | description | Moletom com capuz preto fabricado com tecido de alta qualidade e caimento impecável. |
      | price       |                                                                                59.00 |
    # Pode ser 201 ou 200 de acordo se o recurso é criado ou atualizado
