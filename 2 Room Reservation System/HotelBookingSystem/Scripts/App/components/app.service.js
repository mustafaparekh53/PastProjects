

(function () {
    angular.module('spsmodule')
    .service('spsservice', ['$q', 'baseSvc', function ($q, baseSvc) {


        //---------------------------------------
        //Get Current Session Sharepoint Username
        //---------------------------------------
        this.getUsername = function () {

            var deferred = $q.defer();

            SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {

                var context = SP.ClientContext.get_current();
                var user = context.get_web().get_currentUser();

                context.load(user);

                context.executeQueryAsync(
                  function () {
                      deferred.resolve(user);
                  }, function (sender, args) {

                      deferred.reject('Failed to get user name. Error:' + args.get_message());

                  });

            });

            return deferred.promise;

        }

        //--------------------------------------------
        //Get Current Session Sharepoint User Profile
        //--------------------------------------------
        this.getUserProfile = function () {

            var deferred = $q.defer();

            SP.SOD.executeFunc('SP.js', 'SP.ClientContext', function () {
                // Make sure PeopleManager is available 
                SP.SOD.executeFunc('userprofile', 'SP.UserProfiles.PeopleManager', function () {

                    var clientContext = new SP.ClientContext.get_current();
                    var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);
                    var userProfileProperties = peopleManager.getMyProperties();
                    clientContext.load(userProfileProperties);
                    clientContext.executeQueryAsync(
                        function () {
                            deferred.resolve(userProfileProperties.get_userProfileProperties());
                        }, function (sender, args) {

                            deferred.reject('Failed to get user name. Error:' + args.get_message());

                        });
                });

            });

            return deferred.promise;
        }

        this.getspUserIdByKey = function (key) {
            var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
            var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
            var dataRaw = baseSvc.getspUserId(hostweburl, appweburl, key);
            return dataRaw.Id;
        }


        this.getspUserById = function (id) {
            var deferred = $q.defer();
            var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
            var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
            baseSvc.getspUserById(hostweburl, appweburl, id).then(function (response) {
                var jsonObject = JSON.parse(response.body);
                var results = jsonObject.d.results;
                deferred.resolve(results);
            }, function (reason) {
                console.log("get getspUserById Failed:" + reason);
                deferred.reject(null);
            });

            return deferred.promise;
        }

        //-----------------------------
        //Get Esquel Factory Code List
        //-----------------------------
        this.factoryCodeDataSource = function () {
            var deferred = $q.defer();
            var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
            var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));

            baseSvc.spSiteURL2(appweburl).then(function (response) {

                var jsonObject2 = JSON.parse(response.body);

                baseSvc.spListItemRead(jsonObject2.d.Url, appweburl, "getbytitle('Factory')/items", "$filter=IsDestination%20eq%201&$orderby=Title%20asc&").then(function (response) {

                    var jsonObject = JSON.parse(response.body);

                    var results = jsonObject.d.results;

                    deferred.resolve(results);
                }, function (reason) {
                    console.log("get factoryCodeDataSource Failed:" + reason);
                    deferred.reject(null);
                });
            }, function (reason) {
                console.log("get spSiteURL2 Failed:" + reason);
                deferred.reject(null);
            });
            return deferred.promise;
        }

        this.getCostCenterListByFactoryCode = function () {
            var deferred = $q.defer();
            var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
            var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));

            baseSvc.spSiteURL2(appweburl).then(function (response) {

                var jsonObject2 = JSON.parse(response.body);

                baseSvc.spListItemRead(jsonObject2.d.Url, appweburl, "getbytitle('CostCenter')/items", "$top=5000&$orderby=DepartmentCode%20asc&").then(function (response) {

                    var jsonObject = JSON.parse(response.body);

                    var results = jsonObject.d.results;

                    deferred.resolve(results);
                }, function (reason) {
                    console.log("get CostCenterListByFactoryCode Failed:" + reason);
                    deferred.reject(null);
                });
            }, function (reason) {
                console.log("get spSiteURL2 Failed:" + reason);
                deferred.reject(null);
            });
            return deferred.promise;
        }

        //this.getCCManager = function (filter) {
        //    var deferred = $q.defer();
        //    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
        //    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));

        //    baseSvc.spSiteURL2(appweburl).then(function (response) {

        //        var jsonObject2 = JSON.parse(response.body);

        //        baseSvc.spListItemRead(jsonObject2.d.Url, appweburl, "getbytitle('CCManager')/items", filter == null ? "" : filter).then(function (response) {

        //            var jsonObject = JSON.parse(response.body);

        //            var results = jsonObject.d.results;

        //            deferred.resolve(results);
        //        }, function (reason) {
        //            console.log("get CCManager Failed:" + reason);
        //            deferred.reject(null);
        //        });
        //    }, function (reason) {
        //        console.log("get spSiteURL2 Failed:" + reason);
        //        deferred.reject(null);
        //    });
        //    return deferred.promise;
        //}

        //-----------------------------
        //Get Esquel Department List
        //-----------------------------
        this.getDepartmentList = function () {
            var departmentList = [
                "EEL",
                "GET"
            ];

            return departmentList;
        }

        this.getLanguageList = function () {
            var languageList = [
    { text: "English", value: "en-us" },
    { text: "中文", value: "zh-cn" }
            ];

            return languageList;
        }

    }]);
})();

function getQueryStringParameter(paramToRetrieve) {
    var docUrl = document.URL;
    docUrl = docUrl.split("#/")[0];
    var params = docUrl.split("?")[1].split("&");
    var strParams = "";
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");
        if (singleParam[0] == paramToRetrieve)
            return singleParam[1];
    }
}

//added by Zack 20170524 Get title issue-------------
//when current user no need pass value to param of userKey
function getUserProfileOfficeLocation(userKey) {
    //_api/SP.UserProfiles.PeopleManager/getpropertiesfor(@v)?@v='i%3A0%23.f|membership|libru@esquel.com'
    //var hostweburl = _spPageContextInfo.webServerRelativeUrl;
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    if (userKey == null || userKey.length == 0) {
        var urlString = appweburl + "/_api/SP.UserProfiles.PeopleManager/GetMyProperties";
        var returnObj = $.ajax({
            url: urlString, //appweburl + "/_api/SP.UserProfiles.PeopleManager/GetMyProperties",
            headers: {
                "accept": "application/json; odata=verbose",
                "content-type": "application/json;odata=verbose",
                "X-RequestDigest": $("#__REQUESTDIGEST").val()
            },
            type: 'GET',
            async: false,
            contentType: "application/json;odata=verbose"
        });

        var objArray = JSON.parse(returnObj.responseText).d.UserProfileProperties.results;
        for (var i = 0; i < objArray.length; i++) {
            var obj = objArray[i];
            if (obj.Key == "Office") {
                return obj.Value;
            }
        }
        
    }
    else
    {
        //debugger;
        var urlString = appweburl + "/_api/SP.UserProfiles.PeopleManager/getUserProfilePropertyFor(accountName=@v,propertyname='Office')?@v='" + encodeURIComponent(userKey) + "'";
        var returnObj = $.ajax({
            url: urlString, //appweburl + "/_api/SP.UserProfiles.PeopleManager/GetMyProperties",
            headers: {
                "accept": "application/json; odata=verbose",
                "content-type": "application/json;odata=verbose",
                "X-RequestDigest": $("#__REQUESTDIGEST").val()
            },
            type: 'GET',
            async: false,
            contentType: "application/json;odata=verbose"
        });

        return JSON.parse(returnObj.responseText).d.GetUserProfilePropertyFor;
    }
    
    return "";
}

function getUserRealFactory(mockFactoryCode) {
//this.getUserRealFactory = function (mockFactoryCode) {
    //debugger;
    //var ele = document.getElementById("SuiteNavUserName");
    //var userName = ele.innerText; //getUserInfo().UserName;
    //var facCode = (/\/\w+\//.exec(userName)[0]).replace(/\//g, '');
    var facCode = mockFactoryCode;

    var factoryCodeId;
    var realFactoryCode;
    var locationFactoryMappingList = querySPList("getbytitle('LocationFactoryMapping')/items", "$filter=Title eq '" + facCode + "'", '');
    var locationFactoryMappingData = JSON.parse(locationFactoryMappingList.responseText).d.results;
    if (locationFactoryMappingData.length > 0 && locationFactoryMappingData[0].FactoryCodeId != null) {
        factoryCodeId = locationFactoryMappingData[0].FactoryCodeId;
        var factoryList = querySPList("getbytitle('Factory')/getitembyid(" + factoryCodeId + ")", '', '', true);
        var factoryData = JSON.parse(factoryList.responseText).d;
        if (factoryData != null) {
            realFactoryCode = factoryData.Title;
            return realFactoryCode;
        }
    }
    return facCode;
}

//查询List方法
function querySPList(query, filter, expand, isParentSite) {
//this.querySPList = function (query, filter, expand, isParentSite) {
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    if (isParentSite) {
        //debugger;
        hostweburl = hostweburl.substr(0, hostweburl.lastIndexOf("/"));
    }

    return $.ajax({
        //url: hostweburl + "/_api/web/lists/" + query + "?" + filter + expand,
        //url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + list + "')/items(" + id + ")/?@target='" + hostweburl + "'",
        url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/" + query + "?" + filter + "&@target='" + hostweburl + "'" + expand,
        headers: {
            "accept": "application/json; odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            'IF-MATCH': '*'
        },
        type: 'GET',
        async: false,
        contentType: "application/json;odata=verbose"
    });
}

//zack 20180213 Dorm maintenance status
function getDormRoomStatusData(dormRoomId) {
    //debugger;
    //还需要加条件，找到的要是最新一条? 、、加排序
    var statusList = querySPList("getbytitle('DormRoomStatus')/items", "$filter=DormIDId eq '" + dormRoomId + "' and Status eq " + encodeURIComponent("'维护中'") + " &$orderby=CompleteDate%20desc", '');
    var statusData = JSON.parse(statusList.responseText).d.results;
    return statusData[0];
}
//------------------------------