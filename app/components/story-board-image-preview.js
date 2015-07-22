import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		destroy: function(image){
			this.sendAction('action', this.get('image'));
		}
	}
});
