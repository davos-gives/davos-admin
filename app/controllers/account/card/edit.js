import Controller from '@ember/controller';
import { computed } from '@ember/object';
import {inject as service} from '@ember/service';


export default Controller.extend({

  actions: {
    saveVaultCard(attrs) {
      this.model.setProperties(attrs);

      this.model.save().then(() => {
        this.transitionToRoute('account');
        this.toast.success(`You've successfully updated your ${attrs.name} address`,'Update Successful');
      })
    },

    deleteVaultCard() {
      let address = this.get("model")

      address.destroyRecord().then(() => {
        this.transitionToRoute('account');
        this.toast.success(`You've successfully deleted the address`,'Deletion Successful');

      })
    },

    onCancel(ev) {
      this.transitionToRoute('account');
    }
  }
});
