import Component from '@ember/component';

export default Component.extend({

  cryptogram: "",

  init() {
    this._super(...arguments);
    const script = document.createElement("script");
    script.src = "https://secure-v.goemerchant.com/secure/PaymentHostedForm/Scripts/firstpay/firstpay.cryptogram.js";
    script.id = "firstpay-script-cryptogram";
    script.setAttribute("data-transcenter", "209141");
    script.setAttribute("data-processor", "201173");
    script.setAttribute("data-cvv", "TRUE");
    script.setAttribute("data-type", "Vault");
    script.setAttribute("data-autosubmit", "TRUE");
    script.setAttribute("data-styleEmbed", "FALSE");


    document.body.appendChild(script);

    this.set('boundHandleFrameTasks', this.get('handleFrameTasks').bind(this));
  },

  willInsertElement() {
    this._super(...arguments);
    window.addEventListener('message', this.get('boundHandleFrameTasks'), false);
  },

  willDestoyElement() {
    window.removeEventListener('message', this.get('boundHandleFrameTasks'), false);
  },

  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      name: this.get('card.name'),
      primary: this.get('card.primary'),
      cryptogram: this.get('card.cryptogram')
    })
  },

  handleFrameTasks(e) {
    if(e.data.code == 105) {
      this.set('cryptogram', e.data.cryptogram);
    }
  },

  actions: {
    saveVaultCard() {
      this.onsubmit({
        name: this.name,
        primary: this.primary,
        cryptogram: this.cryptogram
      })
    },

    onCancel(ev) {
      this.onCancel();
    },
  }

});
