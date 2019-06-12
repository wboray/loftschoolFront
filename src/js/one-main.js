var _toggleClass = (element, className) => {
    element.forEach((item, index) => item.classList.toggle(className[index]));
}

function gotoSection(element, to, duration){
    var start = element.scrollTop;

    let change = to - start;
    let currentTime = 0;
    let increment = 20;

    var animateScroll = function(){
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);

        element.scrollTop = val;
        if(currentTime < duration){
            setTimeout(animateScroll, increment);
        };
    };
    animateScroll();
}

Math.easeInOutQuad = function(t, b, c, d){
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t  + b;
    t--;
    return (-c / 2) * (t * (t - 2) -1) + b;

}




//overlay
function createOverlay(template, body){
    let fragment = document.createElement('div');

    fragment.innerHTML = template;

    const overlayElement = fragment.querySelector('.overlay');
    const title = fragment.querySelector('.overlay__title');
    const text = fragment.querySelector('.overlay__text');
    const closeElement = fragment.querySelector('#close-overlay');

    fragment = null;

    overlayElement.addEventListener('click', event=>{
        if(event.target === overlayElement){
            closeElement.click();
        }
    })

    closeElement.addEventListener('click', event=>{
        event.preventDefault();

        document.body.removeChild(overlayElement);
        body.style.overflow = 'visible';
    })

    return{
        open(){
            document.body.appendChild(overlayElement);
            body.style.overflow = 'hidden';
        },
        close(){
            closeElement.click();
        },
        setContent(customText, customTitle){
            if(customTitle){
                title.innerHTML= customTitle;
            }

            text.innerHTML = customText;
        }
    }
}