var { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
import Produtos from '../pages/produtos' //importa as classes para acessar os métodos relacionados
import Carrinho from '../pages/carrinho'

Given(`que o usuário está na página de produtos`, () => {
    Produtos.acessar()
})

When(`ele adiciona o produto ao carrinho:`, (dataTable) => {
    const produto = dataTable.rowsHash()
    Produtos.adicionarCarrinho(produto.nome)
})

Then(`o carrinho deve exibir corretamente:`, (dataTable) => {
    const esperado = dataTable.rowsHash()
    Produtos.validarQuantidadeNav(esperado.quantidade)
    Produtos.acessarCarrinho()
    Carrinho.validarQuantidadeCarrinho(esperado.nome)
    Carrinho.validarPreco(esperado.nome, esperado.preco)
})

