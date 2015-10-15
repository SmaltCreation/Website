Schema.Contact = new SimpleSchema({
    name: {
        type: String,
        autoform: {
            max: 255,
            type: 'smalt-addon-icon',
            icon: 'fa fa-fw fa-user',
            left: true
        }
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        autoform: {
            type: 'smalt-addon-icon',
            icon: 'fa fa-fw fa-at',
            left: true
        }
    },
    subject: {
        type: String,
        autoform: {
            max: 255,
            type: 'smalt-addon-icon',
            icon: 'fa fa-fw fa-comment',
            left: true
        }
    },
    message: {
        type: String,
        autoform: {
            rows: 6,
            max: 5000
        }
    }
});
