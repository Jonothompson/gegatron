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
    this.route('stories');
    this.route('about');
    this.route('contact');
    this.route('show', {path: '/:blog_id'});
  });
  
  this.route('stories', function() {
    this.route('conduits');
    this.route('short-stories');
    this.route('conduits-show', {path: ':conduit-story_id'});
    this.route('short-story-show', {path: 'short/:short_id:'});
  });
});

export default Router;
