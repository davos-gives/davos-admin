import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  number: DS.attr(),
  expiry: DS.attr(),
  primary: DS.attr(),
  recurrings: DS.hasMany('recurring'),
});
