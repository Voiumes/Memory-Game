const cards = document.querySelectorAll('.card')
let hasFlippedCard = false;
let lock = false;
let firstCard;
let secondCard;
cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard() {
    if(lock === true){
        return;
    }
    if(firstCard === this){
        return;
    }
    
    this.classList.toggle('flip');
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {

        secondCard = this;
        checkForMatch();
    }
    function checkForMatch() {
       let match = firstCard.dataset.cardtype === secondCard.dataset.cardtype;
           match ? disabledCards() : unflipCards();
        } 
    
}
function disabledCards() {
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
    resetBoard();
}
function unflipCards() {
    lock = true;
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        resetBoard();
    }, 1000)
}
function resetBoard(){
    [hasFlippedCard, lock] = [false, false]
    [firstCard, secondCard] = [null, null]
}

(function shuffle(){
    cards.forEach(function(card){
        let randomNums = Math.floor(Math.random() * 12);
        card.style.order = randomNums;
    })
})();

document.querySelector('.reset').addEventListener('click', function(){
    resetBoard();
    shuffle();
});