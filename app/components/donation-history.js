import Component from '@ember/component';
import {inject} from '@ember/service';
import { computed } from '@ember/object';


export default Component.extend({

  init() {
    this._super(...arguments);
    let payments = this.get('payments');
    this.set('filteredPayments', payments);
  },

  store: inject('store'),
  years: ["2018", "2017", "2016", "2015", "2014", "All"],
  filter: 'All',
  filteredPayments: [],

  SortingDesc: Object.freeze(['timestamp:desc']),
  orderedFilteredPayments: computed.sort('filteredPayments', 'SortingDesc'),

  actions: {
    filterByYear(year) {
      this.set('filter', year);
      let payments = this.get('payments');

      if(this.get('filter') == "All") {
        this.set('filteredPayments', payments);
      } else {
        let filter = payments.filter(payment =>  new Date(payment.get('createdAt')) > new Date(this.get('filter'), 1, 1, 0, 0, 0) && new Date(payment.get('createdAt')) <= new Date(this.get('filter'), 12, 31, 0, 0, 0));
        this.set('filteredPayments', filter);
      }
    }
  }
});
