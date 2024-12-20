import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {},
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    pageLoadTimeout: 60000,
    viewportWidth: 1440,
    viewportHeight: 2560,
  },
});