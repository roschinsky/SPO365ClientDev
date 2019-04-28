//# sourceURL=promisesJQuery.js

var url = "http://northwind.servicestack.net/customers";

function doAsyncCall() {
    debugger;

    $.ajax({
        type: "Get",
        url: url,
        dataType: 'json',
        async: false, //Change value after first debug - and debug again
        success: function (data) {
            console.log("query executed - response ok");
            console.log(JSON.stringify(data));
        },
        error: function (data) {

        }
    });
    
    for (var i = 0; i < 100; i++) {
        console.log("Waiting " + i);
    }
}

function doAsyncCallPromise() {
    debugger;

    $.ajax({
        type: "Get",
        url: url,
        dataType: 'json',        
    }).then(function(data) {
        console.log("query executed - response ok");
        console.log(JSON.stringify(data));
    }).catch(function(err) {
        console.log("err happened", err);
    });

    for (var i = 0; i < 100; i++) {
        console.log("Waiting " + i);
    }
}


function useGetJson() {
    debugger;

    $.getJSON(url, function (data) {
        console.log("query executed - response ok");
        console.log(JSON.stringify(data));
    });

    for (var i = 0; i < 100; i++) {
        console.log("Waiting " + i);
    }
}

function createSite(working) {
    return new Promise(function (resolve, reject) {
        // mock async …
        setTimeout(() => {
            if (working) {
                resolve({ id: 1, name: "hans teamsite", cost: 10 });
            }
            else {
                reject(Error("error creating site"));
            }
        },1000);
    });
};

function addTaxes(data) {
    return new Promise(function (resolve, reject) {
        // mock async …
        setTimeout(() => {
            var result = data.cost * 1.2;
            console.log("Cost including Taxes: ", result);
            resolve(result);            
        }, 1000);
    });
}

function errFunction() {
    throw "something happened in the chain";
}

var working = true;

function simplePromises() {
    debugger;
    
    createSite(working)
        .then(data => {
                console.log("Site provisioned", data);
                return data;
            }
        )
        .catch(function(err) { console.log(err); });
}

function chainedPromises() {
    debugger;

    createSite(working)
        .then(data => {
                console.log("Site provisioned", data);
                return data;
            }
        )
        .then(data => addTaxes(data))
        .catch(function(err) { console.log(err); });
}

function failingPromise() {
    debugger;

    createSite(working)
        .then(data => {
                console.log("Site provisioned", data);
                return data;
            }
        )
        .then(data => addTaxes(data))
        .then(errFunction)
        .catch(function (err) {
             console.log("Here we are in the catch", err);
        });
}