let openModal = document.querySelector('.open-modal');
let closeModal = document.querySelector('.close-modal');
let modalWindow = document.querySelector('.modal');
let overlay = document.querySelector('.modal-content');

openModal.addEventListener('click', function() {
    overlay.style.display = 'block';
    modalWindow.style.display = 'block';
  
});
closeModal.addEventListener('click', function() {
    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
});