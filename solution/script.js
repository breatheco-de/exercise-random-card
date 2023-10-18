window.onload = function() {
  
    let cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let suit = ["Diamonds", "Spades", "Hearts", "Clubs"];
    let randomCardNumber = Math.floor(Math.random() * cardNumber.length);
    let randomSuitNumber = Math.floor(Math.random() * suit.length);
    let finalSuit = suit[randomSuitNumber];
    
    document.getElementById('cardContent').innerHTML = cardNumber[randomCardNumber];
    document.getElementById('theCard').className = "";
    document.getElementById('theCard').classList.add("card");
    document.getElementById('theCard').classList.add(getSuiteClass(finalSuit));
  }
  
  function getSuiteClass(suit) {
    switch (suit) {
      case "Diamonds": return "suit-diamonds";
      case "Spades": return "suit-spades";
      case "Hearts": return "suit-hearts";
      case "Clubs": return "suit-clubs";
    }
  }
