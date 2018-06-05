import DS from 'ember-data';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';


export default DS.Model.extend(LoadableModel,{
  donor: DS.belongsTo('donor'),
  organization: DS.belongsTo('organization'),
  recurrings: DS.hasMany('recurring'),

  // computed
  // FirstSupportedDate
  // Yearly Total
  // Lifetime Total
});
