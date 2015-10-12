Meteor.publishComposite('projects-portfolio', function () {
    return {
        find: function () {
            var view = Projects.views.portfolio();
            return Projects.find(view.selector, view.options);
        },
        children: [
            {
                find: function (project) {
                    var view = Technologies.views.listBySlug(project.technologies);
                    return Technologies.find(view.selector, view.options);
                }
            }
        ]
    }
});

Meteor.publishComposite('projects-show', function(id) {
    return {
        find: function () {
            var view = Projects.views.show(id);
            return Projects.find(view.selector, view.options);
        },
        children: [
            {
                find: function (project) {
                    var view = Technologies.views.listBySlug(project.technologies);
                    return Technologies.find(view.selector, view.options);
                }
            }
        ]
    }
});