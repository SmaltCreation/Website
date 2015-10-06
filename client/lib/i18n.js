I18NConf.onLanguageChange(function (old, tag) {
    moment.locale(tag);

    TAPi18n.setLanguage(tag)
        .fail(function (error) {
            console.log(error);
        });
});

Meteor.startup(function () {
    I18NConf.configure({
        languages: ['fr', 'en'],
        defaultLanguage: 'fr',
        autoConfLanguage: false
    });

    I18NConf.setLanguage('fr');
});
