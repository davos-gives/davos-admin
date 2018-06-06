export default function(server) {

  window.server = server;

  // Setting up User
  let donor = server.create('donor', {
    first: "Ian",
    last: "Knauer",
  });

  let visa = server.create('card', {
    donor: donor,
    primary: 'true',
  });

  let mastercard = server.create('card', {
    donor: donor,
    type: 'mastercard',
    number: '4444',
    expiry: '10/21'
  });

  let home = server.create('address', {
    donor: donor,
    name: "Home",
    address1: "1120 thomson road",
    postalCode: "V3H 4X9",
    city: "Anmore",
    country: "Canada",
    province: "BC",
    primary: 'true',
  });

  let school = server.create('address', {
    donor: donor,
    name: "School",
    address1: "685 Great Northern Way",
    postalCode: "V5T 0C6",
    city: "Vancouver",
    country: "Canada",
    province: "BC",
  });

  // Set up organizations
  let spca = server.create('organization', {
    name: 'BC SPCA',
  });

  let vgh = server.create('organization', {
    name: 'the VGH & UBC Hospital Foundation',
  });

  // Set up donor-organization-relationships

  let spcaRelationship = server.create('relationship', {
    donor: donor,
    organization: spca,
  });

  let vghRelationship = server.create('relationship', {
    donor: donor,
    organization: vgh,
  })


  // Set up campaigns

  let coats = server.create('campaign', {
    description: "Warm coats for a cold winter",
    organization: spca,
  });

  let beds = server.create('campaign', {
    description: "New chairs for the Emergency waiting room",
    organization: vgh,
  });

  // setting up gifts

  let vghRecurringGift = server.create('recurring', {
    amount: 500,
    frequency: "monthly",
    startDate: new Date(2018, 1, 15),
    campaign: beds,
    card: visa,
    relationship: vghRelationship,
  });

  server.create('payment', {
    date: new Date(2018, 1, 15),
    amount: 500,
    recurring: vghRecurringGift,
    relationship: vghRelationship,
  });

  server.create('payment', {
    date: new Date(2018, 2, 15),
    amount: 500,
    recurring: vghRecurringGift,
    relationship: vghRelationship,
  });

  server.create('payment', {
    date: new Date(2018, 3, 15),
    amount: 500,
    recurring: vghRecurringGift,
    relationship: vghRelationship,
  });

  server.create('payment', {
    date: new Date(2018, 4, 15),
    amount: 500,
    recurring: vghRecurringGift,
    relationship: vghRelationship,
  });

  server.create('payment', {
    date: new Date(2018, 5, 15),
    amount: 500,
    recurring: vghRecurringGift,
    relationship: vghRelationship,
  });

  let spcaRecurringGift = server.create('recurring', {
    amount: 1000,
    frequency: "monthly",
    startDate: new Date(2018, 3, 15),
    campaign: coats,
    card: visa,
    relationship: spcaRelationship,
  });

  let vghRecurringGift2 = server.create('recurring', {
    amount: 1000,
    frequency: "monthly",
    startDate: new Date(2018, 3, 15),
    campaign: beds,
    card: visa,
    relationship: vghRelationship,
  });

  server.create('recurring', {
    amount: 1000,
    frequency: "monthly",
    startDate: new Date(2018, 4, 15),
    campaign: coats,
    card: visa,
    relationship: spcaRelationship,
  });

  server.create('payment', {
    date: new Date(2017, 9, 15),
    amount: 500,
    recurring: spcaRecurringGift,
    relationship: spcaRelationship,
  });

  server.create('payment', {
    date: new Date(2017, 10, 15),
    amount: 500,
    recurring: spcaRecurringGift,
    relationship: spcaRelationship,
  });

  server.create('payment', {
    date: new Date(2018, 11, 15),
    amount: 500,
    recurring: spcaRecurringGift,
    relationship: spcaRelationship,
  });
}
