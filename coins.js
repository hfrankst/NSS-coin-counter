/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarters = .25;
  coinPurse.dimes = .1;
  coinPurse.nickels = .05;
  coinPurse.pennies = .01; 

  return coinPurse;
}

var coins = coinCounter();
console.log(coins);