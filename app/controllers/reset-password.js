import Controller from '@ember/controller';

import { inject as service } from '@ember/service';
import fetch from 'fetch';
import { resolve } from 'rsvp';
import { getOwner } from "@ember/application";

export default Controller.extend({

  session: service('session'),

  init() {
    this._super(...arguments);
    const adapter = getOwner(this).lookup('adapter:application');

    this.accountVerification = `${adapter.buildURL('reset-password')}`;
    this.headers = { 'Content-Type': 'application/vnd.api+json' };
  },

  async sendPasswordResetRequest(email) {
    let url = `${this.accountVerification}`
    let headers = this.headers;
    let body = JSON.stringify({ email });
    return await(await fetch(url, {method: "PUT", body, headers}))
  },

  actions: {
    requestPassword(attrs) {
      this.sendPasswordResetRequest(attrs.email)
        .then(() => this.toast.success("You've successfully requested your password reset. Check your email inbox for a link and instructions on how to reset your password", "Success!"))
    }
  }
});
