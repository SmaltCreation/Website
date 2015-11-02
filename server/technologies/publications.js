Meteor.publish('technologies-skills', function () {
    var view = Technologies.views.skills();
    return Technologies.find(view.selector, view.options);
});
