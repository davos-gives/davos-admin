import { Factory, faker } from 'ember-cli-mirage';

faker.locale = 'en_CA';

export default Factory.extend({
  name() {
    return 'home';
  },
  address1() {
    return faker.address.streetAddress();
  },
  postalCode() {
    return faker.address.zipCode();
  },
  city() {
    return faker.address.city();
  },
  country() {
    return 'Canada';
  },
  province() {
    return faker.address.state();
  },
  primary() {
    return 'false'
  },
});
