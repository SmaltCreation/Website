Router.route('/', {
    name: 'home',
    template: 'home',
    fastRender: true,
    waitOn: function () {
        return [
            Meteor.subscribe('technologies-skills'),
            Meteor.subscribe('projects-portfolio'),
            Meteor.subscribe('projects-contributions')
        ];
    }
});
