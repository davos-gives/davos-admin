import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | recurring-payment-mini', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it can fetch recurring payments and display information', async function(assert) {

    let org = this.server.create('organization', { name: "Barks & Meows Shelter" });
    let campaign = this.server.create('campaign', { name: "Help us find a new home", description: "this is my description, it has some words in it!", organization: org, imageUrl: `https://source.unsplash.com/random/?Animals,Pets`});
    let donor = this.server.create('donor', {fname: "Ian", lname: "Knauer"})
    let donorOrg = this.server.create('donor-organization-relationship', {donor: donor, organization: org})
    let donation = this.server.create('ongoing-donation', {donor: donor, amount: 1000, frequency: "weekly", campaign: campaign, DonorOrganizationRelationship: donorOrg })

    this.set('campaign', campaign);
    this.set("organzation", org);
    this.set('donor', donor);
    this.set('DonorOrg', donorOrg);
    this.set('donation', donation);

    await render(hbs`
      {{recurring-payment-mini gift=donation campaign=campaign relationship=donorOrg amount=donation.amount}}
    `);

    assert.dom(`[data-test-id="organization-name"]`).hasText('Barks & Meows Shelter')
    assert.dom(`[data-test-id="campaign-name"]`).hasText('Help us find a new home')
  });

  test('it can update the donation amount', async function(assert) {

    let org = this.server.create('organization', { name: "Barks & Meows Shelter" });
    let campaign = this.server.create('campaign', { name: "Help us find a new home", description: "this is my description, it has some words in it!", organization: org, imageUrl: `https://source.unsplash.com/random/?Animals,Pets`});
    let donor = this.server.create('donor', {fname: "Ian", lname: "Knauer"})
    let donorOrg = this.server.create('donor-organization-relationship', {donor: donor, organization: org})
    let donation = this.server.create('ongoing-donation', {donor: donor, amount: 1000, frequency: "weekly", campaign: campaign, DonorOrganizationRelationship: donorOrg })

    let saveRecurring = function() {
      assert.step('triggers update function after changing value')
    }

    this.set('campaign', campaign);
    this.set("organzation", org);
    this.set('donor', donor);
    this.set('DonorOrg', donorOrg);
    this.set('donation', donation);
    this.set('saveRecurring', saveRecurring);

    await render(hbs`
      {{recurring-payment-mini gift=donation campaign=campaign relationship=donorOrg amount=donation.amount on-save=(action saveRecurring)}}
    `);

    await click(`.ember-power-select-trigger`)
    await click(`[data-option-index="1"]`)

    assert.verifySteps(['triggers update function after changing value'])
  });
});
