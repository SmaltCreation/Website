Template.homeSkills.helpers({
    skills: function () {
        var view = Technologies.views.skills();
        return Technologies.find(view.selector, view.options).fetch();
    }
});

Template.homeSkills.onRendered(function () {
    $('[data-toggle="popover"]').popover();
});
