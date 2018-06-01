import DS from 'ember-data';

export default DS.Model.extend({
  amount: DS.attr(),
  frequency: DS.attr(),
  startDate: DS.attr(),
  card: DS.belongsTo('card'),
  relationship: DS.belongsTo('relationship'),
  campaign: DS.belongsTo('campaign'),
  payments: DS.hasMany('payments'),
});
