import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findQuery('conduit-story', {
			order: '-createdAt'
		});
	},
	
	actions: {
		destroy: function(conduit){
			console.log(conduit);
			conduit.destroyRecord();
		}
	}
});
