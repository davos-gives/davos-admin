import Component from '@ember/component';

export default Component.extend({


  doubleConfirmCancel: false,

  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      name: this.get('card.name'),
      expiryMonth: this.get('card.expiryMonth'),
      expiryYear: this.get('card.expiryYear'),
      cardType: this.get('card.cardType'),
      lastFourDigits: this.get('card.lastFourDigits'),
      primary: this.get('card.primary')
    })
  },

  actions: {

    onCancel() {
      this.onCancel();
    },

    doubleConfirmCancel() {
      this.set('doubleConfirmCancel', true);
    },

    saveVaultCard() {

      this.onsubmit({
        name: this.name,
        expiryMonth: this.expiryMonth,
        expiryYear: this.expiryYear,

      })
    },

    undoCancellation() {
      this.set('doubleConfirmCancel', false);
    },

    deleteVaultCard() {
      this.deleteVaultCard();
    }
  }
});
