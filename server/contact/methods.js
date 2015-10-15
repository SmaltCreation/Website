Meteor.methods({
    sendEmail: function (data) {
        checkKeys(data, 'contact');

        var text = 'Message de : ' + data.name + '\nEmail : ' + data.email
            + '\nT�l�phone : ' + data.phone + '\nContenu : ' + data.message;

        Email.send({
            to: Meteor.settings.CONTACT.SEND_TO,
            from: data.email,
            subject: 'Nouveau message de Smalt Cr�ation',
            text: text
        });

        log({
            key: LogKey.NEW_CONTACT_MESSAGE,
            details: data
        });

        if (Meteor.userId()) {
            data.userId = Meteor.userId();
        }
    }
});
