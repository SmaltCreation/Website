Meteor.methods({
    sendEmail: function (data) {
        checkKeys(data, 'contact');

        var text = 'Message de : '
            + data.name
            + '\nEmail : '
            + data.email
            + '\nObjet : '
            + data.subject
            + '\nContenu : '
            + data.message;

        Email.send({
            to: Meteor.settings.CONTACT.SEND_TO,
            from: data.email,
            subject: 'Nouveau message de smaltcreation.com',
            text: text
        });

        log({
            key: LogKey.NEW_CONTACT_MESSAGE,
            details: data
        });
    }
});

checkKeys = function (input, name) {
    var keys = getRequiredKeys(name);
    var output = {};

    keys.forEach(function (key) {
        if (!_.has(input, key) || input[key] === null || input[key].length === 0) {
            throw new Meteor.Error('bad-request');
        }

        output[key] = input[key];
    });

    return output;
};

getRequiredKeys = function (name) {
    var keys = null;

    switch (name) {
        case 'contact':
            keys = ['name', 'email', 'subject', 'message'];
            break;
        default:
            throw new Error('Required keys not defined');
    }

    return keys;
};
