import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('donorOrganizationRelationship', params.id, {
     include: 'recurringPayments,recurringPayments.payments,organization'
    });
  }
});
