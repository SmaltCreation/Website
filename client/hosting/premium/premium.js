Template.hostingPremium.helpers({
    options: function () {
        return {
            panelClass: 'info',
            type: 'hostingPremium',
            icon: 'fa fa-star',
            title: 'template.hosting.premium.title',
            "price": {
                before: 'template.hosting.premium.discount',
                after: 'template.hosting.premium.price'
            },
            li: [
                'template.hosting.premium.li.domain',
                'template.hosting.premium.li.disk',
                'template.hosting.premium.li.email',
                'template.hosting.premium.li.back-up',
                'template.hosting.premium.li.data'
            ],
            buttonClass: 'info',
            button: 'template.hosting.premium.info',
            form: {
                value: 1,
                min: 1,
                max: 120,
                helpText: 'template.hosting.premium.form.help-text',
                tooltip: 'template.hosting.premium.info'
            }
        };
    }
});
