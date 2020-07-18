(function () {
    String.prototype.format = function (args) {
        var result = this;
        if (arguments.length > 0) {
            if (arguments.length == 1 && typeof (args) == "object") {
                for (var key in args) {
                    if (args[key] != undefined) {
                        var reg = new RegExp("({" + key + "})", "g");
                        result = result.replace(reg, args[key]);
                    }
                }
            } else {
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] != undefined) {
                        //var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题，谢谢何以笙箫的指出
                        var reg = new RegExp("({)" + i + "(})", "g");
                        result = result.replace(reg, arguments[i]);
                    }
                }
            }
        }
        return result;
    }

    // top component for dorm landing page
    angular.module('spsmodule')
		.controller('dormLandingPage', ['$scope', '$filter', '$window', 'dormLandingPageSrv',
			function ($scope, $filter, $window, dataSrv) {
			    var us = underscore;
			    var factoryItem = null;
			    var unprocessPageLink = [];

			    $scope.unAllocDormUser = [];
			    $scope.currentFactoryCodeId;
			    $scope.isSelectUser = false;
			    $scope.isHasData = false;
			    $scope.emailData = [];
			    $scope.HotelAttachmentFiles = {};
			    dataSrv.setLanguage().done(function () {
			        //必须要setLanguage后才能alert
			        dataSrv.getFactoryCode().done(function (fc) {
			            //debugger;
			            factoryItem = fc;
			            $scope.currentFactoryCodeId = fc.Id;
			            // initial data
			            //dataSrv.init(fc.Id);
			            //added by Zack 20170524 Get title issue 
			            $scope.adminAllFactoryCode.bindSource();

			            //---------
			            //setTimeout($scope.updateUnproCount, 0); //move to adminAllFactoryCode change event
			        }).fail(function (err1) {
			            alert(getLang("UserProfileOfficeLocationIsNull"));
			        });
			    });

			    // 访客房间都分配好后，生成住宿信息
			    $scope.generateEmailInfo = function (bdId) {
			        var deferred = $.Deferred();
			        $.when(dataSrv.getBookDetailById(bdId), dataSrv.getDormAllocAllStateByBDId(bdId))
						.done(function (bdItem, allocItems) {
						    var isSomeOneNotAlloc = us.some(allocItems, function (val) {
						        return (!/\d+/.test(val.HotelCodeId) && !/\d+/.test(val.DormCodeId));
						    });
						    if (!isSomeOneNotAlloc) {
						        var allocInfo = [];
						        var isFirst = true;
						        var curr = null; // { start: null, end: null, isDorm: null, dormCode: null, dormNum: null, hotelCode: null};
						        us.each(allocItems, function (val) {
						            //curr = { start: val.Date, end: val.Date, isDorm: us.isNumber(val.DormCodeId), dormCode: val.DormCodeId, dormNum: val.DormNumberId, hotelCode: val.HotelCodeId };
						            //curr.ArrivalTime = bdItem.DormArrivalTime;
						            //allocInfo.push(curr);
						            if (curr == null) {
						                curr = {
						                    start: val.Date,
						                    end: val.Date,
						                    isDorm: us.isNumber(val.DormCodeId),
						                    dormCode: val.DormCodeId,
						                    dormNum: val.DormNumberId,
						                    hotelCode: val.HotelCodeId,
						                    hotelphoneNumber: val.DormCode.PhoneNumber
						                };
						            } else {
						                if (
											(curr.isDorm && curr.dormCode == val.DormCodeId && curr.dormNum == val.DormNumberId) ||
											(!curr.isDorm && curr.hotelCode == val.HotelCodeId)) {
						                    curr.end = val.Date;
						                } else {
						                    //bug: 对 end进行加1
						                    curr.end = new Date(new Date(curr.end).getTime() + 1 * 24 * 60 * 60 * 1000).toDateString();
						                    allocInfo.push(curr);
						                    curr = {
						                        start: val.Date,
						                        end: val.Date,
						                        isDorm: us.isNumber(val.DormCodeId),
						                        dormCode: val.DormCodeId,
						                        dormNum: val.DormNumberId,
						                        hotelCode: val.HotelCodeId,
						                        hotelphoneNumber: val.DormCode.PhoneNumber
						                    };
						                }
						            }
						            if (isFirst) {
						                isFirst = false;
						            }
						            curr.ArrivalTime = bdItem.DormArrivalTime;
						        });

						        //bug: 对 end进行加1
						        curr.end = new Date(new Date(curr.end).getTime() + 1 * 24 * 60 * 60 * 1000).toDateString();
						        allocInfo.push(curr);

						        // 生成html
						        function buildEnDate(date) {
						            return $filter('date')(new Date(date), "M/d/yyyy");
						        }

						        function buildCnDate(date) {
						            return $filter('date')(new Date(date), "M月d日");
						        }

						        function buildCnWeek(date) {
						            var str = "星期";
						            switch ((new Date(date)).getDay()) {
						                case 0:
						                    str += "天";
						                    break;
						                case 1:
						                    str += "一";
						                    break;
						                case 2:
						                    str += "二";
						                    break;
						                case 3:
						                    str += "三";
						                    break;
						                case 4:
						                    str += "四";
						                    break;
						                case 5:
						                    str += "五";
						                    break;
						                case 6:
						                    str += "六";
						                    break;
						                default:
						                    break;
						            }
						            return str;
						        }

						        var data = [];
						        us.each(allocInfo, function (aInfo) {
						            var location = "";
						            var address = "";
						            var hotelCode = "";
						            var hotelPhone = aInfo.hotelphoneNumber == null ? "" : aInfo.hotelphoneNumber;
						            var attachmentFiles = "";
						            if (aInfo.isDorm && aInfo.dormCode != 0) {
						                var dormInfo = dataSrv.getDormInfoById(aInfo.dormCode, aInfo.dormNum); //DormCodeId
						                location = dormInfo.DormCode.Title + " " + dormInfo.Title;
						                address = dormInfo.DormCode.Address;
						                hotelCode = aInfo.dormCode;
						            } else {
						                var hotelInfo = dataSrv.getHotelInfoById(aInfo.hotelCode);
						                location = hotelInfo.Title;
						                address = hotelInfo.Address;
						                hotelCode = aInfo.hotelCode;
						            }
						            if ($scope.HotelAttachmentFiles[hotelCode] == null || $scope.HotelAttachmentFiles[hotelCode] == "") {
						                var queryUrl = dataSrv.getHotelAttachmentFilesById(hotelCode);
						                if (queryUrl != null && queryUrl.results.length > 0) {
						                    $scope.HotelAttachmentFiles[hotelCode] = "https://esquel.sharepoint.com" + queryUrl.results[0].ServerRelativeUrl;
						                    attachmentFiles = "https://esquel.sharepoint.com" + queryUrl.results[0].ServerRelativeUrl;
						                }
						            } else {
						                attachmentFiles = $scope.HotelAttachmentFiles[hotelCode];
						            }
						            var item = {
						                'CheckInDate': buildEnDate(aInfo.start) + '<br />' + buildCnDate(aInfo.start) + "(" + buildCnWeek(aInfo.start) + ")",
						                'CheckOutDate': buildEnDate(aInfo.end) + '<br />' + buildCnDate(aInfo.end) + "(" + buildCnWeek(aInfo.end) + ")",
						                'ArrivalTime': aInfo.ArrivalTime + '<br />' + buildCnWeek(aInfo.start),
						                'Location': location,
						                'Address': address,
						                'hotelPhone': hotelPhone,
						                'AttachmentFiles': attachmentFiles
						            }
						            data.push(item);
						        });
						        var tbody = "";
						        us.each(data, function (item) {
						            var tr = "<tr>";
						            tr += "<td style=' border-width: 1px; padding: 4px; border-style: solid; border-color: black; text-align: left; vertical-align: middle'>" + (bdItem.Guest == true ? bdItem.GuestName : bdItem.OfficeNameText.split('/')[0]) + "</td>";
						            tr += "<td style=' border-width: 1px; padding: 4px; border-style: solid; border-color: black; text-align: left; vertical-align: middle'>" + item.CheckInDate + "</td>";
						            tr += "<td style=' border-width: 1px; padding: 4px; border-style: solid; border-color: black; text-align: left; vertical-align: middle'>" + item.CheckOutDate + "</td>";
						            tr += "<td style=' border-width: 1px; padding: 4px; border-style: solid; border-color: black; text-align: left; vertical-align: middle'>" + item.ArrivalTime + "</td>";
						            tr += "<td style=' border-width: 1px; padding: 4px; border-style: solid; border-color: black; text-align: left; vertical-align: middle'>" + item.Location + "</td>";
						            tr += "<td style=' border-width: 1px; padding: 4px; border-style: solid; border-color: black; text-align: left; vertical-align: middle'>" + item.Address + "</td>";
						            tr += "<td style=' border-width: 1px; padding: 4px; border-style: solid; border-color: black; text-align: left; vertical-align: middle'>" + item.hotelPhone + "</td>";
						            tr += "<td style=' border-width: 1px; padding: 4px; border-style: solid; border-color: black; text-align: left; vertical-align: middle'><a style='cursor: pointer;' href='" + item.AttachmentFiles + "'>View Room Policy<br />查看入住须知</a></td>";
						            tr += "</tr>";
						            tbody += tr;
						        });
						        $("#emailTempData").html(tbody);
						        //var html = $("#emalTemp");
						        // update email content
						        dataSrv.updateBookingDetail(bdId, {
						            'Email_x0020_Content': $.trim($("#emalTemp").html().toString()),
						            'Alloc_x0020_Flag': true
						        });
						    }
						    deferred.resolve();
						})
						.fail(function () {
						    alert("error");
						    deferred.reject();
						});
			        return deferred.promise();
			    }

			    // 更新邮件内容，并启动发送邮件
			    $scope.updateEmail = function () {
			        var loadingDlg = SP.UI.ModalDialog.showWaitScreenWithNoClose("Loading...", "Please wait while data is retrieved...");
			        dataSrv.getCompletedGuest(
						$scope.periodSelect.dateStart,
						$scope.periodSelect.dateEnd, $scope.currentFactoryCodeId).done(function (data) {
						    var _defers = [];
						    us.each(data.results, function (bdItem) {
						        var def = null;
						        if (!bdItem.Alloc_x0020_Flag && bdItem.ReferenceNumber.StatusForDetailsUsed == 'Processed') {
						            def = $scope.generateEmailInfo(bdItem.Id);
						            _defers.push(def);
						        }

						    });

						    function checkRes() {
						        if (us.some(_defers, function (def) {
                                        def.state() == 'pending'
						        })) {
						            setTimeout(checkRes, 5000);
						            return;
						        } else if (us.some(_defers, function (def) {
                                        def.state() == 'rejected'
						        })) {
						            alert("error");
						        }
						        loadingDlg.close();
						    }
						    setTimeout(checkRes, 5000);
						});
			    }

			    $scope.emailLogList = function () {
			        var loadingDlg = SP.UI.ModalDialog.showWaitScreenWithNoClose("Loading...", "Please wait while data is retrieved...");
			        var win = $("#popupEmailLogWindow").data("kendoWindow");
			        win.title(getLang("DB_EmailLog_DlgTitle"));
			        dataSrv.getEmailLogList(
						$scope.periodSelect.dateStart,
						$scope.periodSelect.dateEnd, $scope.currentFactoryCodeId).done(function (data) {
						    var htmlStr = [];
						    //popupEmailLogWindow
						    if (data.results.length > 0) {

						        //head
						        htmlStr.push("<div id='emailLogTableHead' style='padding-right:17px;'>")
						        htmlStr.push("<table style='width:100%;border-collapse:collapse;'>");
						        htmlStr.push("<colgroup><col style='width: 33%;'><col style='width: 33%;'><col style='width: 34%;'></colgroup>");
						        htmlStr.push("<thead><tr>");
						        htmlStr.push("<td style='width:33%'>" + getLang("DB_EmailLog_RefID") + "</td>");
						        htmlStr.push("<td style='width:33%'>" + getLang("DB_EmailLog_Guest") + "</td>");
						        htmlStr.push("<td style='width:34%'>" + getLang("DB_EmailLog_SendDate") + "</td>");
						        htmlStr.push("</tr></thead>");
						        htmlStr.push("</table>");
						        htmlStr.push("</div>");
						        //body
						        htmlStr.push("<div id='emailLogTableBody' style='width:100%; height:400px;overflow-y:scroll;'>");

						        htmlStr.push("<table style='width:100%;' cellspacing='0'><colgroup><col style='width: 33%;'><col style='width: 33%;'><col style='width: 34%;'></colgroup>");
						        htmlStr.push("<tbody>");
						        us.each(data.results, function (_val) {
						            htmlStr.push("<tr>");
						            htmlStr.push("<td style='width: 33%;'>" + _val.ReferenceNumber.Title + "</td>");
						            if (_val.Guest) htmlStr.push("<td style='width: 33%;'>" + _val.GuestName + "</td>");
						            else htmlStr.push("<td style='width: 33%;'>" + _val.OfficeName.Title + "</td>");
						            htmlStr.push("<td style='width: 34%;'>" + $filter('date')(_val.Latest_x0020_Email, "M/d/yyyy HH:mm") + "</td>");
						            htmlStr.push("</tr>");
						        });
						        //__next
						        htmlStr.push("</tbody></table></div>");
						    } else {
						        htmlStr.push(getLang("DB_Nodata"));
						    }
						    $("#emailLogTable").html(htmlStr.join(""));
						    loadingDlg.close(SP.UI.DialogResult.OK);
						    win.center();
						    win.open();
						});
			    }

			    $scope.allocDorm = function (currEle, bdId, daId, name, dormCode, referenceNumberId) {
			        var loadingDlg = SP.UI.ModalDialog.showWaitScreenWithNoClose("Loading...", "Please wait while data is retrieved...");
			        var roomCode = currEle.parent().find('td:first-child').attr('roomCode');
			        var dataIsUpdate = false;
			        //继续分配房间
			        dataSrv.getDormAllocStateByBDId(bdId, daId)
						.done(function (daList) {
						    var currElems = currEle.attr('id').split('_');
						    var count = 0;
						    us.each(daList, function (val) {
						        if (val.Id >= daId) {
						            if ((!val.DormCodeId || val.DormCodeId == 0) &&
										(!val.HotelCodeId || val.HotelCodeId == 0)) {
						                var isAllocated = dataSrv.isAllocated(dormCode, roomCode, val.Date);
						                var currEleIdTemp = currElems[0] + "_" + currElems[1] + "_" + $filter('date')(new Date(val.Date), 'yyyyMMdd');
						                if (isAllocated) {
						                    var ele = $('#' + currEleIdTemp);
						                    if (ele != null && ele.has('span').length < 1) {
						                        dataIsUpdate = true;
						                    }
						                } else {
						                    dataSrv.updateDormAlloc(val.Id, {
						                        DormCodeId: dormCode,
						                        DormNumberId: roomCode,
						                        IsDorm: true
						                    }); //DormNumberId
						                    val.DormCodeId = dormCode;
						                    //动态更新table内容
						                    //$('#MyTable #R_69_20170111')
						                    var ele = $('#MyTable #' + currEleIdTemp);
						                    if (ele != null) {
						                        //ele.html("");
						                        count++;
						                        ele.html("<span style='vertical-align: top;' itemId='" + val.Id + "' bdId='" + val.BookingDetailsIDId + "' refId='" + val.ReferenceNumberId + "'>" + val.OfficeName + "</span>");
						                    }
						                }

						            }
						        }
						    });

						    if (count == 0) {
						        loadingDlg.close();
						        alert(getLang("dormLandingIsUpdated"));
						        return;
						    }

						    var count_res = us.countBy(daList, function (val) {
						        if ((!val.DormCodeId || val.DormCodeId == 0) &&
									(!val.HotelCodeId || val.HotelCodeId == 0)) {
						            return 'RemainDays';
						        } else return 'Ok';
						    });
						    dataSrv.updateBookingDetail(bdId, {
						        'RemainDays': count_res.RemainDays ? count_res.RemainDays : 0,
						        'Alloc_x0020_Flag': false
						    });

						    $scope.updateUnproCount();
						    loadingDlg.close();

						    //修改booking状态
						    dataSrv.checkRefStatus(referenceNumberId).then(function (data) {
						        if (!data) {
						            dataSrv.updateBookingStatus(referenceNumberId, "Processed").then(function (data) {
						                console.log(data);
						            }, function (err) {
						                console.log(err);
						            });
						        }
						    }, function (err) {
						        console.log(err);
						    });

						    if (dataIsUpdate) {
						        //提示：该房间某些日期已被其他管理员分配，请重新刷新页面后继续操作
						        alert(getLang("dormLandingSomeDataIsUpdated"));
						    }

						});
			    }

			    // 为访客分配房间
			    $scope.allocForGuest = function (currEle, bdId, daId, name, dormCode, referenceNumberId) {
			        var loadingDlg = SP.UI.ModalDialog.showWaitScreenWithNoClose("Loading...", "Please wait while data is retrieved...");
			        //判断该房间是否已分配，如已分配，则取消再添加
			        if (currEle.find('span').length > 0) {
			            var refId = currEle.find('span').attr('refId');
			            $scope.clearAllocForGuest(currEle).fail(function () {
			                loadingDlg.close();
			                //alert(getLang("dataError")); //数据异常
			                console.log(err);
			                return;
			            }).done(function () {
			                //							dataSrv.checkRefStatus(refId).then(function(data) {
			                //								if(data) {
			                //									dataSrv.updateBookingStatus(refId, "Received").then(function(data) {
			                //										console.log(data);
			                //									}, function(err) {
			                //										console.log(err);
			                //									});
			                //								}
			                //							}, function(err) {
			                //								console.log(err);
			                //							});
			                loadingDlg.close();
			                $scope.allocDorm(currEle, bdId, daId, name, dormCode, referenceNumberId);
			            });

			        } else {
			            loadingDlg.close();
			            $scope.allocDorm(currEle, bdId, daId, name, dormCode, referenceNumberId);
			        }

			    };

			    // 取消访客已分配的房间
			    $scope.clearAllocForGuest = function (currEle) {
			        var deferred = $.Deferred();
			        var _ht_span = currEle.find('span');
			        if (_ht_span.length == 0) return;
			        var bdId = _ht_span.attr('bdId'); // booking detail id
			        var daId = _ht_span.attr('itemId'); // dorm allocation id
			        var refId = currEle.find('span').attr('refId');
			        var filter = "$filter=ID eq " + daId;
			        filter += "and (((HotelCodeId eq null or HotelCodeId eq 0) and ";
			        filter += "(DormCodeId eq null or DormCodeId eq 0)) ";
			        filter += " or CancelFlag eq 1 )";
			        dataSrv.getDormAllocationByFilter(filter).done(function (data) {
			            if (data != null && data.length > 0) {
			                //提示：数据已过时，请重新刷新页面后继续操作
			                alert(getLang("dormLandingIsUpdated"));
			                deferred.reject();
			                return deferred.promise();
			            }
			            dataSrv.updateDormAlloc(daId, {
			                DormCodeId: 0,
			                DormNumberId: 0,
			                IsDorm: false
			            }).fail(function () {
			                deferred.reject();
			                alert(getLang("dataError")); //提示数据异常，请刷新页面后重新操作
			            }).done(function () {
			                dataSrv.getBookDetailById(bdId).done(function (data) {
			                    var remainDays = data.RemainDays + 1;
			                    if (remainDays > data.NumberOfRoomNights) {
			                        deferred.reject();
			                        alert(getLang("dataError")); //提示数据异常，请刷新页面后重新操作
			                    }

			                    if (remainDays != 0) {
			                        if (remainDays == data.NumberOfRoomNights) {
			                            dataSrv.updateBookingStatus(refId, "Received").then(function (data) {
			                                dataSrv.updateBookingDetail(bdId, {
			                                    'Alloc_x0020_Flag': false,
			                                    'SendEmailFlag': false,
			                                    'RemainDays': remainDays
			                                }).done(function () {
			                                    var newDaId = currEle.find('span').attr('itemId'); // dorm allocation id
			                                    if (newDaId == daId) {
			                                        currEle.html('');
			                                    }
			                                    deferred.resolve();
			                                    $scope.updateUnproCount();
			                                });
			                                console.log(data);
			                            }, function (err) {
			                                console.log(err);
			                            });
			                        } else {
			                            dataSrv.updateBookingDetail(bdId, {
			                                'Alloc_x0020_Flag': false,
			                                'SendEmailFlag': false,
			                                'RemainDays': remainDays
			                            }).done(function () {
			                                var newDaId = currEle.find('span').attr('itemId'); // dorm allocation id
			                                if (newDaId == daId) {
			                                    currEle.html('');
			                                }
			                                deferred.resolve();
			                                $scope.updateUnproCount();
			                            });
			                        }

			                    }
			                });
			            });
			        });
			        return deferred.promise();
			    }

			    // 分配房间弹出框
			    $window.popupDormAllocWin = function (ele, dormCode, dateStr) {
			        var currEle = $(ele);
			        if (currEle.find('span').length == 0) {
			            //重新判断当前房间是否已被安排

			            dormAllocWin(ele, dormCode, dateStr);
			        } else {
			            var refId = currEle.find('span').attr('refId');
			            dataSrv.getBookingById(refId).then(function (data) {
			                if (data.Status == "Completed" || data.Status == "Checked in" || data.Status == "Checked out") {
			                    var win = $("#popupmessageWindow").data("kendoWindow");
			                    win.title(getLang("DormAlloc_CanNotClearMsgTitle"));
			                    $("#message").html(getLang("DormAlloc_CanNotClearMsg").format(data.Status));
			                    win.center();
			                    win.open();
			                } else {
			                    dormAllocWin(ele, dormCode, dateStr);
			                }

			            }, function (err) {
			                console.log(err);
			            });
			        }

			    };

			    function dormAllocWin(ele, dormCode, dateStr) {
			        var currDate = new Date(dateStr);
			        var currEle = $(ele);
			        var roomName = currEle.parent().find('td:first-child').text();
			        var win = $("#popupDormWindow").data("kendoWindow");
			        win.title(roomName + " - " + $filter('date')(currDate, "MM-dd-yyyy")); //popupmessageWindow
			        var htmlStr = [];
			        $scope.unAllocUsers = {};
			        var loadingDlg = SP.UI.ModalDialog.showWaitScreenWithNoClose("Loading...", "Please wait while data is retrieved...");

			        // 如果房间没有分配，则不显示clear按钮
			        $scope.isSelectUser = false; //始终显示
			        $("#popupDormWinClear").hide();
			        if (currEle.find('span').length > 0) {
			            $("#popupDormWinClear").show();
			        }

			        $("#popupDormWinClear").unbind();
			        $("#popupDormWinClear").one("click", function () {
			            win.close();
			            var refId = currEle.find('span').attr('refId');
			            if (refId == null || refId == "") {
			                return;
			            }
			            var loadingDlg = SP.UI.ModalDialog.showWaitScreenWithNoClose("Loading...", "Please wait while data is retrieved...");
			            $scope.clearAllocForGuest(currEle).fail(function () {
			                loadingDlg.close();
			            }).done(function () {
			                loadingDlg.close();
			            });

			        });

			        dataSrv.getDormAllocStateByDate(currDate, $scope.currentFactoryCodeId).then(function (data) {
			            if (data.length > 0) {
			                //处理性别多语言
			                var filter = "$filter=";
			                var hashID = new Object();
			                for (var i = 0; i < data.length; i++) {
			                    if (!(data[i]["BookingDetailsIDId"] in hashID)) {
			                        hashID[data[i]["BookingDetailsIDId"]] = data[i]["BookingDetailsIDId"];
			                        filter += "ID eq " + data[i]["BookingDetailsIDId"] + " or ";
			                    }
			                }
			                filter = filter.trim().substring(0, filter.length - " or ".length);
			                $scope.isHasData = true;
			                dataSrv.getBookingDetailsByFilter(filter).then(function (genderData) {
			                    if (genderData.length > 0) {
			                        for (var i = 0; i < genderData.length; i++) {
			                            for (var j = 0; j < data.length; j++) {
			                                //检查是否有客史
			                                (function (i, j) {
			                                    if (data[j]["BookingDetailsIDId"] == genderData[i]["ID"]) {
			                                        data[j]["Gender"] = gender(genderData[i]["Gender"]);

			                                        if (!genderData[i].Guest) {
			                                            dataSrv.getGuestFileByUserId(genderData[i].OfficeNameId).then(function (guest) {
			                                                if (guest.results.length > 0) {
			                                                    data[j].color = "red";
			                                                    var userObj = {
			                                                        "OfficeNameText": genderData[i].OfficeName.Title,
			                                                        "OfficeEmail": genderData[i].OfficeEmail,
			                                                        "OfficeNameId": genderData[i].OfficeNameId,
			                                                        "StaffDepartment": genderData[i].StaffDepartment
			                                                    };
			                                                    data[j].UserObj = JSON.stringify(userObj);
			                                                }
			                                            }, function () { });
			                                        }
			                                    }


			                                })(i, j);
			                            }
			                        }
			                    }
			                    $scope.unAllocDormUser = data;
			                    $scope.$apply();
			                });

			            } else {
			                $scope.unAllocDormUser = [];
			                $scope.isHasData = false;
			            }

			            $scope.allocation = function (obj) {
			                $scope.allocForGuest(currEle, obj.BookingDetailsIDId, obj.Id, obj.OfficeName, dormCode, obj.ReferenceNumberId);
			                win.close();
			            }
			            loadingDlg.close(SP.UI.DialogResult.OK);
			            //////放到最后，避免首次打开时不居中
			            //var win = $("#popupDormWindow").kendoWindow({
			            //    title: roomName + " - " + $filter('date')(currDate, "MM-dd-yyyy")
			            //});
			            //win.title(roomName + " - " + $filter('date')(currDate, "MM-dd-yyyy")); //popupmessageWindow
			            win.center();
			            win.open();
			        }, function () { });
			    }

			    // 分配酒店处理
			    $scope.allocHotelForGuest = function (currEle, bdId, daId, hotelCode, referenceNumberId) {
			        var loadingDlg = SP.UI.ModalDialog.showWaitScreenWithNoClose("Loading...", "Please wait while data is retrieved...");
			        dataSrv.getDormAllocStateByBDId(bdId)
						.done(function (daList) {
						    // daList: dorm alloc list
						    us.each(daList, function (val) {
						        if (val.Id >= daId) {
						            if ((!val.DormCodeId || val.DormCodeId == 0) &&
										(!val.HotelCodeId || val.HotelCodeId == 0)) {
						                dataSrv.updateDormAlloc(val.Id, {
						                    HotelCodeId: hotelCode,
						                    IsDorm: false
						                });
						                val.HotelCodeId = hotelCode;
						            }
						        }
						    });
						    var count_res = us.countBy(daList, function (val) {
						        if ((!val.DormCodeId || val.DormCodeId == 0) &&
									(!val.HotelCodeId || val.HotelCodeId == 0)) {
						            return 'RemainDays';
						        } else return 'Ok';
						    });
						    dataSrv.updateBookingDetail(bdId, {
						        'RemainDays': count_res.RemainDays ? count_res.RemainDays : 0
						    });
						    loadingDlg.close();
						    $scope.generateAccoTable(
								$scope.periodSelect.dateStart,
								$scope.periodSelect.dateEnd,
								$scope.accTypeCode,
								$scope.hotelOrDormCode);
						    setTimeout($scope.updateUnproCount, 0);

						    //修改booking状态
						    dataSrv.checkRefStatus(referenceNumberId).then(function (data) {
						        if (!data) {
						            dataSrv.updateBookingStatus(referenceNumberId, "Processed").then(function (data) {
						                console.log(data);
						            }, function (err) {
						                console.log(err);
						            });
						        }
						    }, function (err) {
						        console.log(err);
						    });
						});
			    };

			    // 分配酒店弹出框
			    $window.popupHotelAllocWin = function (ele, hotelCode, dateStr) {
			        var loadingDlg = SP.UI.ModalDialog.showWaitScreenWithNoClose("Loading...", "Please wait while data is retrieved...");
			        var currDate = new Date(dateStr);
			        var currEle = $(ele);

			        var win = $("#popupDormWindow").data("kendoWindow");
			        win.title($filter('date')(currDate, "MM-dd-yyyy"));
			        $scope.isSelectUser = false;
			        $("#popupDormWinClear").hide();
			        dataSrv.getDormAllocStateByDate(currDate, $scope.currentFactoryCodeId).then(function (data) {
			            if (data.length > 0) {
			                $scope.unAllocDormUser = data;
			                $scope.isHasData = true;
			            } else {
			                $scope.unAllocDormUser = [];
			                $scope.isHasData = false;
			            }
			            $scope.allocation = function (obj) {
			                $scope.allocHotelForGuest(currEle, obj.BookingDetailsIDId, obj.Id, hotelCode, obj.ReferenceNumberId);
			                win.close();
			            }

			            loadingDlg.close(SP.UI.DialogResult.OK);
			            win.center();
			            win.open();
			        }, function () { });
			    };

			    // 清除酒店分配
			    $window.clearAllocHotelForGuest = function (ele) {
			        var currEle = $(ele);
			        var refId = currEle.attr('refId');
			        var daId = currEle.attr('itemId'); // dorm allocation id
			        var filter = "$filter=ID eq " + daId;
			        filter += "and (((HotelCodeId eq null or HotelCodeId eq 0) and ";
			        filter += "(DormCodeId eq null or DormCodeId eq 0)) ";
			        filter += " or CancelFlag eq 1 )";
			        dataSrv.getDormAllocationByFilter(filter).done(function (data) {
			            if (data != null && data.length > 0) {
			                //提示：数据已过时，请重新刷新页面后继续操作
			                alert(getLang("dormLandingIsUpdated"));
			                return;
			            }
			            dataSrv.getBookingById(refId).then(function (data) {
			                if (data.Status == "Completed" || data.Status == "Checked in" || data.Status == "Checked out") {
			                    var win = $("#popupmessageWindow").data("kendoWindow");
			                    //win.title("温馨提示");
			                    //$("#message").html("该订单已经 " + data.Status + " 不能清理");
			                    win.title(getLang("DormAlloc_CanNotClearMsgTitle"));
			                    $("#message").html(getLang("DormAlloc_CanNotClearMsg").format(data.Status));
			                    win.open();
			                } else {
			                    var loadingDlg = SP.UI.ModalDialog.showWaitScreenWithNoClose("Loading...", "Please wait while data is retrieved...");
			                    var bdId = currEle.attr('bdId'); // booking detail id
			                    //var daId = currEle.attr('itemId'); // dorm allocation id
			                    dataSrv.updateDormAlloc(daId, {
			                        HotelCodeId: 0,
			                        IsDorm: false
			                    });
			                    dataSrv.getBookDetailById(bdId).done(function (data) {
			                        var remainDays = data.RemainDays + 1;
			                        if (remainDays == data.NumberOfRoomNights) {
			                            dataSrv.updateBookingStatus(refId, "Received").then(function (data) {
			                                dataSrv.updateBookingDetail(bdId, {
			                                    'Alloc_x0020_Flag': false,
			                                    'SendEmailFlag': false,
			                                    'RemainDays': remainDays
			                                }).done(function () {
			                                    currEle.parent().remove();
			                                    $scope.updateUnproCount();
			                                    loadingDlg.close();
			                                });
			                                console.log(data);
			                            }, function (err) {
			                                console.log(err);
			                                loadingDlg.close();
			                            });
			                        } else {
			                            dataSrv.updateBookingDetail(bdId, {
			                                'Alloc_x0020_Flag': false,
			                                'SendEmailFlag': false,
			                                'RemainDays': remainDays
			                            }).done(function () {
			                                currEle.parent().remove();
			                                $scope.updateUnproCount();
			                                loadingDlg.close();
			                            }, function (err) {
			                                console.log(err);
			                                loadingDlg.close();
			                            });
			                        }
			                        //loadingDlg.close();
			                    });

			                }

			            }, function (err) {
			                console.log(err);

			            });

			        });

			    };

			    // 生成宿舍或酒店的分配列表
			    $scope.generateAccoTable = function (startDate, endDate, accTypeCode, accCode) {
			        var tblContainer = $("#dormBookingTable");
			        tblContainer.html("");
			        if (accCode == "" || factoryItem == null) return;
			        var loadingDlg = SP.UI.ModalDialog.showWaitScreenWithNoClose("Loading...", "Please wait while data is retrieved...");
			        var htmlStr = [];
			        var tmpDate = new Date(startDate);
			        if (accTypeCode == undefined || accTypeCode == null)
			            accTypeCode = 'dorm'; //异步会导致没值

			        if (accTypeCode == 'dorm') {
			            var tmpYear = tmpDate.getFullYear();
			            var tmpMonth = tmpDate.getMonth() + 1;
			            var tmpDays = (new Date(tmpYear, tmpMonth, 0)).getDate();
			            var tmpWidth = 0;
			            var tmpHeadWidth = 0;
			            var count = 0;
			            var ColWidth = 132.75;
			            var Width = 1150;
			            if ($scope.periodType == 'week') {
			                tmpDays = 7;
			                ColWidth = 1150 / (tmpDays + 1) - 10 - 1;
			            } else {
			                Width = (ColWidth + 10 + 1) * (tmpDays + 1);
			            }

			            htmlStr.push("<table id='MyTable' style='width:" + Width + "px;cellspacing='0';cellpadding='0';word-break:break-all; word-wrap:break-word;'>");
			            // table head
			            htmlStr.push("<thead><tr style='height:30px;'>");
			            htmlStr.push("<th style='width:" + ColWidth + "px;text-align:left;padding-left: 5px;'>Room</th>");
			            tmpDate = new Date(startDate);
			            do {
			                htmlStr.push("<th style='width:" + ColWidth + "px;'>" +
								(tmpDate.getMonth() + 1) +
								"/" + tmpDate.getDate() +
								"</th>");

			                if (tmpDate.getMonth() == endDate.getMonth() &&
								tmpDate.getDate() == endDate.getDate()) break;
			                tmpDate.setDate(tmpDate.getDate() + 1);
			            } while (true);
			            htmlStr.push("</tr>");

			            htmlStr.push("<tbody>");
			            $.when(dataSrv.getDormAllocStateByPeriod(startDate, endDate, accCode), dataSrv.getRoomsByDorm(accCode))
							.done(function (recordList, rooms) {
							    rooms.sort(function (a, b) {
							        return (a["Title"] + '').localeCompare(b["Title"] + '');
							    });
							    for (var i in rooms) {
							        var roomCode = rooms[i].Id;
							        //20180212 用roomCode/DormID到DormRoomStatus查RecordDate最新一条的Status，若是维护中，则显示红色，且显示CompleteDate
                                    //20180614  ZhiXin: 任意一条在维护中，就显示成红色，但由于不知道显示那一条的日期，所以直接不要显示日期
							        var dormRoomStatusData = getDormRoomStatusData(roomCode);

							        var roomName = rooms[i].Title;
							        var roomDetail = recordList[roomCode];

							        if (dormRoomStatusData != null && dormRoomStatusData.Status == "维护中")
							        {
							            //var tmpDate = $filter('date')(dormRoomStatusData.CompleteDate, "MM/dd/yyyy");
							            //htmlStr.push("<tr><td roomCode='" + roomCode + "' style='width:" + ColWidth + "px;background-color:red;'>" + roomName + "&nbsp;" + tmpDate + "</td>");
							            htmlStr.push("<tr><td roomCode='" + roomCode + "' style='width:" + ColWidth + "px;background-color:red;'>" + roomName + "</td>");
							        }
							        else
                                    {
							            htmlStr.push("<tr><td roomCode='" + roomCode + "' style='width:" + ColWidth + "px'>" + roomName + "</td>");
							        }

							        tmpDate = new Date(startDate);
							        do {
							            var dateKey = $filter('date')(tmpDate, "yyyyMMdd");
							            htmlStr.push("<td style='width:" + ColWidth + "px;' class='dormOrHotelCell' id='R_" + roomCode + "_" + dateKey +
											"' onclick=\"popupDormAllocWin(this, '" + accCode + "', '" + tmpDate.toString() + "');\">");

							            if (roomDetail && roomDetail[dateKey]) {
							                var user = roomDetail[dateKey];
							                htmlStr.push("<span style='vertical-align: top;' itemId='" + user.Id +
												"' bdId='" + user.BookingDetailsIDId +
												"' refId='" + user.ReferenceNumberId + "'>" + user.OfficeName + "</span>");
							                //BookingDetailsIDId
							                if (user.BookingDetailsID.SendEmailFlag2 == "1")
							                    htmlStr.push('<img src="https://esquel.sharepoint.com/sites/ead/SiteAssets/hbs/Default/Dorm-Allocation-Mailed.png" style="height:18px;margin-left: 2px;" >');

							            }
							            htmlStr.push("</td>");

							            if (tmpDate.getMonth() == endDate.getMonth() &&
											tmpDate.getDate() == endDate.getDate()) break;
							            tmpDate.setDate(tmpDate.getDate() + 1);
							        } while (true);
							        htmlStr.push("</tr>");
							    }
							    htmlStr.push("</tbody>");
							    htmlStr.push("</table>");

							    tblContainer.html(htmlStr.join(''));

							    FixTable("MyTable", 1, 1150, 540);

							})
							.fail(function (err1, err2) { })
							.always(function () {
							    loadingDlg.close(SP.UI.DialogResult.OK);
							});
			        } else if (accTypeCode == 'hotel') {
			            htmlStr.push("<table cellspacing='0'>");
			            htmlStr.push("<thead><tr>");
			            tmpDate = new Date(startDate);
			            do {
			                htmlStr.push("<td><span>" +
								$filter('date')(tmpDate, "M/dd") + "</span>" +
								"<input class='hotel_alloc_btn' onclick=\"popupHotelAllocWin(this, '" + accCode + "', '" + tmpDate.toString() + "');\" type=\"button\" value='+'/>" +
								"</td>");

			                if (tmpDate.getMonth() == endDate.getMonth() &&
								tmpDate.getDate() == endDate.getDate()) break;
			                tmpDate.setDate(tmpDate.getDate() + 1);
			            } while (true);
			            htmlStr.push("</tr></thead>");

			            dataSrv.getHotelAllocStateByPeriod(startDate, endDate, accCode)
							.then(function (accUsers) {
							    htmlStr.push("<tbody><tr>");
							    tmpDate = new Date(startDate);
							    do {
							        htmlStr.push("<td class='hotelAllocList-td' style='white-space: nowrap;'><ul>");
							        var dateKey = $filter('date')(tmpDate, "yyyyMMdd");
							        var userList = accUsers[dateKey];
							        for (var i in userList) {
							            var user = userList[i];
							            htmlStr.push("<li itemId='" + user.Id + "'>" +
											"<input class='hotel_alloc_btn' refId='" + user.ReferenceNumberId + "' itemId='" + user.Id +
											"' bdId='" + user.BookingDetailsIDId +
											"' type='button' value='X' onclick=\"clearAllocHotelForGuest(this);\"/>" +
											"<span>" + user.OfficeName + "</span>");
							            if (user.BookingDetailsID.SendEmailFlag2 == "1")
							                htmlStr.push('<img src="https://esquel.sharepoint.com/sites/ead/SiteAssets/hbs/Default/Dorm-Allocation-Mailed.png" style="height:20px;margin-left: 5px;vertical-align: middle" >');
							            htmlStr.push("</li>");
							        }

							        htmlStr.push("</ul></td>");
							        if (tmpDate.getMonth() == endDate.getMonth() &&
										tmpDate.getDate() == endDate.getDate()) break;
							        tmpDate.setDate(tmpDate.getDate() + 1);
							    } while (true);

							    htmlStr.push("</tr></thead>");
							    htmlStr.push("</table>");
							    tblContainer.html(htmlStr.join(''));

							}, function () { })
							.always(function () {
							    loadingDlg.close(SP.UI.DialogResult.OK);
							});
			        }
			    }

			    // 更新未分配人数
			    $scope.updateUnproCount = function () {
			        if ($scope.currentFactoryCodeId == undefined || $scope.currentFactoryCodeId == null) // || $scope.currentFactoryCodeId.length < 1 || $scope.currentFactoryCodeId == "")
			            return;

			        dataSrv.countUnprocessedGuest(
						$scope.periodSelect.dateStart,
						$scope.periodSelect.dateEnd, $scope.currentFactoryCodeId).done(function (num) {
						    $("#unprocessNum").text("(" + num + ")");
						});
			    }

			    //处理多语言
			    function gender(gender) {
			        switch (gender) {
			            case 'Male':
			                return getLang('GenderMale');
			            case 'Female':
			                return getLang('GenderFemale');
			            default:
			                return "";
			        }
			    }

			    function FixTable(TableID, FixColumnNumber, width, height) {
			        /// <summary>
			        ///   锁定表头和列
			        ///   <para> sorex.cnblogs.com </para>
			        /// </summary>
			        /// <param name="TableID" type="String">
			        ///   要锁定的Table的ID
			        /// </param>
			        /// <param name="FixColumnNumber" type="Number">
			        ///   要锁定列的个数
			        /// </param>
			        /// <param name="width" type="Number">
			        ///   显示的宽度
			        /// </param>
			        /// <param name="height" type="Number">
			        ///   显示的高度
			        /// </param>
			        if ($("#" + TableID + "_tableLayout").length != 0) {
			            $("#" + TableID + "_tableLayout").before($("#" + TableID));
			            $("#" + TableID + "_tableLayout").empty();
			        } else {
			            $("#" + TableID).after("<div id='" + TableID + "_tableLayout' style='overflow:hidden;height:" + height + "px; width:" + width + "px;'></div>");
			        }
			        $('<div id="' + TableID + '_tableFix"></div>' +
						'<div id="' + TableID + '_tableHead"></div>' +
						'<div id="' + TableID + '_tableColumn"></div>' +
						'<div id="' + TableID + '_tableData"></div>').appendTo("#" + TableID + "_tableLayout");
			        var oldtable = $("#" + TableID);
			        var tableFixClone = oldtable.clone(true);
			        tableFixClone.attr("id", TableID + "_tableFixClone");
			        $("#" + TableID + "_tableFix").append(tableFixClone);
			        var tableHeadClone = oldtable.clone(true);
			        tableHeadClone.attr("id", TableID + "_tableHeadClone");
			        $("#" + TableID + "_tableHead").append(tableHeadClone);
			        var tableColumnClone = oldtable.clone(true);
			        tableColumnClone.attr("id", TableID + "_tableColumnClone");
			        $("#" + TableID + "_tableColumn").append(tableColumnClone);
			        $("#" + TableID + "_tableData").append(oldtable);
			        $("#" + TableID + "_tableLayout table").each(function () {
			            $(this).css("margin", "0");
			        });
			        var HeadHeight = $("#" + TableID + "_tableHead thead").height();
			        HeadHeight += 2;
			        $("#" + TableID + "_tableHead").css("height", HeadHeight);
			        $("#" + TableID + "_tableFix").css("height", HeadHeight);
			        var ColumnsWidth = 0;
			        var ColumnsNumber = 0;
			        $("#" + TableID + "_tableColumn tr:last td:lt(" + FixColumnNumber + ")").each(function () {
			            ColumnsWidth += $(this).outerWidth(true);
			            ColumnsNumber++;
			        });
			        ColumnsWidth += 2;
			        //				if($.browser.msie) {
			        //					switch($.browser.version) {
			        //						case "7.0":
			        //							if(ColumnsNumber >= 3) ColumnsWidth--;
			        //							break;
			        //						case "8.0":
			        //							if(ColumnsNumber >= 2) ColumnsWidth--;
			        //							break;
			        //					}
			        //				}
			        $("#" + TableID + "_tableColumn").css("width", ColumnsWidth);
			        $("#" + TableID + "_tableFix").css("width", ColumnsWidth);
			        $("#" + TableID + "_tableData").scroll(function () {
			            $("#" + TableID + "_tableHead").scrollLeft($("#" + TableID + "_tableData").scrollLeft());
			            $("#" + TableID + "_tableColumn").scrollTop($("#" + TableID + "_tableData").scrollTop());
			        });
			        $("#" + TableID + "_tableFix").css({
			            "overflow": "hidden",
			            "position": "relative",
			            "z-index": "50",
			            "background-color": "Silver"
			        });
			        $("#" + TableID + "_tableHead").css({
			            "overflow": "hidden",
			            "width": width - 17,
			            "position": "relative",
			            "z-index": "45",
			            "background-color": "Silver"
			        });
			        $("#" + TableID + "_tableColumn").css({
			            "overflow": "hidden",
			            "height": height - 17,
			            "position": "relative",
			            "z-index": "40",
			            "background-color": "#ffffff"
			        });
			        $("#" + TableID + "_tableData").css({
			            "overflow": "scroll",
			            "width": width,
			            "height": height,
			            "position": "relative",
			            "z-index": "35"
			        });
			        if ($("#" + TableID + "_tableHead").width() > $("#" + TableID + "_tableFix table").width()) {
			            $("#" + TableID + "_tableHead").css("width", $("#" + TableID + "_tableFix table").width());
			            $("#" + TableID + "_tableData").css("width", $("#" + TableID + "_tableFix table").width() + 17);
			        }
			        if ($("#" + TableID + "_tableColumn").height() > $("#" + TableID + "_tableColumn table").height()) {
			            $("#" + TableID + "_tableColumn").css("height", $("#" + TableID + "_tableColumn table").height());
			            $("#" + TableID + "_tableData").css("height", $("#" + TableID + "_tableColumn table").height() + 17);
			        }
			        $("#" + TableID + "_tableFix").offset($("#" + TableID + "_tableLayout").offset());
			        $("#" + TableID + "_tableHead").offset($("#" + TableID + "_tableLayout").offset());
			        $("#" + TableID + "_tableColumn").offset($("#" + TableID + "_tableLayout").offset());
			        $("#" + TableID + "_tableData").offset($("#" + TableID + "_tableLayout").offset());
			    }

			    // 弹出未分配访客列表
			    $scope.popupUnproList = function () {
			        setTimeout($scope.updateUnproCount, 0);
			        //var win = $("#unprocessedGuest").data("kendoWindow");
			        //win.title(getLang("DB_UnprocessedGuest_DlgTitle"));
			        var htmlStr = [];
			        dataSrv.getUnprocessedGuestList($scope.periodSelect.dateStart, $scope.periodSelect.dateEnd, $scope.currentFactoryCodeId).then(function (data) {
			            if (data.results.length > 0) {
			                //head
			                htmlStr.push("<div id='unprocessedGuestTableHead' style='padding-right:17px;'>")
			                htmlStr.push("<table style='width:100%;border-collapse:collapse;'>");
			                htmlStr.push("<colgroup><col style='width: 25%;'><col style='width: 25%;'><col style='width: 25%;'><col style='width: 25%;'></colgroup>");
			                htmlStr.push("<thead><tr>");
			                htmlStr.push("<td style='width: 25%;'>" + getLang("DB_UnprocessedGuest_EnName") + "</td>");
			                htmlStr.push("<td style='width: 25%;'>" + getLang("DB_UnprocessedGuest_Gender") + "</td>");
			                htmlStr.push("<td style='width: 25%;'>" + getLang("DB_UnprocessedGuest_CheckIn") + "</td>");
			                htmlStr.push("<td style='width: 25%;'>" + getLang("DB_UnprocessedGuest_CheckOut") + "</td>");
			                htmlStr.push("</tr></thead>");
			                htmlStr.push("</table>");
			                htmlStr.push("</div>");

			                //body
			                htmlStr.push("<div id='unprocessedGuestTableBody' style='width:100%; height:400px;overflow-y:scroll;'>");

			                htmlStr.push("<table style='width:100%;' cellspacing='0'><colgroup><col style='width: 25%;'><col style='width: 25%;'><col style='width: 25%;'><col style='width: 25%;'></colgroup>");
			                htmlStr.push("<tbody>");

			                angular.forEach(data.results, function (val) {
			                    htmlStr.push("<tr>");
			                    if (val.Guest) {
			                        htmlStr.push("<td style='width: 25%;'>" + val.GuestName + "</td>");
			                    }
			                    else {
			                        dataSrv.getGuestFileByUserId(val.OfficeNameId).then(function (data) {
			                            if (data.results.length > 0) {
			                                var userObj = {
			                                    "OfficeNameText": val.OfficeNameText,
			                                    "OfficeEmail": val.OfficeEmail,
			                                    "OfficeNameId": val.OfficeNameId,
			                                    "StaffDepartment": val.StaffDepartment
			                                };
			                                htmlStr.push("<td onclick='popupGuestFile(" + JSON.stringify(userObj) + ")' style='width: 25%;color:red;'>" + val.OfficeName.Title + "</td>");
			                            }
			                            else {
			                                htmlStr.push("<td style='width: 25%;'>" + val.OfficeName.Title + "</td>");
			                            }

			                            $("#guestFile").html(htmlStr.join(""));
			                        }, function () { });
			                    }

			                    htmlStr.push("<td style='width: 25%;'>" + gender(val.Gender) + "</td>");
			                    htmlStr.push("<td style='width: 25%;'>" + $filter('date')(val.CheckinDate, "MM/dd/yyyy") + "</td>");
			                    htmlStr.push("<td style='width: 25%;'>" + $filter('date')(val.CheckoutDate, "MM/dd/yyyy") + "</td>");
			                    htmlStr.push("</tr>");
			                });
			                htmlStr.push("</tbody>");
			                htmlStr.push("</table></div>");
			                if (data.__next) {
			                    unprocessPageLink.push(data.__next);
			                }
			            } else htmlStr.push(getLang("DB_Nodata"));
			            $("#unprocessedGuest").html(htmlStr.join(""));
			        }, function () { });

			        var win = $("#popupUnprocessedGuestWindow").data("kendoWindow");
			        win.title(getLang("DB_UnprocessedGuest_DlgTitle"));
			        win.center();
			        win.open();
			    }

			    //Zack 20180524:show guest file--------------
			    $window.popupGuestFile = function (user) {
			        doPopupGuestFile(user);
			    }
                //---------------------------------------------------------

			    $scope.popupGuestFile = function (user) {
			        user = JSON.parse(user);
			        doPopupGuestFile(user);
			    }

			    function doPopupGuestFile(user) {
			        var htmlStr = [];
			        var imgSrc = hostweburl + "/_layouts/15/userphoto.aspx?size=L&username=" + user.OfficeEmail;
			        dataSrv.getGuestFileByUserId(user.OfficeNameId).then(function (returnVal) {
			            if (returnVal.results.length > 0) {
			                htmlStr.push("<table>");
			                htmlStr.push("<tr>");
			                htmlStr.push("<td colspan='2'><img class='userImg' id='imgUserLogo' alt='' src='"+imgSrc+"'></td>");
			                htmlStr.push("<td><label>Remarks</label><br/><textarea id='textareaRemarks' rows='10' cols='50'>"+$(returnVal.results[0].Remarks).html()+ "</textarea></td>");
			                htmlStr.push("</tr>");
			                htmlStr.push("<tr>");
			                htmlStr.push("<td><label for='name' style='float:right;'>Name</label></td>");
			                htmlStr.push("<td colspan='2'><div id='name'>"+user.OfficeNameText+ "</div></td>");
			                htmlStr.push("</tr>");
			                htmlStr.push("<tr>");
			                htmlStr.push("<td><label for='department' style='float:right;'>Department</label></td>");
			                htmlStr.push("<td colspan='2'><div id='department'>"+user.StaffDepartment+"</div></td>");
			                htmlStr.push("</tr>");
			                htmlStr.push("</table>");

			            } else {
			                htmlStr.push(getLang("DB_Nodata"));
			            }
			            $("#guestFile").html(htmlStr.join(""));
			            var win = $("#popupGuestFileWindow").data("kendoWindow");
			            win.title(getLang("DB_GuestFileRemarks_DlgTitle"));
			            win.center();
			            win.open();
			        }, function () { });
			    }

			    $scope.dormOrHotel = {
			        index: 0,
			        dataTextField: "Title",
			        dataValueField: "ID",
			        change: function () {
			            $scope.generateAccoTable(
							$scope.periodSelect.dateStart,
							$scope.periodSelect.dateEnd,
							$scope.accTypeCode,
							$scope.hotelOrDormCode);
			        },
			        select: function (e) {
			            var dataItem = this.dataItem(e.item.index());
			            $scope.hotelOrDormCode = dataItem.ID;
			        }
			    }

			    $scope.periodType = "week";
			    $scope.periodSelect = {
			        today: new Date(), // current day
			        dateStart: new Date(), // period start date
			        dateEnd: new Date(), // period end date
			        initDate: function () {
			            this.dateStart = new Date(this.today);
			            this.dateEnd = new Date(this.today);
			            if ($scope.periodType == 'week') {
			                var weekNum = this.today.getDay() == 0 ? 7 : this.today.getDay();
			                this.dateStart.setDate(this.dateStart.getDate() - weekNum + 1);
			                this.dateEnd.setDate(this.dateEnd.getDate() + 7 - weekNum)
			            } else {
			                this.dateStart.setDate(1);
			                this.dateEnd.setMonth(this.dateEnd.getMonth() + 1);
			                this.dateEnd.setDate(0);
			            }
			            this.setDateLabel();
			        },
			        setDateLabel: function () {
			            $scope.updateUnproCount();
			            this.label = $filter('date')(this.dateStart, "M/d/yyyy") + '~' + $filter('date')(this.dateEnd, "M/d/yyyy");
			            $scope.generateAccoTable(
							$scope.periodSelect.dateStart,
							$scope.periodSelect.dateEnd,
							$scope.accTypeCode,
							$scope.hotelOrDormCode);
			        },
			        prev: function () { // previous period
			            if ($scope.periodType == 'week') {
			                this.dateStart.setDate(this.dateStart.getDate() - 7);
			                this.dateEnd.setDate(this.dateEnd.getDate() - 7);
			            } else {
			                this.dateStart.setMonth(this.dateStart.getMonth() - 1);
			                this.dateEnd.setDate(0);
			            }

			            if ($scope.accTypeCode && $scope.hotelOrDormCode)
			                this.setDateLabel();
			            else {
			                this.label = $filter('date')(this.dateStart, "M/d/yyyy") + '~' + $filter('date')(this.dateEnd, "M/d/yyyy");
			                $scope.updateUnproCount();
			            }

			        },
			        next: function () { // next period

			            if ($scope.periodType == 'week') {
			                this.dateStart.setDate(this.dateStart.getDate() + 7);
			                this.dateEnd.setDate(this.dateEnd.getDate() + 7);
			            } else {
			                this.dateStart.setMonth(this.dateStart.getMonth() + 1);
			                this.dateEnd.setDate(1);
			                this.dateEnd.setMonth(this.dateEnd.getMonth() + 2);
			                this.dateEnd.setDate(0);
			            }
			            if ($scope.accTypeCode && $scope.hotelOrDormCode)
			                this.setDateLabel();
			            else {
			                this.label = $filter('date')(this.dateStart, "M/d/yyyy") + '~' + $filter('date')(this.dateEnd, "M/d/yyyy");
			                $scope.updateUnproCount();
			            }
			        }
			    }
			    $scope.periodSelect.initDate();

			    $scope.accommodationTypes = {
			        dataSource: [{
			            text: "Dorm",
			            value: "dorm"
			        }, {
			            text: "Hotel",
			            value: "hotel"
			        }],
			        change: function () {
			            var dh = $("#dormOrHotel"); //.data("kendoDropDownList");
			            //var currentFactoryCodeId = $("#adminAllFactoryCode").val(); //.data('kendoDropDownList').

			            if ($scope.accTypeCode == 'dorm') {
			                dataSrv.getDormList($scope.currentFactoryCodeId).then(function (data) {
			                    data.sort(function (a, b) {
			                        return (a["Title"] + '').localeCompare(b["Title"] + '');
			                    });

			                    if (data != null && data.length > 0)
			                    { $scope.hotelOrDormCode = data[0].ID; }
			                    else { $scope.hotelOrDormCode = "";}
			                    
			                    //dh.kendoDropDownList({
			                    //    dataSource: data,
			                        
			                    //    //change: $scope.dormOrHotel.change,
			                    //    //select: $scope.dormOrHotel.select,
			                    //    //value: data[0].ID,
			                    //    //text: data[0].Title
			                    //    index: 0 // 当前默认选中项，索引从0开始。
			                    //});
			                    dh.data("kendoDropDownList").setDataSource(data);
			                    dh.data("kendoDropDownList").select(0);

			                    $scope.generateAccoTable(
									$scope.periodSelect.dateStart,
									$scope.periodSelect.dateEnd,
									$scope.accTypeCode,
									$scope.hotelOrDormCode);
			                });
			            } else {
			                dataSrv.getHotelList($scope.currentFactoryCodeId).then(function (data) {
			                    data.sort(function (a, b) {
			                        return (a["Title"] + '').localeCompare(b["Title"] + '');
			                    });

			                    if (data != null && data.length > 0)
			                    { $scope.hotelOrDormCode = data[0].ID; }
			                    else { $scope.hotelOrDormCode = ""; }

			                    //dh.kendoDropDownList({
			                    //    dataSource: data,
			                    //    dataTextField: "Title",
			                    //    dataValueField: "ID",
			                    //    //change: $scope.dormOrHotel.change,
			                    //    //select: $scope.dormOrHotel.select,
			                    //    //value: data[0].ID,
			                    //    //text: data[0].Title
			                    //    index: 0 // 当前默认选中项，索引从0开始。
			                    //});
			                    dh.data("kendoDropDownList").setDataSource(data);
			                    dh.data("kendoDropDownList").select(0);
			                    $scope.generateAccoTable(
									$scope.periodSelect.dateStart,
									$scope.periodSelect.dateEnd,
									$scope.accTypeCode,
									$scope.hotelOrDormCode);

                                //异步导致需要加这一段
			                    $("#accommodationTypes").data('kendoDropDownList').select(function (dataItem) {
			                        return dataItem.value == "hotel";
			                    });
			                });
			            };
			        }
			    };
			    //$scope.accTypeCode = "dorm";
			    //$scope.accommodationTypes.change();

			    //added by Zack 20170524 Get title issue-----------
			    $scope.adminAllFactoryCode = {
			        dataSource: [],
			        dataTextField: "Title",
			        dataValueField: "ID",
			        change: function () {
			            $scope.currentFactoryCodeId = $("#adminAllFactoryCode").val();
			            $("#accommodationTypes").data('kendoDropDownList').select(function (dataItem) {
			                return dataItem.value == "dorm";
			            });
			            $scope.accTypeCode = "dorm"; 
			            $scope.accommodationTypes.change();
			            $scope.updateUnproCount(); //refresh
			        },
			        //select: $scope.dormOrHotel.select,
			        //value: data[0].ID,
			        //text: data[0].Title
			        index: 0 // 当前默认选中项，索引从0开始。
                    ,
			        bindSource:function(fc){
			            dataSrv.getAdminFactoryList().then(function (data) {
			                data.sort(function (a, b) {
			                    return (a["Title"] + '').localeCompare(b["Title"] + '');
			                });
			                //Dorm里，默认选中当前用户所在的真实的facotycode，如果当前用户的factorycode不在列表中（例如GLE的用户是GET的管理员，GLE是没有宿舍功能的，肯定不会出现在列表中）时，
			                //则默认选中第一个，另外就是后这的下拉框要联动

			                $("#adminAllFactoryCode").data("kendoDropDownList").setDataSource(data);

			                $("#adminAllFactoryCode").data('kendoDropDownList').select(function (dataItem) { return dataItem.Id == $scope.currentFactoryCodeId; });
			                $("#adminAllFactoryCode").data('kendoDropDownList').trigger('change');
			            });
			        }
			    };
			    //---------------zack-----------

			    $scope.setPeriodDis = function (ptype) {
			        $scope.periodType = ptype;
			        $scope.periodSelect.initDate();
			    }

			    bindLang();
			}
		]);
})();