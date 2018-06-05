import DS from 'ember-data';
import { computed } from '@ember/object';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';
import moment from 'moment';



export default DS.Model.extend(LoadableModel,{
  amount: DS.attr(),
  frequency: DS.attr(),
  startDate: DS.attr(),
  card: DS.belongsTo('card'),
  relationship: DS.belongsTo('relationship'),
  campaign: DS.belongsTo('campaign'),
  payments: DS.hasMany('payments'),

  totalPayments: computed('payments.@each.amount', function() {
    return this.get('payments').mapBy('amount').reduce((a, b) => a + b, 0);
  }),

  yearlyPayments: computed('payments.@each.date', function() {
    let year = new Date().getFullYear();
    return this.get('payments').filter(payment => payment.get('date') > new Date(2018, 1, 1));
  }),

  totalYearlyPayments: computed('yearlyPayments', function() {
    return this.get('yearlyPayments').mapBy('amount').reduce((a, b) => a + b, 0);
  }),

  paymentDates: computed('payments.@each.date', function() {
    return this.get('payments').mapBy('date');
  }),
});
