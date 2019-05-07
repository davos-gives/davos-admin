import Controller from '@ember/controller';
import { computed } from '@ember/object';
import {inject as service} from '@ember/service';


export default Controller.extend({

  provinces: ["AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "QC", "SK", "PE"],

  session: service('session'),

  actions: {
    saveAddress(attrs) {
      const address = this.store.createRecord('address', attrs);

      address.save()
      .then(() => {
        this.transitionToRoute('account');
        this.toast.success("You've successfully created a new address",'Creation Successful');
      });
    },

    updateProvince(province) {
      this.set('model.province', province);
    },

    cancel() {
      this.transitionToRoute('account');
    }
  }
});
