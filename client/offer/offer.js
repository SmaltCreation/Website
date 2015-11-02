Template.offer.onCreated(function () {
    this.data.value                 = new ReactiveVar(this.data.form ? this.data.form.value : 1);
    this.data.offer                 = new ReactiveVar();
    this.data.offerWithoutReduction = new ReactiveVar();

    this.computation = null;
    var self = this;

    Tracker.autorun(function (c) {
        if (!self.computation) {
            self.computation = c;
        }

        self.data.offer.set(getOffer(self.data).setReductions().setTaxes());
        self.data.offerWithoutReduction.set(getOffer(self.data).setTaxes());
    });
});

Template.offer.helpers({
    priceWithReduction: function () {
        return this.offer.get().getTotal();
    },
    priceWithoutReduction: function () {
        return this.offerWithoutReduction.get().getTotal();
    },
    formValue: function () {
        return this.value.get();
    },
    helpTextCount: function () {
        return parseInt(this.value.get());
    },
    discount: function () {
        return this.offer.get().getCents() < this.offerWithoutReduction.get().getCents();
    }
});

Template.offer.onDestroyed(function () {
    if (this.computation) {
        this.computation.stop();
    }
});

function getOffer (data) {
    var type = getType(data.type);

    return new type(data.value.get());
}

function getType (type) {
    var result = null;

    switch (type) {
        case 'hostingBasic':
            result = HostingBasic;
            break;
        case 'hostingPremium':
            result = HostingPremium;
            break;
        case 'hostingVPS':
            result = HostingVPS;
            break;
        case 'securitySSL':
            result = SecuritySSL;
            break;
        default:
            throw new Error('Invalid type');
    }

    return result;
}


Template.offer.events({
    'click .info': function (event, template) {
        var form = template.$('.form-info');

        if (form.length) {
            // Flip others
            $('.form-info').not(form).each(function () {
                if ($(this).is(':visible')) {
                    $(this).hide().removeClass('animated flipInX');
                    $(this).closest('div').find('.info').show().addClass('animated flipInX');
                }
            });

            // Flip target
            $(event.target).hide().removeClass('animated flipInX');
            form.show().addClass('animated flipInX');
        }
    },
    'click .increase-number': function (event, template) {
        event.stopPropagation();
        var value = parseInt(template.data.value.get());

        // Check max
        if (value >= template.data.form.max) {
            return false;
        }

        // Increase value
        value++;
        template.data.value.set(value);
    },
    'keydown .number, keyup .number, change .number': function(event, template) {
        var input = $(event.target);
        var value = input.val();

        // Check min
        if (value && value < template.data.form.min) {
            template.data.value.set(template.data.form.min);
            return false;
        }

        // Check max
        if (value && value > template.data.form.max) {
            input.val(template.data.form.max);
            template.data.value.set(template.data.form.max);
            return false;
        }

        // Set value
        if (value) {
            template.data.value.set(value);
        }
    }
});
