import Component from '@ember/component';
import {inject} from '@ember/service';

export default Component.extend({

  init() {
    this._super(...arguments);
    let payments = this.get('payments');
    this.set('filteredPayments', payments);
  },

  store: inject('store'),
  years: ["All", "2014", "2015", "2016", "2017", "2018"],
  filter: 'All',
  filteredPayments: [],

  actions: {
    filterByYear(year) {
      this.set('filter', year);
      let payments = this.get('payments');

      if(this.get('filter') == "All") {
        this.set('filteredPayments', payments);
      } else {
        let filter = payments.filter(payment => payment.get('date') > new Date(this.get('filter'), 1, 1) && payment.get('date') <= new Date(this.get('filter'), 12, 31));
        this.set('filteredPayments', filter);
      }
    }
  }
});
