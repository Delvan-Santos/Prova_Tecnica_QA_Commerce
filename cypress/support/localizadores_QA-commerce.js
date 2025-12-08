const localizadores = {
       LOGIN: {
              SITE: 'http://localhost:3000/',
              EMAIL: '#email',
              SENHA: '#password',
              BTN_LOGIN: '#login-form > button',
              NOME_DO_USUÁRIO: '#user-name',
              BTN_LOGOUT: '#logout-button',
       },

       MENU: {
              MINHA_CONTA: '#account-link',
              CARRINHO: '#header a',
              HOME: '#header a',
       },

       PRODUTOS: {
              ADICIONAR_PRODUTO_2_MOLETON_COM_CAPUZ_NA_MINHA_MÁQUINA_FUNCIONA: 'button.add-to-cart[data-id="2"]',
              ADICIONAR_PRODUTO_5_GARRFA: 'button.add-to-cart[data-id="5"]',
              ADICIONAR_PRODUTO_9_MOLETON_CAPUZ_CONST: 'button.add-to-cart[data-id="9"]',
              ADICIONAR_PRODUTO_8_XICARÁ_CONST: 'button.add-to-cart[data-id="8"]',
              ADICIONAR_PRODUTO_3_ECOBAG: 'button.add-to-cart[data-id="3"]',
              ALERT_PRODUTO_ADICIONADO_AO_CARRINHO: '#alert-container',
              ALERT_PRODUTO_REMOVIDO_DO_CARRINHO: '#alert-container',
              CARD_PRODUTO: '#cart-list legend',
              REMOVER_PRODUTO_3_ECOBAG: '[data-product-id="3"]',
              REMOVER_PRODUTO_9_MOLETON_CAPUZ_CONST: '[data-product-id="9"]',
       },

       SEU_CARRINHO: {
              IR_PARA_CHECKOUT: '#totals a',
              NOME: '#first-name',
              SOBRENOME: '#last-name',
              ENDEREÇO: '#address',
              NÚMERO: '#number',
              CEP: '#cep',
              TELEFONE: '#phone',
              EMAIL: '#email',
              CHECK_FORMA_PAGAMENTO: '#payment-card',
              NUMERO_CARTÃO: '#card-number',
              VALIDADE: '#card-expiry',
              CVC: '#card-cvc',
              CHECK_TERMOS: '#terms',
              FINALIZAR_PEDIDO: '#checkout-form button',
              TEXTO_STATUS: '#app > h1',
              TEXTO_PGTO_APROVADO: '#order-status strong',
              TEXTO_OBRIGADO: '#order-status > h4',
              TEXTO_CAMPOS_OBRIGATÓRIO: '#alert-container p',
       },

       CADASTRO: {
              BTN_ATUALIZAR_CADASTRO: '#update-account-button',
              NOVO_NOME: '#name',
              NOVO_EMAIL: '#email',
              NOVA_SENHA: '#password',
              BTN_SALVAR_ATUALIZAÇÃO: '#user-form > div.d-flex.justify-content-between > button.btn.btn-primary',
              MSG_USUÁRIO_ATUALIZADO: '#message',
       }
}
export default localizadores;



