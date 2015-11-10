toggleButtonState = function (container) {
    var buttons = findButtons(container);

    // Toggle state
    buttons.each(function () {
        var button = $(this);
        var state = button.attr('data-state');

        setButtonState(button, state !== 'enabled');
    });
};

setButtonState = function (button, enable) {
    if (typeof button === 'string') {
        button = $(button);
    }

    var disabledClass = button.attr('data-disabled-class');

    if (enable) {
        button.attr('data-state', 'enabled').prop('disabled', false);
        disabledClass && button.removeClass(disabledClass);
    } else {
        button.attr('data-state', 'disabled').prop('disabled', true);
        disabledClass && button.addClass(disabledClass);
    }
};

function findButtons (container) {
    if (container === undefined) {
        container = 'body';
    }

    if (typeof container === 'string') {
        container = $(container);
    }

    return container.find('button[data-state]');
}
