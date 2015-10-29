Ember.Validators.ReqwhenValidator = Ember.Validator.extend({
	shouldSkipValidations: function(obj, attr, value) {
	    return false;
	},

	_validate: function(obj, attr, value) {
		var options = Em.get(this, 'options') || {};

		var msg = Em.getWithDefault(options, 'message', null);

		if (Em.isArray(options.property)) {
			//If all array is true;
			//
			var ar = options.property.filter(function(i) {
				return obj.get(i);
			});

			if (ar.length == options.property.length) {
				if (Em.isEmpty(value)) {
					obj.get('validationErrors').add(attr, 'blank', '', msg);
				}
			}
			
		} else {
			if (options.property) {
				if (obj.get(options.property) && Em.isEmpty(value)) {
					obj.get('validationErrors').add(attr, 'blank', '', msg);
				}
			}
		}		
	}
});