const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor")
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild")

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    specPattern: "**/*.feature", //indica que os testes serão executados por este arquivo
    setupNodeEvents(on, config) {
      //chamar o pluging:
      addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});
