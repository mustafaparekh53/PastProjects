"use strict";
(function () {

    angular.module('spsmodule').config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
      when('/Booking', {
          templateUrl: '../Scripts/App/components/hotelRequestForm/hotelRequestFrom.html',
          controller: 'hotelRequestFromCtrl'
      }).
        when('/Admin', {
            templateUrl: '../Scripts/App/components/adminPage/adminPage.html',
            controller: 'adminPageCtrl'
        }).
        when('/Report', {
            templateUrl: '../Scripts/App/components/reportPage/reportPage.html',
            controller: 'reportPageCtrl'
        }).
        when('/DormLandingPage', {
            templateUrl: '../Scripts/App/components/dormLandingPage/dormLandingPage.html',
            controller: 'dormLandingPage'
        }).
        otherwise({
            redirectTo: '/Booking'
        });
  }]);


})();