Ember.Validators.ReqtrueValidator = Ember.Validator.extend({
	shouldSkipValidations: function(obj, attr, value) {
		return false;
	},

	_validate: function(obj, attr, value) {
		var options = Em.get(this, 'options') || {};

		if (Em.isArray(options.property)) {
			//If all array is true;
			//
			var ar = options.property.filter(function(i) {
				return obj.get(i);
			});

			if (ar.length == options.property.length) {
				if (value !== true) {
					obj.get('validationErrors').add(attr, 'blank');
				}
			}

		} else {
			if (options.property) {
				if (obj.get(options.property) && value !== true) {
					obj.get('validationErrors').add(attr, 'blank');
				}
			}
		}
	}
});