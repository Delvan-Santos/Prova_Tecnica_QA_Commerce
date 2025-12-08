const { defineConfig } = require("Cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
      //env: { TAGS: "@focus" },
        setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
