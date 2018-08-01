import Component from '@ember/component';
import { computed } from '@ember/object';


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
  updated: false,
  confirmCancel: false,
  doubleConfirmCancel: false,

  futurePayment: computed('recurring.frequency', function(){
    let frequency = this.get('recurring.frequency');
    let timestamp = this.get('recurring.timestamp');
    let date = new Date(timestamp);

    switch(frequency) {
      case "Daily":
        let newDateDailey = date.setDate(date.getDate()+1);
        return newDateDailey;
      case "Weekly":
        let newDateWeekly = date.setDate(date.getDate()+7);
        return newDateWeekly;
      case "Bi-Weekly":
        let newDateBiWeekly = date.setDate(date.getDate()+14);
        return newDateBiWeekly;
      case "Monthly":
        let newDateMonthly = date.setMonth(date.getMonth()+1);
        return newDateMonthly;
    }
  }),

  didInsertElement() {
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
    this.set('confirmCancel', false);
    this.set('doubleConfirmCancel', false);
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

      let recurring = this.get('recurring');
      recurring.setProperties({
        amount: this.get('paymentAmount'),
        frequency: this.get('paymentFrequency'),
        card: this.get('card')
      });
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
