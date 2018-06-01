import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  cards: hasMany('card'),
  addresses: hasMany(),
  relationships: hasMany(),
});
