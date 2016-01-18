Meteor.startup(function () {
    /*
    IN CASE GOOGLE ISN'T VERY NICE TO OUR DYNAMIC SEO.SET() FOR MULTILINGUAL WEBSITES
    UNCOMMENT THIS SECTION BELOW, WHICH IS GOING TO SET STATIC 'FR' TRANSLATIONS TO DEFAULT
     */

    TITLE_SUFFIX = ' | Smalt';
    var language = 'fr';
    var title;
    var description;

    var routes = [{
            name: 'development',
            title: 'template.development.page.title',
            description: 'template.development.page.description'
        }, {
            name: 'home',
            title: 'template.home.page.title',
            description: 'template.home.page.description'
        }, {
            name: 'hosting',
            title: 'template.hosting.page.title',
            description: 'template.hosting.page.description'
        }, {
            name: 'support',
            title: 'template.support.page.title',
            description: 'template.support.page.description'
        }, {
            name: 'terms',
            title: 'template.terms.page.title',
            description: 'template.terms.page.description'
        }
    ];

    routes.forEach(function (route) {
        SeoCollection.update({
                route_name: route.name
            }, {
                $set: {
                    route_name: route.name,
                    title: TAPi18n.__(route.title, null, language) + TITLE_SUFFIX,
                    meta: {
                        'description': TAPi18n.__(route.description, null, language)
                    }
                }
            }, {
                upsert: true
            }
        );
    });
});
