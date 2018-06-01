import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  donor: belongsTo(),
  organization: belongsTo(),
  recurrings: hasMany(),
});
