'use strict';

function antiCommission(price, rate, convergence) {
    var _newPrice = (price + (price * rate)) + (((price + (price * rate)) * rate) - (price * rate));
    var _profit = _newPrice - _newPrice * rate;

    while (_profit < price) {
        _newPrice += convergence;
        _profit = _newPrice - _newPrice * rate;
    }

    return _newPrice;
}

module.exports = antiCommission;