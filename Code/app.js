const items = document.querySelectorAll('.destination');
const nbSlide = items.length;
const suivant = document.querySelectorAll('.right');
const precedent = document.querySelectorAll('.left');
let count = 0;

function slideSuivante() {

    items[count].classList.remove('active');

    if (count < nbSlide - 1) {
        count++;
    }
    else {
        count = 0;
    }

    items[count].classList.add('active')
}



function slidePrecedent() {
    items[count].classList.remove('active');

    if (count > 0) {
        count--;
    }
    else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')

}


suivant.forEach(e => e.addEventListener('click', slideSuivante))
precedent.forEach(e => e.addEventListener('click', slidePrecedent))