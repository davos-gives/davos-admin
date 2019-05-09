import Controller from '@ember/controller';
import { computed } from '@ember/object';
import {inject as service} from '@ember/service';


export default Controller.extend({

  session: service('session'),

  actions: {
    saveVaultCard(attrs) {
      const vaultCard = this.store.createRecord('vault-card', attrs);

      vaultCard.save()
      .then(() => {
        this.transitionToRoute('account');
        this.toast.success("You've successfully added a new payment method",'Creation Successful');
      });
    },

    onCancel() {
      this.transitionToRoute('account');
    }
  }
});
