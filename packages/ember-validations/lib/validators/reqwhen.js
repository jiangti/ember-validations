Ember.Validators.ReqwhenValidator = Ember.Validator.extend({
	shouldSkipValidations: function(obj, attr, value) {
	    return false;
	},

	_validate: function(obj, attr, value) {
		var options = Em.get(this, 'options') || {};
		if (options.property) {

			if (obj.get(options.property) && Em.isEmpty(value)) {
				obj.get('validationErrors').add(attr, 'blank');
			}
		}
	}
});