import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | donor-organization-relationship', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:donor-organization-relationship');
    assert.ok(route);
  });
});
