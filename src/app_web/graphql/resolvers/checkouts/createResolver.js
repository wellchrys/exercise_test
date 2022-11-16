const Checkout = require('../../../../app/checkouts/checkout');

const call = ({ input: attrs }) => Checkout.create(attrs);

module.exports = { call };

