import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Route.extend(AuthenticatedRouteMixin,{

  model() {
    return RSVP.hash({
      addresses: this.store.findAll('address'),
      vaultCards: this.store.findAll('vault-card'),
    })
  }
});
