import Controller from '@ember/controller';
import { computed } from '@ember/object';
import {inject as service} from '@ember/service';


export default Controller.extend({

  session: service('session'),
  currentDonor: service('current-donor'),

  actions: {
    saveAddress(model) {
      model.save()
      .then(() => this.toast.success("You've successfully updated your mailing address",'Updated Successfully'))
    },

    saveVaultCard(model) {
      model.save()
      .then(() => this.toast.success("You've successfully updated your payment information",'Updated Successfully'))
    },

    logout(ev) {
      console.log("clicking");
      ev.preventDefault();
      this.get('session').invalidate();
    }
  }
});
