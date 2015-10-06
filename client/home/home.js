Template.home.helpers({
    skills: function () {
        var view = Technologies.views.skills();
        return Technologies.find(view.selector, view.options).fetch();
    },
    gallery:  function () {
        var view = Projects.views.portfolio();
        return {
            projects: Projects.find(view.selector, view.options).fetch()
        };
    }
});

Template.home.onRendered(function () {
    var grid = $('#gallery').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        getSortData: {
            importance: '[data-importance] parseInt',
            name: '[data-name]',
            id: '[data-id]'
        },
        masonry: {
            gutter: 15
        }
    });

    grid.imagesLoaded().progress( function() {
        grid.isotope({ sortBy : 'importance' });
    });
});
