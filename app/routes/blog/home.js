import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('blog-post');
	},
	
	actions: {
		destroy: function(blog){
			console.log(blog);
			blog.destroyRecord();
		},
		update: function(blog){
			blog.update();
			this.transitionTo('blog.show')
		}
	}
});
