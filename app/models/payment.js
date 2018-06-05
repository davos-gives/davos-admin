import DS from 'ember-data';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';


export default DS.Model.extend(LoadableModel,{
  date: DS.attr('date'),
  amount: DS.attr(),
  recurring: DS.belongsTo('recurring'),
});
