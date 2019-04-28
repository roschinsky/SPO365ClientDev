app.controller('basicController', basicController);

function basicController($scope) {

}

app.controller('peopleController', peopleController);

function peopleController($scope) {

}


app.controller('ngFormController', ngFormController);

function ngFormController($scope) {
    $scope.employeeForm = "Employee Dump Form";
}

app.controller('tableController', tableController);

function tableController($scope, $http, $uibModal, hostUrl, appUrl) {

    var qry = appUrl +
    "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('News')/GetItems(query=@v1)?@v1={\"ViewXml\":\"<View><Query><OrderBy><FieldRef Name='Expires' Ascending='FALSE' /></OrderBy></Query></View>\"}&@target='" + hostUrl + "/News'";


    $http({ method: 'POST', url: qry, headers: { 'Accept': 'application/json;odata=verbose', "X-RequestDigest": $("#__REQUESTDIGEST").val() } }).then(function (response) {
        $scope.news = response.data.d.results;
        console.log("Result from $http with options");
        console.log($scope.news);
    });

    $scope.showNewsItem = function (item) {
        var popup = $uibModal.open({
            templateUrl: 'views/popup.html',
            controller: 'popupController',
            resolve: {
                item: function () { return item; }, modal: function () { return popup; }
            }
        });
    }
}

app.controller('popupController', popupController);

function popupController($scope, item, $uibModalInstance) {
    $scope.popupItem = item;

    $scope.closeModal = function () {
        $uibModalInstance.dismiss('cancel');
    }
}

app.controller('ngTableController', ngTableController);

function ngTableController($scope, $http, hostUrl, appUrl) {

    var qry = appUrl +
    "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('News')/GetItems(query=@v1)?@v1={\"ViewXml\":\"<View><Query><OrderBy><FieldRef Name='Expires' Ascending='FALSE' /></OrderBy></Query></View>\"}&@target='" + hostUrl + "/News'";
    
    $http({ method: 'POST', url: qry, headers: { 'Accept': 'application/json;odata=verbose', "X-RequestDigest": $("#__REQUESTDIGEST").val() } }).then(function (response) {
        $scope.news = response.data.d.results;
    });
   
    $scope.showNewsItem = function (item) {
        var popup = $uibModal.open({
            templateUrl: '/_layouts/15/reiserintranet/projekte/popup.html',
            controller: 'projectPopupController',
            resolve: {
                item: function () { return item; }, modal: function () { return popup; }
            }
        });
    }
}
