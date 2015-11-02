Template.hostingVPS.helpers({
    options: function () {
        return {
            panelClass: 'info',
            type: 'hostingVPS',
            icon: 'fa fa-terminal',
            title: 'template.hosting.vps.title',
            "price": {
                before: 'template.hosting.vps.discount',
                after: 'template.hosting.vps.price'
            },
            li: [
                'template.hosting.vps.li.domain',
                'template.hosting.vps.li.disk',
                'template.hosting.vps.li.email',
                'template.hosting.vps.li.back-up',
                'template.hosting.vps.li.cpu'
            ],
            buttonClass: 'info',
            button: 'template.hosting.vps.info',
            form: {
                value: 1,
                min: 1,
                max: 120,
                helpText: 'template.hosting.vps.form.help-text',
                tooltip: 'template.hosting.vps.info'
            }
        };
    }
});
