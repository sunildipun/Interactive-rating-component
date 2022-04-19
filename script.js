const ratingCount = [1,2,3,4,5];

const ratingCard = document.querySelector('.card_rating');
const menu = document.getElementById('ratings');
const ratingList = menu.children;

const sumbitButton = document.querySelector('.submit');

const thankyouCard = document.querySelector('.card-thank');
thankyouCard.style.display = 'none'; // Hiding the thanks you card

const ratingValue = document.querySelector('#ratingValue');


//adding click event to sumbit button
sumbitButton.addEventListener('click', event => {
    thankyouCard.style.display = 'flex';
    ratingCard.style.display = 'none';
});

let selectedRating;

document.querySelectorAll('#rating').forEach(item => {
    item.addEventListener('click', event => {
        if(selectedRating != null) {
            selectedRating.id = 'rating';
        };
        item.id = 'selected';
        ratingValue.textContent = item.textContent;
        selectedRating = item;
    });
});