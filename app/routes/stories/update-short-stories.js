import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('short-story');
	},
	
	actions: {
		update: function(short){
			short.save();
			this.transitionTo('stories.short-stories');
		}
	}
});