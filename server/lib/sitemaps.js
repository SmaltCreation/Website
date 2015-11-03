sitemaps.add('/sitemap.xml', function() {
    var out = [];

    // Static pages
    var pages = [
        { lastmod: new Date(), page: '/' },
        { lastmod: new Date(), page: '/hosting' },
        { lastmod: new Date(), page: '/support' },
        { lastmod: new Date(), page: '/terms' }
    ];

    _.each(pages, function (page) {
        out.push(page);
    });

    // Projects
    var projects = Projects.find({}, {
        fields: {
            id: 1,
            slug: 1
        }
    }).fetch();

    _.each(projects, function (project) {
        out.push({
            page: '/project/show/' + project.id + '/' + project.slug,
            lastmod: new Date()
        });
    });

    return out;
});
