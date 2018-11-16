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
    login(ev) {
      console.log("running?!")
      ev.preventDefault();

      this.onsubmit({
        email: this.email,
        password: this.password
      });
    }
  }
});
