(function () {
    angular.module('spsmodule')
    .service('hotelRequestService', ['$q', 'baseSvc', function ($q, baseSvc) {

        var DORMALLOCATIONLISTNAME = 'DormAllocation';
        var BOOKINGLISTNAME = "Booking";
        var BOOKINGDETAILSLISTNAME = "BookingDetails";
        var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
        var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));

        //--------------------------
        //Get Booking Purpose List
        //-------------------------

        this.getPurposeList = function (options) {
            var deferred = $q.defer();

            baseSvc.spListItemRead(hostweburl, appweburl, "getbytitle('Booking Purpose')/items").then(function (response) {

                var jsonObject = JSON.parse(response.body);

                var results = jsonObject.d.results;

                deferred.resolve(results);
            }, function (reason) {
                console.log("get Booking Purpose Failed:" + reason);
                deferred.reject(null);
            });

            return deferred.promise;
        }
        this.getChargeTypeList = function (options) {
            var deferred = $q.defer();

            baseSvc.spListItemRead(hostweburl, appweburl, "getbytitle('ChargeType')/items").then(function (response) {

                var jsonObject = JSON.parse(response.body);

                var results = jsonObject.d.results;

                deferred.resolve(results);
            }, function (reason) {
                console.log("get ChargeType Failed:" + reason);
                deferred.reject(null);
            });

            return deferred.promise;
        }


        //--------------------------
        //Get Hotel List
        //-------------------------
        this.getHotelList = function (id, gid) {
            var deferred = $q.defer();

            baseSvc.spListItemRead(hostweburl, appweburl, "getbytitle('Hotel')/items", "$filter=FactoryCodeId%20eq%20" + id + " and IsDorm eq 0 and Grade/Grade ge " + gid + "&$orderby=orderby&$expand=Grade&$select=Grade/Grade,*&").then(function (response) {

                var jsonObject = JSON.parse(response.body);

                var results = jsonObject.d.results;

                deferred.resolve(results);
            }, function (reason) {
                console.log("getHotelList Failed:" + reason);
                deferred.reject(null);
            });

            return deferred.promise;
        }

        this.getFactoryAdminList = function (id) {
            var deferred = $q.defer();

            baseSvc.spListItemRead(hostweburl, appweburl, "getbytitle('FactoryAdmin')/items", "$filter=FactoryCodeId%20eq%20" + id + "&").then(function (response) {

                var jsonObject = JSON.parse(response.body);

                var results = jsonObject.d.results;

                deferred.resolve(results);
            }, function (reason) {
                console.log("getFactoryAdminList Failed:" + reason);
                deferred.reject(null);
            });

            return deferred.promise;
        }

        this.getBookingByRefNumber = function (refNumber) {
            var deferred = $q.defer();

            baseSvc.spListItemRead(hostweburl, appweburl, "getbytitle('" + BOOKINGLISTNAME + "')/items", "$filter=Title%20eq%20%27" + refNumber + "%27&").then(function (response) {

                var jsonObject = JSON.parse(response.body);

                var results = jsonObject.d.results;

                deferred.resolve(results);
            }, function (reason) {
                console.log("getBookingByRefNumber Failed:" + reason);
                deferred.reject(null);
            });

            return deferred.promise;
        }


        this.getBookingDetailsByRefNumber = function (refNumber, requestState) {
            var deferred = $q.defer();

            baseSvc.spListItemRead(hostweburl, appweburl, "getbytitle('" + BOOKINGDETAILSLISTNAME + "')/items", "$filter=ReferenceNumberId%20eq%20" + refNumber + " and CancelFlag eq " + (requestState == "Cancelled" ? "1" : "0") + "&$orderby=Id%20asc&$select=*,CCPerson/Name&$expand=CCPerson&").then(function (response) {

                var jsonObject = JSON.parse(response.body);

                var results = jsonObject.d.results;

                deferred.resolve(results);
            }, function (reason) {
                console.log("getBookingDetailsByRefNumber Failed:" + reason);
                deferred.reject(null);
            });

            return deferred.promise;
        }


        this.getDormAllocationByRefNumber = function (refNumber) {
            var deferred = $q.defer();

            baseSvc.spListItemRead(hostweburl, appweburl, "getbytitle('" + DORMALLOCATIONLISTNAME + "')/items", "$filter=ReferenceNumberId%20eq%20" + refNumber + "&$top=5000&").then(function (response) {

                var jsonObject = JSON.parse(response.body);

                var results = jsonObject.d.results;

                deferred.resolve(results);
            }, function (reason) {
                console.log("getDormAllocationByRefNumber Failed:" + reason);
                deferred.reject(null);
            });

            return deferred.promise;
        }

        this.getCCManager = function (filter) {
            var deferred = $q.defer();
            baseSvc.spSiteURL2(appweburl).then(function (response) {

                var jsonObject2 = JSON.parse(response.body);

                baseSvc.spListItemRead(jsonObject2.d.Url, appweburl, "getbytitle('CCManager')/items", filter == null ? "" : filter).then(function (response) {

                    var jsonObject = JSON.parse(response.body);

                    var results = jsonObject.d.results;

                    deferred.resolve(results);
                }, function (reason) {
                    console.log("get CCManager Failed:" + reason);
                    deferred.reject(null);
                });
            }, function (reason) {
                console.log("get spSiteURL2 Failed:" + reason);
                deferred.reject(null);
            });
            return deferred.promise;
        }



        //--------------------------
        // Create Booking Request
        //-------------------------
        this.createBookingReq = function (bookingReq) {

            var deferred = $q.defer();
            //Set List Item Type
            bookingReq.__metadata = { "type": "SP.Data.BookingListItem" };
            bookingReq.TitleLink = bookingReq.Title;

            var data = bookingReq;

            var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
            var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));

            baseSvc.spListItemCreate(hostweburl, appweburl, data, "getbytitle('Booking')/items").then(function (response) {
                var jsonObject = JSON.parse(response.body);

                var results = jsonObject.d;

                deferred.resolve(results);
            }, function (reason) {
                deferred.reject(reason);
            });
            return deferred.promise;
        }

        this.createBookingDetailsReq = function (bookingDetailsReq) {

            var deferred = $q.defer();
            //Set List Item Type
            bookingDetailsReq.__metadata = { "type": "SP.Data.BookingDetailsListItem" };

            var data = bookingDetailsReq;

            var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
            var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));

            baseSvc.spListItemCreate(hostweburl, appweburl, data, "getbytitle('BookingDetails')/items").then(function (response) {
                deferred.resolve(response);
            }, function (reason) {
                deferred.reject(reason);
            });
            return deferred.promise;
        }


        this.editBookingReq = function (bookingReq,id) {

            var deferred = $q.defer();
            //Set List Item Type
            bookingReq.__metadata = { "type": "SP.Data.BookingListItem" };

            var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
            var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));

            baseSvc.spListItemEdit(hostweburl, appweburl, bookingReq, "getbytitle('Booking')/getItemByStringId('" + id + "')").then(function (response) {
                deferred.resolve(response);
            }, function (reason) {
                deferred.reject(reason);
            });
            return deferred.promise;
        }

        this.createCCManagerReq = function (ccManagerReq) {
            var deferred = $q.defer();
            ccManagerReq.__metadata = { "type": "SP.Data.CCManagerListItem" };
            baseSvc.spSiteURL2(appweburl).then(function (response) {
                var jsonObject2 = JSON.parse(response.body);
                baseSvc.spListItemCreate(jsonObject2.d.Url, appweburl,ccManagerReq, "getbytitle('CCManager')/items").then(function (response) {
                    deferred.resolve(response);
                }, function (reason) {
                    deferred.reject(reason);
                });
            }, function (reason) {
                console.log("get spSiteURL2 Failed:" + reason);
                deferred.reject(reason);
            });
            return deferred.promise;
        }

        this.editCCManagerReq = function (ccManagerReq, id) {
            var deferred = $q.defer();
            ccManagerReq.__metadata = { "type": "SP.Data.CCManagerListItem" };
            baseSvc.spSiteURL2(appweburl).then(function (response) {
                var jsonObject2 = JSON.parse(response.body);
                baseSvc.spListItemEdit(jsonObject2.d.Url, appweburl, ccManagerReq, "getbytitle('CCManager')/getItemByStringId('" + id + "')").then(function (response) {
                    deferred.resolve(response);
                }, function (reason) {
                    deferred.reject(reason);
                });
            }, function (reason) {
                console.log("get spSiteURL2 Failed:" + reason);
                deferred.reject(reason);
            });

            return deferred.promise;
        }

    }]);
})();