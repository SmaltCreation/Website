scrollTo = function (selector, delay, duration, margin) {
    if (selector === undefined) {
        return false
    }
    else if (delay === undefined || delay === 0) {
        execute(selector, duration, margin);
    } else {
        setTimeout(function () {
            execute(selector, duration, margin);
        }, delay);
    }
};

function execute (selector, duration, margin) {
    if (duration === undefined) {
        duration = 400;
    }

    var top = selector.offset().top - $('#navbar').height();

    //console.log(top);

    if (margin !== undefined) {
        top += margin;
    }

    $('html, body').animate({
        scrollTop: top
    }, duration, function() {
        //if (selector.attr('id')) {
        //    window.location.hash = selector.attr('id');
        //}
    });
}
