import Ember from 'ember';
import Session from 'simple-auth/session';

export default {
  name: 'session',
  before: 'simple-auth',
  initialize: function(container) {
    Session.reopen({
      isAdmin: function(){
        if(!this.get('isAuthenticated')) {
          return false;
        } else {
          var user = this.get('currentUser');
          // return true if user is admin, otherwise false
        }
      }.property('currentUser')
    });
  }
};
