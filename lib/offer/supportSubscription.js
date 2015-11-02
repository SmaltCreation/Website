/**
 * @param quantity
 * @constructor
 */
SupportSubscription = function (quantity) {
    this.price = 320;
    this.tax = {
        enabled: true,
        value: 1.2
    };
    this.reductions = {};
    this.quantity = quantity;
    this.total = this.price * this.quantity;
};

SupportSubscription.prototype.setTaxes       = Offer.prototype.setTaxes;
SupportSubscription.prototype.resetTotal     = Offer.prototype.resetTotal;
SupportSubscription.prototype.getTotal       = Offer.prototype.getTotal;
SupportSubscription.prototype.getCents       = Offer.prototype.getCents;
SupportSubscription.prototype.setReductions  = Offer.prototype.setReductions;
