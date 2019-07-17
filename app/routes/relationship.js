import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.store.loadRecord('donor-organization-relationship', params.id, {
     include: 'organization,ongoing-donations,ongoing-donations.campaign,ongoing-donations.vault-card,donor,payments,payments.campaign',
    });
  }
});
