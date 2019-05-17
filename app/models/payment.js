import DS from 'ember-data';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';


export default DS.Model.extend(LoadableModel,{
  amount: DS.attr(),
  campaign: DS.belongsTo('campaign'),
  ongoingDonation: DS.belongsTo('ongoing-donation'),
  relationship: DS.belongsTo('relationship'),
  createdAt: DS.attr(),
  receipt: DS.belongsTo("receipt"),
});
