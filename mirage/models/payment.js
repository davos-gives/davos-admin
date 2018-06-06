import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  recurring: belongsTo(),
  relationship: belongsTo(),
});
