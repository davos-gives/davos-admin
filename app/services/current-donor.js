import Service, {inject as service} from "@ember/service";

export default Service.extend({
  store: service('store'),

  load() {
    this.get('store').queryRecord('donor', {me: true})
      .then((donor) => {
        this.set('donor', donor);
      })
  }
})
