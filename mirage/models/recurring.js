import { Model, hasMany, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  card: belongsTo(),
  relationship: belongsTo(),
  campaign: belongsTo(),
  payments: hasMany(),
});
