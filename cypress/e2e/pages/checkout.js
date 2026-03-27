class Checkout {
  validarExbicaoPaginaCheckout() { //valida se a URL da página de checkout é a esperada
    cy.url().should("equal", "http://localhost:3000/checkout.html")
  }
  preencherCamposObrigatórios(dados) { 
    cy.contains("label", "Nome").type(dados.nome)
    cy.contains("label", "Sobrenome").type(dados.sobrenome)
    cy.contains("label", "Endereço").type(dados.endereço)
    cy.contains("label", "Número").type(dados.numero)
    cy.contains("label", "CEP").type(dados.cep)
    cy.contains("label", "Email").type(dados.email)
  }
  checkFormaPagamento(forma) { 
    cy.contains(forma).click()
  }
  preencherDadosCartao() { 
    cy.get("#card-number").type("4111 1111 1111 1111")
    cy.get("#card-expiry").type('12/25')
    cy.get("#card-cvc").type('123')
  }

  validarMensagem(msg) { 
    cy.contains(msg).should("be.visible")
  }

  validarMensagemErro() { 
    cy.get("#alert-container").should("be.visible").and("contain", "Por favor, preencha todos os campos obrigatório marcados com asteriscos!")
    cy.get("#first-name").closest("div").should("contain", "Este campo é obrigatório.")
    cy.get("#last-name").closest("div").should("contain", "Este campo é obrigatório.")
    cy.get("#address").closest("div").should("contain", "Este campo é obrigatório.")
    cy.get("#number").closest("div").should("contain", "Este campo é obrigatório.")
    cy.get("#cep").closest("div").should("contain", "Este campo é obrigatório.")
    cy.get("#cep").closest("div").should("contain", "O CEP deve ter 8 caracteres.")
    cy.get("#email").closest("div").should("contain", "Este campo é obrigatório.")
    cy.get("#email").closest("div").should("contain", "Por favor, insira um email válido.")
    cy.get("#terms").closest("div").should("contain", "Este campo é obrigatório.")
  } 

}
export default new Checkout()