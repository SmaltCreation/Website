Router.route('/project/show/:id/:slug', {
    name: 'projectShow',
    waitOn: function () {
        return [
            Meteor.subscribe('projects-show', parseInt(this.params.id), this.params.slug)
        ];
    },
    onBeforeAction: function() {
        var view = Projects.views.show(parseInt(this.params.id), this.params.slug);
        var project = Projects.findOne(view.selector, view.options);

        if (!project) {
            this.render('notFound');
            return false;
        }

        switch (this.params.id) {
            case 1:
                //Renvois un template spécial, ici pour Inck
                this.template = 'projectShowDefault';
                break;
            default :
                this.template = 'projectShowDefault';
                break;
        }

        this.next();
    },
    data: function() {
        var view = Projects.views.show(parseInt(this.params.id), this.params.slug);
        var project = Projects.findOne(view.selector, view.options);

        if (project) {
            view = Technologies.views.listBySlug(project.technologies);
            var technologies = Technologies.find(view.selector, view.options);
            if (technologies) {
                return {
                    project: project,
                    technologies: technologies
                };
            }
        }

        return false;
    }
});