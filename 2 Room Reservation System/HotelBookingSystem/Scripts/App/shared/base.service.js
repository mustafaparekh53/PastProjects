
(function () {
    angular.module('spsmodule')
    .service('baseSvc', ['$q', function ($q) {

        //--------------------------
        // Read List of items from Sharepoint
        //--------------------------

        this.spListItemRead = function (hostweburl, appweburl, query, filter) {

            filter = (typeof (filter) == "undefined" || filter == null) ? "" : filter;
            var deferred = $q.defer();

            //clean up angularjs param #/
            appweburl = appweburl.split("#/")[0];
            //mQuery (SharePoint built-in analog of jQuery)

            //SP.SOD.executeFunc('mQuery.js', 'm$', function () {
            //m$.ready(function () {
            SP.SOD.registerSod('sp.requestexecutor.js', '/_layouts/15/sp.requestexecutor.js');
            SP.SOD.executeFunc('sp.requestexecutor.js', 'SP.RequestExecutor', function () {
                var executor = new SP.RequestExecutor(appweburl);
                executor.executeAsync({
                    url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/" + query + "?" + filter + "@target='" + hostweburl + "'",
                    headers: { "Accept": "application/json; odata=verbose" },
                    method: 'GET',
                    success: function (response) {
                        deferred.resolve(response);
                    },
                    error: function errorHandler(data, errorCode, errorMessage) {
                        deferred.reject('Error:' + errorCode + ' ' + errorMessage);
                    }
                });
            });
            //})
            //});

            return deferred.promise;
        }

        this.spSiteURL = function (appweburl) {

            var deferred = $q.defer();

            //clean up angularjs param #/
            appweburl = appweburl.split("#/")[0];
            //mQuery (SharePoint built-in analog of jQuery)
            SP.SOD.executeFunc('mQuery.js', 'm$', function () {
                m$.ready(function () {
                    SP.SOD.registerSod('sp.requestexecutor.js', '/_layouts/15/sp.requestexecutor.js');
                    SP.SOD.executeFunc('sp.requestexecutor.js', 'SP.RequestExecutor', function () {
                        var executor = new SP.RequestExecutor(appweburl);
                        executor.executeAsync({
                            url: appweburl + "/_api/site",
                            headers: { "Accept": "application/json; odata=verbose" },
                            method: 'GET',
                            success: function (response) {
                                deferred.resolve(response);
                            },
                            error: function errorHandler(data, errorCode, errorMessage) {
                                deferred.reject('Error:' + errorCode + ' ' + errorMessage);
                            }
                        });
                    });
                })
            });

            return deferred.promise;
        }

        this.spSiteURL2 = function (appweburl) {
            var def = new $.Deferred();

            appweburl = appweburl.split("#/")[0];
            SP.SOD.registerSod('sp.requestexecutor.js', '/_layouts/15/sp.requestexecutor.js');
            SP.SOD.executeFunc('sp.requestexecutor.js', 'SP.RequestExecutor', function () {
                var executor = new SP.RequestExecutor(appweburl);

                executor.executeAsync({
                    url: appweburl + "/_api/site",
                    headers: { "Accept": "application/json; odata=verbose" },
                    method: 'GET',
                    success: success,
                    error: fail
                });

                function success(data) {
                    def.resolve(data);
                };

                function fail(jqxr, errorCode, errorThrown) {
                    def.reject(errorThrown);
                }
            });

            return def.promise();
        }

        this.getspUserId = function (hostweburl, appweburl, key) {
            appweburl = appweburl.split("#/")[0];
            SP.SOD.registerSod('sp.requestexecutor.js', '/_layouts/15/sp.requestexecutor.js');
            SP.SOD.executeFunc('sp.requestexecutor.js', 'SP.RequestExecutor', function () {
                var executor = new SP.RequestExecutor(appweburl);
                executor.executeAsync({
                    url: appweburl + "/_api/SP.AppContextSite(@target)/web/siteusers(@v)?@v='" + key + "'&@target='" + hostweburl + "'",
                    headers: {
                        "accept": "application/json; odata=verbose",
                        "content-type": "application/json;odata=verbose",
                        "X-RequestDigest": $q("#__REQUESTDIGEST").val()
                    },
                    method: 'GET',
                    async: false,
                    success: success,
                    error: fail
                });

                function success(data) {
                    return data;
                };

                function fail(jqxr, errorCode, errorThrown) {
                    return null;
                }
            });
        }

        this.getspUserById = function (hostweburl, appweburl, id) {
            var deferred = $q.defer();
            appweburl = appweburl.split("#/")[0];
            SP.SOD.registerSod('sp.requestexecutor.js', '/_layouts/15/sp.requestexecutor.js');
            SP.SOD.executeFunc('sp.requestexecutor.js', 'SP.RequestExecutor', function () {
                var executor = new SP.RequestExecutor(appweburl);
                executor.executeAsync({
                    url: appweburl + "/_api/SP.AppContextSite(@target)/web/siteusers?$filter=Id%20eq%20" + id + "&@target='" + hostweburl + "'",
                    headers: {
                        "accept": "application/json; odata=verbose",
                        "content-type": "application/json;odata=verbose",
                        "X-RequestDigest": $("#__REQUESTDIGEST").val()
                    },
                    method: 'GET',
                    async: false,
                    success: success,
                    error: fail
                });

                function success(data) {
                    deferred.resolve(data);
                };

                function fail(jqxr, errorCode, errorThrown) {
                    console.log("getspUserById Failed:" + data.body);
                    deferred.reject(null);
                }
            });

            return deferred.promise;
        }

        //-----------------------
        // Create item in a list
        //-----------------------

        this.spListItemCreate = function (hostweburl, appweburl, data, query) {

            var deferred = $q.defer();

            //clean up angularjs param #/
            appweburl = appweburl.split("#/")[0];
            //mQuery (SharePoint built-in analog of jQuery)

            //SP.SOD.executeFunc('mQuery.js', 'm$', function () {
            //    m$.ready(function () {
            SP.SOD.registerSod('sp.requestexecutor.js', '/_layouts/15/sp.requestexecutor.js');
            SP.SOD.executeFunc('sp.requestexecutor.js', 'SP.RequestExecutor', function () {
                var executor = new SP.RequestExecutor(appweburl);
                executor.executeAsync({
                    url: appweburl +
                         "/_api/SP.AppContextSite(@target)/web/lists/" + query + "?@target='" + hostweburl + "'",
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Accept": "application/json; odata=verbose",
                        'content-type': 'application/json;odata=verbose',
                        "X-RequestDigest": $("#__REQUESTDIGEST").val()
                    },
                    success: function (response) {
                        deferred.resolve(response);
                    },
                    error: function errorHandler(data, errorCode, errorMessage) {
                        console.log("spListItemCreate Failed:" + data.body);
                        deferred.reject('Error:' + errorCode + ' ' + errorMessage);
                    }
                });
            });
            //    })
            //});
            return deferred.promise;
        }

        this.spListItemEdit = function (hostweburl, appweburl, data, query) {

            var deferred = $q.defer();

            //clean up angularjs param #/
            appweburl = appweburl.split("#/")[0];
            //mQuery (SharePoint built-in analog of jQuery)

            //SP.SOD.executeFunc('mQuery.js', 'm$', function () {
            //    m$.ready(function () {
            SP.SOD.registerSod('sp.requestexecutor.js', '/_layouts/15/sp.requestexecutor.js');
            SP.SOD.executeFunc('sp.requestexecutor.js', 'SP.RequestExecutor', function () {
                var executor = new SP.RequestExecutor(appweburl);
                executor.executeAsync({
                    url: appweburl +
                         "/_api/SP.AppContextSite(@target)/web/lists/" + query + "?@target='" + hostweburl + "'",
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Accept": "application/json; odata=verbose",
                        'content-type': 'application/json;odata=verbose',
                        "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                        "IF-MATCH": "*",
                        "X-Http-Method": "PATCH"
                    },
                    success: function (response) {
                        deferred.resolve(response);
                    },
                    error: function errorHandler(data, errorCode, errorMessage) {
                        console.log("spListItemEdit Failed:" + data.body);
                        deferred.reject('Error:' + errorCode + ' ' + errorMessage);
                    }
                });
            });
            //    })
            //});
            return deferred.promise;
        }
    }]);
})();

