import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('blog-post');
	},
	
	action: {
		save: function(blog){
			blog.save();
			this.transitionTo('blog.home');
		}
	}
});
