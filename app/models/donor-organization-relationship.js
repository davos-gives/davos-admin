import DS from 'ember-data';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';

export default DS.Model.extend(LoadableModel,{

  donor: DS.belongsTo('donor'),
  organization: DS.belongsTo('organization'),
  ongoingDonations: DS.hasMany('ongoing-donation'),
  payments: DS.hasMany('payment'),
  yearlyDonations: DS.attr(),
  lifetimeDonations: DS.attr(),
  createdAt: DS.attr(),
});
