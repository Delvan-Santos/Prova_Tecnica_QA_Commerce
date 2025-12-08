export function alterarCamposCheckout(checkout, novosCamposCheckout) {
  const checkoutAlterado = { ...checkout };

  for (const campo in novosCamposCheckout) {
    checkoutAlterado[campo] = novosCamposCheckout[campo];
  }

  return checkoutAlterado;
}