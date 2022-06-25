const buttonOne = document.getElementById('buttonOne');
const buttonTwo = document.getElementById('buttonTwo');
const buttonThree = document.getElementById('buttonThree');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');
const container = document.getElementById('container');
const cards = document.querySelectorAll('.card h2');

function buttonOneF() {
    buttonOne.style.backgroundColor = 'red';
    container.style.gridTemplateColumns = "auto";
    console.log('1')
}
function buttonTwoF() {
    buttonTwo.style.backgroundColor = 'yellow';
    // container.style.display = 'grid';
    container.style.gridTemplateColumns = "auto auto auto";
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.padding = "80px";
      }
      console.log('2')
}
function buttonThreeF() {
    buttonThree.style.backgroundColor = 'red';
    container.style.gridTemplateColumns = "repeat(6, 1 fr)";
    card1.style.gridColumn = "span 6" ;  
    card5.style.gridColumn = "span 6" ; 
    card3.style.gridColumn = "span 4" ; 
    card2.style.gridRow = "span 20" ; 
    card3.style.gridRow = "span 20" ; 
    card4.style.gridRow = "span 20" ;
    console.log('3') 
}




