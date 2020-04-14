angular
  .module("SecondApp", ["ngRoute"])

  .controller("SecondController", [
    "$scope",
    function ($scope) {
      $scope.something = "dhouha";
    },
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when("/register", {
        templateUrl: "views/register.html",
      })
      .when("/login", {
        templateUrl: "views/login.html",
      });
  });
