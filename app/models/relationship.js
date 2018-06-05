import DS from 'ember-data';
import { computed } from '@ember/object';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';
import moment from 'moment';


export default DS.Model.extend(LoadableModel,{

  donor: DS.belongsTo('donor'),
  organization: DS.belongsTo('organization'),
  recurrings: DS.hasMany('recurring'),

  relationshipRecurringMonthlyTotal: computed('recurrings.@each.amount', function() {
    return this.get('recurrings').mapBy('amount').reduce((a, b) => a + b, 0);
  }),

  totalDonations: computed('reccurings.@each.totalPayments', function() {
    return this.get('recurrings').mapBy('totalPayments').reduce((a, b) => a + b, 0);
  }),

  allPaymentDates: computed('recurrings.@each.paymentDates', function() {
    return this.get('recurrings').mapBy('paymentDates').reduce((a, b) => a.concat(b));
  }),

  earliestPaymentDate: computed.min('allPaymentDates'),

  formattedPaymentDate: computed('earliestPaymentDate', function() {
    let time = this.get('earliestPaymentDate');
    time = (time-(time%1000))/1000;
    return moment.unix(time).format();
  })

  // computed
  // FirstSupportedDate
  // Yearly Total
  // Lifetime Total
});
