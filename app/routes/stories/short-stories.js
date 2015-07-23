import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findQuery('short-story', {
			order: '-createdAt'
		});
	},
	
	actions: {
		destroy: function(short){
			console.log(short);
			short.destroyRecord();
		}
	}
});
