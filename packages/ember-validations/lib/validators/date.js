Ember.ValidationError.addMessage('date', "must be a valid date");

Ember.Validators.DateValidator = Ember.Validator.extend({
    _validate: function (obj, attr, value) {

        var err = validate({val: value}, {val: {
            datetime: {
                dateOnly: true
            }
        }});

        if (err != undefined) {
            obj.get('validationErrors').add(attr, "date", '', obj.get('validations.' + attr + '.date.message'));
        }
    }
});


