Ember.ValidationError.addMessage('email', "must be a valid email");

Ember.Validators.EmailValidator = Ember.Validator.extend({
    _validate: function (obj, attr, value) {
        if (!Em.isBlank(value)) {
            value = value.toLowerCase();
            var errors = validate({val: value}, { val: { email: true }});
            if (errors) {
                obj.get('validationErrors').add(attr, "email", '', obj.get('validations.' + attr + '.email.message'));
            }
        }   
    }
});
