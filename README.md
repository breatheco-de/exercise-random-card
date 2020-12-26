# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32)  Random Card Dealer in Javascript, HTML and CSS

<p align="center">
<img height="200px" src="https://github.com/breatheco-de/exercise-random-card/blob/master/preview.gif?raw=true" />
</p>

In this project you will learn how to change your website styles during the runtime using [VanillaJS](https://stackoverflow.com/questions/20435653/what-is-vanillajs) (plain normal js).

## 📝 Instructions

Create an algorithm that randomly builds a card on every refresh:

1. Every time the website refreshes a new random card needs to show.
2. The card must have one of the possible suits: Hearts, Spades, Clubs and Diamonds.
3. The card value must be one of the following: 1 to 10, King, Queen, Jack or Ace, (no joker).

In the end, the project needs to look similar to [this demo](https://github.com/breatheco-de/exercise-random-card/blob/master/preview.gif?raw=true).

### 💡Hints

- Remember that the first event of a website lifecycle is [onLoad (your code starts running there)](https://www.w3schools.com/jsref/event_onload.asp). You should generate a random number between 1 and 4 to pick a suit and another random number between 0 and 12 to pick a card number.
- Create a general **.card** class that applies the general styles to each card, and one additional CSS class for each suit: .spade, .club, .heart & .diamond.
- Apply the .card class to the entire div but only apply one of the suit classes at a time, depending on what suit you want to apply. For example, a 3 of Hearts will have this HTML declaration:
```
    <div class='card heart'></div>
```
- You can use images, [icons](https://fontawesome.com/icons?d=gallery) or HTML character entities to generate the suit symbol into the HTML. [Here you can find the character entities](https://brajeshwar.github.io/entities/).

HTML	| Simbolo	| Numérico	| Descripción	                    | Hex	        | CSS (ISO) | JS (Octal)|
--------|-----------|-----------|-----------------------------------|---------------|-----------|-----------|
&loz;	| ◊	        | &#9674;	| lozenge	                        | u+25CA ISOpub	| \25CA	    | \u25ca    |
&spades;| ♠	        | &#9824;	| black spade suit                  | u+2660 ISOpub	| \2660	    | \u2660    |
&clubs;	| ♣	        | &#9827;	| black club suit, a.k.a. shamrock  | u+2663 ISOpub	| \2663	    | \u2663    |
&hearts;| ♥	        | &#9829;	| black heart suit, a.k.a. valentine| u+2665 ISOpub	| \2665	    | \u2665    |
&diams;	| ♣	        | &#9830;	| black diamond suit                | u+2663 ISOpub	| \2666	    | \u2666    |
