import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  image() {
    return faker.image.image();
  },

  description() {
    return faker.company.bsBuzz();
  }
});
