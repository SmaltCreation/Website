AutoForm.addHooks('contact', {
    onSubmit: function (data) {
        var inputPhone = $('input[name="phone"]');

        if (!inputPhone.intlTelInput('isValidNumber')) {
            Alert.open('error.invalid-phone-number');
            return false;
        }

        toggleButtonState('#contact');

        Meteor.call('sendEmail', data, function (error) {
            toggleButtonState('#contact');

            if (error) {
                Alert.open(error);
                return false;
            }

            swal({
                title: TAPi18n.__('template.contact.alert.title'),
                text: TAPi18n.__('template.contact.alert.text'),
                type: 'success'
            }, function () {
                Router.go('home');
            });
        });

        return false;
    }
});
