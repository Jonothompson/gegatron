import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('conduit-story');
	},
	
	actions: {
		destroy: function(conduit){
			console.log(conduit);
			conduit.destroyRecord();
		}
	}
});
