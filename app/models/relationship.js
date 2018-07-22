import DS from 'ember-data';
import { computed } from '@ember/object';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';
import moment from 'moment';


export default DS.Model.extend(LoadableModel,{

  donor: DS.belongsTo('donor'),
  organization: DS.belongsTo('organization'),
  recurrings: DS.hasMany('recurring'),
  donations: DS.hasMany('donations'),

  relationshipRecurringMonthlyTotal: computed('recurrings.@each.amount', function() {
    return this.get('recurrings').mapBy('amount').reduce((a, b) => a + b, 0);
  }),

  totalDonations: computed('donations.@each.amount', function() {
    return this.get('donations').mapBy('amount').reduce((a, b) => a + b, 0);
  }),

  yearlyPayments: computed('donations.@each.timestamp', function() {
    let year = new Date().getFullYear();
    return this.get('donations').filter(donation => donation.get('timestamp') > new Date(2018, 1, 1));
  }),

  totalYearlyPayments: computed('yearlyPayments', function() {
    return this.get('yearlyPayments').mapBy('amount').reduce((a, b) => a + b, 0);
  }),

  allPaymentDates: computed('donations.@each.timestamp', function() {
    return this.get('donations').mapBy('timestamp');
  }),

  earliestPaymentDate: computed.min('allPaymentDates'),

  formattedPaymentDate: computed('earliestPaymentDate', function() {
    let time = this.get('earliestPaymentDate');
    time = (time-(time%1000))/1000;
    return moment.unix(time).format();
  }),
});
