import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { authenticateSession } from 'ember-simple-auth/test-support';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { percySnapshot } from 'ember-percy';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting index when logged in takes you to directly to page', async function(assert) {

    let donor = this.server.create('donor');
    let organization = this.server.create('organization');
    this.server.create('donor-organization-relationship', { donor, organization });

    await authenticateSession({
      donorId: this.server.db.donors[0].id,
    });

    await visit('/organization/1');
    assert.equal(currentURL(), '/organization/1');
  });

  test('visiting relationships when logged out takes you to login page', async function(assert) {

    await visit('/organization/1');
    assert.equal(currentURL(), '/login');
  });

  test('Previous payments show in list with receipt download', async function(assert) {

    let donor = this.server.create('donor');
    let organization = this.server.create('organization');
    let campaign = this.server.create('campaign', { organization });
    let relationship = this.server.create('donor-organization-relationship', { donor, organization, yearlyDonations: 3000, lifetimeDonations: 10000 });
    this.server.create('payment', { amount: 3000, campaign, relationship });

    await authenticateSession({
      donorId: this.server.db.donors[0].id,
    });

    await visit('/organization/1');

    assert.dom('[data-test-id="payment amount"]').hasText("$30.00")
    assert.dom('[data-test-id="payment campaign"]').hasText(campaign.name)
  });
});
