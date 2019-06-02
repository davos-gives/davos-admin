import Controller from '@ember/controller';
import { computed } from '@ember/object';
import {inject as service} from '@ember/service';


export default Controller.extend({
  currentDonor: service('current-donor'),
  session: service('session'),

  activeDonations: computed('model.ongoingDonations.@each.status', function(){
    return this.get('model.ongoingDonations').filter(ongoing => ongoing.get('status') == "active")
  }),

  actions: {
    saveAddress(model) {
      model.save()
      .then(() => this.toast.success("You've successfully updated your mailing address",'Updated Successfully'))
    },

    logout(ev) {
      ev.preventDefault();
      this.get('session').invalidate();
    }
  }
});
