import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return `Barks & Meows shelter`;
  },

  logo() {
    return `/img/barks.png`
  }

});
