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
            icon: 'fa fa-fw fa-envelope',
            left: true
        }
    },
    phone: {
        type: String,
        autoform: {
            type: 'intl-tel',
            class: 'form-control',
            intlTelOptions: {
                autoFormat: true,
                defaultCountry: 'FR',
                utilsScript: 'lib/libphonenumber/build/utils.js'
            }
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
