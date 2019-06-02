var _toggleClass = (element, className) => {
    element.forEach((item, index) => item.classList.toggle(className[index]));
}

function gotoSection(element, to, duration){
    var start = element.scrollTop;
    change = to - start;
    currentTime = 0;
    increment = 20;

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