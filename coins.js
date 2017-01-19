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

var i = 0.94;
  //the dollar amount will be input here
function coinCounter () {

  var money = i * 100;

 // Initialize a JavaScript object to hold the coins
  var coinPurse = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  };

  //using different variables to perfom the math functions and break down the dollar amount into coin count

  // finding the quarters
    quartersRemainder = money % 25; 
      // console.log(quartersRemainder); 
    quarters = (money - quartersRemainder) / 25; 
      console.log(quarters); 
    
  //finding the dimes
    dimesRemainder = quartersRemainder % 10;
      // console.log(dimesRemainder); 
    dimes = (quartersRemainder - dimesRemainder) / 10;
      console.log(dimes); 

  //finding the nickels 
    nickelsRemainder = dimesRemainder % 5;
      // console.log(nickelsRemainder); 
    nickels = (dimesRemainder - nickelsRemainder) / 5;
      console.log(nickels); 

  //finding the pennies
    penniesRemainder = nickelsRemainder % 1;
      // console.log(penniesRemainder);
    pennies = (nickelsRemainder - penniesRemainder) / 1;
      console.log(pennies);


   
 }



var coins = coinCounter();
console.log(coins); 