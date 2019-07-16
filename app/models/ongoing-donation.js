import DS from 'ember-data';
import { computed } from '@ember/object';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';

export default DS.Model.extend(LoadableModel, {
  amount: DS.attr(),
  DonorOrganizationRelationship: DS.belongsTo('donor-organization-relationship'),
  frequency: DS.attr(),
  status: DS.attr(),
  createdAt: DS.attr(),
  campaign: DS.belongsTo('campaign'),
  payments: DS.hasMany('payment'),
  donor: DS.belongsTo('donor'),
  vaultCard: DS.belongsTo('vault-card'),
  referenceNumber: DS.attr(),
  totalPayments: computed('donations.@each.amount', function() {
    return this.get('donations').mapBy('amount').reduce((a, b) => a + b, 0);
  }),
});
