import DS from 'ember-data';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';


export default DS.Model.extend(LoadableModel,{
  timestamp: DS.attr('date'),
  amount: DS.attr(),
  campaign: DS.belongsTo('campaign'),
  recurring: DS.belongsTo('recurring'),
  relationship: DS.belongsTo('relationship'),
});
