import Component from '@ember/component';
import { computed } from '@ember/object';


export default Component.extend({

  classNames: ["w-full"],

  paymentAmount: 0,
  paymentFrequency: '',
  card: null,
  "on-save": null,

  isEditing: false,
  amountEdited: false,
  frequencyEdited: false,
  cardEdited: false,
  updated: false,
  confirmCancel: false,
  doubleConfirmCancel: false,

  didInsertElement() {
    this._super(...arguments);
    this.resetAddress();
  },

  resetAddress() {
    this.set("name", this.get("address.name"));
    this.set("address_1", this.get('address.address_1'));
    this.set("address_2", this.get('address.address_2'));
    this.set("postal_code", this.get('address.postal_code'));
    this.set("city", this.get('address.city'));
    this.set("province", this.get('address.province'));
    this.set("country", this.get('address.country'));
    this.set("primary", this.get('address.primary'));

    this.set('amountEdited', false);
    this.set('frequencyEdited', false);
    this.set('cardEdited', false);
    this.set('confirmCancel', false);
    this.set('doubleConfirmCancel', false);
  },

  showUpdated() {
    this.set('updated', true);
    setTimeout( () => {
      this.set('updated', false);
    }, 3000);
  },

  actions: {
    saveAddress() {
      this.set('isEditing', false);
      this.set('amountEdited', false);
      this.set('frequencyEdited', false);
      this.set('cardEdited', false);
      this.showUpdated();

      let address = this.get('address');
      address.setProperties({
        name: this.get('name'),
        address_1: this.get('address_1'),
        address_2: this.get('address_2'),
        postal_code: this.get('postal_code'),
        city: this.get('city'),
        province: this.get('province'),
        country: this.get('country'),
        primary: this.get('primary'),
      });
      return this.attrs['on-save'](address);
    },

    toggleSave() {
      let previous = this.get('isEditing');
      this.set('isEditing', !previous);
    },

    confirmCancel() {
      this.set('confirmCancel', true);
    },

    doubleConfirmCancel() {
      this.set('doubleConfirmCancel', true);
    },

    cancelRecurring() {

      let address = this.get('address');
      address.deleteRecord();
      address.save().then(() => {
        this.set('isEditing', false);
      });
    },

    undoCancellation() {
      this.set('confirmCancel', false);
      this.set('doubleConfirmCancel', false);
    },

    toggleFocus() {
      this.set('isEditing', true);
      this.set('updated', false);

    },

    focusOff() {
      // this.resetRecurring();
      console.log("focusing off");
      this.set('isEditing', false);
    },
  }
});
