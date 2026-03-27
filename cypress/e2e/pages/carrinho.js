class Carrinho {
  
  validarQuantidadeCarrinho(nomeProduto) {
    cy.contains(nomeProduto).closest(".cart-item").find("p").should("contain", "1")
  }
  
  validarPreco(nomeProduto, preco) { //valida se o preço do produto no carrinho é igual ao esperado
    cy.contains(nomeProduto).closest(".cart-item").find("p").should("contain", preco)
  }
  
  fazerCheckout() {
    cy.contains("Ir para o Checkout").click()
  }

}
export default new Carrinho()