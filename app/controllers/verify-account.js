import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';


export default Controller.extend({
  queryParams: ["email", "token"],
  email: null,
  token: null,
});
