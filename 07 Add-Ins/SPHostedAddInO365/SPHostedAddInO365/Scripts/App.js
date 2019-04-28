//'use strict';
var hostUrl;
var appUrl;
var hostListName = "News";
var appListName = "AppNews";

$(document).ready(function () {
    hostUrl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    appUrl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
});

function getQueryStringParameter(paramToRetrieve) {
    var params =
        document.URL.split("?")[1].split("&");
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");
        if (singleParam[0] == paramToRetrieve)
            return singleParam[1];
    }
};

var errorHandler = function (sender, args) {
    console.log(args.get_message());
};

function readHostWebCSOM() {
    var appContext = new SP.ClientContext.get_current();
    var hostContext = new SP.AppContextSite(appContext, hostUrl);
    var web = hostContext.get_web();
    appContext.load(web);
    var list = web.get_lists().getByTitle(hostListName);
    appContext.load(list);
    appContext.executeQueryAsync(function () {
        $("#result").html("Host web list loaded successfully: " + list.get_title());
    }, errorHandler);
}

function readAppWebCSOM() {
    var appContext = new SP.ClientContext.get_current();
    var web = appContext.get_web();
    var list = web.get_lists().getByTitle(appListName);
    appContext.load(list);
    appContext.executeQueryAsync(function () {
        $("#result").html("App web list loaded successfully: " + list.get_title());
    }, errorHandler);
}

function writeHostWebCSOM() {
    this.appContext = new SP.ClientContext.get_current();
    var hostContext = new SP.AppContextSite(appContext, hostUrl);
    this.list = hostContext.get_web().get_lists().getByTitle(hostListName);
    var lci = new SP.ListItemCreationInformation();
    var li = list.addItem(lci);
    li.set_item('Title', 'News in HostWeb created by CSOM');
    li.set_item('Body', "Lorem ipsum ...");
    li.update();
    appContext.load(li);

    appContext.executeQueryAsync(function () {
        $("#result").html("Host Web list item created successfully: " + li.get_item('Title') + "<br>See console for output");
        queryList();
    }, errorHandler);
}

function writeAppWebCSOM() {
    this.appContext = new SP.ClientContext.get_current();
    this.list = appContext.get_web().get_lists().getByTitle(appListName);
    var lci = new SP.ListItemCreationInformation();
    var li = list.addItem(lci);
    li.set_item('Title', 'News in AppWeb created by CSOM');
    li.set_item('Body', "Lorem ipsum ...");
    li.update();
    appContext.load(li);

    appContext.executeQueryAsync(function () {
        $("#result").html("App Web list item created successfully: " + li.get_item('Title') + "<br>See console for output");
        queryList();
    }, errorHandler);
}

function queryList() {
    var camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml('<View><Query><Where><Geq><FieldRef Name=\'ID\'/>' +
        '<Value Type=\'Number\'>1</Value></Geq></Where></Query><RowLimit>10</RowLimit></View>');
    var lis = list.getItems(camlQuery);
    appContext.load(lis);
    appContext.executeQueryAsync(function () {
        var result = '';
        var liEnumerator = lis.getEnumerator();
        while (liEnumerator.moveNext()) {
            var oListItem = liEnumerator.get_current();
            result += '\nID: ' + oListItem.get_id() +
                '\nTitle: ' + oListItem.get_item('Title') +
                '\Created: ' + oListItem.get_item('Created');
        }
        console.log(result);
    }, errorHandler);
}

var errorHandlerREST = function (err) {
    console.log("REST error:");
    console.log(err);
};

function readHostWebREST() {
    var path = hostUrl + "/_layouts/15/";
    $.getScript(path + "SP.RequestExecutor.js", function () {
        var executor = new SP.RequestExecutor(appUrl);
        executor.executeAsync(
                {
                    url: appUrl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + hostListName + "')?@target='" + hostUrl + "/" + hostListName + "'",
                    method: "GET",
                    headers: { "Accept": "application/json; odata=verbose" },
                    success: function (data) {
                        var list = JSON.parse(data.body).d;
                        $("#result").html("Read from host REST successfull - See console for output");
                        console.log(list);
                    },
                    error: errorHandlerREST
                }
            );
    });
}

function readHostWebjQuery() {
    var url = appUrl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + hostListName + "')/items?@target='" + hostUrl + "'";

    $.ajax({
        url: url,
        type: "GET",
        headers: { "Accept": "application/json;odata=verbose" },
        success: function (data) {
            $("#result").html("Read from host web using REST jQuery successfull  - See console for output");
            console.log(data.d);
        },
        error: errorHandlerREST
    });
}

function readAppWebREST() {
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('" + appListName + "')/GetItems(query=@v1)?@v1={\"ViewXml\":\"<View><Query><OrderBy><FieldRef Name='Created' Ascending='FALSE' /><FieldRef Name='Created' Ascending='FALSE' /></OrderBy></Query></View>\"}",
        type: "POST",
        headers: {
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "Accept": "application/json;odata=verbose",
            "Content-Type": "application/json; odata=verbose"
        },
        success: function (data) {
            if (data.d.results) {
                $("#result").html("Read from app web using REST successfull  - See console for output");
                console.log(data.d.results);
            }
        },
        error: errorHandlerREST
    });
}

function writeHostWebREST() {
    var item = {
        "__metadata": { "type": "SP.Data." + hostListName + "ListItem" },
        "Title": "Lorem ipsum news from app"
    };
    var url = appUrl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + hostListName + "')/items?@target='" + hostUrl + "'";

    $.ajax({
        url: url,
        type: "POST",
        contentType: "application/json;odata=verbose",
        data: JSON.stringify(item),
        headers: {
            "Accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val()
        },
        success: function (data) {
            $("#result").html("Item created in the host web  - See console for output");
            console.log(data.d);
        },
        error: errorHandlerREST
    });
}

function writeAppWebREST() {
    var item = {
        "__metadata": { "type": "SP.Data." + appListName + "ListItem" },
        "Title": "Lorem ipsum news from app"
    };
    var url = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getbytitle('" + appListName + "')/items";

    $.ajax({
        url: url,
        type: "POST",
        contentType: "application/json;odata=verbose",
        data: JSON.stringify(item),
        headers: {
            "Accept": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val()
        },
        success: function (data) {
            $("#result").html("Item created in the app web  - See console for output");
            console.log(data.d);
        },
        error: errorHandlerREST
    });
}

function useWebProxy() {
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    var context = new SP.ClientContext(appweburl);

    var request = new SP.WebRequestInfo();
    request.set_url("http://services.odata.org/Northwind/Northwind.svc/Categories");
    request.set_method("GET");
    request.set_headers({ "Accept": "application/json;odata=verbose" });

    var response = SP.WebProxy.invoke(context, request);
    $("#result").html("<P>Loading categories...</P>");

    // Set the event handlers and invoke the request.
    context.executeQueryAsync(function successHandler() {
        if (response.get_statusCode() == 200) {
            var categories = JSON.parse(response.get_body());
            var result = "<UL>";
            for (var i = 0; i < categories.d.results.length; i++) {
                var categoryName = categories.d.results[i].CategoryName;
                var description = categories.d.results[i].Description;
                result += "<LI>" + categoryName + ":&nbsp;" + description + "</LI>";
            }
            result += "</UL>";
            $("#result").html(result);
        } else {
            $("#result").html("<P>Status code: " + response.get_statusCode() + "<br/>" + response.get_body());
        }
    },
        function (sender, args) {
            console.log(args.get_message());
        });
}