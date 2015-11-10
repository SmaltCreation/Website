Template.navbar.events({
    'click .navbar-brand': function () {
        if (Router.current().route.getName() === 'home') {
            var body = $('html,body');
            body.animate({
                scrollTop: body.offset().top
            }, 200);
        }
    },
    'click a.anchor': function (event) {
        if (Router.current().route.getName() === 'home') {
            event.preventDefault();
            var target = $(event.target).closest('a');
            var hash = '#' + target.attr('href').split('#')[1];
            $('html, body').animate({
                scrollTop:$(hash).offset().top - $('#navbar').height()
            }, 200);

            history.pushState(null, null, hash);
        }
    }
});

Template.navbar.onRendered(function () {
    $(window).on('scroll', function() {
        var navbar = $('#navbar');
        navbar.toggleClass('on-top', navbar.offset().top == 0);
    });
});
