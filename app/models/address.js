import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  address1: DS.attr(),
  postalCode: DS.attr(),
  city: DS.attr(),
  provice: DS.attr(),
  country: DS.attr(),
  primary: DS.attr(),
});
