/*
Name: Aidan
Date: April 3, 2025
Description: Lab4 Part2 for Web MDN
File: main.js
*/


const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */ 
const images = [
	'pic1.jpg',
	'pic2.jpg',
	'pic3.jpg',
	'pic4.jpg',
	'pic5.jpg',];

/* Declaring the alternative text for each image file */
const altTexts = {
	'pic1.jpg': 'A closeup of an human eye',
	'pic2.jpg': 'A weird painting',
	'pic3.jpg': 'Violet and white flowers',
	'pic4.jpg': 'An Egyptian painting',
	'pic5.jpg': 'A yellow butterfly with a leaf', };




/* Looping through images */
for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', altTexts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */
  btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else 
{
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});

