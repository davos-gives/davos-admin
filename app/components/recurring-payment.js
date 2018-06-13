import Component from '@ember/component';

export default Component.extend({

  classNames: ["w-full"],

  paymentAmountOptions:  [1000, 2000, 3000],
  paymentFrequencyOptions: ["Daily", "Weekly", "Bi-Weekly", "Monthly"],

  paymentAmount: 0,
  paymentFrequency: '',
  card: null,
  "on-save": null,

  isEditing: false,
  amountEdited: false,
  frequencyEdited: false,
  cardEdited: false,

  didReceiveAttrs() {
    this._super(...arguments);
    this.resetRecurring();
  },

  resetRecurring() {
    let amount = this.get('recurring.amount');
    let frequency = this.get('recurring.frequency');
    let card = this.get('recurring.card');

    this.set('paymentAmount', amount);
    this.set('paymentFrequency', frequency);
    this.set('card', card);
  },

  actions: {
    createPayment(payment) {
      this.set('isEditing', true);
      this.set('paymentAmount', payment*100);
      this.set('amountEdited', true);
    },

    updatePayment(payment) {
      this.set('isEditing', true);
      this.set('paymentAmount', payment);
      this.set('amountEdited', true);
    },

    customSuggestion(term) {
      return `Change to ${term} dollars`;
    },

    updateFrequency(frequency) {
      this.set('isEditing', true);
      this.set('paymentFrequency', frequency);
    },

    updateCard(card) {
      this.set('isEditing', true);
      this.set('card', card);
    },

    saveRecurring() {
      this.set('amountEdited', false);
      let recurring = this.get('recurring');
      recurring.setProperties({
        amount: this.get('paymentAmount'),
        frequency: this.get('paymentFrequency'),
        card: this.get('card')
      });
      return this.attrs['on-save'](recurring);
    },

    toggleSave() {
      let previous = this.get('isEditing')
      this.set('isEditing', !previous);
    },

    toggleFocus() {
      this.set('isEditing', true);
    },

    focusOff() {
      this.set('isEditing', false);
    }
  }
});
