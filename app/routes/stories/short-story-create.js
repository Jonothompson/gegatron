import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('short-story');
	},
	
	actions: {
		save: function(short){
			short.save();
			this.transitionTo('stories.short-stories');
		}
	}
});