const ratingCount = [1,2,3,4,5];

const ratingCard = document.querySelector('.card_rating');
const menu = document.getElementById('ratings');
const ratingList = menu.children;

const sumbitButton = document.querySelector('.submit');

const thankyouCard = document.querySelector('.card-thank');
console.log('thank you', thankyouCard);
thankyouCard.style.display = 'none'; // Hiding the thanks you card

//adding click event to sumbit button
sumbitButton.addEventListener('click', event => {
    thankyouCard.style.display = 'flex';
    ratingCard.style.display = 'none';
});

let selectedRating;

console.log(menu, ratingList);
document.querySelectorAll('#rating').forEach(item => {
    console.log(item, item.id);
    item.addEventListener('click', event => {
        if(selectedRating != null) {
            selectedRating.id = 'rating';
        };
        item.id = 'selected';
        selectedRating = item;
    });
});