import DS from 'ember-data';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';


export default DS.Model.extend(LoadableModel,{
  // type: DS.attr(),
  lastFourDigits: DS.attr(),
  expiry: DS.attr(),
  primary: DS.attr(),
  cardType: DS.attr(),
  donor: DS.belongsTo('donor'),
});
