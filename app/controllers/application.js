import Ember from 'ember';

export default Ember.Controller.extend({
	shouldShowHeader: function(){
		return this.get('currentPath') !== 'landing'
	}.property('currentPath')
});
