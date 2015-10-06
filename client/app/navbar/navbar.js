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
