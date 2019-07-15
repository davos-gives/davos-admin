import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  logo: DS.attr(),
  campaigns: DS.hasMany('campaign'),

});
