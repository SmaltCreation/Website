technologiesFixtures = {
    bootstrap: {
        id: 1,
        slug: 'bootstrap',
        name: 'Bootstrap',
        description: '',
        img: '/images/technology-bootstrap.png',
        url: 'http://getbootstrap.com/',
        isSkill: true
    },
    googleMaps: {
        id: 2,
        slug: 'googleMaps',
        name: 'Google Maps',
        description: '',
        img: '/images/technology-googlemaps.png',
        url: 'https://www.google.fr/maps/',
        isSkill: true
    },
    javaScript: {
        id: 3,
        slug: 'javaScript',
        name: 'JavaScript',
        description: '',
        img: '/images/technology-javascript.png',
        url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
        isSkill: true
    },
    meteor: {
        id: 4,
        slug: 'meteor',
        name: 'Meteor',
        description: '',
        img: '/images/technology-meteor.png',
        url: 'http://meteor.com/',
        isSkill: true
    },
    mongoDB: {
        id: 5,
        slug: 'mongoDB',
        name: 'MongoDB',
        description: '',
        img: '/images/technology-mongodb.jpg',
        url: 'https://www.mongodb.org/',
        isSkill: true
    },
    nexmo: {
        id: 6,
        slug: 'nexmo',
        name: 'Nexmo',
        description: '',
        img: '/images/technology-nexmo.png',
        url: 'https://www.nexmo.com/',
        isSkill: true
    },
    nginx: {
        id: 7,
        slug: 'nginx',
        name: 'NGINX',
        description: '',
        img: '/images/technology-nginx.png',
        url: 'http://nginx.org/',
        isSkill: true
    },
    stripe: {
        id: 8,
        slug: 'stripe',
        name: 'Stripe',
        description: '',
        img: '/images/technology-stripe.png',
        url: 'https://stripe.com/fr',
        isSkill: true
    },
    symfony2: {
        id: 9,
        slug: 'symfony2',
        name: 'Symfony2',
        description: '',
        img: '/images/technology-symfony2.png',
        url: 'http://symfony.com/',
        isSkill: true
    },
    ubuntuServer: {
        id: 10,
        slug: 'ubuntuServer',
        name: 'Ubuntu Server',
        description: '',
        img: '/images/technology-ubuntuserver.png',
        url: 'http://www.ubuntu.com/download/server',
        isSkill: true
    },
    wordpress: {
        id: 11,
        slug: 'wordpress',
        name: 'Wordpress',
        description: '',
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
        description: 'template.home.project.inck.description',
        img: '/images/project-inck360x203.png',
        url: 'https://www.inck.fr',
        importance: 3,
        portfolio: true,
        draft: false,
        technologies: [
            technologiesFixtures.bootstrap.id,
            technologiesFixtures.googleMaps.id,
            technologiesFixtures.nginx.id,
            technologiesFixtures.symfony2.id,
            technologiesFixtures.ubuntuServer.id
        ]
    }, {
        id: 2,
        slug: 'l7rg',
        name: 'Lyon 7 Rive Gauche',
        description: 'template.home.project.l7rg.description',
        img: '/images/project-l7rg360x203.png',
        url: 'http://www.lyon7rivegauche.fr',
        importance: 4,
        portfolio: true,
        draft: false,
        technologies: [
            technologiesFixtures.wordpress.id
        ]
    }, {
        id: 3,
        slug: 'crlive',
        name: 'Croix-Rousse Live',
        description: 'template.home.project.crlive.description',
        img: '/images/project-crlive360x203.png',
        url: 'http://www.croixrousselive.org',
        importance: 6,
        portfolio: true,
        draft: false,
        technologies: [
            technologiesFixtures.wordpress.id
        ]
    }, {
        id: 4,
        slug: 'rey-freres',
        name: 'REY Frères',
        description: 'template.home.project.rey-freres.description',
        img: '/images/project-rey-freres360x203.png',
        url: 'http://www.reyfreres.com',
        importance: 5,
        portfolio: true,
        draft: false,
        technologies: [
            technologiesFixtures.wordpress.id
        ]
    },{
        id: 6,
        slug: 'tilamp',
        name: 'Tilamp',
        description: 'template.home.project.tilamp.description',
        img: '/images/project-tilamp360x203.png',
        url: 'https://www.tilamp.com',
        importance: 1,
        portfolio: true,
        draft: false,
        technologies: [
            technologiesFixtures.bootstrap.id,
            technologiesFixtures.googleMaps.id,
            technologiesFixtures.javaScript.id,
            technologiesFixtures.mongoDB.id,
            technologiesFixtures.nexmo.id,
            technologiesFixtures.stripe.id,
            technologiesFixtures.ubuntuServer.id
        ]
    }, {
        id: 7,
        slug: 'icon',
        name: 'I.C.O.N.',
        description: 'template.home.project.icon.description',
        img: '/images/project-icon360x203.png',
        url: 'https://www.network-icon.com',
        importance: 2,
        portfolio: true,
        draft: false,
        technologies: [
            technologiesFixtures.bootstrap.id,
            technologiesFixtures.googleMaps.id,
            technologiesFixtures.javaScript.id,
            technologiesFixtures.mongoDB.id,
            technologiesFixtures.nexmo.id,
            technologiesFixtures.stripe.id,
            technologiesFixtures.ubuntuServer.id
        ]
    }
];
