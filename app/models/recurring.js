import DS from 'ember-data';
import { computed } from '@ember/object';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';


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

  paymentDates: computed('payments.@each.date', function() {
    return this.get('payments').mapBy('date');
  }),
});
