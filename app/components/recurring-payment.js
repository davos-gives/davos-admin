import Component from '@ember/component';

export default Component.extend({

  classNames: ["w-full"],

  paymentOptions:  [1000, 2000, 3500, 5000, 10000],
  selectedPayment: 0,

  actions: {
    createPayment(payment) {
      this.set('selectedPayment', payment*100);
    },

    updatePayment(payment) {
      this.set('selectedPayment', payment);
    },

    customSuggestion(term) {
      return `Change to ${term} dollars`;
    },
  }
});
