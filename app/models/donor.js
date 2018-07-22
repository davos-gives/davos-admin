import DS from 'ember-data';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';
import {computed} from '@ember/object';


export default DS.Model.extend(LoadableModel,{
  fname: DS.attr(),
  lname: DS.attr(),
  relationships: DS.hasMany('relationship'),
  campaign: DS.belongsTo('campaign'),
  addresses: DS.hasMany('address'),
  cards: DS.hasMany('card'),
  recurrings: DS.hasMany('recurring'),
  donations: DS.hasMany('donation'),
  donorRecurringTotal: computed('relationships.@each.relationshipRecurringMonthlyTotal', function() {
    return this.get('relationships').mapBy('relationshipRecurringMonthlyTotal').reduce((a, b) => a + b, 0);
  }),
});
