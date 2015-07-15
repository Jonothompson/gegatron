import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		destroy: function(){
			this.sendAction('action', this.get('short'));
		}
	}
});
