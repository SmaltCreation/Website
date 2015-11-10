Router.configure({
    layoutTemplate:     'layout',
    loadingTemplate:    'loading',
    notFoundTemplate:   'notFound'
});

RouterAutoscroll.marginTop = 50;

Router.onAfterAction(function() {
    var navbarToggle = $('#navbar-toggle');
    if (navbarToggle && navbarToggle.attr('aria-expanded') === 'true') {
        navbarToggle.click();
    }

    var self = this;
    $(window).scrollTop(0);
    if (this.params.hash) {
        Tracker.afterFlush(function() {
            var selector = $("#" + self.params.hash);
            if (typeof selector.offset() != "undefined"){
                var scrollTop = selector.offset().top;

                $("html,body").animate({
                    scrollTop: scrollTop - 50
                });
            }
        });
    }
});