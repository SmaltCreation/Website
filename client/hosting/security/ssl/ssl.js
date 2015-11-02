Template.securitySSL.helpers({
    options: function () {
        return {
            panelClass: 'success',
            type: 'securitySSL',
            icon: 'fa fa-lock',
            title: 'template.security.ssl.title',
            "price": {
                before: 'template.security.ssl.discount',
                after: 'template.security.ssl.price'
            },
            li: [
                'template.security.ssl.li.type',
                'template.security.ssl.li.domain',
                'template.security.ssl.li.nopaperwork',
                'template.security.ssl.li.security',
                'template.security.ssl.li.seo'
            ],
            buttonClass: 'success',
            button: 'template.security.ssl.info',
            form: {
                value: 1,
                min: 1,
                max: 12,
                helpText: 'template.security.ssl.form.help-text',
                tooltip: 'template.security.ssl.info'
            }
        };
    }
});
