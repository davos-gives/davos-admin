import Controller from '@ember/controller';


export default Controller.extend({

  actions: {
    saveAddress(attrs) {
      this.model.setProperties(attrs);

      this.model.save().then(() => {
        this.transitionToRoute('account');
        this.toast.success(`You've successfully updated your ${attrs.name} address`,'Update Successful');
      })
    },

    deleteAddress() {
      let address = this.get("model")

      address.destroyRecord().then(() => {
        this.transitionToRoute('account');
        this.toast.success(`You've successfully deleted the address`,'Deletion Successful');

      })
    },

    onCancel() {
      this.transitionToRoute('account');
    }
  }
});
