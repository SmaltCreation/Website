Template.footer.events({
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
