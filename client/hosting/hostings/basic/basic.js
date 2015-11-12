Template.hostingBasic.helpers({
    options: function () {
        return {
            panelClass: 'primary',
            type: 'hostingBasic',
            icon: 'fa fa-star-half-o',
            title: 'template.hosting.basic.title',
            "price": {
                before: 'template.hosting.basic.discount',
                after: 'template.hosting.basic.price'
            },
            li: [
                'template.hosting.basic.li.domain',
                'template.hosting.basic.li.disk',
                'template.hosting.basic.li.email',
                'template.hosting.basic.li.back-up',
                'template.hosting.basic.li.data'
            ],
            buttonClass: 'primary',
            button: 'template.hosting.basic.info',
            form: {
                value: 1,
                min: 1,
                max: 120,
                helpText: 'template.hosting.basic.form.help-text',
                tooltip: 'template.hosting.basic.info'
            }
        };
    }
});
