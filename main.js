const cards = document.querySelectorAll('.card')

function flipCard(){
    console.log('iwasclicked');
    this.classList.toggle('flip');
    this.classList.toggle('face');
}

cards.forEach(card => card.addEventListener('click', flipCard))