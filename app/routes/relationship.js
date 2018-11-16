import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.loadRecord('donor-organization-relationship', params.id, {
     include: 'ongoing-donations,ongoing-donations.campaign,donor,donor.payment-methods',
    });
  }
});
