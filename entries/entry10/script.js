// script.js

// Select all draggable items and bins
const items = document.querySelectorAll('.items p');
const bins = document.querySelectorAll('.bin');

// Add dragstart event to items
items.forEach(item => {
  item.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', e.target.textContent);
  });
});

// Allow bins to accept drops
bins.forEach(bin => {
  bin.addEventListener('dragover', e => {
    e.preventDefault(); // Enable dropping
  });

  bin.addEventListener('drop', e => {
    e.preventDefault(); 
    const itemText = e.dataTransfer.getData('text/plain');
    bin.innerHTML += `<p>${itemText}</p>`;
    // Remove item from original list
    const originalItem = Array.from(items).find(item => item.textContent === itemText);
    if (originalItem) originalItem.remove();
  });
});
