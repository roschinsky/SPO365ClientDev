var hostUrl;

$(document).ready(function () {
    getChromeControl();
});

function getChromeControl() {
    hostUrl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var scriptbase = hostUrl + "/_layouts/15/";
    $.getScript(scriptbase + "SP.UI.Controls.js");
}

function getQueryStringParameter(paramToRetrieve) {
    var params =
        document.URL.split("?")[1].split("&");
    var strParams = "";
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");
        if (singleParam[0] == paramToRetrieve)
            return singleParam[1];
    }
}

function usingRequestExecutorREST() {
    try {
        var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
        var qry = appweburl + "/_api/web/lists/getbytitle('AppWebNews')/items";

        var executor = new SP.RequestExecutor(appweburl);
        executor.executeAsync(
        {
            url: qry,
            method: "GET",
            headers: { "Accept": "application/json;odata=verbose" },
            success: function (data) {
                var news = JSON.parse(data.body).d.results;
                var result = "Succeeded usingRequestExecutorREST: <br>";

                for (var i = 0; i < news.length; i++) {
                    result = result + "<p><h1>" + news[i].Title + "</h1>" + news[i].Body + "</p><hr/>";
                }
                $("#result").html(result);
            },
            error: function (data, errorCode, errorMessage) {
                $("#result").html("Could not complete cross domain call: " + JSON.stringify(errorMessage));
            }
        });
    }
    catch (err) { console.log(err.message); }
}

function usingRequestExecutorCSOM() {

    var spAppWebUrl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    var clientContext = new SP.ClientContext(spAppWebUrl);
    var factory = new SP.ProxyWebRequestExecutorFactory(spAppWebUrl);
    clientContext.set_webRequestExecutorFactory(factory);

    var web = clientContext.get_web();
    var list = web.get_lists().getByTitle("AppWebNews");

    var camlString = "<View><ViewFields><FieldRef Name='Title' /><FieldRef Name='Body' /></ViewFields></View>";
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml(camlString);
    this.newsItems = list.getItems(camlQuery);

    clientContext.load(list);
    clientContext.load(newsItems, "Include(Title,Body)");

    clientContext.executeQueryAsync(
        function () {
            var result = "Sucessfully fetched list usingRequestExecutorCSOM: " + list.get_title() + "<br>";

            var liEnumerator = newsItems.getEnumerator();
            while (liEnumerator.moveNext()) {
                var li = liEnumerator.get_current();
                result += 'Title: ' + li.get_item('Title') + ' Body: ' + li.get_item('Body');
            }

            $("#result").html(result);
        },
        function (sender, args) {
            console.log(args.get_message());
        }
    );
}

function consumingExternalData() {
    $.ajax({
        url: "https://api.fixer.io/latest?symbols=THB?access_key=6c36c303e33169dd7102897259fc93be",
        cache: false
    }).done(function (data) {
        var p = 1000;
        var result = p + " THB are approx. " + parseFloat(p / data.rates.THB).toFixed(2) + " €";
        $("#result").text(result);
    });
}
