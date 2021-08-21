
console.log("working");

function luckySevens() {
    var initialBet = document.getElementById("initialBet").value;
    var money = 0;
    var die1 = 0;
    var die2 = 0;
    var dice = 0;
    var rollCount = 0;
    var money = initialBet;
    var moneyHeld = [initialBet];
    var win = 4;
    var loss = 1;
    var maxHeld = 0;
 
  if (initialBet <= 0) {
    document.getElementById("p1").innerText = "bet must be higher than 0";
    return false;
  }else{
  do {
    // dice roller radomizer
    rollCount++;
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dice = die1 + die2;

    // WINNER
    if (dice == 7) {
      money = money + win; // add $4 to money used to make bets
      var last_element = moneyHeld[moneyHeld.length - 1]; // get value of last element of moneyHeld array that is used to show current money held by player after last roll
      var last_updated = last_element + win; // adds $4 to previous roll winnings and stores in last_updated
      moneyHeld.push(last_updated);

      // LOSER
    } else {
      money--;
      
      // maxMoney.push(0);
      var last_element = moneyHeld[moneyHeld.length - 1];
      var last_updated = last_element - loss;
      moneyHeld.push(last_updated);
      rollCount = rollCount++;
    }
  } while (money > 0);
  totalMax = Math.max.apply(Math, moneyHeld); // finds max value in moneyHeld array
  numRolls = moneyHeld.indexOf(totalMax); // finds number of rolls till max moneyHeld array
  if (numRolls < 1) {
    numRolls = 0;
  }
  document.getElementById("p1").innerHTML =
    ' <table id="results" class="table table-striped" class="th1"><thead><tr><th>Results</th></tr></thead><tbody><tr><td>Starting Bet:</td><td>'+initialBet+'</td></tr><tr><td>Total Rolls before bankrupt</td><td>'+rollCount+'</td></tr><tr><td>Highest Amount Won</td><td>'+totalMax+'</td></tr><tr><td>Total Rolls at highest amount won</td><td>'+numRolls+'</td></tr> </tbody></table></div>';
    document.getElementById("p2").innerText = "play again"
}
}
