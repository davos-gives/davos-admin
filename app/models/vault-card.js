import DS from 'ember-data';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';


export default DS.Model.extend(LoadableModel,{
  // type: DS.attr(),
  lastFourDigits: DS.attr(),
  expiryMonth: DS.attr(),
  expiryYear: DS.attr(),
  primary: DS.attr(),
  cardType: DS.attr(),
  donor: DS.belongsTo('donor'),
  name: DS.attr(),
  ongoingDonations: DS.hasMany('ongoing-donation'),
});
