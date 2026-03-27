var { Given, When, Then,  } = require('@badeball/cypress-cucumber-preprocessor')

When(`eu faço uma requisição POST para {string} com:`, (arg0, dataTable) => {
    const dados = dataTable.rowsHash()
    cy.request({ 
    method: "POST",
    url: arg0,
    headers: {
        "Content-Type": "application/json",
    },
    body: {
    name: dados.nome,
    email: dados.email,
    password: dados.senha,
    isAdmin: false
    },
    }).as("response")
})

Then(`o status code deve ser {int}`, (arg0) => {
    cy.get("@response").its("status").should("eq", arg0) 
})

Then(`a resposta deve conter {string}`, (arg0) => {
    cy.get("@response").its("body.message").should("eq", arg0)
    cy.get("@response").its("body.id").should("not.be.null")
})

When(`faço uma requisição POST para {string} com:`, (arg0, dataTable) => {
    const dados = dataTable.rowsHash() //converte os dados dataTable da feature em objeto, assim acessando os valores
    cy.request({
    method: "POST",
    url: arg0,
    headers: {
        "Content-Type": "application/json",
    },
    body: {
        userId: dados.userId,
        productId: dados.productId,
        quantity: dados.quantity
    },
    }).as("response")
})

Then(`o status code deve ser {int} com mensagem {string}`, (arg0, arg1) => {
    cy.get("@response").its('status').should('be.oneOf', [200, 201]) //valida se o status code da resposta é 200 ou 201
    cy.get("@response").its("body.message").should("eq", arg1)
})

When(`faço uma requisição GET para {string}:`, (arg0) => {
    cy.request({ 
        method: "GET",
        url: arg0,
        headers: {
            "Content-Type": "application/json",
        },
    }).as("response")
})

Then(`Retorna o status code 200 e detalhes do produto:`, ( dataTable) => {
    const dados = dataTable.rowsHash()
    cy.get("@response").its('status').should('be.oneOf', [200, 201])
    cy.get("@response").its("body.id").should("eq", parseInt(dados.productId))
    cy.get("@response").its("body.name").should("eq", dados.name)
    cy.get("@response").its("body.price").should("eq", parseInt(dados.price))
    cy.get("@response").its("body.description").should("eq", dados.description)
})

