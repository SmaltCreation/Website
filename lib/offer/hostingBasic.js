/**
 * @param quantity
 * @constructor
 */
HostingBasic = function (quantity) {
    this.price = 14.16;
    this.tax = {
        enabled: true,
        value: 1.2
    };
    this.reductions = {
        months: [{
            enabled: false,
            from: 6,
            value: 0.9
        }, {
            enabled: false,
            from: 12,
            value: 0.8
        }, {
            enabled: false,
            from: 36,
            value: 0.7
        }]
    };
    this.quantity = quantity;
    this.total = this.price * this.quantity;
};

HostingBasic.prototype.setTaxes     = Offer.prototype.setTaxes;
HostingBasic.prototype.resetTotal   = Offer.prototype.resetTotal;
HostingBasic.prototype.getTotal     = Offer.prototype.getTotal;
HostingBasic.prototype.getCents     = Offer.prototype.getCents;

HostingBasic.prototype.setReductions = function () {
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
