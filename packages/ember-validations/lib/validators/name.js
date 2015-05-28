Ember.Validators.NameValidator = Ember.Validator.extend({

	_validate: function(obj, attr, value) {
		if (/[^a-z^ ^' ^_^\-]/i.test(value)) {
			obj.get('validationErrors').add(attr, 'invalid', '', '');
		}
	}
});