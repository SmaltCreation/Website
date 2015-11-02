Template.supportSubscription.helpers({
    options: function () {
        return {
            panelClass: 'warning',
            type: 'supportSubscription',
            icon: 'fa fa-refresh',
            title: 'template.support.subscription.title',
            "price": {
                before: 'template.support.subscription.discount',
                after: 'template.support.subscription.price'
            },
            li: [
                'template.support.subscription.li.hours',
                'template.support.subscription.li.cheap',
                'template.support.subscription.li.purchase',
                'template.support.subscription.li.scalability'
            ],
            buttonClass: 'warning',
            button: 'template.support.subscription.info',
            form: {
                value: 1,
                min: 1,
                max: 120,
                helpText: 'template.support.subscription.form.help-text',
                tooltip: 'template.support.subscription.info'
            }
        };
    }
});
