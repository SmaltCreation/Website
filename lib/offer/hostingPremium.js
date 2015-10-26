/**
 * @param quantity
 * @constructor
 */
HostingPremium = function (quantity) {
    this.price = 18.325;
    this.tax = {
        enabled: true,
        value: 1.2
    };
    this.reductions = {
        months: [{
            enabled: true,
            from: 6,
            value: 0.9
        }, {
            enabled: true,
            from: 12,
            value: 0.8
        }, {
            enabled: true,
            from: 36,
            value: 0.7
        }]
    };
    this.quantity = quantity;
    this.total = this.price * this.quantity;
};

HostingPremium.prototype.setTaxes     = Offer.prototype.setTaxes;
HostingPremium.prototype.resetTotal   = Offer.prototype.resetTotal;
HostingPremium.prototype.getTotal     = Offer.prototype.getTotal;
HostingPremium.prototype.getCents     = Offer.prototype.getCents;

HostingPremium.prototype.setReductions = function () {
    var self = this;
    var price = this.total;

    this.reductions.months.forEach(function (reduction) {
        if (reduction.enabled && self.quantity >= reduction.from) {
            price = self.total * reduction.value;
            self.reduced = true;
        }
    });

    self.total = price;

    return self;
};
