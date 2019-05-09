import Component from '@ember/component';

export default Component.extend({

  cryptogram: "",

  init() {
    this._super(...arguments);
    const script = document.createElement("script");
    script.src = "https://secure-v.goemerchant.com/restgw/cdn/cryptogram.min.js";
    script.id = "checkout-js";
    script.setAttribute("data-transcenter", "209141");
    script.setAttribute("data-processor", "201173");
    script.setAttribute("data-cvv", "TRUE");
    script.setAttribute("data-type", "Vault");
    script.setAttribute("data-autosubmit", "TRUE");

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
    if(e.data != "") {
      this.set('cryptogram', e.data);
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
