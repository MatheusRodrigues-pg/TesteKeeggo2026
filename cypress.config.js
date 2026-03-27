const { defineConfig } = require("cypress")
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature", //configura o padrão de arquivos de teste para reconhecer arquivos com extensão .feature
    baseUrl: "http://localhost:3000",

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config) //integra o plugin de pré-processamento do Cucumber com o Cypress habilitando a execução de testes escritos em formato Gherkin

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      )

      return config
    },
    env: {
      stepDefinitions: "cypress/e2e/step_definitions/**/*.{js,ts}", //configura o caminho para os arquivos de definição de passos do Cucumber, permitindo que o Cypress encontre e execute os testes corretamente
    },
  },
})