import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findRecord('donor', 1, {
     include: 'addresses,storedCards'
    });
  }
});
