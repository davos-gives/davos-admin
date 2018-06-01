import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  date() {
    return "2018/15/01";
  },
  amount() {
    return "500";
  },
});
