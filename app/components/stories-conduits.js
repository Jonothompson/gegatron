import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		destroy: function(conduit){
			this.sendAction('action', conduit);
		}
	}
});
