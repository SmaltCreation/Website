Router.route('/support', {
    name: 'support',
    template: 'support',
    onAfterAction: function() {
        var title = TAPi18n.__('template.support.page.title');
        var description = TAPi18n.__('template.support.page.description');

        SEO.set({
            title: title + TITLE_SUFFIX,
            meta: {
                'description': description
            }
        });
    }
});
