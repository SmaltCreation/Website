Template.homePortfolioContributions.helpers({
    contributions:  function () {
        var view = Projects.views.contributions();
        return Projects.find(view.selector, view.options).fetch();
    }
});