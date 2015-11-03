technologiesFixtures = {
    bootstrap: {
        id: 1,
        slug: 'bootstrap',
        name: 'Bootstrap',
        description: 'technology.bootstrap.description',
        img: '/images/technology-bootstrap.png',
        url: 'http://getbootstrap.com/',
        isSkill: true
    },
    googleMaps: {
        id: 2,
        slug: 'googleMaps',
        name: 'Google Maps',
        description: 'technology.googleMaps.description',
        img: '/images/technology-googlemaps.png',
        url: 'https://www.google.fr/maps/',
        isSkill: true
    },
    javaScript: {
        id: 3,
        slug: 'javaScript',
        name: 'JavaScript',
        description: 'technology.javaScript.description',
        img: '/images/technology-javascript.png',
        url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
        isSkill: true
    },
    meteor: {
        id: 4,
        slug: 'meteor',
        name: 'Meteor',
        description: 'technology.meteor.description',
        img: '/images/technology-meteor.png',
        url: 'http://meteor.com/',
        isSkill: true
    },
    mongoDB: {
        id: 5,
        slug: 'mongoDB',
        name: 'MongoDB',
        description: 'technology.mongoDB.description',
        img: '/images/technology-mongodb.jpg',
        url: 'https://www.mongodb.org/',
        isSkill: true
    },
    nexmo: {
        id: 6,
        slug: 'nexmo',
        name: 'Nexmo',
        description: 'technology.nexmo.description',
        img: '/images/technology-nexmo.png',
        url: 'https://www.nexmo.com/',
        isSkill: true
    },
    nginx: {
        id: 7,
        slug: 'nginx',
        name: 'NGINX',
        description: 'technology.nginx.description',
        img: '/images/technology-nginx.png',
        url: 'http://nginx.org/',
        isSkill: true
    },
    stripe: {
        id: 8,
        slug: 'stripe',
        name: 'Stripe',
        description: 'technology.stripe.description',
        img: '/images/technology-stripe.png',
        url: 'https://stripe.com/fr',
        isSkill: true
    },
    symfony2: {
        id: 9,
        slug: 'symfony2',
        name: 'Symfony2',
        description: 'technology.symfony2.description',
        img: '/images/technology-symfony2.png',
        url: 'http://symfony.com/',
        isSkill: true
    },
    ubuntuServer: {
        id: 10,
        slug: 'ubuntuServer',
        name: 'Ubuntu Server',
        description: 'technology.ubuntuServer.description',
        img: '/images/technology-ubuntuserver.png',
        url: 'http://www.ubuntu.com/download/server',
        isSkill: true
    },
    wordpress: {
        id: 11,
        slug: 'wordpress',
        name: 'Wordpress',
        description: 'technology.wordpress.description',
        img: '/images/technology-wordpress.png',
        url: 'https://fr.wordpress.org/',
        isSkill: true
    }
};

projectsFixtures = [
    {
        id: 1,
        slug: 'inck',
        name: 'Inck',
        description: 'project.inck.description',
        img: '/images/project-inck.png',
        thumbnail: '/images/project-inck360x203.png',
        url: 'https://www.inck.fr',
        importance: 3,
        portfolio: true,
        contribution: false,
        draft: false,
        technologies: [
            technologiesFixtures.bootstrap.slug,
            technologiesFixtures.nginx.slug,
            technologiesFixtures.symfony2.slug,
            technologiesFixtures.ubuntuServer.slug
        ]
    }, {
        id: 2,
        slug: 'l7rg',
        name: 'Lyon 7 Rive Gauche',
        description: 'project.l7rg.description',
        img: '/images/project-l7rg.png',
        thumbnail: '/images/project-l7rg360x203.png',
        url: 'http://www.lyon7rivegauche.com',
        importance: 4,
        portfolio: true,
        contribution: false,
        draft: false,
        technologies: [
            technologiesFixtures.wordpress.slug
        ]
    }, {
        id: 3,
        slug: 'crlive',
        name: 'Croix-Rousse Live',
        description: 'project.crlive.description',
        img: '/images/project-crlive.png',
        thumbnail: '/images/project-crlive360x203.png',
        url: 'http://www.croixrousselive.org',
        importance: 6,
        portfolio: true,
        contribution: false,
        draft: false,
        technologies: [
            technologiesFixtures.wordpress.slug
        ]
    }, {
        id: 4,
        slug: 'rey-freres',
        name: 'REY Frères',
        description: 'project.rey-freres.description',
        img: '/images/project-rey-freres.png',
        thumbnail: '/images/project-rey-freres360x203.png',
        url: 'http://www.reyfreres.com',
        importance: 5,
        portfolio: true,
        draft: false,
        contribution: false,
        technologies: [
            technologiesFixtures.wordpress.slug
        ]
    },{
        id: 6,
        slug: 'tilamp',
        name: 'Tilamp',
        description: 'project.tilamp.description',
        img: '/images/project-tilamp.png',
        thumbnail: '/images/project-tilamp360x203.png',
        url: 'https://www.tilamp.com',
        importance: 1,
        portfolio: true,
        contribution: false,
        draft: false,
        technologies: [
            technologiesFixtures.bootstrap.slug,
            technologiesFixtures.googleMaps.slug,
            technologiesFixtures.javaScript.slug,
            technologiesFixtures.meteor.slug,
            technologiesFixtures.mongoDB.slug,
            technologiesFixtures.nexmo.slug,
            technologiesFixtures.stripe.slug,
            technologiesFixtures.ubuntuServer.slug
        ]
    }, {
        id: 7,
        slug: 'icon',
        name: 'I.C.O.N.',
        description: 'project.icon.description',
        img: '/images/project-icon.png',
        thumbnail: '/images/project-icon360x203.png',
        url: 'https://www.network-icon.com',
        importance: 2,
        portfolio: true,
        contribution: false,
        draft: false,
        technologies: [
            technologiesFixtures.bootstrap.slug,
            technologiesFixtures.googleMaps.slug,
            technologiesFixtures.javaScript.slug,
            technologiesFixtures.meteor.slug,
            technologiesFixtures.mongoDB.slug,
            technologiesFixtures.nexmo.slug,
            technologiesFixtures.stripe.slug,
            technologiesFixtures.ubuntuServer.slug
        ]
    }, {
        id: 8,
        slug: 'paypal-rest-api',
        name: 'meteor-paypal-rest-api',
        description: 'project.paypal-rest-api.description',
        img: '',
        thumbnail: '',
        url: 'https://atmospherejs.com/smaltcreation/paypal-rest-api',
        importance: 4,
        portfolio: false,
        contribution: true,
        draft: false,
        technologies: [
            technologiesFixtures.bootstrap.slug,
            technologiesFixtures.javaScript.slug,
            technologiesFixtures.meteor.slug
        ]
    }, {
        id: 9,
        slug: 'autoform-input-addon-icon',
        name: 'meteor-autoform-input-addon-icon',
        description: 'project.autoform-input-addon-icon.description',
        img: '',
        thumbnail: '',
        url: 'https://atmospherejs.com/smaltcreation/autoform-input-addon-icon',
        importance: 3,
        portfolio: false,
        contribution: true,
        draft: false,
        technologies: [
            technologiesFixtures.bootstrap.slug,
            technologiesFixtures.javaScript.slug,
            technologiesFixtures.meteor.slug
        ]
    }, {
        id: 10,
        slug: 'autoform-intl-tel-input',
        name: 'meteor-autoform-intl-tel-input',
        description: 'project.autoform-intl-tel-input.description',
        img: '',
        thumbnail: '',
        url: 'https://atmospherejs.com/smaltcreation/autoform-intl-tel-input',
        importance: 3,
        portfolio: false,
        contribution: true,
        draft: false,
        technologies: [
            technologiesFixtures.bootstrap.slug,
            technologiesFixtures.javaScript.slug,
            technologiesFixtures.meteor.slug
        ]
    }, {
        id: 11,
        slug: 'alert-i18n',
        name: 'meteor-alert-i18n',
        description: 'project.alert-i18n.description',
        img: '',
        thumbnail: '',
        url: 'https://atmospherejs.com/smaltcreation/alert-i18n',
        importance: 4,
        portfolio: false,
        contribution: true,
        draft: false,
        technologies: [
            technologiesFixtures.bootstrap.slug,
            technologiesFixtures.javaScript.slug,
            technologiesFixtures.meteor.slug
        ]
    }, {
        id: 12,
        slug: 'autoform-file',
        name: 'meteor-autoform-file',
        description: 'project.autoform-file.description',
        img: '',
        thumbnail: '',
        url: 'https://atmospherejs.com/smaltcreation/autoform-file',
        importance: 3,
        portfolio: false,
        contribution: true,
        draft: false,
        technologies: [
            technologiesFixtures.bootstrap.slug,
            technologiesFixtures.javaScript.slug,
            technologiesFixtures.meteor.slug,
            technologiesFixtures.mongoDB.slug
        ]
    }, {
        id: 13,
        slug: 'manager',
        name: 'manager',
        description: 'project.manager.description',
        img: '/images/project-manager.png',
        thumbnail: '/images/project-manager360x203.png',
        url: 'https://github.com/SmaltCreation/manager',
        importance: 2,
        portfolio: true,
        contribution: true,
        draft: false,
        technologies: [
            technologiesFixtures.bootstrap.slug,
            technologiesFixtures.javaScript.slug,
            technologiesFixtures.meteor.slug,
            technologiesFixtures.mongoDB.slug
        ]
    }
];
