Router.configure({
    layoutTemplate:     'layout',
    loadingTemplate:    'loading',
    notFoundTemplate:   'notFound'
});

Iron.Location.configure({
    useHashPaths: false
});

Router.onAfterAction(function() {
    var navbarToggle = $('#navbar-toggle');
    if (navbarToggle && navbarToggle.attr('aria-expanded') === 'true') {
        navbarToggle.click();
    }
});
