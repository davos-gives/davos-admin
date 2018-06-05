import DS from 'ember-data';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';
import {computed} from '@ember/object';


export default DS.Model.extend(LoadableModel,{
  first: DS.attr(),
  last: DS.attr(),
  relationships: DS.hasMany('relationship'),
  addresses: DS.hasMany('address'),
  cards: DS.hasMany('card'),
  donorRecurringTotal: computed('relationships.@each.relationshipRecurringMonthlyTotal', function() {
    return this.get('relationships').mapBy('relationshipRecurringMonthlyTotal').reduce((a, b) => a + b, 0);
  }),
});
