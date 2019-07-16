import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from "ember-simple-auth/mixins/unauthenticated-route-mixin";
import fetch from 'fetch';
import { getOwner } from "@ember/application";

export default Route.extend(UnauthenticatedRouteMixin, {

  init() {
    this._super(...arguments);
    const adapter = getOwner(this).lookup('adapter:application');

    this.accountVerification = `${adapter.buildURL('verify-account')}`;
    this.headers = { 'Content-Type': 'application/vnd.api+json' };
  },

  async verifyToken(token) {
    let url = `${this.accountVerification}`
    let headers = this.headers;
    let body = JSON.stringify({ token });
    return await(await fetch(url, {method: "PUT", body, headers})).json();
  },

  queryParams: {
       email: '',
       token: '',
   },

  beforeModel(params) {
    let token = params.queryParams.token;

    this.verifyToken(token)
      .then(this.transitionToRoute('login'))
      .catch(() => {})
 }
})
