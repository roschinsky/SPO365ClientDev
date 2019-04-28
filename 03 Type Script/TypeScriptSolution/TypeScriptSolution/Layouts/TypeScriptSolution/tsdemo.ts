$(document).ready(() => {
    var query = "http://sp2019/_api/web/title";

    $.ajax({
        type: "GET",
        url: query,
        dataType: "json",
        headers: {
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose"
        }
    }).then(data => {
            console.log("Web Title is:", data.d);
        }
    ).fail(err => {
        console.log(err);
    });
});