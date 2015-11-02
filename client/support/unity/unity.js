Template.supportUnity.helpers({
    options: function () {
        return {
            panelClass: 'warning',
            type: 'supportUnity',
            icon: 'fa fa-clock-o',
            title: 'template.support.unity.title',
            "price": {
                before: 'template.support.unity.discount',
                after: 'template.support.unity.price'
            },
            li: [
                'template.support.unity.li.tracking',
                'template.support.unity.li.fast',
                'template.support.unity.li.contact',
                'template.support.unity.li.scalability'
            ],
            buttonClass: 'warning',
            button: 'template.support.unity.info',
            form: {
                value: 1,
                min: 1,
                max: 120,
                helpText: 'template.support.unity.form.help-text',
                tooltip: 'template.support.unity.info'
            }
        };
    }
});
