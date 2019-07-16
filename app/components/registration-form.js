import Component from '@ember/component';

export default Component.extend({
  didRecieveAttrs() {
    this._super(...arguments);

    this.setProperties({
      email: this.get('model.email'),
      password: this.get('model.password'),
      passwordConfirmation: this.get('model.passwordConfirmation'),
      fname: this.get('model.fname'),
      lname: this.get('model.lname'),
    });
  }
  ,
  actions: {
    login(ev) {
      ev.preventDefault();

      this.onsubmit({
        email: this.email,
        password: this.password,
        passwordConfirmation: this.passwordConfirmation,
        fname: this.fname,
        lname: this.lname
      });
    }
  }
});
