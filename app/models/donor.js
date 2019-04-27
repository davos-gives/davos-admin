import DS from 'ember-data';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';
import {computed} from '@ember/object';


export default DS.Model.extend(LoadableModel,{
  fname: DS.attr(),
  lname: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  passwordConfirmation: DS.attr(),
  relationships: DS.hasMany('donor-organization-relationships'),
  campaign: DS.belongsTo('campaign'),
  addresses: DS.hasMany('address'),
  ongoingDonations: DS.hasMany('ongoing-donations'),
  donations: DS.hasMany('ongoing-donations'),
  vaultCards: DS.hasMany('vault-card'),
  totalDonations: computed('ongoingDonations.@each.amount', function() {
    return this.get('ongoingDonations').mapBy('amount').reduce((a, b) => a + b, 0);
  }),
});
