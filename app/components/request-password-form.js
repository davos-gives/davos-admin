import Component from '@ember/component';

export default Component.extend({
  didRecieveAttrs() {
    this._super(...arguments);

    this.setProperties({
      email: this.get('donor.email'),
      password: this.get('donor.password'),
    });
  }
  ,
  actions: {
    requestPassword(ev) {
      ev.preventDefault();

      this.onsubmit({
        email: this.email,
      });
    }
  }
});
