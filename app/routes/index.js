import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.loadRecord('donor', 'alicechambers', {
     include: 'relationships,relationships.recurrings,relationships.recurrings.campaign,relationships.recurrings.campaign.organization'
    });
  }
});
