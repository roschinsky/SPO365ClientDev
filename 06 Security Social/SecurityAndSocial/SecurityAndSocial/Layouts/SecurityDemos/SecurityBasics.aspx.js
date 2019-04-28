$(document).ready(function () {
    initClientSidePeoplePicker();
});

//Groups

function listAllGroups() {
    debugger;
    var cc = new SP.ClientContext();
    var siteGrps = cc.get_web().get_siteGroups();
    cc.load(siteGrps);
    cc.executeQueryAsync(function () {
        var grpEnumerator = siteGrps.getEnumerator();
        while (grpEnumerator.moveNext()) {
            var grp = grpEnumerator.get_current();
            console.log('Grp: ' + grp.get_title() + ' ID: ' + grp.get_id());
        }
    }, logError);
}

function createGroup() {
    debugger;
    var cc = new SP.ClientContext();
    var web = cc.get_web();
    var siteGroups = web.get_siteGroups();

    var gci = new SP.GroupCreationInformation();
    gci.set_title("JSOMGrp");
    gci.set_description('This is a new group created by JSOM!');
    var grp = siteGroups.add(gci);

    cc.load(siteGroups);
    cc.executeQueryAsync(function () {
        console.log("Web contains the following groups:");
        for (var i = 0; i < siteGroups.get_count() ; i++) {
            console.log(siteGroups.itemAt(i).get_title());
        }
    }, logError);
}

function retrieveAllUsersInGroup() {
    debugger;
    var cc = new SP.ClientContext();
    var siteGrps = cc.get_web().get_siteGroups();
    var grp = siteGrps.getByName('JSOMGrp');
    this.usrs = grp.get_users();
    cc.load(usrs);
    cc.executeQueryAsync(function() {
        var userEnumerator = usrs.getEnumerator();
        while (userEnumerator.moveNext()) {
            var usr = userEnumerator.get_current();
            console.log('User: ' + usr.get_title() + ' ID: ' + usr.get_id() + ' Email: ' + usr.get_email() + ' Login Name: ' + usr.get_loginName());
        }        
    }, logError);
}

function retrieveAllUsersInSite() {
    debugger;
    var cc = new SP.ClientContext();
    var siteUsers = cc.get_web().get_siteUsers();
    cc.load(siteUsers);
    cc.executeQueryAsync(function () {
        var userEnumerator = siteUsers.getEnumerator();
        while (userEnumerator.moveNext()) {
            var usr = userEnumerator.get_current();
            console.log('User: ' + usr.get_title() + ' ID: ' + usr.get_id() + ' Email: ' + usr.get_email() + ' Login Name: ' + usr.get_loginName());
        }
    }, logError);
}

function createUser() {
    debugger;
    var cc = new SP.ClientContext();
    var siteUsers = cc.get_web().get_siteUsers();
    var uci = new SP.UserCreationInformation();
    uci.set_email('d.duck@spdom.local');
    uci.set_loginName('spdom\\d.duck');
    uci.set_title('Donald Duck');
    var usr = cc.get_web().get_siteUsers().add(uci);
    cc.load(usr);
    cc.executeQueryAsync(function () { console.log("user created"); },
        logError);
}

function retrieveUser() {
    debugger;
    var cc = new SP.ClientContext();
    var user = cc.get_web().get_siteUsers().getByLoginName('spdom\\d.duck');
    cc.load(user);
    cc.executeQueryAsync(function () {
        console.log('User: ' + user.get_title() + ' ID: ' + user.get_id() + ' Email: ' + user.get_email() + ' Login Name: ' + user.get_loginName());
    }, logError);
}

//User
function addUserToGroup() {
    debugger;
    var cc = new SP.ClientContext();
    var grps = cc.get_web().get_siteGroups();
    var oGroup = grps.getByName('JSOMGrp');
    var uci = new SP.UserCreationInformation();
    uci.set_email('d.duck@spdom.local');
    uci.set_loginName('spdom\\d.duck');
    uci.set_title('Donald Duck');
    this.usr = oGroup.get_users().add(uci);

    cc.load(usr);
    cc.executeQueryAsync(function() {
        console.log("user added to group jsomgrp");
    }, logError);
}


//Permissions

function createPermissionLevel() {
    debugger;
    var cc = new SP.ClientContext();
    var web = cc.get_web();
    var basePerm = new SP.BasePermissions();
    basePerm.set(SP.PermissionKind.createAlerts);
    basePerm.set(SP.PermissionKind.manageAlerts);
    //Role Definition => Permission Level
    var roleDef = new SP.RoleDefinitionCreationInformation();
    roleDef.set_basePermissions(basePerm);
    roleDef.set_description('A new role with create and manage alerts permission');
    roleDef.set_name('Create and Manage Alerts');
    roleDef.set_order(4);
    var permissionLevel = web.get_roleDefinitions().add(roleDef);
    cc.load(permissionLevel);
    cc.executeQueryAsync(function() {
        var pl = permissionLevel.get_name() + ' role created.';
        console.log(pl);
    }, logError);
}

function assignRoleToUser() {
    debugger;
    var cc = new SP.ClientContext();
    var web = cc.get_web();

    var usr = web.get_siteUsers().getByLoginName('spdom\\administrator');
    var permLevel = web.get_roleDefinitions().getByName('Create and Manage Alerts');

    var roleDefsBindings = SP.RoleDefinitionBindingCollection.newObject(cc);
    roleDefsBindings.add(permLevel);
    var pl = web.get_roleAssignments().add(usr, roleDefsBindings);
    cc.load(usr, 'Title');
    cc.load(permLevel, 'Name');
    cc.load(pl);
    cc.executeQueryAsync(function() {
        var roleInfo = permLevel.get_name() + ' assigned to ' +  usr.get_title();
        console.log(roleInfo);
    }, logError);
}

function breakRoleInheritance() {
    debugger;
    var cc = new SP.ClientContext();
    var list = cc.get_web().get_lists().getByTitle('News');
    list.breakRoleInheritance(true, false);    
    cc.load(list);
    cc.executeQueryAsync(function() {
        console.log(list.get_title() + ' role inheritance broken.');
    }, logError);
}

function breakInheritanceAddUser() {
    debugger;
    var clientContext = new SP.ClientContext();
    var list = clientContext.get_web().get_lists().getByTitle('News');
    list.breakRoleInheritance(false);

    var usr = clientContext.get_web().get_siteUsers().getByLoginName('spdom\\administrator');

    var collRoleDefinitionBinding = SP.RoleDefinitionBindingCollection.newObject(clientContext);
    collRoleDefinitionBinding.add(clientContext.get_web().get_roleDefinitions().getByType(SP.RoleType.reader));

    list.get_roleAssignments().add(usr, collRoleDefinitionBinding);

    clientContext.load(usr);
    clientContext.load(list);
    clientContext.executeQueryAsync(function() {
        console.log('Role inheritance broken for list ' + list.get_title() + ' and new role assignment for ' + usr.get_loginName());
    }, logError);    
}

function loadUserProfile() {
    debugger;
    var targetUser = "spdom\\administrator";
    var clientContext = new SP.ClientContext.get_current();
    var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);
    var personProperties = peopleManager.getPropertiesFor(targetUser);
    clientContext.load(personProperties);
    clientContext.executeQueryAsync(function() {
        var messageText = " \"DisplayName\" property is " + personProperties.get_displayName();
        messageText += "<br />\"Department\" property is " + personProperties.get_userProfileProperties()['Department'];
        console.log(messageText);
    }, logError);
}

function followCurrentSite() {
    debugger;
    var context = SP.ClientContext.get_current();
    var socialManager = new SP.Social.SocialFollowingManager(context);
    var socialSite = new SP.Social.SocialActorInfo();
    var siteUrl = _spPageContextInfo.siteAbsoluteUrl;
    socialSite.set_contentUri(siteUrl);
    socialSite.set_actorType(SP.Social.SocialActorType.site);
    socialManager.follow(socialSite);

    context.executeQueryAsync(
        function () { console.log('Now following the current site!'); },
        function (sender, args) { console.log('Error: ' + args.get_message()); });
}

function publishPost() {
    debugger;
    var clientContext = SP.ClientContext.get_current();
    var feedManager = new SP.Social.SocialFeedManager(clientContext);

    var linkDataItem = new SP.Social.SocialDataItem();
    linkDataItem.set_itemType(SP.Social.SocialDataItemType.link);
    linkDataItem.set_text('SPFx');
    linkDataItem.set_uri('https://docs.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview');
    var socialDataItems = [linkDataItem];

    var postCreationData = new SP.Social.SocialPostCreationData();
    postCreationData.set_contentText('Learn SharePoint Client side dev @ {0}.');
    postCreationData.set_contentItems(socialDataItems);

    var resultThread = feedManager.createPost(null, postCreationData);
    clientContext.executeQueryAsync(function() {
        console.log("posted to sharepoint");
    }, logError);
}

function initClientSidePeoplePicker() {
    peoplePickerElementId = "divPeoplePicker";

    var schema = {};
    schema['PrincipalAccountType'] = 'User,DL,SecGroup,SPGroup';
    schema['SearchPrincipalSource'] = 15;
    schema['ResolvePrincipalSource'] = 15;
    schema['AllowMultipleValues'] = true;
    schema['MaximumEntitySuggestions'] = 50;
    schema['Width'] = '280px';
    SPClientPeoplePicker_InitStandaloneControlWrapper(peoplePickerElementId, null, schema);
    $("#" + peoplePickerElementId + "_TopSpan_InitialHelpText").text('Enter a person name');
}

function getPerson() {
    debugger;
    var peoplePicker = this.SPClientPeoplePicker.SPClientPeoplePickerDict.divPeoplePicker_TopSpan;
    var users = peoplePicker.GetAllUserInfo();
    console.log("users picked:", users);    
}



function logError(sender, args) {
    console.log('Request failed. ' + args.get_message());
    console.log(args.get_stackTrace());
}

//ES6

//class SecurityHelper {

//    createGroup() {
//        var cc = new SP.ClientContext();
//        var web = cc.get_web();
//        var siteGroups = web.get_siteGroups();

//        var gci = new SP.GroupCreationInformation();
//        gci.set_title("JSOMGrp");
//        gci.set_description('This is a new group created by JSOM!');
//        var grp = siteGroups.add(gci);
//        cc.load(siteGroups);
//        cc.executeQueryAsync(function () {
//            console.log("Web contains the following groups:");
//            for (var i = 0; i < siteGroups.get_count() ; i++) {
//                console.log(siteGroups.itemAt(i).get_title());
//            }
//        }, logError);
//    }
//}

//var sh = new SecurityHelper();
//sh.createGroup();