Template.navbar.events({
    'click .navbar-brand': function () {
        if (Router.current().route.getName() === 'home') {
            var body = $('html,body');
            body.animate({
                scrollTop: body.offset().top
            }, 200);
        }
    }
});

Template.navbar.onRendered(function () {
    $(window).on('scroll', function() {
        var navbar = $('#navbar');
        navbar.toggleClass('on-top', navbar.offset().top == 0);
    });
});
