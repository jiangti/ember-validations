Ember.ValidationError.addMessage('numfloat', "can only be float");

Ember.Validators.NumfloatValidator = Ember.Validator.extend({
    _validate: function (obj, attr, value) {
        if (isNaN(value)) {
            obj.get('validationErrors').add(attr, "numfloat", '', obj.get('validations.' + attr + '.float.message'));
        }
    }
});