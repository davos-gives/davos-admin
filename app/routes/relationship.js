import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').loadRecord('relationship', params.id, {
     include: 'organization, donor, recurrings, recurrings.donations, recurrings.campaign, donations, recurrings.card, donor.cards, donations.campaign',
    });
  }
});
