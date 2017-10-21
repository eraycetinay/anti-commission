# Anti Commission
[![npm version](https://badge.fury.io/js/anti-commission.svg)](https://badge.fury.io/js/anti-commission) 
[![Bower](https://img.shields.io/bower/v/anti-commission.svg)]()
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

A mathematical function to calculate the price including commission.

## Installation
```
npm install anti-commission or bower install anti-commission
```
# Usage
```
var antiCommission = require('anti-commission');
var value = antiCommission(price, rate, convergence);
```
# Why should i use this function?
Payment gateways receive commission over the last amount. If there is a 10% commission rate; Gateway receives a $10 commission for the item you want to sell for $100...
If you sell the product for $110 to prevent damage, this time you pay $11 commission. You will still lose $1...
But if you take the number that anti-commission gives you, your net profit will be $100.
## Example
Lets assume we have $100 product and %10 commission rate...
If we set convergence number to 0.0005, we will earn $100 + ($0-$0.0005)
```
antiCommission(100, 0.1, 0.0005); //will give "111.1115"
//if we use "$111.1115" our net profit will be;
//111.1115 - 111.1115 * 0.1 = 100.00035 ($100 + $0.00035)
```
## License
[MIT](LICENSE) license.


