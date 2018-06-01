export default function() {

  this.namespace = '/api';

  this.resource('address');
  this.resource('campaign');
  this.resource('relationship');
  this.resource('donor');
  this.resource('organization');
  this.resource('payment');
  this.resource('card');
  this.resource('recurring');

}
