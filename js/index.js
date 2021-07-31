'use strict';

let fruits = [
  {name:'Strawberries', overview:'Something short', details:'Strawberries are small red sweet berries. They are great for snacks. Cutting them into small bits can be used for toppings in yogurt, cakes, and oatmeal. Good for smoothies and milkshakes.'},
  {name: 'Fruits', overview:'Something short', details:'Just a picture of some fruit. Click on another fruit to learn more.'},
  {name:'Blueberries', overview:'Something short', details:'Blueberries are tiny berries which can be somewhat sweet. They are a great snack. Good topping for yogurt, milkshakes and smoothies.'},
  {name:'Bananas', overview:'Something short', details:'Bananas are a very common fruit found during all seasons. The color of the banana indicates how to sweet the banana will be. Green for less sweet, yellow more sweet. Bananas are great for snacks, and smoothies.'},
  {name:'Fruits', overview:'Something short', details:'Just a picture of some fruit. Click on another fruit to learn more.'},
  {name:'Oranges', overview:'Something short', details:'Oranges are great for a refreshing snack. They can be squeezed and chilled to make orange juice.'},
  {name:'Cherries', overview:'Something short', details:'Cherries are great for snacks. They do have to have their pits removed, I recommend having a place ready for these pits. They can vary in color, often yellow or red.'}
]

closeDescription();
updateDescription();

/*
  when a .card element is clicked, the .desc element description is
  changed; each .card element has a unique description
*/
function updateDescription() {
  let allFruits = document.querySelectorAll('.card');
  let description = document.querySelector('.desc');
  let about = document.querySelector('.about');
  for (let i = 0; i < allFruits.length; i++) {
    allFruits[i].addEventListener('click', function() {
      about.classList.remove('d-none');
      description.textContent = fruits[i].details;
    });
  }
}

/*
  when the button element is clicked, display none is
  toggled for the .about element
*/
function closeDescription() {
  let about = document.querySelector('.about');
  let closeButton = document.querySelector('.about button');

  closeButton.addEventListener('click', function() {
    about.classList.toggle('d-none');
  });
}
