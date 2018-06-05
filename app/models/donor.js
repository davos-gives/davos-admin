import DS from 'ember-data';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';


export default DS.Model.extend(LoadableModel,{
  first: DS.attr(),
  last: DS.attr(),
  relationships: DS.hasMany('relationship'),
  addresses: DS.hasMany('address'),
  cards: DS.hasMany('card'),

  // total giving this month: this is going to be calculated based on the recurring payments
});
