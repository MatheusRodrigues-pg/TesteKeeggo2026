class Produtos {

  acessar() { 
    cy.visit("")
    cy.get('#app').should('be.visible') 
  }

  acessarCarrinho() { 
    cy.get('.nav-link').contains('CARRINHO').click() 
  }

  adicionarCarrinho(nomeProduto) { //localiza o produto pelo nome, encontra o botão "Adicionar ao Carrinho" mais próximo
    cy.contains(nomeProduto).closest(".card-body").find("button").click()
  }

  validarQuantidadeNav(quantidade) {
    cy.get('#cart-count').contains(quantidade)
  }

}

export default new Produtos()