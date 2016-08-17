import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		addPlayer() {
			this.get('model.players').createRecord();
		}
	}

});
