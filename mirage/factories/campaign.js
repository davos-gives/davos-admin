import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  description() {
    return faker.company.bsBuzz();
  }
});
