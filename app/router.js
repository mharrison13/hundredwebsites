import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('request');

  this.route('admin', function() {
    this.route('request-info');
  });

  this.route('websites', function () {
    this.route('new');
    this.route('edit', { path: '/:website_id/edit' });
  });
});

export default Router;
