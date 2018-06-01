import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  description: DS.attr(),
  organization: DS.belongsTo('organization'),
  recurrings: DS.hasMany('recurring'),
});
