import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		destroy: function(blog){
			this.sendAction('action', blog);
		}
	}
});
