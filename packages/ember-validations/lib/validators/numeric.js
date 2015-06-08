Ember.ValidationError.addMessage('numeric', "only accepts numeric values");

Ember.Validators.NumericValidator = Ember.Validator.extend({
    shouldSkipValidations: function (obj, attr, value) {
        return false;
    },

    _validate: function (obj, attr, value) {

        error = validate({val: value}, {val: {numericality: true}});

        if (error != undefined) {
            obj.get('validationErrors').add(attr, "numeric");
        }
    }
});