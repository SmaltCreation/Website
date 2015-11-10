TITLE_SUFFIX = ' | Smalt';

Meteor.startup(function () {
    if(Meteor.isClient){
        return SEO.config({
            title: 'Développement web Lyon | Smalt',
            og: {
                'image': 'http://smaltcreation.com/images/_logo.png'
            },
            auto: {
                twitter: true,
                og: true,
                set: ['description', 'title']
            }
        });
    }
});