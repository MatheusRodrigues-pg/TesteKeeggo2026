var { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
import Produtos from '../pages/produtos' //importa as classes para acessar os métodos relacionados aos produtos
import Carrinho from '../pages/carrinho'
import Checkout from '../pages/checkout'

Given(`possui um produto no carrinho`, () => {
    Produtos.acessar()
    Produtos.adicionarCarrinho('Moletom com capuz "Na minha máquina funciona"')
    Produtos.acessarCarrinho()
    Carrinho.fazerCheckout()
})

Given(`está na página de checkout`, () => {
    Checkout.validarExbicaoPaginaCheckout()
})

When(`ele preenche os dados obrigatórios:`, (dataTable) => {
    const dados = dataTable.rowsHash()
    Checkout.preencherCamposObrigatórios(dados)
})

When(`seleciona o método de pagamento {string}`, (arg0) => {
    Checkout.checkFormaPagamento(arg0)
    Checkout.preencherDadosCartao()
})

Then(`confirma a compra`, () => {
    cy.get("#terms").check()
    cy.contains("Finalizar Pedido").click()
})

Then(`deve ser finalizado com sucesso e exibida a mensagem {string}`, (arg0) => {
    Checkout.validarMensagem(arg0)
})

When(`ele tenta confirmar a compra sem preencher os dados obrigatórios`, () => {
    cy.contains("Finalizar Pedido").click()
})

Then(`deve ser exibida uma mensagem de erro em cada um dos campos obrigatórios que estão faltando`, () => {
    Checkout.validarMensagemErro()
})