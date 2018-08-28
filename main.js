const cards = document.querySelectorAll('.card')
let hasFlippedCard = false
let firstCard;
let secondCard;



function flipCard(){
    this.classList.toggle('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
    }else{
        hasFlippedCard = false;
        secondCard = this;
        console.log(firstCard.dataset.cardtype)
        console.log(secondCard.dataset.cardtype)
}
};

cards.forEach(card => card.addEventListener('click', flipCard));