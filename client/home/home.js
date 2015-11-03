Template.home.onRendered(function () {
    routerScroll();
});

Template.home.events({
    'click .fancybox': function (event) {
        event.preventDefault();
    }
});
