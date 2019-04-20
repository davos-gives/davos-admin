import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findRecord('donor', "me", {
     include: 'addresses,vaultCards'
    });
  }
});
