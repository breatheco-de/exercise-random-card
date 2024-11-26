<!--hide-->
# Random Card Dealer in JavaScript, HTML and CSS
<!--endhide-->

<p align="center">
<img height="200px" src="https://github.com/breatheco-de/exercise-random-card/blob/master/preview.gif?raw=true" />
</p>

In this project, you will learn how to change your website styles during the runtime using [VanillaJS](https://stackoverflow.com/questions/20435653/what-is-vanillajs) (plain normal js).

## 📝 Instructions

Create an algorithm that randomly builds a card on every refresh:

1. Every time the website refreshes, a new random card needs to show.

2. The card must have one of the possible suits: Hearts, Spades, Clubs, or Diamonds.

3. The card value must be one of the following: 2 to 10, King, Queen, Jack or Ace (no joker).

In the end, the project needs to look similar to [this demo](https://github.com/breatheco-de/exercise-random-card/blob/master/preview.gif?raw=true).

## 🌱 How to start this project

Do not clone this repository because we are going to be using a different template.

We recommend opening the `vanilla.js boilerplate` using a provisioning tool like [Codespaces](https://4geeks.com/lesson/what-is-github-codespaces) (recommended) or [Gitpod](https://4geeks.com/lesson/how-to-use-gitpod). Alternatively, you can clone it on your local computer using the `git clone` command.

This is the repository you need to open or clone:

```text
https://github.com/4GeeksAcademy/vanillajs-hello.git
```

**👉 Please follow these steps on** [how to start a coding project](https://4geeks.com/lesson/how-to-start-a-project).


> 💡 Important: Remember to save and upload your code to GitHub by creating a new repository, updating the remote (`git remote set-url origin <your new url>`), and uploading the code to your new repository using the `add`, `commit` and `push` commands from the git terminal.

## 💡 Hints

- Remember that the first event of a website lifecycle is [onLoad (your code starts running there)](https://www.w3schools.com/jsref/event_onload.asp). You should generate a random number between 1 and 4 to pick a suit and another random number between 0 and 12 to pick a card number.

- Create a general `.card` class that applies the common styles to each card, and one additional CSS class for each suit: `.spade`, `.club`, `.heart` & `.diamond`.

- Apply the `.card` class to the entire div, but only apply one of the suit classes at a time, depending on what suit you want to apply. For example, a 3 of hearts will have this HTML declaration:

```html
<div class='card heart'></div>
```

- You can grab the icons from here (copy and paste into your code): ♦ ♥ ♠ ♣

## 😎 Feeling Confident?

The following requirements are not needed to successfully finish this project, but you can try and challenge yourself!

`+1` Add a button that generates a new card when clicked. 

`+1` Add a timer that generates a new card every 10 seconds.   

`+1` Allow the user to specify the card width and height using text inputs.   

<!-- hide -->
This and many other projects are built by students as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).
<!-- endhide -->
