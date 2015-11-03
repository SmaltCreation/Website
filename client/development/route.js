Router.route('/development', {
    name: 'development',
    template: 'development',
    onAfterAction: function() {
        var title = TAPi18n.__('template.development.page.title');
        var description = TAPi18n.__('template.development.page.description');

        SEO.set({
            title: title + TITLE_SUFFIX,
            meta: {
                'description': description
            }
        });
    }
});
