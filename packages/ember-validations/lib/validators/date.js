Ember.ValidationError.addMessage('date', "must be a valid date");

Ember.Validators.DateValidator = Ember.Validator.extend({
    _validate: function (obj, attr, value) {

        var ok = moment(value, "DD-MM-YYYY").isValid();

        if (!ok) {
            obj.get('validationErrors').add(attr, "date", '', obj.get('validations.' + attr + '.date.message'));
        }
    }
});


