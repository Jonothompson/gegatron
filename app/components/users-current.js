import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		invalidateSession: function() {
			this.sendAction('action', this.get('model'));
		},
		
		destroy: function(image){
			this.sendAction('action', image);
		},
		
		filePick: function() {
			filepicker.pick(function(blob){
				this.sendAction('filePick', {
					url: blob.url,
					filename: blob.filename
				});
			}.bind(this));
		}
	}
});
