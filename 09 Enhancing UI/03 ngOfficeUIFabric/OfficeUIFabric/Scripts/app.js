var app = angular.module('newsApp', ['officeuifabric.core', 'officeuifabric.components.table', 'ngSanitize', 'ngRoute', 'ui.bootstrap']);

var hostUrl, appUrl;

var init = function () {
    JSRequest.EnsureSetup();
    hostUrl = decodeURIComponent(JSRequest.QueryString["SPHostUrl"]);
    appUrl = decodeURIComponent(JSRequest.QueryString["SPAppWebUrl"]);
    app.constant('hostUrl', hostUrl);
    app.constant('appUrl', appUrl);
}
init();

app.config(function ($routeProvider) {
    $routeProvider
    .when('/basic', { controller: 'basicController', templateUrl: "views/basics.html" })
    .when('/table', { controller: 'tableController', templateUrl: "views/table.html" })
    .when('/ngForm', { controller: 'ngFormController', templateUrl: "views/ngForm.html" })
    .when('/ngTable', { controller: 'ngTableController', templateUrl: "views/ngTable.html" })
    .otherwise({ redirectTo: '/basic' });
});