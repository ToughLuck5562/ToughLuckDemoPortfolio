

function fadeTextIn(elementID, waitTime) {

    setTimeout(function() {
        const element = document.getElementById(elementID);
        element.style.transition = 'opacity 2s';
        element.style.opacity = 1;
    }, waitTime);

}

function fadeTextOut(elementID, waitTime) {

    if (waitTime == 0) {
        
        setTimeout(function() {
            const element = document.getElementById(elementID);
            element.style.transition = 'opacity 0s';
            element.style.opacity = 0;
        }, waitTime);

    } else {
        
        setTimeout(function() {
            const element = document.getElementById(elementID);
            element.style.transition = 'opacity 2s';
            element.style.opacity = 0;
        }, waitTime);

    }

}

export { fadeTextIn, fadeTextOut };
