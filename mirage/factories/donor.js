import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  first() {
    return faker.name.firstName();
  },

  last() {
    return faker.name.lastName();
  }
});
