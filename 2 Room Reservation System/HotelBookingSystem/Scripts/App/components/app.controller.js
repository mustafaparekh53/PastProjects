"use strict";
(function () {
    angular.module('spsmodule')
        .controller('spscontroller', ['$scope', 'spsservice', 
            
            function ($scope, spsservice) {

                $("#DeltaSiteLogo > a > img").attr("src", "../Images/room_reservation_logo.png");
                setTimeout(function () {
                    $("#DeltaSiteLogo > a > img").attr("src", "../Images/room_reservation_logo.png");
                }, 2000);

                var menuItems = {
                    "#Booking": "Booking",
                    "#Admin": "Admin Page",
                    "#Report": "Report Page",
                    "#DormLandingPage": "Dorm Booking"

                };


                $scope.menu = menuItems;
                $scope.languageList = {
                    dataTextField: "text",
                    dataValueField: "value",
                    dataSource: spsservice.getLanguageList(),
                    change: function () {
                        switchingLanguagePack($scope.Language);
                        localStorageItem("HBS.langDefault", $scope.Language);
                    }
                };
                

            }]);
    
})();

