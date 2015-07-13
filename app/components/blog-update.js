import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		update: function(){
			this.sendAction('action', this.get('model'));
		}
	}
});
