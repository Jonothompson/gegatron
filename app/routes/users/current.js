import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	
	model: function() {
		return Ember.RSVP.hash({
			user: this.get('session.currentUser'),
			image: this.store.findAll('story-board-image')
		})
		// return this.get ('session.currentUser');
		// return this.store.findAll('story-board-image');
	},
	
	actions: {
		invalidateSession: function() {
		this.get('session').invalidate();
		},
		
	// filePick: function(blob){
    //  	var username = this.get('session.currentUser.firstName');
    //   	var upload = this.store.createRecord('story-board-image', {
    //     	url : blob.url,
    //     	filename : blob.filename
    //   	});
    //   	upload.save(blob);
    // }
		
	filePick: function(params) {
		params.owner=this.get('session.currentUser');
		var upload = this.store.createRecord('story-board-image', params);
		upload.save(params);
		}
	}
});
