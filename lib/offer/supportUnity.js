/**
 * @param quantity
 * @constructor
 */
SupportUnity = function (quantity) {
    this.price = 55;
    this.tax = {
        enabled: true,
        value: 1.2
    };
    this.reductions = {};
    this.quantity = quantity;
    this.total = this.price * this.quantity;
};

SupportUnity.prototype.setTaxes       = Offer.prototype.setTaxes;
SupportUnity.prototype.resetTotal     = Offer.prototype.resetTotal;
SupportUnity.prototype.getTotal       = Offer.prototype.getTotal;
SupportUnity.prototype.getCents       = Offer.prototype.getCents;
SupportUnity.prototype.setReductions  = Offer.prototype.setReductions;
