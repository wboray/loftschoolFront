document.addEventListener("DOMContentLoaded", function(event) { 
    let thanksWindow = document.querySelector('#thanks-window');
    const body = document.querySelector('body');
    const html = document.querySelector('html');
    const classes = ['active', 'hidden'];
    const elements = [thanksWindow, body];

    const formSubmit = document.querySelector('.form__btn-custom');

    formSubmit.addEventListener('click', function(event){
        event.preventDefault();

        _toggleClass(elements, classes);
    })


})