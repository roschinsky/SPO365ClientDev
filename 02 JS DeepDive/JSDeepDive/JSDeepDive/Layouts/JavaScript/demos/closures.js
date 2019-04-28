//# sourceURL=closures.js

//Call from Console using: closureWithOutTimeout()
function closureWithOutTimeout() {
    debugger;

    var i = 0;
    for (i; i < 3 ; i++) {
        (function () {
            console.log('counter value is ' + i);
        }());
    }
}

function closureWithTimeout() {
    debugger;

    var i = 0;
    for (i; i < 3 ; i++) {
        setTimeout(function () {
            console.log('counter value is ' + i);
        }, 1000);
    }
}

function closureWithTimeoutParam() {
    debugger;

    var i = 0;
    for (i; i < 3 ; i++) {
        setTimeout(function (ct) {
            console.log('counter value is ' + ct);
        }(i), 1000);
    }
}    