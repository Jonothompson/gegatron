import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		invalidateSession: function() {
			this.sendAction('action', this.get('model'));
		},
		
    // filePick: function(){
    //   filepicker.pick(function(blob){
    //     this.sendAction('filePick', blob);
    //   }.bind(this));
    // }
		
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
