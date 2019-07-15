import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

  fname() {
    return `ian`;
  },

  lname() {
    return `knauer`;
  },

  email() {
    return `ian.knauer@davos.gives`;
  },

});
