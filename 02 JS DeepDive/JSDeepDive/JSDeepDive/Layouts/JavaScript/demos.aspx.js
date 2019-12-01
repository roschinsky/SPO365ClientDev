
$(document).ready(function () {
    console.log("$(document).ready(..) executed");
    $("#contentBox").css({ "margin": "0" });
    $("#sideNavBox").css({ "display": "none" });
});

function loadPage(page, tag, loadScript) {
    $.ajax({
        type: "GET",
        url: page,
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: function (data) {
            if (data != null) {
                $(".workbench").empty();
                $(".workbench").html(data);
                $(".workbench").prepend("<div id='sampleHeading'>" + tag.innerText + "</div>");
                $("#status").html("Current Page:<br>" + page);

                if (loadScript) {
                    console.clear();
                    var script = page.substr(0, page.indexOf(".html")) + ".js";
                    $.getScript(script, null);
                }
            }
        },
        error: function (msg) {
            console.log(msg.responseText);
        }
    });
};