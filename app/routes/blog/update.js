import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('blog-post');
	},
	
	actions: {
		update: function(blog){
			blog.save();
			this.transitionTo('blog.home');
		}
	}
});
