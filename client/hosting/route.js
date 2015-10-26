Router.route('/hosting', {
    name: 'hosting',
    template: 'hosting',
    onAfterAction: function() {
        var title = TAPi18n.__('template.hosting.page.title');
        var description = TAPi18n.__('template.hosting.page.description');

        SEO.set({
            title: title + TITLE_SUFFIX,
            meta: {
                'description': description
            }
        });
    }
});
