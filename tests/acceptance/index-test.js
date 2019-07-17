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

    this.server.create('donor');

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

  test('total ongoing gifts are summarized at the top of the page', async function(assert) {

    let donor = this.server.create('donor');
    let organization = this.server.create('organization');
    let campaign = this.server.create('campaign', { organization });
    this.server.create('ongoing-donation', {amount: 1000, donor, status: "active", frequency: "weekly", campaign})

    await authenticateSession({
      donorId: this.server.db.donors[0].id,
    });

    await visit('/');

    await percySnapshot('initial index page with active ongoing gift');

    assert.dom('[data-test-id="total donation amount"]').hasText('$10.00')
  });

  test('Ongoing gift displays the correct campaign and gift information', async function(assert) {

    let donor = this.server.create('donor');
    let organization = this.server.create('organization');
    let campaign = this.server.create('campaign', { organization });
    let gift = this.server.create('ongoing-donation', {amount: 1000, donor, status: "active", frequency: "weekly", campaign})

    await authenticateSession({
      donorId: this.server.db.donors[0].id,
    });

    await visit('/');

    assert.dom('[data-test-id="campaign image"]').exists();
    assert.dom('[data-test-id="organization name"]').hasText(organization.name);
    assert.dom('[data-test-id="campaign name"]').hasText(campaign.name);
    assert.dom('[data-test-id="campaign frequency"]').hasText(gift.frequency);

    });

  test('Donor can modify ongoing gift and cancel changes without affecting their gift', async function(assert) {

    let donor = this.server.create('donor');
    let organization = this.server.create('organization');
    let campaign = this.server.create('campaign', { organization });
    this.server.create('ongoing-donation', {amount: 1000, donor, status: "active", frequency: "weekly", campaign})

    await authenticateSession({
      donorId: this.server.db.donors[0].id,
    });

    await visit('/');

    await click('.ember-power-select-trigger');
    await click('[data-option-index="1"]');
    await click('[data-test-id="go back"]');

    assert.equal(this.server.db.ongoingDonations[0].amount, 1000);

  });

  test('Donor can modify ongoing gift and save changes', async function(assert) {

    let donor = this.server.create('donor');
    let organization = this.server.create('organization');
    let campaign = this.server.create('campaign', { organization });
    this.server.create('ongoing-donation', {amount: 1000, donor, status: "active", frequency: "weekly", campaign})

    await authenticateSession({
      donorId: this.server.db.donors[0].id,
    });

    await visit('/');

    await click('.ember-power-select-trigger');
    await click('[data-option-index="1"]');
    await click('[data-test-id="save"]');

    assert.equal(this.server.db.ongoingDonations[0].amount, 2000);
  });
});
