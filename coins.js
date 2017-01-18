/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }
<<<<<<< HEAD
 Use for loops to find the number of coins can go into the dollar amount evenly.  
 After that, use another for loop to run the amount of dimes into the remainder left 
 over from the quarters.  Use more for loops for the nickels and pennies. 
=======

>>>>>>> cb182d9be702b7383175c2228eeb9593a9695ff6
*/

function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

<<<<<<< HEAD
  coinPurse.quarters = .25; 
=======
  coinPurse.quarters = .25;
>>>>>>> cb182d9be702b7383175c2228eeb9593a9695ff6
  coinPurse.dimes = .1;
  coinPurse.nickels = .05;
  coinPurse.pennies = .01; 

  return coinPurse;
}

var coins = coinCounter();
console.log(coins);