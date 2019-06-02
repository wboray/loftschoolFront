document.addEventListener("DOMContentLoaded", function(event) { 

    let thanksWindowButton = document.querySelector('#thanks-window-button');
    let thanksWindow = document.querySelector('#thanks-window');
    let buttons = document.querySelectorAll(".btn[data-goto-form='1']");
    const body = document.querySelector('body');
    const html = document.querySelector('html');
    const classes = ['active', 'hidden'];
    const elements = [thanksWindow, body];

    thanksWindowButton.addEventListener('click', function(){
        _toggleClass(elements, classes);
    })

    //console.log(buttons);
    buttons.forEach(element => {
        element.addEventListener('click', function(event){
            event.preventDefault();
            let section = document.querySelector('#sheet-form').offsetTop;
            gotoSection(html, section, 600);
        })
    });
})