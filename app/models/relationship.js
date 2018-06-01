import DS from 'ember-data';

export default DS.Model.extend({
  donor: DS.belongsTo('donor'),
  organization: DS.belongsTo('organization'),
  recurrings: DS.hasMany('recurring'),

  // computed
  // FirstSupportedDate
  // Yearly Total
  // Lifetime Total
});
