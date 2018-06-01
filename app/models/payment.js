import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr(),
  amount: DS.attr(),
  recurring: DS.belongsTo('recurring'),
});
