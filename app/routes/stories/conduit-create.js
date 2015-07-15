import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('conduit-story');
	},
	
	actions: {
		save: function(conduit){
			conduit.save();
			this.transitionTo('stories.conduits');
		}
	}
});