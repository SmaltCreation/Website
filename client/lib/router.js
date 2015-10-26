Router.configure({
    layoutTemplate:     'layout',
    loadingTemplate:    'loading',
    notFoundTemplate:   'notFound'
});

Router.onAfterAction(function() {
    Session.set('hash', this.params.hash);
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

routerScroll = function () {
    Deps.autorun(function (){
        var hash =  Session.get('hash');
        if (hash) {
            var selector = $('#' + hash);
            var checkExist = setInterval(function() {
                if (selector.length) {
                    clearInterval(checkExist);
                    scrollTo(selector);
                    Session.set('hash', '');
                }
            }, 100);
        }
    });
};
