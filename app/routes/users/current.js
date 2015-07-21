import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	
	model: function() {
		return this.get ('session.currentUser');
		return this.store.findAll('story-board-image');
	},
	
	actions: {
		invalidateSession: function() {
		this.get('session').invalidate();
		},
		
	filePick: function(params) {
		params.owner=this.get('session.currentUser');
		var upload = this.store.createRecord('story-board-image', params);
		upload.save();
		}
	}
});
