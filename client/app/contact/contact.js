Template.contact.helpers({
    options: function () {
        return {
            schema: Schema.Contact,
            id: 'home-contact'
        };
    }
});

AutoForm.addHooks('home-contact', {
    onSubmit: function (data) {
        toggleButtonState('#contact');

        Meteor.call('sendEmail', data, function (error) {
            toggleButtonState('#contact');

            if (error) {
                Alert.open(error);
                return false;
            }

            swal({
                title: TAPi18n.__('template.app.contact.alert.title'),
                text: TAPi18n.__('template.app.contact.alert.text'),
                type: 'success'
            }, function () {
                Router.go('home');
            });
        });

        return false;
    }
});
