Router.route('/show/:id/:slug', {
    name: 'projectShow',
    waitOn: function () {
        return [
            Meteor.subscribe('projects-show', parseInt(this.params.id))
        ];
    },
    onBeforeAction: function() {
        if (this.params.id == 1) {
            this.template = 'showdefault';     //Renvois un template spécial, ici pour Inck
            this.next();
        } else {
            this.template = 'showdefault';
            this.next();
        }
    },
    data: function() {
      return {
          project: Projects.findOne(),
          technologies: Technologies.find()
      };
    }
});