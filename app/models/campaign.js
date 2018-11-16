import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  name: DS.attr(),
  description: DS.attr(),
  organization: DS.belongsTo('organization'),
  ongoingDonations: DS.hasMany('ongoing-donations'),
});
