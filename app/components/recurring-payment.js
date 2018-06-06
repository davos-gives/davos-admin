import Component from '@ember/component';

export default Component.extend({

  classNames: ["w-full"],

  paymentAmountOptions:  [1000, 2000, 3500, 5000, 10000],
  paymentFrequencyOptions: ["Daily", "Weekly", "Bi-Weekly", "Monthly"],


  actions: {
    createPayment(payment) {
      this.set('recurring.amount', payment*100);
    },

    updatePayment(payment) {
      this.set('selectedPayment', payment);
    },

    customSuggestion(term) {
      return `Change to ${term} dollars`;
    },

    updateCard(card) {
      let recurring = this.get('recurring');
      recurring.set('cards', card)
    },
  }
});
