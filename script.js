let modalBtn = document.querySelector('.modal-btn');
let closeBtn = document.querySelector('.close-btn');
let overlay = document.querySelector('.modal-overlay');

modalBtn.addEventListener('click', ()=> {
    overlay.classList.add('open-modal');
})
closeBtn.addEventListener('click', ()=> {
    overlay.classList.remove('open-modal');
})
