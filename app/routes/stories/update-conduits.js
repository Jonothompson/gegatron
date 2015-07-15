import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('conduit-story');
	},
	
	actions: {
		update: function(conduit){
			conduit.save();
			this.transitionTo('stories.conduits');
		}
	}
});