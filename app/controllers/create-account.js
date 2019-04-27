import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    createAccount(attrs) {
      let donor = this.store.createRecord('donor', {
        fname: attrs.fname,
        lname: attrs.lname,
        password: attrs.password,
        passwordConfirmation: attrs.passwordConfirmation,
        email: attrs.email
      })

      donor.save()
        .then(() => {
          this.transitionToRoute('verify-account')
        })
    }
  }
});
