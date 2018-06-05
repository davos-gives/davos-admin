import DS from 'ember-data';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';


export default DS.Model.extend(LoadableModel,{
  amount: DS.attr(),
  frequency: DS.attr(),
  startDate: DS.attr(),
  card: DS.belongsTo('card'),
  relationship: DS.belongsTo('relationship'),
  campaign: DS.belongsTo('campaign'),
  payments: DS.hasMany('payments'),
});
