
var counter = document.getElementById("counter");
var question = prompt("How much money do you have?");

var coinPurse = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  };
  //the dollar amount will be input here
function coinCounter () {

  question *= 100;

 // Initialize a JavaScript object to hold the coins
  

  //using different variables to perfom the math functions and break down the dollar amount into coin count

  // finding the quarters
    quartersRemainder = question % 25; 
      // console.log(quartersRemainder); 
    coinPurse.quarters = (question - quartersRemainder) / 25; 
      console.log(coinPurse.quarters); 
    
  //finding the dimes
    dimesRemainder = quartersRemainder % 10;
      // console.log(dimesRemainder); 
    coinPurse.dimes = (quartersRemainder - dimesRemainder) / 10;
      console.log(coinPurse.dimes); 

  //finding the nickels 
    nickelsRemainder = dimesRemainder % 5;
      // console.log(nickelsRemainder); 
    coinPurse.nickels = (dimesRemainder - nickelsRemainder) / 5;
      console.log(coinPurse.nickels); 

  //finding the pennies
    penniesRemainder = nickelsRemainder % 1;
      // console.log(penniesRemainder);
    coinPurse.pennies = (nickelsRemainder - penniesRemainder) / 1;
      console.log(coinPurse.pennies);


   
 }

coinCounter(); 

counter.innerHTML = ("Your quarters are " + coinPurse.quarters + ", and your dimes are " + coinPurse.dimes + ", your nickels are " + coinPurse.nickels + ", your pennies are " + coinPurse.pennies + ".");

