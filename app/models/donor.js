import DS from 'ember-data';

export default DS.Model.extend({
  first: DS.attr(),
  last: DS.attr(),
  relationships: DS.hasMany('relationship'),
  addresses: DS.hasMany('address'),
  cards: DS.hasMany('card'),

  // total giving this month: this is going to be calculated based on the recurring payments
});
