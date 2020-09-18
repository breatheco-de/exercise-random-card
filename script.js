let pintas = ['♣', '♥', '♣', '♠'];
let nums = ['A','2','3','4','5','6','7','8','9','J','Q','K'];

function randomcard(){
    let pinta = pintas[Math.floor(Math.random() * pintas.length)];
    let num = nums[Math.floor(Math.random() * nums.length)];
    //let pintainf === pinta
    let p1= document.getElementById('p1')
    p1.innerHtml = pinta.toString();

    let n1= document.getElementById('n1')
    n1.innerHtml = num;

    console.log (pinta);
    console.log (num);

    console.log (p1);
}