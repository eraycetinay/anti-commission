# anti-commission

When trading for a $100 product, let's assume the bank gets 10%. That means your net profit is $90 dollars. 

Even if we do a $110 transaction to prevent damage, you'll still have $1 loss because the new 10% will be $11, not $10. So the net profit would be $99, not $100. It goes this way forever. 

At this point you can use this function to find the number you need to use to avoid commission damage.
```
antiCommission(price, rate, convergence);
```

Eg;  Lets assume we have $100 product and %10 commission rate.
If we set convergence number to 0.0005, we will earn $100 + ($0-$0.0005)
```
antiCommission(100, 0.1, 0.0005); //will give "111.1115"
//if we use "$111.1115" our net profit will be;
//111.1115 - 111.1115 * 0.1 = 100.00035 ($100 + $0.00035)
```


