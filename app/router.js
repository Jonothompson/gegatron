import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('landing', {path: '/'});

  this.route('sessions', function() {
    this.route('create');
  });

  this.route('blog', function() {
    this.route('home');
    this.route('about');
    this.route('stories');
    this.route('contact');
  });
});

export default Router;
