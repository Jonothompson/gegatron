import Ember from 'ember';

export default Ember.Component.extend({
	filePick: function() {
		filepicker.pick(function(blob){
  			console.log(blob);
		})
	}
});
