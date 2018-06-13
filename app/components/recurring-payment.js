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
    this.set('amountEdited', false);
    this.set('frequencyEdited', false);
    this.set('cardEdited', false);
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
      this.set('amountEdited', false);
      this.set('frequencyEdited', false);
      this.set('cardEdited', false);
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
      this.resetRecurring();
      this.set('isEditing', false);
    }
  }
});
