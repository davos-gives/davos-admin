import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { currentSession, authenticateSession, invalidateSession} from 'ember-simple-auth/test-support';
import { setupMirage } from 'ember-cli-mirage/test-support';


module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting index when logged in takes you to directly to page', async function(assert) {

    let donor = this.server.create('donor');

    await authenticateSession({
      donorId: this.server.db.donors[0].id,
    });

    await visit('/');

    assert.equal(currentURL(), '/');

  });

  test('visiting index when logged out redirects you to login page', async function(assert) {

    await visit('/');
    assert.equal(currentURL(), '/login');
  });

  test('ongoing gifts are listed and total amounts are summarized at top of page', async function(assert) {

    let donor = this.server.create('donor');
    let organization = this.server.create('organization');
    let campaign = this.server.create('campaign', { organization });
    this.server.create('ongoing-donation', {amount: 1000, donor, status: "active", frequency: "weekly", campaign})

    await authenticateSession({
      donorId: this.server.db.donors[0].id,
    });

    await visit('/');

    assert.equal(currentURL(), '/');
  });


});
