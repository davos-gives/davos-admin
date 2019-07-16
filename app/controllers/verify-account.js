import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ["email", "token"],
  email: null,
  token: null,
});
