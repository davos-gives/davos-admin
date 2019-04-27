import Component from '@ember/component';

export default Component.extend({
  didRecieveAttrs() {
    this._super(...arguments);

    this.setProperties({
      password: this.get('model.password'),
      passwordConfirmation: this.get('model.passwordConfirmation'),
    });
  }
  ,
  actions: {
    reset(ev) {
      ev.preventDefault();

      this.onsubmit({
        password: this.password,
        passwordConfirmation: this.passwordConfirmation,
      });
    }
  }
});
