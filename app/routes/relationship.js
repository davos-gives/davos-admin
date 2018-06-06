import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').loadRecord('relationship', params.id, {
     include: 'organization,donor,recurrings,recurrings.payments,recurrings.campaign,payments,recurrings.card,donor.cards',
    });
  }
});
