import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { inject as service } from "@ember/service";


export default Route.extend(ApplicationRouteMixin, {
  session: service('session'),
  currentDonor: service('current-donor'),

  beforeModel() {
    this._super(...arguments);
    this.loadDonor();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this.loadDonor();
  },

  sessionInvalidated() {
    window.location.replace('/login');
  },

  loadDonor() {
    if(this.get('session.isAuthenticated')) {
      this.get('currentDonor').load();
    }
  },


});
