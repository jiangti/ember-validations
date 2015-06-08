Ember.ValidationError.addMessage('alnum', "can only be alphanumeric");

Ember.Validators.AlnumValidator = Ember.Validator.extend({

    _validate: function (obj, attr, value) {

        var pattern = /[A-Za-z0-9]+/;
        var err = validate({val: value}, {val: {format: pattern}});
        if (err != undefined) {
            obj.get('validationErrors').add(attr, "alnum");
        }
    }
});