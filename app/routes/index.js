import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.loadRecord('donor', 'me', {
     include: 'ongoing-donations,ongoing-donations.campaign,ongoing-donations.campaign.organization,ongoing-donations.donor-organization-relationship'
    });
  }
});
