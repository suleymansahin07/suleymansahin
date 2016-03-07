import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('blog', function() {
    this.route('show', {
      path: ':post_id'
    });
    this.route('pagination');
  });
  this.route('admin', function() {});
  this.route('tag');
  this.route('not-found', { path: '/*path' });
});

export default Router;
