import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	
	model: function() {
		return Ember.RSVP.hash({
			user: this.get('session.currentUser'),
			image: this.store.findQuery('story-board-image', {
				where: {
					owner: {
						__type: "Pointer",
						className: "_User",
						objectId: this.get('session.currentUser.id')
					}
				}
			})
		})
	},
	
	actions: {
		invalidateSession: function() {
			this.get('session').invalidate();
		},

		
		filePick: function(params) {
			params.owner = this.get('session.currentUser');
			var upload = this.store.createRecord('story-board-image', params);
			upload.save(params);
			this.modelFor(this.routeName).image.addObject(params);
		}
	}
});
