import Component from '@ember/component';

export default Component.extend({

  provinces: Object.freeze(["AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "QC", "SK", "PE"]),

  doubleConfirmCancel: false,

  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      name: this.get('address.name'),
      address_1: this.get('address.address_1'),
      address_2: this.get('address.address_2'),
      postal_code: this.get('address.postal_code'),
      city: this.get('address.city'),
      province: this.get('address.province'),
      primary: this.get('address.primary')
    })
  },

  actions: {
    updateProvince(province) {
      this.set('province', province);
    },

    onCancel() {
      this.onCancel();
    },

    doubleConfirmCancel() {
      this.set('doubleConfirmCancel', true);
    },

    saveAddress() {

      this.onsubmit({
        name: this.name,
        address_1: this.address_1,
        address_2: this.address_2,
        postal_code: this.postal_code,
        city: this.city,
        province: this.province,
        primary: this.primary
      })
    },

    undoCancellation() {
      this.set('doubleConfirmCancel', false);
    },

    deleteAddress() {
      this.deleteAddress();
    }
  }
});
