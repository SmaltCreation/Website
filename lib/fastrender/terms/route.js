Router.route('/terms', {
    name: 'terms',
    template: 'terms',
    onAfterAction: function() {
        var title = TAPi18n.__('template.terms.page.title');
        var description = TAPi18n.__('template.terms.page.description');

        SEO.set({
            title: title + TITLE_SUFFIX,
            meta: {
                'description': description
            }
        });
    }
});
