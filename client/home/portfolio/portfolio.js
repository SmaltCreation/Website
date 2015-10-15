Template.homePortfolio.helpers({
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

Template.homePortfolio.onRendered(function () {
    var portfolio = $('#portfolio');

    // Initialize grid
    var grid = $('#gallery').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        getSortData: {
            importance: '[data-importance] parseInt',
            name: '[data-name]',
            id: '[data-id] parseInt'
        },
        masonry: {
            gutter: 15
        }
    });

    // Wait that images are fully loaded to forge the grid **Essential for items's width**
    grid.imagesLoaded().progress(function () {
        grid.isotope({ sortBy : 'importance' });
    });

    // Retrieve filters container
    var filtersContainer = portfolio.find('.filters-container');

    // Bind filter button click
    var filters = [];
    filtersContainer.on('click', '.filter', function () {
        // Retrieve filter's value
        var filter = $(this).attr('data-filter');

        if (_.contains(filters, filter)){
            // Remove filter if already in the list
            filters = _.without(filters, filter);

            // Update button classes
            $(this).removeClass('btn-primary');
            $(this).find('.fa-times').addClass('hidden');
        } else {
            // Add filter to the list
            filters.push(filter);

            // Update button classes
            $(this).addClass('btn-primary');
            $(this).find('.fa-times').removeClass('hidden');
        }

        // Refresh grid
        grid.isotope({
            filter: filters.join(", ")
        });
    });

    // Retrieve sorts container
    var sortsContainer = portfolio.find('.sorts-container');

    // Bind sort button click
    sortsContainer.on( 'click', '.sort', function () {
        sortsContainer.find('.is-sorted').removeClass('is-sorted');
        $(this).addClass('is-sorted');

        var sortByValue = $(this).attr('data-sort-by');
        grid.isotope({
            sortBy: sortByValue
        });
    });
});
