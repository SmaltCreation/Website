Meteor.startup(function () {
    if (!Technologies.find().count()) {
        _.each(_.values(technologiesFixtures), function(fixture) {
            Technologies.insert(fixture);
        });
    }
    if (!Projects.find().count()) {
        _.each(projectsFixtures, function(fixture) {
            Projects.insert(fixture);
        });
    }
});