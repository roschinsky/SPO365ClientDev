$(document).ready(function () {
    var query = "http://sp2019/_api/web/title";
    $.ajax({
        type: "GET",
        url: query,
        dataType: "json",
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose"
        }
    }).then(function (data) {
        console.log("Web Title is:", data.d);
    }).fail(function (err) {
        console.log(err);
    });
});
//# sourceMappingURL=tsdemo.js.map