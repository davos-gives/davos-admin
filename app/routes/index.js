import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from "@ember/service";

export default Route.extend(AuthenticatedRouteMixin,{
  session: service('session'),
  currentDonor: service('current-donor'),

  model() {
    return this.store.loadRecord('donor', 'me', {
     include: ''
    });
  }
});
