import DS from 'ember-data';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';


export default DS.Model.extend(LoadableModel,{
  url: DS.attr(),
  payment: DS.belongsTo("payment"),
});
