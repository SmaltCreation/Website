Router.route('/', {
    name: 'home',
    template: 'home',
    waitOn: function () {
        return [
            Meteor.subscribe('technologies-skills'),
            Meteor.subscribe('projects-portfolio'),
            Meteor.subscribe('projects-contributions')
        ];
    },
    onAfterAction: function() {
        var title = TAPi18n.__('template.home.page.title');
        var description = TAPi18n.__('template.home.page.description');

        SEO.set({
            title: title + TITLE_SUFFIX,
            meta: {
                'description': description
            }
        });
    }
});
