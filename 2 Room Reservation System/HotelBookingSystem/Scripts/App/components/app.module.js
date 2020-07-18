'use strict';

(function () {
    angular.module('spsmodule', ["ngRoute", "kendo.directives"])
    .run(['$rootScope', function(){
        console.log('spsmodule running');
        $("#menu").kendoMenu();
    }]);
})();

