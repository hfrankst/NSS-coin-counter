/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }
 Use for loops to find the number of coins can go into the dollar amount evenly.  
 After that, use another for loop to run the amount of dimes into the remainder left 
 over from the quarters.  Use more for loops for the nickels and pennies. 

*/

function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  //first for loop to see how many quarters can fit into the $ amount
  for (coinPurse = 0; coinPurse < coinPurse.length; coinPurse++) {
    coinPurse.quarters = 0; 
  }
  //second for loop for the number of dimes
  coinPurse.dimes = 0;

  coinPurse.nickels = 0;
  
  coinPurse.pennies = 0; 

  return coinPurse;
}

var coins = coinCounter();
console.log(coins);