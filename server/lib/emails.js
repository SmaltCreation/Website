Meteor.startup(function () {
    var s = Meteor.settings.MAIL;

    s.USERNAME = encodeURIComponent(s.USERNAME);
    s.PASSWORD = encodeURIComponent(s.PASSWORD);

    process.env.MAIL_URL = s.PROTOCOL + '://' + s.USERNAME + ':' + s.PASSWORD + '@' + s.SERVER + ':' + s.PORT;
});

function helper (input) {
    return new RegExp('{{' + input +'}}', 'g');
}

function include (input) {
    return helper('> ' + input);
}

getEmailFrom = function () {
    var settings = Meteor.settings.EMAIL;
    return settings.SITE_NAME + ' <' + settings.FROM + '>';
};

function getEmailLayout () {
    return Assets.getText('email/layout.html');
}

getEmailHtml = function (template, values) {
    var result = getEmailLayout().replace(include('content'), Assets.getText('email/' + template + '.html'));

    result = replaceCommonValues(result);
    result = replaceValues(result, values);

    return result;
};

function replaceCommonValues (result) {
    var values = {
        siteUrl:            Meteor.absoluteUrl(),
        siteName:           Meteor.settings.EMAIL.SITE_NAME,
        logoUrl:            Meteor.absoluteUrl() + 'images/email-logo.jpg',
        contactUrl:         Meteor.absoluteUrl() + 'contact',
        participateUrl:     Meteor.absoluteUrl() + 'participate',
        offerUrl:           Meteor.absoluteUrl() + 'offer',
        presentationUrl:    Meteor.absoluteUrl() + 'presentation',
        howToUrl:           Meteor.absoluteUrl() + 'how-to',
        rewardUrl:          Meteor.absoluteUrl() + 'advantages'
    };

    return replaceValues(result, values);
}

function replaceValues (result, values) {
    _.each(values, function (value, key) {
        result = result.replace(helper(key), value);
    });

    return result;
}
