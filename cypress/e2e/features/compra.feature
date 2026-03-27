Feature: Carrinho de Compras

  Background:
    Given que o usuário está na página de produtos

  # Cenário para testar a adição de um produto ao carrinho e a exibição correta dos detalhes do produto no carrinho
  Scenario: Adicionar produto ao carrinho com validação completa
    When ele adiciona o produto ao carrinho:
      | nome      | Moletom com capuz "Se você acha que nada é impossível..." |
      | preco     | 59.00     |
      | quantidade| 1         |
    Then o carrinho deve exibir corretamente:
      | nome      | Moletom com capuz "Se você acha que nada é impossível..." |
      | preco     | 59.00     |
      | quantidade| 1         |