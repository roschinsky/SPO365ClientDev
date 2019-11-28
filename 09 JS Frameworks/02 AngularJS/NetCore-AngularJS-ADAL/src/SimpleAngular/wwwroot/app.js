(function() {
  var eventsApp = angular.module("eventsApp", ["ngRoute", "AdalAngular"]);

  eventsApp.config([
    "$routeProvider",
    "$httpProvider",
    "adalAuthenticationServiceProvider",
    function($routeProvider, $httpProvider, adalProvider) {
      var adalConfig = {
        tenant: "d92b247e-90e0-4469-a129-6a32866c0d0a",
        clientId: "4e60c128-a813-4031-bd99-cf4327cce885", //=> Application ID in Azure
        cacheLocation: "localStorage",
        endpoints: {
          "https://graph.microsoft.com": "https://graph.microsoft.com"
        }
      };
      adalProvider.init(adalConfig, $httpProvider);

      $routeProvider
        .when("/home", {
          controller: "homeController",
          templateUrl: "/views/home.html",
          requireADLogin: false
        })
        .when("/events", {
          controller: "eventsController",
          templateUrl: "/views/events.html",
          requireADLogin: true
        })
        .otherwise({ redirectTo: "/home" });
    }
  ]);

  eventsApp.controller("homeController", function($scope) {
    $scope.startText = "Welcome to the ADAL-Angular Web!";
  });

  eventsApp.controller("eventsController", function(
    $scope,
    $http,
    adalAuthenticationService
  ) {
    if (adalAuthenticationService.userInfo.isAuthenticated) {
      $scope.message =
        "Welcome to Events.<br>You are logged in as " +
        adalAuthenticationService.userInfo.userName;
    } else {
      $location.path("/");
    }

    var qry =
      "https://graph.microsoft.com/v1.0/me/events?$orderby=start/dateTime%20desc";

    $http.get(qry).then(
      function(response) {
        console.log("data received from o365", response.data);
        $scope.events = response.data.value;
      },
      function(err) {
        console.log("error: ", err);
      }
    );
  });
})();
