Template.projectShowDefault.onRendered(function () {
    $('.fancybox').fancybox({
        openEffect: 'elastic'
    });
});

Template.projectShowDefault.events({
    'click .fancybox': function (event) {
        event.preventDefault();
    }
});
