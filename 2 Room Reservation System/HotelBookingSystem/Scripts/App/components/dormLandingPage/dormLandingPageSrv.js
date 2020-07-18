(function () {
    angular.module('spsmodule')
		.service('dormLandingPageSrv', ["$filter", 'baseSvc', 'spsservice', function ($filter, baseSvc, spSrv) {
		    var self = this;
		    self.baseSrv = baseSvc;
		    self.spSrv = spSrv;

		    var us = underscore;
		    var Dorm_Hotel_List = "Hotel";
		    var Dorm_Room_List = "Dorm";
		    var Alloc_List = "DormAllocation";
		    var Booking_Detail_List = "BookingDetails";
		    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
		    var appweburl = _spPageContextInfo.webAbsoluteUrl;

		    var sp_ajax_get = function (method) {
		        return $.ajax({
		            url: appweburl + "/_api/SP.AppContextSite(@target)" + method + (method.indexOf('?') > 0 ? "&" : "?") + "@target='" + hostweburl + "'",
		            headers: {
		                "accept": "application/json; odata=verbose",
		                "content-type": "application/json;odata=verbose",
		                "X-RequestDigest": $("#__REQUESTDIGEST").val()
		            },
		            type: 'GET',
		            contentType: "application/json;odata=verbose"
		        });
		    }

            //--同步暂时没有地方用
		    var sp_ajax_get_sync = function (method) {
		        return $.ajax({
		            url: appweburl + "/_api/SP.AppContextSite(@target)" + method + (method.indexOf('?') > 0 ? "&" : "?") + "@target='" + hostweburl + "'",
		            headers: {
		                "accept": "application/json; odata=verbose",
		                "content-type": "application/json;odata=verbose",
		                "X-RequestDigest": $("#__REQUESTDIGEST").val()
		            },
		            type: 'GET',
		            async: false,
		            contentType: "application/json;odata=verbose"
		        });
		    }
            

		    //added by Zack 20170524 Get title issue-----------
		    self.getAdminFactoryList = function () {
		        //debugger;
		        var deferred = $.Deferred();

		        $.when(
						sp_ajax_get("/web/CurrentUser"),
						sp_ajax_get("/site/RootWeb/lists/getbytitle('Factory')/items"),
                        sp_ajax_get("/web/lists/getbytitle('FactoryAdmin')/items"))
					.done(function (user, fc_list, fca_list) {
					    //var userName = user[0].d.Title;
					    //var code = ((/\/[a-zA-Z]+\//.exec(userName))[0]).replace(/\//g, '');
					    //added by Zack 20170524 Get title issue
					    var userid = user[0].d.Id;
					    var factoryData = fc_list[0].d.results;
					    var factoryAdminData = fca_list[0].d.results;
					    var adminFactoryList = [];
					    for (var i = 0; i < factoryAdminData.length; i++) {
					        if (factoryAdminData[i].AdminNameId != null && factoryAdminData[i].AdminNameId.results.length > 0) {
					            if (factoryAdminData[i].AdminNameId.results.indexOf(userid) >= 0 && factoryAdminData[i].FactoryCodeId != null && !factoryAdminData[i].ShowHotelFlag) {
                                    //dorm功能要开放的才加入 ShowHotelFlag!=true
					                adminFactoryList.push(factoryAdminData[i].FactoryCodeId);
					            }
					        }
					    }

					    var returnValue = [];
					    for (var i = 0; i < factoryData.length; i++) {
					        if (adminFactoryList.indexOf(factoryData[i].Id) >= 0) {
					            returnValue.push(factoryData[i]);
					        }
					    }

					    deferred.resolve(returnValue);
					    return true;

					})
					.fail(function () {
					    console.log("get Factory or get current user or get FactoryAdmin error:");
					    console.log(arguments);
					    deferred.reject();
					});
		        return deferred.promise();
		    }

		    //getUserRealFactory = function (mockFactoryCode) { //move to app.service.js
		    //    debugger;
		    //    var deferred = $.Deferred();
		    //    var realFactoryCode = mockFactoryCode;
		    //    //var facCode = mockFactoryCode;
		        
		    //    sp_ajax_get("/web/lists/getbytitle('LocationFactoryMapping')/items" + "?$filter=Title eq '" + mockFactoryCode + "'").then(function (responseM) {
			//		//var userName = user[0].d.Title;
			//		//var code = ((/\/[a-zA-Z]+\//.exec(userName))[0]).replace(/\//g, '');
			//		//added by Zack 20170524 Get title issue
		    //        //var jsonObject = JSON.parse(responseM.body);
		    //        //var locationFactoryMappingData = jsonObject.d.results;
		    //        var locationFactoryMappingData = responseM.d.results

			//		if (locationFactoryMappingData.length > 0 && locationFactoryMappingData[0].FactoryCodeId != null) {
			//		    var factoryCodeId = locationFactoryMappingData[0].FactoryCodeId;
			//		    sp_ajax_get("/site/RootWeb/lists/getbytitle('Factory')/getitembyid(" + factoryCodeId + ")").then(function (response) {
			//		        var jsonObject = JSON.parse(response.body);
			//		        var factoryData2 = jsonObject.d.results;
			//		        var factoryData3 = response.d.results;//.results;
			//		        var factoryData = response.d;
			//		        if (factoryData != null) {
			//		            realFactoryCode = factoryData.Title;
			//		            //return realFactoryCode;
			//		        }

			//		        deferred.resolve(realFactoryCode);
			//		    }, function (reason) {
			//		        deferred.reject("get Factory List Failed:" + reason);
			//		    });
			//		}
			//		//--
			//		deferred.resolve(realFactoryCode);
		    //    }, function (reason) {
		    //        deferred.reject("get LocationFactoryMapping List Failed:" + reason);
		    //    });
		    //}
            //---------------------------zack-------------

		    //--------------------------
		    // Get Dorm and Hotel List
		    //-------------------------

		    var _dorm_hotel_coll_defer = $.Deferred();

		    _Get_Dorm_Hotel_List = function (currentFactoryCodeId) {
		        sp_ajax_get("/web/lists/getbytitle('" + Dorm_Hotel_List + "')/items?$filter=FactoryCode/Id eq " + currentFactoryCodeId).then(function (response) {
		            var results = response.d.results;

		            _dorm_hotel_coll_defer.resolve(results);
		        }, function (reason) {
		            _dorm_hotel_coll_defer.reject("get Dorm and Hotel List Failed:" + reason);
		        });
		    }

		    self.setLanguage = function () {
		        var deferred = $.Deferred();

		        self.spSrv.factoryCodeDataSource().then(function (data) {
		            var ll = localStorageItem("HBS.langDefault");
		            if (ll == null) {
		                ll = 'en-us';
		                $.each(data, function (i, o) {
		                    if (o.Title == $scope.userFactoryCode) {
		                        ll = o.Language;
		                    }
		                });
		                localStorageItem("HBS.langDefault", ll);
		            }
		            checkLangPackUpdate(function () {
		                switchingLanguagePack(ll);
		            });

		            $('#ddlLanguage').data("kendoDropDownList").value(ll);

		            deferred.resolve();
		            //return true;

		        }, function (reason) {
		            deferred.reject(reason);
		        });

		        return deferred.promise();
		    }

		    //获取current factory item
		    self.getFactoryCode = function () {
		        var deferred = $.Deferred();
		        //var def_user = self.spSrv.getUsername();
		        //var def_fc = self.spSrv.factoryCodeDataSource();

		        $.when(
						sp_ajax_get("/web/CurrentUser"),
						sp_ajax_get("/site/RootWeb/lists/getbytitle('Factory')/items"))
					.done(function (user, fc_list) {
					    //var userName = user[0].d.Title;
					    //var code = ((/\/[a-zA-Z]+\//.exec(userName))[0]).replace(/\//g, '');
					    //added by Zack 20170524 Get title issue
					    //debugger;
					    var userProfileOfficeLocation = getUserProfileOfficeLocation(user[0].d.LoginName);
					    if (getUserProfileOfficeLocation == null || userProfileOfficeLocation.length == 0)
					    {
					        console.log("UserProfile's office location is null, please contact admin!");
					        //console.log(arguments);
					        deferred.reject("UserProfile's office location is null, please contact admin!");
					        return false;
					    }

					    code = getUserRealFactory(userProfileOfficeLocation); //getUserRealFactory(code);

					    us.some(fc_list[0].d.results, function (val) {
					        if (val.Title == code) {
					            deferred.resolve(val);
					            return true;
					        }
                            //else 这个factory code下没有dorm功能？
					    });
					})
					.fail(function () {
					    console.log("get Factory error:");
					    console.log(arguments);
					    deferred.reject();
					});
		        return deferred.promise();
		    }

		    self.init = function (factoryCodeId) {
		        _Get_Dorm_Hotel_List(factoryCodeId);
		    };
		    //--------------------------
		    // Get Dorm List
		    //-------------------------
		    //self.getDormList = function () {
		    //    var deferred = $.Deferred();
		    //    _dorm_hotel_coll_defer
			//		.done(function (res) {
			//		    deferred.resolve(us.filter(res, function (d) {
			//		        return d.IsDorm;
			//		    }));
			//		})
			//		.fail(function (msg) {
			//		    deferred.reject(msg);
			//		});
		    //    return deferred.promise();
		    //}
		    self.getDormList = function (currentFactoryCodeId) {
		        var deferred = $.Deferred();
		        sp_ajax_get("/web/lists/getbytitle('" + Dorm_Hotel_List + "')/items?$filter=FactoryCode/Id eq " + currentFactoryCodeId).then(function (response) {
		            var results = response.d.results;
		            deferred.resolve(us.filter(results, function (d) {
		                return d.IsDorm;
		            }));
		        }, function () {
		            deferred.reject(arguments);
		        });
		        return deferred.promise();
		    }
			//		.done(function (res) {
			//		    deferred.resolve(us.filter(res, function (d) {
			//		        return d.IsDorm;
			//		    }));
			//		})
			//		.fail(function (msg) {
			//		    deferred.reject(msg);
			//		});
		    //    return deferred.promise();

		    //}

		    //--------------------------
		    // Get Hotel List
		    //-------------------------
		    //self.getHotelList = function (currentFactoryCodeId) {
		    //    var deferred = $.Deferred();
		    //    _Get_Dorm_Hotel_List(currentFactoryCodeId)
			//		.done(function (res) {
			//		    deferred.resolve(us.filter(res, function (d) {
			//		        return !d.IsDorm;
			//		    }));
			//		})
			//		.fail(function (msg) {
			//		    deferred.reject(msg);
			//		});
		    //    return deferred.promise();
		    //}
		    self.getHotelList = function (currentFactoryCodeId) {
		        var deferred = $.Deferred();
		        sp_ajax_get("/web/lists/getbytitle('" + Dorm_Hotel_List + "')/items?$filter=FactoryCode/Id eq " + currentFactoryCodeId).then(function (response) {
		            var results = response.d.results;
		            deferred.resolve(us.filter(results, function (d) {
		                return !d.IsDorm;
		            }));
		        }, function () {
		            deferred.reject(arguments);
		        });
		        return deferred.promise();
		    }

		    //--------------------------
		    // Get Dorm room List
		    //-------------------------
		    self.getRoomsByDorm = function (code) {
		        //if (code == undefined || code == null) return;
		        var deferred = $.Deferred();
		        baseSvc.spListItemRead(hostweburl, appweburl, "getbytitle('" + Dorm_Room_List + "')/items", "$filter=DormCodeId/Id eq " + code + "&").then(function (response) {

		            var jsonObject = JSON.parse(response.body);

		            var results = jsonObject.d.results;

		            deferred.resolve(results);
		        }, function (reason) {
		            deferred.reject("get Dorm room List Failed:" + reason);
		        });
		        return deferred.promise();
		    }

		    //--------------------------
		    // Get Dorm Alloc List By Period
		    //-------------------------
		    self.getDormAllocStateByPeriod = function (startDate, endDate, dormCode) {
		        var filter = "$filter=DormCodeId eq '" + dormCode + "' and ";
		        filter += "Date ge '" + $filter('date')(startDate, "yyyy-MM-dd") + "' and ";
		        filter += "Date le '" + $filter('date')(endDate, "yyyy-MM-dd") + "' and ";
		        filter += "CancelFlag eq 0";
		        filter += "&$top=20000&$select=*,BookingDetailsID/SendEmailFlag2&$expand=BookingDetailsID";
		        var deferred = $.Deferred();
		        baseSvc.spListItemRead(hostweburl, appweburl, "getbytitle('" + Alloc_List + "')/items", filter + "&").then(function (response) {

		            var jsonObject = JSON.parse(response.body);

		            var results = jsonObject.d.results;

		            var obj = {};
		            us.each(results, function (val) {
		                if (!obj[val.DormNumberId]) obj[val.DormNumberId] = {};
		                obj[val.DormNumberId][$filter('date')(val.Date, "yyyyMMdd")] = val;
		            });
		            deferred.resolve(obj);
		        }, function (reason) {
		            deferred.reject("get Dorm Alloc State By Period Failed:" + reason);
		        });
		        return deferred.promise();
		    };
		    //--------------------------
		    // Get Hetel Alloc List By Period
		    //-------------------------
		    self.getHotelAllocStateByPeriod = function (startDate, endDate, hotelId) {
		        var filter = "$filter=HotelCodeId eq '" + hotelId + "' and ";
		        filter += "Date ge '" + $filter('date')(startDate, "yyyy-MM-dd") + "' and ";
		        filter += "Date le '" + $filter('date')(endDate, "yyyy-MM-dd") + "'";
		        filter += " and CancelFlag eq 0 ";
		        filter += "&$top=20000&$select=*,BookingDetailsID/SendEmailFlag2&$expand=BookingDetailsID";
		        var deferred = $.Deferred();
		        baseSvc.spListItemRead(hostweburl, appweburl, "getbytitle('" + Alloc_List + "')/items", filter + "&").then(function (response) {

		            var jsonObject = JSON.parse(response.body);

		            var results = jsonObject.d.results;

		            var obj = {};
		            us.each(results, function (val) {
		                var dataKey = $filter('date')(val.Date, "yyyyMMdd");
		                if (!obj[dataKey]) obj[dataKey] = [];
		                obj[dataKey].push(val);
		            });

		            deferred.resolve(obj);
		        }, function (reason) {
		            deferred.reject("get Dorm Alloc State By Period Failed:" + reason);
		        });
		        return deferred.promise();
		    };

		    //--------------------------
		    // Get Dorm Alloc List By Date
		    //-------------------------
		    self.getDormAllocStateByDate = function (currDate, currentFactoryCodeId) {
		        var filter = "$filter=FactoryCode/Id eq " + currentFactoryCodeId + " and ";
		        filter += "(HotelCodeId eq null or HotelCodeId eq 0) and ";
		        filter += "(DormCodeId eq null or DormCodeId eq 0) and ";
		        filter += "Date eq '" + $filter('date')(currDate, "yyyy-MM-dd") + "'";
		        filter += " and CancelFlag eq 0 ";
		        filter += "&$select=*,BookingDetailsID/DepartmentName,BookingDetailsID/StaffTitle,BookingDetailsID/Remarks";
		        filter += ",BookingDetailsID/CheckinDate,BookingDetailsID/CheckoutDate";
		        filter += ",BookingDetailsID/RemainDays";
		        filter += "&$top=20000&$expand=BookingDetailsID";
		        var deferred = $.Deferred();
		        baseSvc.spListItemRead(hostweburl, appweburl, "getbytitle('" + Alloc_List + "')/items", filter + "&").then(function (response) {

		            var jsonObject = JSON.parse(response.body);

		            var results = jsonObject.d.results;

		            deferred.resolve(results);
		        }, function (reason) {
		            deferred.reject("get Dorm Alloc State By Date Failed:" + reason);
		        });
		        return deferred.promise();
		    };

		    //--------------------------
		    // Get DormAllocation  By ID
		    //-------------------------
		    self.getDormAllocationByFilter = function (filter) {
		        //var filter = "$filter=ID eq " + id;
		        var deferred = $.Deferred();
		        baseSvc.spListItemRead(hostweburl, appweburl, "getbytitle('DormAllocation')/items", filter + "&").then(function (response) {

		            var jsonObject = JSON.parse(response.body);

		            var results = jsonObject.d.results;

		            deferred.resolve(results);
		        }, function (reason) {
		            deferred.reject("Get DormAllocation By ID Failed:" + reason);
		        });
		        return deferred.promise();
		    };

		    //--------------------------
		    // Get BookingDetails By ID
		    //-------------------------
		    self.getBookingDetailsByFilter = function (filter) {
		        //var filter = "$filter=ID eq " + id;
		        var deferred = $.Deferred();
		        //baseSvc.spListItemRead(hostweburl, appweburl, "getbytitle('" + Booking_Detail_List + "')/items", filter + "&$select=*,OfficeName/Title,ReferenceNumber/StatusForDetailsUsed&$expand=OfficeName,ReferenceNumber").then(function (response) {

		        //    var jsonObject = JSON.parse(response.body);

		        //    var results = jsonObject.d.results;

		        //    deferred.resolve(results);
		        //}, function (reason) {
		        //    deferred.reject("Get BookingDetails By ID Failed:" + reason);
		        //});
		        var url = appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + Booking_Detail_List + "')/items?" + filter + "&$select=*,OfficeName/Title,ReferenceNumber/StatusForDetailsUsed&$expand=OfficeName,ReferenceNumber&@target='" + hostweburl + "'";
		        $.ajax({
		            url: url,
		            headers: {
		                "accept": "application/json; odata=verbose",
		                "content-type": "application/json;odata=verbose",
		                "X-RequestDigest": $("#__REQUESTDIGEST").val()
		            },
		            type: 'GET',
		            contentType: "application/json;odata=verbose"
		        }).then(function (data) {
		            deferred.resolve(data.d.results);
		        }, function (reason) {
		            deferred.reject(reason);
		        });

		        return deferred.promise();
		    };

		    //--------------------------
		    // Get Dorm Alloc List By Booking Detail ID(orderby date)
		    //-------------------------
		    self.getDormAllocStateByBDId = function (bdId) {
		        var filter = "$filter=BookingDetailsID/Id eq '" + bdId + "'";
		        filter += " and CancelFlag eq 0 ";
		        filter += "and (HotelCodeId eq null or HotelCodeId eq 0) and ";
		        filter += "(DormCodeId eq null or DormCodeId eq 0) ";
		        filter += "&$select=*,DormCode/PhoneNumber&$expand=DormCode";
		        filter += "&$top=20000&$orderby=Date";
		        var deferred = $.Deferred();
		        baseSvc.spListItemRead(hostweburl, appweburl, "getbytitle('" + Alloc_List + "')/items", filter + "&").then(function (response) {
		            var jsonObject = JSON.parse(response.body);
		            var results = jsonObject.d.results;
		            deferred.resolve(results);
		        }, function (reason) {
		            deferred.reject("get Dorm Alloc State By Booking Detail ID:" + reason);
		        });
		        return deferred.promise();
		    };

		    //--------------------------
		    // Get Dorm Alloc AllState List By Booking Detail ID(orderby date)
		    //-------------------------
		    self.getDormAllocAllStateByBDId = function (bdId) {
		        var filter = "$filter=BookingDetailsID/Id eq '" + bdId + "'";
		        filter += " and CancelFlag eq 0 ";
		        filter += "&$select=*,DormCode/PhoneNumber&$expand=DormCode";
		        filter += "&$top=20000&$orderby=Date";
		        var deferred = $.Deferred();
		        baseSvc.spListItemRead(hostweburl, appweburl, "getbytitle('" + Alloc_List + "')/items", filter + "&").then(function (response) {
		            var jsonObject = JSON.parse(response.body);
		            var results = jsonObject.d.results;
		            deferred.resolve(results);
		        }, function (reason) {
		            deferred.reject("get Dorm Alloc State By Booking Detail ID:" + reason);
		        });
		        return deferred.promise();
		    };

		    //--------------------------
		    // Get Unprocessed Guest List
		    //-------------------------
		    self.getUnprocessedGuestList = function (start, end, currentFactoryCodeId) {
		        var deferred = $.Deferred();

		        var filter = "$filter=FactoryCode2/Id eq " + currentFactoryCodeId;
		        filter += " and ((CheckinDate ge '" + $filter('date')(start, "yyyy-MM-dd") + "'";
		        //var filter = "$filter=((CheckinDate ge '" + $filter('date')(start, "yyyy-MM-dd") + "'";
		        filter += " and CheckinDate le '" + $filter('date')(end, "yyyy-MM-dd") + "')";
		        filter += " or (CheckoutDate gt '" + $filter('date')(start, "yyyy-MM-dd") + "'";
		        filter += " and CheckoutDate le '" + $filter('date')(end, "yyyy-MM-dd") + "')";
		        filter += " or (CheckinDate le '" + $filter('date')(start, "yyyy-MM-dd") + "'";
		        filter += " and CheckoutDate ge '" + $filter('date')(end, "yyyy-MM-dd") + "'))";
		        filter += " and RemainDays gt 0 and IsDorm eq 1 and (CancelFlag eq 0 or CancelFlag eq null)";
		        filter += " and (ReferenceNumber/StatusForDetailsUsed eq 'Received' or ReferenceNumber/StatusForDetailsUsed eq 'Processed') ";
		        var url = appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + Booking_Detail_List + "')/items?" + filter + "&$select=*,OfficeName/Title,ReferenceNumber/StatusForDetailsUsed&$expand=OfficeName,ReferenceNumber&@target='" + hostweburl + "'";
		        $.ajax({
		            url: url,
		            headers: {
		                "accept": "application/json; odata=verbose",
		                "content-type": "application/json;odata=verbose",
		                "X-RequestDigest": $("#__REQUESTDIGEST").val()
		            },
		            type: 'GET',
		            contentType: "application/json;odata=verbose"
		        }).then(function (data) {
		            deferred.resolve(data.d);
		        }, function (reason) {
		            deferred.reject(reason);
		        });
		        return deferred.promise();
		    };

		    //--------------------------
		    // Get Guest file
		    //-------------------------
		    //Zack 20180524:show guest file--------------
		    self.getGuestFileByUserId = function (userID) {

		        var deferred = $.Deferred();

		        var filter = "$filter=GuestNameId/Id eq " + userID;
		        var url = appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + "GuestFile" + "')/items?" + filter + "&$select=*&@target='" + hostweburl + "'";
		        $.ajax({
		            url: url,
		            headers: {
		                "accept": "application/json; odata=verbose",
		                "content-type": "application/json;odata=verbose",
		                "X-RequestDigest": $("#__REQUESTDIGEST").val()
		            },
		            type: 'GET',
		            async: false,
		            contentType: "application/json;odata=verbose"
		        }).then(function (data) {
		            deferred.resolve(data.d);
		        }, function (reason) {
		            deferred.reject(reason);
		        });
		        return deferred.promise();

		        //return "test by zack, user id is " + userID;
		    };
            //-------------------

		    // 获取分配房间完成的访客
		    self.getCompletedGuest = function (start, end, currentFactoryCodeId) {
		        var deferred = $.Deferred();
		        var filter = "$filter=FactoryCode2/Id eq " + currentFactoryCodeId;
		        filter += " and ((CheckinDate ge '" + $filter('date')(start, "yyyy-MM-dd") + "'";
		        filter += " and CheckinDate le '" + $filter('date')(end, "yyyy-MM-dd") + "')";
		        filter += " or (CheckoutDate gt '" + $filter('date')(start, "yyyy-MM-dd") + "'";
		        filter += " and CheckoutDate le '" + $filter('date')(end, "yyyy-MM-dd") + "')";
		        filter += " or (CheckinDate le '" + $filter('date')(start, "yyyy-MM-dd") + "'";
		        filter += " and CheckoutDate ge '" + $filter('date')(end, "yyyy-MM-dd") + "'))";
		        filter += " and RemainDays eq 0 and IsDorm eq 1 and (CancelFlag eq 0 or CancelFlag eq null) and SendEmailFlag eq 0";
		        var url = appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + Booking_Detail_List + "')/items?" + filter + "&$select=*,ReferenceNumber/StatusForDetailsUsed,OfficeName/Title&$expand=ReferenceNumber,OfficeName&@target='" + hostweburl + "'";
		        $.ajax({
		            url: url,
		            headers: {
		                "accept": "application/json; odata=verbose",
		                "content-type": "application/json;odata=verbose",
		                "X-RequestDigest": $("#__REQUESTDIGEST").val()
		            },
		            type: 'GET',
		            contentType: "application/json;odata=verbose"
		        }).then(function (data) {
		            deferred.resolve(data.d);
		        }, function (reason) {
		            deferred.reject(reason);
		        });
		        return deferred.promise();
		    }

		    //--------------------------
		    // Get booking  by id
		    //-------------------------
		    self.getBookingById = function (id) {
		        var deferred = $.Deferred();
		        baseSvc.spListItemRead(hostweburl, appweburl, "getbytitle('Booking')/items(" + id + ")").then(function (response) {
		            var jsonObject = JSON.parse(response.body);
		            var res = jsonObject.d;
		            deferred.resolve(res);
		        }, function (reason) {
		            deferred.reject("get Booking by id Failed:" + reason);
		        });
		        return deferred.promise();
		    };

		    //--------------------------
		    // Get booking detail by id
		    //-------------------------
		    self.getBookDetailById = function (bdId) {
		        var deferred = $.Deferred();
		        baseSvc.spListItemRead(hostweburl, appweburl, "getbytitle('" + Booking_Detail_List + "')/items(" + bdId + ")").then(function (response) {

		            var jsonObject = JSON.parse(response.body);

		            var res = jsonObject.d;

		            deferred.resolve(res);
		        }, function (reason) {
		            deferred.reject("get Booking Details by id Failed:" + reason);
		        });
		        return deferred.promise();
		    };

		    self.isAllocated = function (bdId, daId, currDate) {
		        var res = false;
		        var url = appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + Alloc_List + "')/items?$filter=CancelFlag eq 0 and DormCodeId eq " + bdId + " and DormNumberId eq " + daId + " and Date eq '" + $filter('date')(currDate, "yyyy-MM-dd") + "'&$top=20000&$select=Id&@target='" + hostweburl + "'";
		        $.ajax({
		            url: url,
		            headers: {
		                "accept": "application/json; odata=verbose",
		                "content-type": "application/json;odata=verbose",
		                "X-RequestDigest": $("#__REQUESTDIGEST").val()
		            },
		            type: 'GET',
		            async: false,
		            contentType: "application/json;odata=verbose"
		        }).done(function (data) {
		            res = data.d.results.length > 0;
		        });
		        return res;
		    };

		    //--------------------------
		    // 统计未分配房间的人数
		    //-------------------------
		    self.countUnprocessedGuest = function (start, end, currentFactoryCodeId, num, nextUrl, deferred) {
		        var deferred = deferred ? deferred : $.Deferred();
		        var count = num ? num : 0;
		        var url = nextUrl;
		        if (!nextUrl) {
		            var filter = "$filter=FactoryCode2/Id eq " + currentFactoryCodeId;
		            //var filter = "$filter=((CheckinDate ge '" + $filter('date')(start, "yyyy-MM-dd") + "'";
		            filter += " and ((CheckinDate ge '" + $filter('date')(start, "yyyy-MM-dd") + "'";
		            filter += " and CheckinDate le '" + $filter('date')(end, "yyyy-MM-dd") + "')";
		            filter += " or (CheckoutDate gt '" + $filter('date')(start, "yyyy-MM-dd") + "'";
		            filter += " and CheckoutDate le '" + $filter('date')(end, "yyyy-MM-dd") + "')";
		            filter += " or (CheckinDate le '" + $filter('date')(start, "yyyy-MM-dd") + "'";
		            filter += " and CheckoutDate ge '" + $filter('date')(end, "yyyy-MM-dd") + "'))";
		            filter += " and RemainDays gt 0 and IsDorm eq 1 and (CancelFlag eq 0 or CancelFlag eq null)";
		            filter += " and (ReferenceNumber/StatusForDetailsUsed eq 'Received' or ReferenceNumber/StatusForDetailsUsed eq 'Processed')";
		            url = appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + Booking_Detail_List + "')/items?" + filter + "&$select=Id,ReferenceNumber/StatusForDetailsUsed&$expand=ReferenceNumber&@target='" + hostweburl + "'";
		        }
		        $.ajax({
		            url: url,
		            headers: {
		                "accept": "application/json; odata=verbose",
		                "content-type": "application/json;odata=verbose",
		                "X-RequestDigest": $("#__REQUESTDIGEST").val()
		            },
		            type: 'GET',
		            contentType: "application/json;odata=verbose"
		        }).then(function (data) {
		            var res = data.d;
		            if (res.__next) {
		                self.countUnprocessedGuest(null, null, null, 
							count + res.results.length,
							res.__next,
							deferred);
		            } else {
		                deferred.resolve(count + res.results.length);
		            }
		        }, function (reason) {
		            deferred.reject(reason);
		        });
		        return deferred.promise();
		    }

		    // 获取邮件历史纪录
		    self.getEmailLogList = function (start, end, currentFactoryCodeId) {
		        var deferred = $.Deferred();
		        var before2Month = new Date();
		        before2Month.setMonth(before2Month.getMonth() - 2);
		        var filter = "$filter=FactoryCode2/Id eq " + currentFactoryCodeId;
		        filter += " and ((CheckinDate ge '" + $filter('date')(start, "yyyy-MM-dd") + "'";
		        filter += " and CheckinDate le '" + $filter('date')(end, "yyyy-MM-dd") + "')";
		        filter += " or (CheckoutDate gt '" + $filter('date')(start, "yyyy-MM-dd") + "'";
		        filter += " and CheckoutDate le '" + $filter('date')(end, "yyyy-MM-dd") + "')";
		        filter += " or (CheckinDate le '" + $filter('date')(start, "yyyy-MM-dd") + "'";
		        filter += " and CheckoutDate ge '" + $filter('date')(end, "yyyy-MM-dd") + "'))";
		        filter += " and Latest_x0020_Email ge '" + $filter('date')(before2Month, "yyyy-MM-dd") + "'";
		        filter += " and RemainDays eq 0 and IsDorm eq 1 and (CancelFlag eq 0 or CancelFlag eq null) and SendEmailFlag eq 1";
		        var url = appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + Booking_Detail_List + "')/items?" + filter + "&$select=*,ReferenceNumber/Title,OfficeName/Title&$expand=ReferenceNumber,OfficeName&@target='" + hostweburl + "'";
		        $.ajax({
		            url: url,
		            headers: {
		                "accept": "application/json; odata=verbose",
		                "content-type": "application/json;odata=verbose",
		                "X-RequestDigest": $("#__REQUESTDIGEST").val()
		            },
		            type: 'GET',
		            contentType: "application/json;odata=verbose"
		        }).then(function (data) {
		            deferred.resolve(data.d);
		        }, function (reason) {
		            deferred.reject(reason);
		        });
		        return deferred.promise();
		    }

		    // 获取酒店信息
		    self.getHotelInfoById = function (hId) {
		        var res = false;
		        var url = appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + Dorm_Hotel_List + "')/items(" + hId + ")?@target='" + hostweburl + "'";
		        $.ajax({
		            url: url,
		            headers: {
		                "accept": "application/json; odata=verbose",
		                "content-type": "application/json;odata=verbose",
		                "X-RequestDigest": $("#__REQUESTDIGEST").val()
		            },
		            type: 'GET',
		            async: false,
		            contentType: "application/json;odata=verbose"
		        }).done(function (data) {
		            res = data.d;
		        });
		        return res;
		    }

		    // 获取酒店信息
		    self.getHotelAttachmentFilesById = function (hId) {
		        var res = false;
		        var url = appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + Dorm_Hotel_List + "')/items(" + hId + ")/AttachmentFiles?@target='" + hostweburl + "'";
		        $.ajax({
		            url: url,
		            headers: {
		                "accept": "application/json; odata=verbose",
		                "content-type": "application/json;odata=verbose",
		                "X-RequestDigest": $("#__REQUESTDIGEST").val()
		            },
		            type: 'GET',
		            async: false,
		            contentType: "application/json;odata=verbose"
		        }).done(function (data) {
		            res = data.d;
		        });
		        return res;
		    }

		    // 获取房间信息
		    self.getDormInfoById = function (dId, rId) {
		        var res = false;
		        var filter = "$filter=Id eq " + rId + "&$select=*,DormCode/Address,DormCode/Title&$expand=DormCode";
		        var url = appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + Dorm_Room_List + "')/items?" + filter + "&@target='" + hostweburl + "'";
		        $.ajax({
		            url: url,
		            headers: {
		                "accept": "application/json; odata=verbose",
		                "content-type": "application/json;odata=verbose",
		                "X-RequestDigest": $("#__REQUESTDIGEST").val()
		            },
		            type: 'GET',
		            async: false,
		            contentType: "application/json;odata=verbose"
		        }).done(function (data) {
		            res = data.d.results[0];
		        });
		        return res;
		    }

		    // 检查同一张单中的人员是否都分配房间，refId ： Booking Id
		    self.checkRefStatus = function (refId) {
		        var deferred = $.Deferred();
		        // 查询同一张单中未分配房间的数据
		        sp_ajax_get("/web/lists/getbytitle('" + Alloc_List + "')/items?$filter=ReferenceNumber/Id eq " + refId + " and (HotelCodeId eq null or HotelCodeId eq '') and (DormCodeId eq null or DormCodeId eq '') and CancelFlag eq 0 ").then(function (res) {
		            deferred.resolve(res.d.results.length > 0);
		        }, function () {
		            deferred.reject(arguments);
		        });
		        return deferred.promise();
		    }

		    // 更新Booking中的状态，refId ： Booking Id
		    self.updateBookingStatus = function (refId, status) {
		        var deferred = $.Deferred();
		        var data = {
		            __metadata: {
		                "type": "SP.Data.BookingListItem"
		            },
		            Status: status
		        };
		        baseSvc.spListItemEdit(hostweburl, appweburl, data, "getbytitle('Booking')/items(" + refId + ")").then(function (response) {
		            deferred.resolve(response);
		        }, function (reason) {
		            deferred.reject(reason);
		        });
		        return deferred.promise();
		    }

		    //--------------------------
		    // Update Dorm Alloc
		    //-------------------------
		    self.updateDormAlloc = function (id, data) {
		        var deferred = $.Deferred();
		        //Set List Item Type
		        data.__metadata = {
		            "type": "SP.Data.DormAllocationListItem"
		        };
		        $.ajax({
		            url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + Alloc_List + "')/items('" + id + "')?@target='" + hostweburl + "'",
		            headers: {
		                "accept": "application/json; odata=verbose",
		                "content-type": "application/json;odata=verbose",
		                "X-RequestDigest": $("#__REQUESTDIGEST").val(),
		                'IF-MATCH': '*',
		                'X-HTTP-Method': 'PATCH'
		            },
		            data: JSON.stringify(data),
		            type: 'POST',
		            async: false,
		            contentType: "application/json;odata=verbose"
		        }).then(function (data) {
		            deferred.resolve(data);
		        }, function (reason) {
		            deferred.reject(reason);
		        });

		        return deferred.promise();
		    };

		    //--------------------------
		    // Update Booking Detail State
		    //-------------------------
		    self.updateBookingDetail = function (id, data) {
		        var deferred = $.Deferred();
		        //Set List Item Type
		        data.__metadata = {
		            "type": "SP.Data.BookingDetailsListItem"
		        };
		        $.ajax({
		            url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + Booking_Detail_List + "')/items('" + id + "')?@target='" + hostweburl + "'",
		            headers: {
		                "accept": "application/json; odata=verbose",
		                "content-type": "application/json;odata=verbose",
		                "X-RequestDigest": $("#__REQUESTDIGEST").val(),
		                'IF-MATCH': '*',
		                'X-HTTP-Method': 'PATCH'
		            },
		            data: JSON.stringify(data),
		            type: 'POST',
		            async: false,
		            contentType: "application/json;odata=verbose"
		        }).then(function (data) {
		            deferred.resolve(data);
		        }, function (reason) {
		            deferred.reject(reason);
		        });

		        return deferred.promise();
		    };

		}]);
})();