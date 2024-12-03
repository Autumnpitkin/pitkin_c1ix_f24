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

document.getElementById('reset-button').addEventListener('click', () => {
    // Clear bins
    document.querySelectorAll('.bin').forEach(bin => bin.innerHTML = bin.classList.contains('keep') ? 'Keep' : 'Discard');
  
    // Reset items
    const itemsContainer = document.querySelector('.items');
    itemsContainer.innerHTML = `
      <p draggable="true">Old T-shirt</p>
      <p draggable="true">Favorite Book</p>
      <p draggable="true">Unused Mug</p>
      <p draggable="true">Special Gift</p>
    `;
  
    // Reattach event listeners for drag-and-drop
    const items = document.querySelectorAll('.items p');
    items.forEach(item => {
      item.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', e.target.textContent);
      });
    });
  });