import DS from 'ember-data';

export default DS.Model.extend({
  // type: DS.attr(),
  number: DS.attr(),
  expiry: DS.attr(),
  primary: DS.attr(),
  ongoingDonations: DS.hasMany('ongoing-donations'),
  donor: DS.belongsTo('donor'),
});
