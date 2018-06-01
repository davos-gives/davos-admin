import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | recurring-payment', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:recurring-payment');
    assert.ok(route);
  });
});
