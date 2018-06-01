import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findRecord('donor', 1, {
     include: 'relationships, relationships.recurrings, relationships.recurrings.campaign, relationships.recurrings.campaign.organization'
    });
  }
});
