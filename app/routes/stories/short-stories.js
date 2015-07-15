import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('short-story');
	},
	
	actions: {
		destroy: function(short){
			console.log(short);
			short.destroyRecord();
		}
	}
});
