import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		destroy: function(short){
			this.sendAction('action', short);
		}
	}
});
