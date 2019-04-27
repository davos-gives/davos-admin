import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import fetch from 'fetch';
import { resolve } from 'rsvp';
import { getOwner } from "@ember/application";

export default Controller.extend({
  queryParams: ["token"],
  token: null,

  init() {
    this._super(...arguments);
    const adapter = getOwner(this).lookup('adapter:application');

    this.passwordReset = `${adapter.buildURL('donors/reset-password')}`;
    this.headers = { 'Content-Type': 'application/vnd.api+json' };
  },

  async resetPassword(token, password, passwordConfirmation) {
    let url = `${this.passwordReset}`
    let headers = this.headers;
    let body = JSON.stringify({ token, password, passwordConfirmation });
    return await(await fetch(url, {method: "PUT", body, headers}))
  },

  actions: {
    reset(attrs) {
      let token = this.token;
      this.resetPassword(token, attrs.password, attrs.passwordConfirmation)
      .then(() => this.toast.success("You've successfully reset your password! Log in with your new credentials to access your account.", "Success!"))
      .then(() => this.transitionToRoute('login'))

    }
  }
});
