Ember.ValidationError.addMessage('date', "must be a valid date");
Ember.ValidationError.addMessage('bday', "must be at least @{value} years old");

Ember.Validators.DateValidator = Ember.Validator.extend({
    _validate: function (obj, attr, value) {

    	var options = Em.get(this, 'options'),
			errors = Em.get(obj, 'validationErrors'),
			length = value ? Ember.get(upcast.to(value, 'string'), 'length') : 0,
			optionValue;

		var m = moment(value, "DD-MM-YYYY");

        var ok = m.isValid();

        if (!ok) {
            obj.get('validationErrors').add(attr, "date", '', obj.get('validations.' + attr + '.date.message'));
        } else {

        	optionValue = this.optionValue(obj, 'dob', 'number');

			if (optionValue !== null) {
				var n = moment().subtract(optionValue, 'years');
				if (m.isAfter(n ,'day')) {
					obj.get('validationErrors').add(attr, "bday", {value: optionValue});
				}
			} 
        }


    }
});


