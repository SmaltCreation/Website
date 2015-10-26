/**
 * @param price
 * @param tax
 * @param quantity
 * @constructor
 */
Offer = function (price, tax, quantity) {
    this.price = price;
    this.tax = tax;
    this.quantity = quantity;
    this.total = this.price * this.quantity;
};

Offer.prototype.setTaxes = function () {
    if (this.tax.enabled && this.tax.value) {
        this.total *= this.tax.value;
        this.taxed = true;
    }

    return this;
};

Offer.prototype.resetTotal = function () {
    this.total = this.price * this.quantity;
    this.reduced = false;
    this.taxed = false;

    return this
};

Offer.prototype.getTotal = function () {
    return Number(Math.round(this.total * 100) / 100).toFixed(2);
};

Offer.prototype.getCents = function () {
    return this.getTotal() * 100;
};

Offer.prototype.setReductions = function () {
    this.reduced = false;
    return this
};
