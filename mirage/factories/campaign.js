import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

  name() {
    return `Help us find a new home`;
  },

  description() {
    return `After 18 years in the same location, the Barks & Meows Shelter is facing a move. In addition to finding a suitable location that will permit us to continue our work, major renovations and modifications may well be required. You can assist us in our quest to raise funds by giving to our campaign.<br/><br />Help our shelter reach our goal; our survival is in your hands. Now more than ever we need your involvement so that our quest of helping abandoned animals can continue.`;
  },

  imageUrl() {
    return `/img/dogs.jpg`
  }

});
