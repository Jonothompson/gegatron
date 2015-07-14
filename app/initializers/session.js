import Ember from 'ember';
import Session from 'simple-auth/session';

export default {
  name: 'sessionUser',
  before: 'simple-auth',
  initialize: function(container) {                     
    Session.reopen({
      currentUser: function() {}.property('currentUser')
    });
  }
};
