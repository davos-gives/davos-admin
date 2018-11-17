import Component from '@ember/component';

export default Component.extend({

  classNames: [],

  paymentAmountOptions:  [1000, 2000, 3000],

  paymentAmount: 0,
  "on-save": null,

  isEditing: false,
  amountEdited: false,
  updated: false,

  didReceiveAttrs() {
    this._super(...arguments);
    this.resetRecurring();
  },

  resetRecurring() {
   let amount = this.get('amount');

    this.set('paymentAmount', amount);
    this.set('amountEdited', false);
  },

  showUpdated() {
    this.set('updated', true);
    setTimeout( () => {
      this.set('updated', false);
    }, 3000);
  },

  actions: {
    createPayment(payment) {
      this.set('paymentAmount', payment*100);
      this.set('amountEdited', true);
    },

    updatePayment(payment) {
      this.set('paymentAmount', payment);
      this.set('amountEdited', true);
    },

    customSuggestion(term) {
      return `Change to ${term} dollars`;
    },

    updateFrequency(frequency) {
      this.set('paymentFrequency', frequency);
      this.set('frequencyEdited', true);
    },

    updateCard(card) {
      this.set('card', card);
      this.set('cardEdited', true);
    },

    saveRecurring() {
      this.set('isEditing', false);
      this.set('amountEdited', false);
      this.set('frequencyEdited', false);
      this.set('cardEdited', false);
      this.showUpdated();

      let recurring = this.get('gift');
      recurring.setProperties({
        amount: this.get('paymentAmount'),
      });
      debugger;
      
      return this.attrs['on-save'](recurring);
    },

    toggleSave() {
      let previous = this.get('isEditing');
      this.set('isEditing', !previous);
    },

    confirmCancel() {
      this.set('confirmCancel', true);
    },

    doubleConfirmCancel() {
      this.set('doubleConfirmCancel', true);
    },

    cancelRecurring() {
      this.get('recurring').destroyRecord().then(() => {
        this.set('isEditing', false);
      });
    },

    undoCancellation() {
      this.set('confirmCancel', false);
      this.set('doubleConfirmCancel', false);
    },

    toggleFocus() {
      this.set('isEditing', true);
      this.set('updated', false);

    },

    focusOff() {
      this.resetRecurring();
      this.set('isEditing', false);
    },
  }
});
