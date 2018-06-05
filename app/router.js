import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('recurring-payment');
  this.route('account');
  this.route('relationship', {path: "/organization/:id"});
});

export default Router;
