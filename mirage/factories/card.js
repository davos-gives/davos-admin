import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  type() {
    return `Visa`;
  },

  number() {
    return `4242-4242-4242-4242`;
  },

  expiry() {
    return `09/19`;
  },

  primary() {
    return 'false';
  },
});
