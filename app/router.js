import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ongoing-donation');
  this.route('account', function() {
    this.route('address', {path: "/addresses"}, function() {
      this.route('create');
      this.route('edit', {path: '/:id/edit'});
    })
  });
  this.route('relationship', {path: "/organization/:id"});
  this.route('login');
  this.route('create-account');
  this.route('verify-account');
  this.route('password-reset');
  this.route('reset-password');
});

export default Router;
