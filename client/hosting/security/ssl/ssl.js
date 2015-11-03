Template.securitySSL.helpers({
    options: function () {
        return {
            panelClass: 'success',
            type: 'securitySSL',
            icon: 'fa fa-lock',
            title: 'template.hosting.security.ssl.title',
            "price": {
                before: 'template.hosting.security.ssl.discount',
                after: 'template.hosting.security.ssl.price'
            },
            li: [
                'template.hosting.security.ssl.li.type',
                'template.hosting.security.ssl.li.domain',
                'template.hosting.security.ssl.li.nopaperwork',
                'template.hosting.security.ssl.li.security',
                'template.hosting.security.ssl.li.seo'
            ],
            buttonClass: 'success',
            button: 'template.hosting.security.ssl.info',
            form: {
                value: 1,
                min: 1,
                max: 12,
                helpText: 'template.hosting.security.ssl.form.help-text',
                tooltip: 'template.hosting.security.ssl.info'
            }
        };
    }
});
