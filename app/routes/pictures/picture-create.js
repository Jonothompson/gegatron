import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('sumo-paint');
	},
	
	actions: {
		save: function(sumo){
			sumo.save();
			this.transitionTo('users.current');
		}
	}
});
