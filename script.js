'use strict'

const closeModal = function(){
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}

const closeModalWEsc = function(e){
    if(e.key === 'Escape'){
        document.querySelector('.modal').style.display = 'none';
        document.querySelector('.overlay').style.display = 'none';
    }
}

document.querySelector('.btn').addEventListener('click', function(){
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
})

document.querySelector('.close-modal').addEventListener('click', closeModal)
document.querySelector('.overlay').addEventListener('click', closeModal)
document.addEventListener('keydown', closeModalWEsc)