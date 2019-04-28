var context;
var web;
var site;
var session;
var termStore;
var groups;

$(document).ready(function () {
    context = SP.ClientContext.get_current();
    site = context.get_site();
    web = context.get_web();
    $('#listExisting').click(function () { listGroups(); });
    $('#createTerms').click(function () { createTerms(); });
    $('#getNewsREST').click(function () { getNewsREST(); });
    $('#getNewsJSOM').click(function () { getNewsJSOM(); });
});

// General Helpers

function getQueryStringParameter(paramToRetrieve) {
    var params =
        document.URL.split("?")[1].split("&");
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");
        if (singleParam[0] == paramToRetrieve)
            return singleParam[1];
    }
};

var errorHandlerREST = function (err) {
    console.log("REST error:");
    console.log(err);
};

// Create Terms

function createTerms() {
    $('#report').html("Creating Terms ...");

    session = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
    termStore = session.getDefaultSiteCollectionTermStore();
    context.load(session);
    context.load(termStore);
    context.executeQueryAsync(getTaxonomySession, failTaxonomySession);
}

function getTaxonomySession() {
    // Create six GUIDs that we will need when we create a new group, term set, and associated terms
    var guidGroupValue = new SP.Guid.newGuid();
    var guidTermSetValue = new SP.Guid.newGuid();
    var guidTerm1 = new SP.Guid.newGuid();
    var guidTerm2 = new SP.Guid.newGuid();
    var guidTerm3 = new SP.Guid.newGuid();
    var guidTerm4 = new SP.Guid.newGuid();

    var myGroup = termStore.createGroup("CustomTerms", guidGroupValue);
    var myTermSet = myGroup.createTermSet("Privacy", guidTermSetValue, 1033);

    myTermSet.createTerm("Top Secret", 1033, guidTerm1);
    myTermSet.createTerm("Company Confidential", 1033, guidTerm2);
    myTermSet.createTerm("Partners Only", 1033, guidTerm3);
    myTermSet.createTerm("Public", 1033, guidTerm4);

    groups = termStore.get_groups();
    context.load(groups);
    context.executeQueryAsync(onAddTerms, onFailAddTerms);

}

function onAddTerms() {
    listGroups();
}

function onFailAddTerms(sender, args) {
    $('#report').children().remove();
    $('#report').append("Failed to add terms. Error: " + args.get_message());
}

function failTaxonomySession(sender, args) {
    $('#report').children().remove();
    $('#report').append("Failed to get session. Error: " + args.get_message());
}

//ListGroups

function listGroups() {

    $('#report').html("Listing Termgroups ...");
    
    session = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
    termStore = session.getDefaultSiteCollectionTermStore();
    context.load(session);
    context.load(termStore);
    context.executeQueryAsync(listTaxonomySession, failListTaxonomySession);
}

function listTaxonomySession() {
    groups = termStore.get_groups();
    context.load(groups);
    context.executeQueryAsync(retrieveGroups, failRetrieveGroups);
}

function failListTaxonomySession(sender, args) {
    $('#report').children().remove();
    $('#report').append("Failed to get session. Error: " + args.get_message());
}

function retrieveGroups() {
    $('#report').children().remove();

    var groupEnum = groups.getEnumerator();

    // For each group, we'll build a clickable div.
    while (groupEnum.moveNext()) {
        var currentGroup = groupEnum.get_current();
        var groupName = document.createElement("div");
        groupName.setAttribute("style", "float:none;cursor:pointer");
        var groupID = currentGroup.get_id();
        groupName.setAttribute("id", groupID);
        groupName.setAttribute("onclick", "showTermSets('" + groupID + "');");
        groupName.appendChild(document.createTextNode(currentGroup.get_name()));
        $('#report').append(groupName);
    }
}

function failRetrieveGroups(sender, args) {
    $('#report').children().remove();
    $('#report').append("Failed to retrieve groups. Error:" + args.get_message());
}

// Read Lists

function getNewsREST() {
    var hostUrl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appUrl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    var url = appUrl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('News')/items?@target='" + hostUrl + "'";

    $.ajax({
        url: url,
        type: "GET",
        headers: { "Accept": "application/json;odata=verbose" },
        success: function (data) {
            console.log("REST date received from getNewsREST()", data.d.results);
        },
        error: errorHandlerREST
    });
}

function getNewsJSOM() {
    //http://sharepoint.stackexchange.com/questions/90425/how-to-get-the-managed-metadata-column-value-in-a-list-client-object-model
    //https://www.experts-exchange.com/questions/28959426/How-to-update-List-item-Managed-Metadata-Column-with-JSOM.html
}

function mapNews(news) {
    var result = $.map(news, function (item) {
        return {
            ID: item.ID,
            Title: item.Title,
            Bereich: item.Topic,
            Modified: item.Modified,
            ModifiedBy: item.Editor
        };
    });
    return result;
}

function setTable(data) {
    $('#tblNewsBody').empty();
    let vs = mapNews(data);
    vs.forEach(function (item) {
        $('#tblNewsBody').append(
      '<tr data-item="' + JSON.stringify(item) + '" style="cursor:pointer">' +
        '<td>' + item.ID + '</td>' +
        '<td>' + item.Title + '</td>' +
        '<td>' + item.Bereich + '</td>' +
        '<td>' + item.Modified + '</td>' +
        '<td>' + item.ModifiedBy + '</td>' +
      '</tr>');
    });

    $('#tblContactsBody tr').click(function (e) {
        console.info("fetching data item with id=" + e.currentTarget.id);
    });
}

function showTermSets(groupID) {
    var parentDiv = document.getElementById(groupID);
    while (parentDiv.childNodes.length>1) {
        parentDiv.removeChild(parentDiv.lastChild);
    }
    var groupEnum = groups.getEnumerator();

    while (groupEnum.moveNext()) {
        var currentGroup = groupEnum.get_current();
        if (currentGroup.get_id() == groupID) {

            context.load(currentGroup);
            context.executeQueryAsync(
                function () {
                    var termSets = currentGroup.get_termSets();
                    context.load(termSets);
                    context.executeQueryAsync(
                    function () {
                        var termSetEnum = termSets.getEnumerator();
                        while (termSetEnum.moveNext()) {
                            var currentTermSet = termSetEnum.get_current();
                            var termSetName = document.createElement("div");
                            termSetName.appendChild(document.createTextNode(" + " + currentTermSet.get_name()));
                            termSetName.setAttribute("style", "float:none;cursor:pointer;");
                            var termSetID = currentTermSet.get_id();
                            termSetName.setAttribute("id", termSetID);
                            termSetName.setAttribute("onclick", "showTerms(event,'" + groupID + "','" + termSetID + "');");
                            termSetName.setAttribute("id", termSetID);
                            parentDiv.appendChild(termSetName);
                        }
                    },
                        function () {
                            parentDiv.appendChild(document.createTextNode("An error occurred in loading the term sets for this group"));
                        });

                },
                 function () {
                     parentDiv.appendChild(document.createTextNode("An error occurred in loading the term sets for this group"));
                 });

            break;
        }

    }

}

function showTerms(event, groupID, termSetID) {

    // First, cancel the bubble so that the group div click handler does not also fire
    // because that removes all term set divs and we don't want that here.
    event.cancelBubble = true;

    // Get a reference to the term set div that was click and
    // remove its children (apart from the TextNode that is currently
    // showing the term set name.
    var parentDiv = document.getElementById(termSetID);
    while (parentDiv.childNodes.length > 1) {
        parentDiv.removeChild(parentDiv.lastChild);
    }

    // We need to load and populate the matching group first, or the
    // term sets that it contains will be inaccessible to our code.
    var groupEnum = groups.getEnumerator();
    while (groupEnum.moveNext()) {
        var currentGroup = groupEnum.get_current();
        if (currentGroup.get_id() == groupID) {
            context.load(currentGroup);
            context.executeQueryAsync(

                // The group is now available becuase this is the 
                // success callback. So now we'll load and populate the
                // term set collection. We have to do this before we can 
                // iterate through the collection, so we can do this
                // with the following nested executeQueryAsync method call.
                function () {
                    var termSets = currentGroup.get_termSets();
                    context.load(termSets);
                    context.executeQueryAsync(
                    function () {

                        // The term sets are now available becuase this is the 
                        // success callback. So now we'll iterate through the collection
                        // and get a reference to the specific term set that was represented 
                        // by the clicked div.
                        var termSetEnum = termSets.getEnumerator();
                        while (termSetEnum.moveNext()) {
                            var currentTermSet = termSetEnum.get_current();
                            if (currentTermSet.get_id() == termSetID) {

                                // We need to load and populate the term set, so that we can 
                                // access the terms in it.
                                context.load(currentTermSet);
                                context.executeQueryAsync(
                                    function () {

                                        // Now we have access to the term set because this is the 
                                        // success callback, so we can now create and populate a collection
                                        // object to hold the actual terms.
                                        // Note that we need to do one final load and populate before we
                                        // can iterate over the collection object.
                                        var terms = currentTermSet.get_terms();
                                        context.load(terms);
                                        context.executeQueryAsync(
                                            function () {

                                                // Now we can iterate over the terms because this is the 
                                                // success callback. So we'll build an indented list of terms
                                                var termsEnum = terms.getEnumerator();
                                                while (termsEnum.moveNext()) {
                                                    var currentTerm = termsEnum.get_current();

                                                    var term = document.createElement("div");
                                                    term.appendChild(document.createTextNode("    - " + currentTerm.get_name()));
                                                    term.setAttribute("style", "float:none;margin-left:10px;");
                                                    parentDiv.appendChild(term);
                                                }
                                            },
                                            function () {
                                                //Failure to load terms
                                                parentDiv.appendChild(document.createTextNode("An error occurred when trying to retrieve terms in this term set"));
                                            });
                                    },
                                    function () {
                                        //Failure to load the current term set
                                        parentDiv.appendChild(document.createTextNode("An error occurred when trying to retrieve terms in this term set"));
                                    });
                                break;
                            }
                        }
                    },
                        function () {
                            //Failure to load term sets
                            parentDiv.appendChild(document.createTextNode("An error occurred when trying to retrieve terms in this term set"));
                        });

                },
                 function () {
                     //Failure to load current group
                     parentDiv.appendChild(document.createTextNode("An error occurred when trying to retrieve terms in this term set"));
                 });
            break;
        }
    }
}