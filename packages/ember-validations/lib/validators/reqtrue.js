Ember.Validators.ReqtrueValidator = Ember.Validator.extend({
	shouldSkipValidations: function(obj, attr, value) {
	    return false;
	},

	_validate: function(obj, attr, value) {
		if (value !== true) {
			obj.get('validationErrors').add(attr, 'blank');
		}	
	}
});