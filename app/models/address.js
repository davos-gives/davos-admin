import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  address_1: DS.attr(),
  address_2: DS.attr(),
  postal_code: DS.attr(),
  city: DS.attr(),
  province: DS.attr(),
  country: DS.attr(),
  primary: DS.attr(),
});
