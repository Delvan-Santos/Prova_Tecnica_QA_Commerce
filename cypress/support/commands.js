Cypress.Commands.add('gerarUsuario', () => {
  const user = {
    nomeAleatório: `DELVAN TESTER_${Date.now()}`,
    emailAleatório: `delvanautomacao_${Date.now()}@mail.com`,
    senhaAleatória: Math.random().toString(36).slice(-10),
  };

  return user;
});