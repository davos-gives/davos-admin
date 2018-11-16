import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
  session: service('session'),
  currentDonor: service('current-donor'),

  actions: {
    logout(ev) {
      console.log("clicking");
      ev.preventDefault();
      this.get('session').invalidate();
    }
  }
});
