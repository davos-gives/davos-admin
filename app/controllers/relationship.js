import Controller from '@ember/controller';
import { computed } from '@ember/object';
import {inject as service} from '@ember/service';

export default Controller.extend({
  session: service('session'),

  activeDonations: computed('model.ongoingDonations.@each.status', function(){
    return this.get('model.ongoingDonations').filter(ongoing => ongoing.get('status') == "active")
  }),

  actions: {
    saveRecurring(model) {
      model.save();
    },

    logout(ev) {
      ev.preventDefault();
      this.get('session').invalidate();
    }
  }
});
