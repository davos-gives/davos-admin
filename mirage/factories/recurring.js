import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  amount() {
    return "3000";
  },

  frequency() {
    return "monthly"
  },

  startDate() {
    return "2018/01/01"
  }
});
