var slideList = "Presentations";

var app = angular.module("traingsApp", ['ngRoute']);
var hostUrl, appUrl;

var init = function() {
    JSRequest.EnsureSetup();
    hostUrl = decodeURIComponent(JSRequest.QueryString["SPHostUrl"]);
    appUrl = decodeURIComponent(JSRequest.QueryString["SPAppWebUrl"]);
}
init();

app.constant('hostUrl', hostUrl);
app.constant('appUrl', appUrl);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/home', { controller: 'workshopController', templateUrl: "views/workshops.html" })
    .when('/training/:Id', { controller: 'presentationsController', templateUrl: "views/presentations.html" })
    .otherwise({ redirectTo: '/home' });
});

app.controller("workshopController",
    function ($scope, $http, $location, hostUrl, appUrl) {

        var query = appUrl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + slideList + "')/items?$select=Title,Workshop/Title,Workshop/Id&$expand=Workshop&@target='" + hostUrl + "/" + slideList + "'";

        $http.get(query).then(function (response) {
                var arrSlides = response.data.value;
                var wsnames = [... new Set(arrSlides.map(el => el.Workshop.Title))];
                console.log("Workshops: ");
                console.log(wsnames);
                $scope.workshops = wsnames;
            });

        $scope.showWorkshop = function (ws) {
            console.log("showing workshop: " + ws);
            $location.path("/training/" + ws);
        };
    });

app.controller("presentationsController",
    function ($scope, $http, $routeParams, hostUrl, appUrl) {

        $scope.hostUrl = hostUrl;
        $scope.workshop = $routeParams.Id;

        //Notice fields when using *
        //var presentations = appUrl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + slideList + "')/Items/?$select=*,Workshop/Title&$expand=Workshop/Title&$filter=Workshop/Title eq 'Power Camp Web Development'&@target='" + hostUrl + "/" + slideList + "'";

        var presentations = appUrl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + slideList + "')/Items/?$select=Title,FileLeafRef,Workshop/Title&$expand=Workshop/Title&$filter=Workshop/Title eq '" + $scope.workshop + "'&@target='" + hostUrl + "/" + slideList + "'";

        $http.get(presentations)
           .then(function (response) {
               $scope.presentations = response.data.value;
               console.log("Presentations: ");
               console.log($scope.slides);
           });
    });
