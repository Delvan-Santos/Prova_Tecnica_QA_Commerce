import './commands'
require('@cypress/xpath')
import  'cypress-plugin-api'
Cypress.on('uncaught:exception', () => {
  return false;
});