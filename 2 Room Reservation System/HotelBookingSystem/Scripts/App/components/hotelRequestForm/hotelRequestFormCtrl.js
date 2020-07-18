"use strict";
(function () {
    angular.module('spsmodule')
        .controller('hotelRequestFromCtrl', ['$scope', 'spsservice', 'hotelRequestService',
            function ($scope, spsservice, hotelRequestService) {
                _hotelRequestService = hotelRequestService;
                initializePeoplePicker('peoplePickerManagersName', 180);
                initializePeoplePicker('peoplePickerUrgentManagersName', 180);
                initializePeoplePicker('peoplePickerUrgentCancelManagersName', 180);

                $('#txtCheckin').kendoDatePicker({
                    change: function () {
                        var value = this.value();
                        $('#dvStaffAndGuest .esq_Room').each(function () {
                            var roomNumId = $(this).attr('idnum');
                            $(this).find(".esq_room_staff").each(function () {
                                var staffNumId = $(this).attr('idnum');
                                if ($(this).find('#esq_Checkin_' + roomNumId + "_" + staffNumId).data("kendoDatePicker").value() == null) {
                                    $(this).find('#esq_Checkin_' + roomNumId + "_" + staffNumId).data("kendoDatePicker").value(value.clone());
                                }
                            });
                        });
                    }
                });
                $('#txtCheckout').kendoDatePicker({
                    change: function () {
                        var value = this.value();

                        $('#dvStaffAndGuest .esq_Room').each(function () {
                            var roomNumId = $(this).attr('idnum');
                            $(this).find(".esq_room_staff").each(function () {
                                var staffNumId = $(this).attr('idnum');
                                if ($(this).find('#esq_Checkout_' + roomNumId + "_" + staffNumId).data("kendoDatePicker").value() == null) {
                                    $(this).find('#esq_Checkout_' + roomNumId + "_" + staffNumId).data("kendoDatePicker").value(value.clone());
                                }
                            });
                        });
                    }
                });


                $scope.hotelRequestForm = {};
                $scope.hotelRequestForm.isUrgent = "false";

                ////////////////////////////////////////////////////////////////////Init
                $scope.purposeList = [];
                $scope.ddlPurposeDB = {
                    dataTextField: "Title",
                    dataValueField: "Id",
                    dataSource: $scope.purposeList,
                    index: 0
                }
                $scope.factoryCodeList = [];
                $scope.ddlDestinationDB = {
                    dataTextField: "Title",
                    dataValueField: "Id",
                    dataSource: $scope.factoryCodeList,
                    index: 0,
                    change: function () {
                        destinationChange(false);
                    }
                }
                function destinationChange(isInitEdit, callback) {
                    var destinationDataItem = $("#ddlDestination").data("kendoDropDownList").dataItem();
                    currentTimeZone = parseInt(destinationDataItem.TimeZone);
                    currentCurrency = destinationDataItem.Currency;
                    var destinationval = destinationDataItem.Id;
                    $('.esq_dormHotel').hide();
                    $('.esq_staff').hide();
                    $('.esq_HotelBody').hide();
                    $('.esq_FormFoot').hide();
                    $('.esq_adminDiv').hide();
                    $('.esq_SelectHotelRadio input').hide();
                    if (destinationval > 0) {
                        hotelRequestService.getFactoryAdminList(destinationval).then(function (data) {
                            if (data.length == 0) {
                                alert('Factory Admin Undefined.');
                                return;
                            }

                            $('#txtIsHotel').val(data[0].ShowHotelFlag ? 1 : 0);
                            $('#txtShowRemark').val(data[0].ShowRemarkFlag ? 1 : 0);
                            $('#txtShowOtherHotels').val(data[0].ShowSelectOtherHotelsFlag ? 1 : 0);
                            $('#txtShowSmokingFlag').val(data[0].ShowSmokingFlag ? 1 : 0);
                            factoryAdminList = data;
                            if (data[0].ShowHotelFlag) {
                                $('.esq_HotelBody').show();
                                $('.esq_OtherHotelButton').show();
                                if (!data[0].ShowSelectOtherHotelsFlag) {
                                    $('.esq_OtherHotelButton').hide();
                                }
                                $('#esq_EnterOtherHotel').hide();
                                $('.esq_selectHoteldiv').show();

                                $('#btnAddRoom').attr("bind-tips", 'AddRoomHint').attr('title', getLang('AddRoomHint'));
                            }
                            else {
                                $('.esq_dormHotel').show();
                                $('#btnAddRoom').attr("bind-tips", 'AddPeopleHint').attr('title', getLang('AddPeopleHint'));
                            }
                            $('.esq_staff').show();
                            $('.esq_FormFoot').show();

                            if (requestState != "Draft") {
                                spsservice.getUsername().then(function (user) {
                                    $.each(data[0].AdminNameId.results, function (i, v) {
                                        if (v == user.get_id()) {
                                            if (data[0].ShowHotelFlag) {
                                                $('.esq_FormFoot').hide();
                                                $('.esq_adminDiv').show();
                                                $('.esq_SelectHotelRadio input').show();
                                                isBookingAdmin = true;
                                            }
                                            else {
                                                isDormAdmin = true;
                                            }
                                        }
                                    });
                                    if (requestState != "Draft" && requestState != "Received" && data[0].ShowHotelFlag && !isBookingAdmin) {
                                        $('.esq_adminRemarks').show();
                                    }
                                }, function (reason) {
                                    alert('getUsername Failed: ' + reason);
                                });
                            }

                            getHotelHtmls(!data[0].ShowHotelFlag, isInitEdit, callback);
                            showOrHideDormField();
                        }, function (reason) {
                            alert('get Factory Admin Failed: ' + reason);
                        });
                    }
                }

                $scope.hotelList = [];
                $scope.ddlHotelList = {
                    dataTextField: "Title",
                    dataValueField: "Id",
                    dataSource: [],
                    index: 0,
                    change: function () {
                        setDDLPreferenceSource($("#ddlPreference2").data("kendoDropDownList").value(), $("#ddlPreference3").data("kendoDropDownList").value(), 1);
                        setDDLPreferenceSource($("#ddlPreference1").data("kendoDropDownList").value(), $("#ddlPreference3").data("kendoDropDownList").value(), 2);
                        setDDLPreferenceSource($("#ddlPreference2").data("kendoDropDownList").value(), $("#ddlPreference1").data("kendoDropDownList").value(), 3);
                    }
                }

                var requestId = getQueryStringParameter("id");
                /*$scope.ccManager = {
                 data:{}
                 };*/
                getGrade();
                getChoicesList();

                if (typeof (requestId) == 'undefined') {

                    SetPurposeDestinationDDL(function () {
                        $("#ddlBookingPurpose").data("kendoDropDownList").select(0);
                    }, function () {
                        $("#ddlDestination").data("kendoDropDownList").select(0);

                        //Get current username and factory code
                        spsservice.getUsername().then(function (user) {
                            //Get current username
                            $scope.hotelRequestForm.requestor = user.get_title();
                            requestorEmail = user.get_email();
                            //Get current user factory code
                            var myRegEx = /([A-Z,a-z,0-9, ]*)\/([A-Z]{3})\/([A-Z,a-z,0-9, ]*)/g;
                            var matches = getMatches($scope.hotelRequestForm.requestor, myRegEx, 2);
                            //$scope.userFactoryCode = matches[0];
                            //debugger;
                            setLanguage(function () { 
                                var userProfileOfficeLocation = getUserProfileOfficeLocation(user.get_loginName()); //also can get department? use code replace below matches[0]
                                if (getUserProfileOfficeLocation == null || userProfileOfficeLocation.length == 0)
                                {
                                    alert(getLang("UserProfileOfficeLocationIsNull"));
                                    return false;
                                }
                            
                                $scope.userFactoryCode = getUserRealFactory(userProfileOfficeLocation); //getUserRealFactory(matches[0]) //added by Zack 20170524 Get title issue
                                $scope.department = $scope.hotelRequestForm.requestor.split('/')[2];
                            
                                builderRooms();

                                $('#RequestStatus').html('Draft');
                            });

                        }, function (reason) {
                            alert('getUsername Failed: ' + reason);
                        });
                    });

                    //Get User Department
                    spsservice.getUserProfile().then(function (userProfile) {
                        $scope.userProfile = userProfile;
                        $scope.hotelRequestForm.department = userProfile['Department'];
                        if (userProfile['Department'].length == 0) {
                            $scope.hotelRequestForm.department = userProfile.PreferredName.split('/')[2];
                        }
                    }, function (reason) {
                        alert('getUserProfile Failed: ' + reason);
                    });
                }
                else if (typeof (requestId) != "undefined" && getQueryStringParameter("id") == "view") {
                }
                else {
                    hotelRequestService.getBookingByRefNumber(requestId).then(function (BookingData) {
                        if (BookingData.length == 0) {
                            alert('RefNumber:' + requestId + " Could not find！");
                        }
                        else {
                            $('#RequestRef').html(BookingData[0].Title);
                            $('#RequestStatus').html(BookingData[0].Status);
                            $('.esq_RequestRef').show();
                            $('.esq_Status').show();
                            $('#txtItemId').val(BookingData[0].Id);
                            $('#txtIsHotel').val(BookingData[0].IsDorm ? 0 : 1);
                            oldRequestState = requestState = BookingData[0].Status;
                            currentGradeId = BookingData[0].StaffGrade;
                            curAuthorId = BookingData[0].AuthorId;
                            $scope.hotelRequestForm.department = BookingData[0].RequestorDepartmentCode;
                            spsservice.getspUserById(curAuthorId).then(function (authorData) {
                                if (authorData.length > 0) {
                                    $scope.hotelRequestForm.requestor = authorData[0].Title;
                                    requestorEmail = authorData[0].Email;
                                }
                            });
                            SetPurposeDestinationDDL(function () {
                                $("#ddlBookingPurpose").data("kendoDropDownList").value(BookingData[0].BookingPurposeCodeId);
                            }, function () {
                                $scope.userFactoryCode = BookingData[0].RequestorFactoryCode;
                                setLanguage();
                                $("#ddlDestination").data("kendoDropDownList").value(BookingData[0].FactoryCodeId);
                                dstcId = BookingData[0].FactoryCodeId;

                                

                                hotelRequestService.getBookingDetailsByRefNumber(BookingData[0].Id, requestState).then(function (DetailsData) {
                                    //builderRooms(DetailsData, BookingData[0].IsDorm);

                                    var emailHtmls = [];
                                    $.each(DetailsData, function (i, v) {
                                        if (!v.Guest) {
                                            emailHtmls.push('<div><input checked="checked" id="ckbConfEmail_' + v.Id + '" email="' + (v.Guest ? v.GuestEmail : v.OfficeEmail) + '" type="checkbox" /><label for="ckbConfEmail_' + v.Id + '">' + (v.Guest ? v.GuestName : v.OfficeNameText) + '</label></div>');
                                        }
                                    });
                                    $('.esq_ConfirmationEmail').html(emailHtmls.join(''));
                                    if (emailHtmls.length == 0) {
                                        $('.esq_ConfirmationEmail_th').hide();
                                    };
                                    $('#NoOfRooms').html(BookingData[0].NumberOfRooms);
                                    if (BookingData[0].Urgent == "Urgent") {
                                        $('#urgentMes').html("URGENT-");
                                    };
                                    $('#requestNumSubject').html(BookingData[0].Title);
                                    $('#NoOfRoomsSubject').html(BookingData[0].NumberOfRooms);
                                    $('#checkInSubject').html(parseOffset(currentTimeZone, new Date(BookingData[0].CheckinDate)).toString().slice(4, 10));
                                    $('#checkOutSubject').html(parseOffset(currentTimeZone, new Date(BookingData[0].CheckoutDate)).toString().slice(4, 10));
                                    $('#NoOfRooms').html(BookingData[0].NumberOfRooms);
                                    if (BookingData[0].Urgent == "Urgent") {
                                        $('#urgentMes').html("URGENT-");
                                    };
                                    if (BookingData[0].NumberOfRooms > 1) {
                                        $('#sSubject').html("s");
                                    }
                                    DetailsData.sort(function (a, b) { return parseInt(a.Title) - parseInt(b.Title) })
                                    var emailTable = "Guests: %0D%0A";
                                    var destinationDataItem = $("#ddlDestination").data("kendoDropDownList").dataItem();
                                    currentTimeZone = parseInt(destinationDataItem.TimeZone);
                                    for (var i = 0,tempTitle=0; i < DetailsData.length; i++) {
                                        if (tempTitle != DetailsData[i].Title) {
                                            emailTable += "<span>----------------------------------------------------------------</span>%0D%0A";
                                            emailTable += "<span bind-lang='Room'>" + getLang("Room") + " " + DetailsData[i].Title + "</span>%0D%0A";
                                            emailTable += "<span>----------------------------------------------------------------</span>%0D%0A";
                                        };
                                        emailTable += "<span id='emailRow_" + (i + 1) + "'>Name : " + DetailsData[i].TravelDocumentName + "</span>%0D%0A";
                                        emailTable += "<span>Gender : " + DetailsData[i].Gender + "</span>%0D%0A";
                                        emailTable += "<span>Check-In Date : " + parseOffset(currentTimeZone, new Date(DetailsData[i].CheckinDate)).toString().slice(4, 15) + "</span>%0D%0A";
                                        emailTable += "<span>Check-out Date : " + parseOffset(currentTimeZone, new Date(DetailsData[i].CheckoutDate)).toString().slice(4, 15) + "</span>%0D%0A";
                                        emailTable += "<span>Smoking : ";
                                        if (DetailsData[i].Smoking == true) {
                                            emailTable += "Yes" + "</span>%0D%0A";
                                        } else {
                                            emailTable += "No" + "</span>%0D%0A";
                                        };
                                        if (DetailsData[i].FlightNumber != null) {
                                            emailTable += "<span>Flight Number : " + DetailsData[i].FlightNumber + "</span>%0D%0A";
                                        };
                                        if (DetailsData[i].ArrivalTime != null) {
                                            emailTable += "<span>Arrival Time : " + DetailsData[i].ArrivalTime + "</span>%0D%0A";
                                        };
                                        if (DetailsData[i].LateCheckinTime != null) {
                                            emailTable += "<span>Late Check-In Time : " + DetailsData[i].LateCheckinTime + "</span>%0D%0A";
                                        };
                                        if (DetailsData[i].PayInPerson == true) {
                                            emailTable += "All charges on guest's own account" + "</span>%0D%0A";
                                        } else {
                                            emailTable += "Room only on company" + "</span>%0D%0A";
                                        };emailTable += "%0D%0A"
                                        tempTitle = DetailsData[i].Title;
                                    };
                                    $('#guestTable').html(emailTable);

                                    destinationChange(true, function () {
                                        builderRooms(DetailsData, BookingData[0].IsDorm);
                                        var iCheckin = parseOffset(currentTimeZone, new Date(BookingData[0].CheckinDate));
                                        iCheckin.setHours(0);
                                        var iCheckout = parseOffset(currentTimeZone, new Date(BookingData[0].CheckoutDate));
                                        iCheckout.setHours(0);
                                        $('#txtCheckin').data("kendoDatePicker").value(iCheckin);
                                        $('#txtCheckout').data("kendoDatePicker").value(iCheckout);

                                        if (BookingData[0].AdminRemarks != null) {
                                            $('#txtAdminRemarks').val(BookingData[0].AdminRemarks);
                                            $('#txtAdminRemarks2').val(BookingData[0].AdminRemarks);
                                        }

                                        if (!BookingData[0].IsDorm) {
                                            if (BookingData[0].Hotel1Id != null) {
                                                $("#ddlPreference1").data("kendoDropDownList").value(BookingData[0].Hotel1Id);

                                                currentCancellationTime = $('#ddlPreference1').data("kendoDropDownList").dataItem().CancellationTime;
                                            }
                                            if (BookingData[0].Hotel2Id != null) {
                                                $("#ddlPreference2").data("kendoDropDownList").value(BookingData[0].Hotel2Id);
                                            }
                                            if (BookingData[0].Hotel3Id != null) {
                                                $("#ddlPreference3").data("kendoDropDownList").value(BookingData[0].Hotel3Id);
                                            }
                                            setDDLPreferenceSource($("#ddlPreference2").data("kendoDropDownList").value(), $("#ddlPreference3").data("kendoDropDownList").value(), 1);
                                            setDDLPreferenceSource($("#ddlPreference1").data("kendoDropDownList").value(), $("#ddlPreference3").data("kendoDropDownList").value(), 2);
                                            setDDLPreferenceSource($("#ddlPreference2").data("kendoDropDownList").value(), $("#ddlPreference1").data("kendoDropDownList").value(), 3);

                                            if (BookingData[0].OtherHotel) {
                                                $('.esq_selectHoteldiv').hide();
                                                $('#esq_EnterOtherHotel').show();

                                                $('#txtOtherHotelName').val(getValue(BookingData[0].OtherHotelName));
                                                $('#txtOtherHotelContactNumber').val(getValue(BookingData[0].OtherHotelContactNumber));
                                                $('#txtOtherHotelAddress').val(getValue(BookingData[0].OtherHotelAddress));
                                                $('#txtOtherHotelRemakrs').val(getValue(BookingData[0].OtherHotelRemakrs));
                                                $('#txtOtherHotelEmail').val(getValue(BookingData[0].Hotel_x0020_Email));
                                                //o_RoomRequest.OtherHotelManagersNameId = 0;

                                                if (BookingData[0].OtherHotelManagersEmail != null && BookingData[0].OtherHotelManagersEmail.length > 0) {
                                                    var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict["peoplePickerManagersName_TopSpan"];
                                                    $("#" + peoplePicker.EditorElementId).val(BookingData[0].OtherHotelManagersEmail);
                                                    peoplePicker.AddUnresolvedUserFromEditor(true);
                                                }
                                            }
                                            else {
                                                $('#esq_EnterOtherHotel').hide();
                                                $('.esq_selectHoteldiv').show();

                                                if (BookingData[0].ReservationHotelId != null) {
                                                    if (BookingData[0].Hotel1Id == BookingData[0].ReservationHotelId) {
                                                        $('.esq_SelectHotelRadio input')[0].checked = true;
                                                    } else if (BookingData[0].Hotel2Id == BookingData[0].ReservationHotelId) {
                                                        $('.esq_SelectHotelRadio input')[1].checked = true;
                                                    } else if (BookingData[0].Hotel3Id == BookingData[0].ReservationHotelId) {
                                                        $('.esq_SelectHotelRadio input')[2].checked = true;
                                                    }
                                                }
                                            }
                                        }

                                    });


                                });
                            });
                        }
                    });
                }

                //生成CCManagerTable
                function createCCManagerTable(detailsData, status) {
                    //status:已安排则直取details，未安排则取CCManager
                    if (detailsData == null || detailsData.length < 1) return;
                    var html = "<table border='1' id='tbCCManger' class='stats'>";
                    html += "<tr bgcolor='#666666'><th bind-lang='Guest'>" + getLang("Guest") + "</th>";
                    html += "<th bind-lang='ManagerAbove'>" + getLang("ManagerAbove") + "</th>";
                    html += "<th bind-lang='ImmediateSupervisor'>" + getLang("ImmediateSupervisor") + "</th>";
                    html += "<th style='display: none;'>IsGuest</th>";
                    html += "<th style='display: none;'>IsExist</th>";
                    html += "<th style='display: none;'>OfficeNameId</th>";
                    html += "<th style='display: none;'>GuestName</th>";
                    html += "<th style='display: none;'>Id</th>";
                    html += "</tr>";

                    if (isBookingAdmin) {
                        var filter = "$top=5000&";
                        hotelRequestService.getCCManager(filter).then(function (data) {
                            var dataGuestKeys = {};
                            var dataOfficeNameKeys = {};
                            if (data != null && data.length > 0) {
                                for (var k = 0; k < data.length; k++) {
                                    if (data[k].Guest) {
                                        if (dataGuestKeys[data[k].GuestName] == null) {
                                            dataGuestKeys[data[k].GuestName] = data[k];
                                        }
                                    } else {
                                        if (dataOfficeNameKeys[data[k].OfficeNameStringId] == null) {
                                            dataOfficeNameKeys[data[k].OfficeNameStringId] = data[k];
                                        }
                                    }

                                }
                            }

                            var ccKeys = {};
                            for (var j = 0; j < detailsData.length; j++) {
                                var managerOrAboveId = '';
                                var immediateSupervisorId = '';
                                var managerOrAboveKey = '';
                                var immediateSupervisorKey = '';
                                var name = '';
                                var ccObj = null;
                                if (detailsData[j].Guest) {
                                    name = detailsData[j].GuestName;
                                    ccObj = dataGuestKeys[detailsData[j].GuestName];

                                } else {
                                    name = detailsData[j].OfficeNameText;
                                    ccObj = dataOfficeNameKeys[detailsData[j].OfficeNameStringId];
                                }
                                managerOrAboveId = ccObj == null ? "" : (ccObj.ManagerOrAboveId == null ? 0 : ccObj.ManagerOrAboveId);

                                immediateSupervisorId = ccObj == null ? [] : (ccObj.ImmediateSupervisorId == null ? [] : ccObj.ImmediateSupervisorId.results);

                                managerOrAboveKey = "ccManagerOrAboveKey" + (j + 1);
                                immediateSupervisorKey = "ccImmediateSupervisorKey" + (j + 1);
                                html = html + "<tr id='row_" + (j + 1) + "'><td>" + name + "</td>";

                                html = html + "<td><div id='" + managerOrAboveKey + "'>" + managerOrAboveId + "</div></td>";
                                html = html + "<td><div id='" + immediateSupervisorKey + "'>" + immediateSupervisorId.join() + "</div></td>";
                                html = html + "<td style='display: none;'>" + detailsData[j].Guest + "</td>";
                                html = html + "<td style='display: none;'>" + (ccObj == null ? "false" : "true") + "</td>";
                                html = html + "<td style='display: none;'>" + (detailsData[j].Guest == true ? "" : detailsData[j].OfficeNameStringId) + "</td>";
                                html = html + "<td style='display: none;'>" + (detailsData[j].Guest == true ? name : "") + "</td>";
                                html = html + "<td style='display: none;'>" + (ccObj == null ? "" : ccObj.Id) + "</td>";
                                html = html + "</tr>";

                                ccKeys[managerOrAboveKey] = managerOrAboveId;
                                ccKeys[immediateSupervisorKey] = immediateSupervisorId;
                            }
                            html += "</table>";

                            if ($('.esq_adminRemarks').is(':hidden')) {
                                $('#txtCCManager').html(html);
                            } else {
                                $('#txtCCManager2').html(html);
                            }

                            for (var m in ccKeys) {
                                if (m.split('SupervisorKey').length > 1) {
                                    initializePeoplePicker(m, 230, true);
                                    var s = SPClientPeoplePicker.SPClientPeoplePickerDict[m + "_TopSpan"];
                                    var ids = ccKeys[m];
                                    $.each(ids, function (ci, cv) {
                                        var oResults = getOfficeUserById(cv);
                                        if (oResults != null && oResults.length > 0) {
                                            $("#" + s.EditorElementId).val(oResults[0].Email);
                                            s.AddUnresolvedUserFromEditor(true);
                                        }
                                    });
                                } else {
                                    initializePeoplePicker(m, 230);
                                    var p = SPClientPeoplePicker.SPClientPeoplePickerDict[m + "_TopSpan"];
                                    var oResults = getOfficeUserById(ccKeys[m]);
                                    if (oResults != null && oResults.length > 0) {
                                        $("#" + p.EditorElementId).val(oResults[0].Email);
                                        p.AddUnresolvedUserFromEditor(true);
                                    }
                                }
                            }
                            _firstRefreshCCManager = false;
                        });
                    }
                }

                //保存CCManager
                function saveCCManager() {
                    //if (ccManage.length < 1)return;
                    var tableObj = document.getElementById('tbCCManger');
                    CCManagerIds = [];
                    var CCManagerIdsStr = '';
                    for (var i = 1; i < tableObj.rows.length; i++) {    //遍历Table的所有Row，第二行开始
                        if ($(tableObj.rows[i]).context.style.display == 'none') {
                            continue;
                        }
                        var obj = {};
                        obj.Title = tableObj.rows[i].cells[0].innerText;
                        var ccObj = {};
                        var m1 = "ccManagerOrAboveKey" + i;
                        var p1 = SPClientPeoplePicker.SPClientPeoplePickerDict[m1 + "_TopSpan"];
                        var userManagerOrAbove = p1.GetAllUserInfo();
                        if (userManagerOrAbove.length > 0) {
                            var id = getOfficeNameId(userManagerOrAbove[0].Key);
                            ccObj.ManagerOrAboveId = id;
                            if (CCManagerIdsStr.indexOf("," + id + ",") == -1) {
                                CCManagerIds.push(id);
                                CCManagerIdsStr += ("," + id + ",");
                            }
                        } else {
                            ccObj.ManagerOrAboveId = 0;
                        }
                        var m2 = "ccImmediateSupervisorKey" + i;
                        var p2 = SPClientPeoplePicker.SPClientPeoplePickerDict[m2 + "_TopSpan"];
                        var usersImmediateSupervisor = p2.GetAllUserInfo();
                        var usersImmediateSupervisorIds = [];
                        var usersImmediateSupervisorStr = '';
                        if (usersImmediateSupervisor.length > 0) {
                            $.each(usersImmediateSupervisor, function (ri, rv) {
                                if (rv.IsResolved) {
                                    var keyId = getOfficeNameId(rv.Key);
                                    if (usersImmediateSupervisorStr.indexOf("," + keyId + ",") == -1) {
                                        usersImmediateSupervisorIds.push(keyId);
                                        usersImmediateSupervisorStr += ("," + keyId + ",");
                                    }
                                    if (CCManagerIdsStr.indexOf("," + keyId + ",") == -1) {
                                        CCManagerIds.push(keyId);
                                        CCManagerIdsStr += ("," + keyId + ",");
                                    }
                                }
                            });
                        }
                        ccObj.ImmediateSupervisorId = {
                            "results": usersImmediateSupervisorIds
                        };
                        ccObj.Guest = tableObj.rows[i].cells[3].innerText == 'true' ? true : false;
                        ccObj.OfficeNameId = tableObj.rows[i].cells[5].innerText == '' ? 0 : parseInt(tableObj.rows[i].cells[5].innerText);
                        ccObj.GuestName = tableObj.rows[i].cells[6].innerText;
                        if (tableObj.rows[i].cells[4].innerText == "true") {
                            //update
                            var Id = tableObj.rows[i].cells[7].innerText;
                            hotelRequestService.editCCManagerReq(ccObj, Id);
                        } else {
                            //create
                            hotelRequestService.createCCManagerReq(ccObj);
                        }
                    }
                }

                function setLanguage(alertUserProfile) {
                    var ll = localStorageItem("HBS.langDefault");
                    if (ll == null) {
                        ll = 'en-us';
                        $.each($scope.factoryCodeList, function (i, o) {
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

                    switchingLanguageCallback(function () {
                        if (alertUserProfile != null)
                        {
                            alertUserProfile();
                        }

                        $('#dvStaffAndGuest .esq_Room').each(function () {
                            var roomNumId = $(this).attr("idnum");
                            $(this).find(".esq_room_staff").each(function () {
                                var staffNumId = $(this).attr("idnum");
                                var genderValue = $(this).find('#esq_Gender_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").select();

                                var GenderMale = getLang('GenderMale');
                                var GenderFemale = getLang('GenderFemale');
                                var goArry = [{ "Id": "Male", "Text": GenderMale }, {
                                    "Id": "Female", "Text": GenderFemale
                                }];

                                $(this).find('#esq_Gender_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").setDataSource(goArry);
                                $(this).find('#esq_Gender_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").select(genderValue);

                                $("[bind-tips]").each(function (i, obj) {
                                    var key = obj.attributes["bind-tips"].value;
                                    obj.title = getLang(key);
                                });
                                $('.esq_TravelName').attr("placeholder", getLang('TravelNameHint'));
                            });
                        });
                    });
                }

                function SetPurposeDestinationDDL(callback1, callback2) {
                    hotelRequestService.getPurposeList().then(function (data) {
                        $scope.purposeList = data;
                        $("#ddlBookingPurpose").data("kendoDropDownList").setDataSource(data);
                        callback1();
                    });

                    spsservice.factoryCodeDataSource().then(function (data) {
                        $scope.factoryCodeList = data;
                        factoryCodes = data;
                        _destination = [];
                        _destination.push({ "Title": "", "Id": 0, "TimeZone": "0", "Currency": "" });
                        $.each(data, function (i, e) {
                            _destination.push({
                                "Title": e.Title,
                                "Id": e.Id,
                                "TimeZone": e.TimeZone,
                                "Currency": e.Currency
                            });
                        });
                        $("#ddlDestination").data("kendoDropDownList").setDataSource(_destination);
                        callback2();
                    });
                }

                getHotelHtmls = function (isDorm, isInitEdit, callback) {
                    if (isDorm) {
                        if (typeof (callback) == "function") {
                            callback();
                        }
                    } else {
                        var id = $("#ddlDestination").data("kendoDropDownList").value();

                        if (!isInitEdit) {
                            currentGradeId = getCurrentGrade();
                        }
                        hotelRequestService.getHotelList(id, currentGradeId).then(function (data) {
                            hotelSources = data;

                            if (data.length == 0) {
                                $('.esq_SelectHotel').hide();
                                $("#tabstripHotel").html("<p>" + getLang("NotFindHotel") + "</p>");
                            } else {
                                $('.esq_SelectHotel').show();
                                var hoterHtmls = [];
                                var hoterHtmlContents = [];
                                hoterHtmls.push('<ul>');
                                for (var i = 0; i < data.length; i++) {
                                    if (i == 0) {
                                        hoterHtmls.push('<li class="k-state-active">' + data[i].Title + '</li>');
                                    }
                                    else {
                                        hoterHtmls.push('<li>' + data[i].Title + '</li>');
                                    }
                                    hoterHtmlContents.push('<div><table style="margin:0 auto;width:100%"><tr><td style="width:190px;vertical-align: top;" bind-lang="Hotel">Hotel</td><td style="width:300px;vertical-align: top;">' + data[i].Title + '</td><td style="width:360px;vertical-align: top;" bind-lang="RoomRates">Room Rates:</td><td style="vertical-align: top;" bind-lang="Remarks">Remarks</td></tr>');

                                    hoterHtmlContents.push('<tr><td style="vertical-align: top;"><div bind-lang="Cancellation">Cancellation</div><div style="margin-top: 5px;" bind-lang="Address">Address</div></td><td style="vertical-align: top;"><div>' + (data[i].CancellationTime == null ? '&nbsp;' : data[i].CancellationTime) + '</div><div style="margin-top: 5px;">' + (data[i].Address == null ? '' : data[i].Address) + '</div></td>');

                                    hoterHtmlContents.push('<td style="vertical-align: top;"><div style="margin-right: 8px;">' + (data[i].RoomDescription == null ? '' : data[i].RoomDescription) + '</div><div class="esq_hotelPrice" style="margin-top: 5px;">');
                                    hoterHtmlContents.push('<div><div bind-lang="HighSeason">High Season</div><div>' + (data[i].HighSeasonPrice||'') + ' ' + currentCurrency + '</div></div>');
                                    hoterHtmlContents.push('<div><div bind-lang="LowSeason">Low Season</div><div>' + (data[i].LowSeasonPrice||'') + ' ' + currentCurrency + '</div></div>');
                                    hoterHtmlContents.push('<div><div bind-lang="PublicSeason">Public Season</div><div>' + (data[i].PublicHolidayPrice||'') + ' ' + currentCurrency + '</div></div>');
                                    hoterHtmlContents.push('</div></td>');

                                    hoterHtmlContents.push('<td style="vertical-align: top;word-break:break-all">' + (data[i].Remarks == null ? '' : data[i].Remarks) + '</td></tr>');

                                    hoterHtmlContents.push('</table></div>');
                                }
                                hoterHtmls.push('</ul>');
                                hoterHtmls.push(hoterHtmlContents.join(''));
                                $("#tabstripHotel").html(hoterHtmls.join(''));
                                $("#tabstripHotel").kendoTabStrip({
                                    animation: {
                                        open: {
                                            effects: "fadeIn"
                                        }
                                    }
                                });

                                $("#tabstripHotel [bind-lang]").each(function (l, obj) {
                                    objBindLang(obj);
                                });

                                var tempHotelList = [];
                                tempHotelList.push({
                                    "Id": 0,
                                    "Title": "",
                                    "CancellationTime": 0,
                                    "HotelLocalName": "",
                                    "Address": "",
                                    "HotelLocalAddress": ""
                                });
                                $.each(data, function (i, v) {
                                    tempHotelList.push(v);
                                });
                                if (tempHotelList.length == 1) {
                                    tempHotelList[0].Title = 'None';
                                }
                                $("#ddlPreference1").data("kendoDropDownList").setDataSource(tempHotelList);
                                $("#ddlPreference1").data("kendoDropDownList").select(0);
                                $("#ddlPreference2").data("kendoDropDownList").setDataSource(tempHotelList);
                                $("#ddlPreference2").data("kendoDropDownList").select(0);
                                $("#ddlPreference3").data("kendoDropDownList").setDataSource(tempHotelList);
                                $("#ddlPreference3").data("kendoDropDownList").select(0);

                                if (typeof (callback) == "function") {
                                    callback();
                                }
                            }
                        }, function (reason) {
                            $(".esq_selectHoteldiv").hide();
                            alert('getHotelList Failed: ' + reason);
                        });
                    }
                }

                function builderRooms(detailset, IsDorm) {
                    spsservice.getCostCenterListByFactoryCode().then(function (data) {
                        subFactorys = [];
                        $.each(data, function (fi, fv) {
                            var hasSub = true;
                            $.each(subFactorys, function (si, fi) {
                                if (fv.SubFactory == fi.SubFactory) {
                                    hasSub = false;
                                }
                            });
                            if (hasSub) {
                                subFactorys.push(fv);
                            }
                        });
                        subFactorys.sort(function (obj1, obj2) {
                            var val1 = obj1.SubFactory;
                            var val2 = obj2.SubFactory;
                            if (val1 < val2) {
                                return -1;
                            } else if (val1 > val2) {
                                return 1;
                            } else {
                                return 0;
                            }
                        });

                        AddRoom(data, detailset, IsDorm);

                        if (detailset == undefined && IsDorm == undefined) {
                            var $staff = $("#esq_Room_1 .esq_room_staff[idNum='1']");
                            var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[$staff.find('.peoplePickerOfficeName').attr('id') + "_TopSpan"];
                            $("#" + peoplePicker.EditorElementId).val(requestorEmail);
                            peoplePicker.AddUnresolvedUserFromEditor(true);

                            var fcId = "";
                            $.each(subFactorys, function (i, v) {
                                if (v.SubFactory && (v.SubFactory.toLowerCase() == $scope.userFactoryCode.toLowerCase())) {
                                    $staff.find('#esq_FactoryCode_1_1').data("kendoDropDownList").value(v.Id);
                                    fcId = v.SubFactory;
                                }
                            });
                            var ccList = [];
                            var ccId = 0;
                            if (fcId.length > 0) {
                                $.each(data, function (i, e) {
                                    if (e.SubFactory == fcId) {
                                        ccList.push({
                                            "DepartmentCode": e.DepartmentCode,
                                            "Id": e.Id,
                                            "CCPersonId": e.CCPersonId
                                        });
                                        if (e.DepartmentCode && (e.DepartmentCode.toLowerCase() == $scope.department.toLowerCase())) {
                                            ccId = e.Id;
                                        }
                                    }
                                });
                            }
                            $staff.find('#esq_Department_1_1').data("kendoDropDownList").setDataSource(ccList);
                            if (ccId > 0) {
                                $staff.find('#esq_Department_1_1').data("kendoDropDownList").value(ccId);
                            }
                        }
                        else {
                            if (IsDorm) {
                                ViewDormForm();
                            } else {
                                ViewForm(requestId);
                            }
                            hideSubmitBtn();

                            setTimeout(function () {
                                getConfigCcControl(IsDorm);

                                var tstringify = getFormDataStr();
                                formStringify = tstringify.formStringify;
                                someFormStringify = tstringify.someFormStringify;
                                otherFormStringify = tstringify.otherFormStringify;

                                var tempDStr = getDetailFormStr();
                                detailStringify = tempDStr.detailStringify;
                                someFieldstr = tempDStr.someFieldstr;
                                otherFieldstr = tempDStr.otherFieldstr;
                            }, 1000);
                        }

                        if (isBookingAdmin) {
                            createCCManagerTable(detailset, requestState);
                        } else {
                            $('.esq_adminCCManager').hide();
                        }

                    });
                }

                function requestSave(isUrgent, SuccessfullyStr) {
                    $('.esq_FormFoot').hide();
                    $('.esq_adminFoot').hide();
                    // $('.esq_adminCCManager').hide();
                    if (isUrgent == undefined) {
                        isUrgent = false;
                    }
                    var waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose("Loading...", "", 90, 200);
                    try {
                        if (isBookingAdmin && (requestState == 'Received' || requestState == 'Processed')) {
                            saveCCManager();
                        }
                        var isEdit = !(isCopy || requestId == undefined);
                        var o_RoomRequest = getFormData($scope.userFactoryCode, isEdit, isUrgent);
                        if (isEdit) {
                            var actionResult = getDetailFormData($('#txtItemId').val(), isUrgent);
                            if (actionResult) {
                                if (o_RoomRequest.IsDorm && o_RoomRequest.Status != 'Draft' && oldRequestState != 'Draft') {
                                    if (checkRefStatus($('#txtItemId').val())) {
                                        o_RoomRequest.Status = "Received";
                                    } else {
                                        if (oldRequestState == "Received") {
                                            o_RoomRequest.Status = "Processed";
                                        } else {
                                            o_RoomRequest.Status = oldRequestState;
                                        }
                                    }
                                }

                                hotelRequestService.editBookingReq(o_RoomRequest, $('#txtItemId').val()).then(function (response2) {
                                    waitDialog.close(SP.UI.DialogResult.OK);
                                    openEsqDialog(1, getLang(SuccessfullyStr));
                                }, function (reason2) {
                                    waitDialog.close(SP.UI.DialogResult.OK);
                                    openEsqDialog(2, reason2);
                                    showFoot();
                                    //showSubmit('#SaveRequest', "Save");
                                });
                            }
                            else {
                                waitDialog.close(SP.UI.DialogResult.OK);
                                showFoot();
                            }
                        } else {
                            hotelRequestService.createBookingReq(o_RoomRequest).then(function (response2) {
                                var actionResult = getDetailFormData(response2.Id, isUrgent);
                                waitDialog.close(SP.UI.DialogResult.OK);
                                if (actionResult) {
                                    openEsqDialog(1, getLang(SuccessfullyStr));
                                } else {
                                    showFoot();
                                }
                            }, function (reason2) {
                                waitDialog.close(SP.UI.DialogResult.OK);
                                openEsqDialog(2, getLang('ErrorMsg'));
                                showFoot();
                                //showSubmit('#SaveRequest', "Save");
                            });
                        }
                    }
                    catch (e) {
                        waitDialog.close(SP.UI.DialogResult.OK);
                        alert(e);
                        showFoot();
                    }
                }

                ////////////////////////////////////////////////////////////////////InitEnd


                // validation rules for from validator
                //$scope.formValidationRules = {
                //    rules: {
                //        //Check-out date must later than check-in date
                //        checkInOutDateRange: function (input) {
                //            if (input.is("[name='check-out date'")) {
                //                return ($scope.hotelRequestForm.checkIn < $scope.hotelRequestForm.checkOut);
                //            }
                //            return true;
                //        }
                //    },
                //    messages: {
                //        checkInOutDateRange: "Check-out date must later than Check-in date."
                //    }
                //}

                function RequiredMessage() {
                    var message = '';
                    var sCheckin = $('#txtCheckin').data("kendoDatePicker").value();
                    if (sCheckin == null) {
                        message += (getLang('Checkin') + '\n'); //'Checkin\n';
                    }
                    var sCheckout = $('#txtCheckout').data("kendoDatePicker").value();
                    if (sCheckout == null) {
                        message += (getLang('Checkout') + '\n'); //'Checkout\n';
                    }
                    if ($('#dvStaffAndGuest .esq_Room').length == 0) {
                        message += (getLang('plsAddStaffOrGuest') + '\n'); //"请添加一名员工或guest.\n";
                    }
                    if (message.length > 0) {
                        return message;
                    }
                    var hasGuestName = true;
                    var hasGuestEmail = true;
                    var hasErrorGuestEmail = true;
                    var hasStaffName = true;
                    var hasFactoryCode = true;
                    var hasDepartment = true;
                    var haspeoplePickerCCPersonusers = true;
                    var hasTravelName = true;
                    var hasMobileNumbers = true;
                    var hasCheckin = true;
                    var hasCheckout = true;
                    var hasCheckoutGtin = true;
                    var hasTrueCheckin = true;
                    var hasTrueCheckout = true;
                    var hasTrueCheckoutGtin = true;
                    var hasEqDate = false;
                    var hasEqDate2 = false;
                    var hasTrueEmail = true;
                    var hasLessNow = false;

                    if (sCheckin != null && sCheckout != null) {
                        if (sCheckin.getTime() >= sCheckout.getTime()) {
                            hasCheckoutGtin = false;
                        }
                    }

                    $('#dvStaffAndGuest .esq_Room').each(function () {
                        var roomNumId = $(this).attr('idnum');
                        $(this).find(".esq_room_staff").each(function () {
                            var staffNumId = $(this).attr('idnum');

                            if ($(this).find('#esq_FactoryCode_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").value() == 0) {
                                hasFactoryCode = false;
                            }
                            var tempDepartmentVal = $(this).find('#esq_Department_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").value();
                            if (tempDepartmentVal == null || tempDepartmentVal == 0) {
                                hasDepartment = false;
                            }
                            if (!getIsDorm()) {
                                //var peoplePickerCCPerson = SPClientPeoplePicker.SPClientPeoplePickerDict[$(this).find('.peoplePickerCCPerson').attr('id') + "_TopSpan"];
                                //var peoplePickerCCPersonusers = peoplePickerCCPerson.GetAllUserInfo();
                                //if (peoplePickerCCPersonusers.length == 0) {
                                //    haspeoplePickerCCPersonusers = false;
                                //}
                            }
                            var xGuest = $(this).find('.esq_Guest').prop("checked");
                            if (xGuest) {
                                if ($.trim($(this).find('.esq_GuestName').val()).length == 0) {
                                    hasGuestName = false;
                                }
                                //if ($.trim($(this).find('.esq_GuestEmail').val()).length == 0) {
                                //    hasGuestEmail = false;
                                //} else {
                                //    var Regex = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                                //    hasTrueEmail = Regex.test($.trim($(this).find('.esq_GuestEmail').val()));
                                //}
                                //if (hasGuestEmail && hasTrueEmail) {
                                //    if ($.trim($(this).find('.esq_GuestEmail').val()).toLowerCase().indexOf("@esquel.com") == -1) {
                                //        hasErrorGuestEmail = false;
                                //    }
                                //}
                                if (!getIsDorm()) {
                                    if ($(this).find('.esq_PayPerson').prop("checked")) {
                                        haspeoplePickerCCPersonusers = hasFactoryCode = hasDepartment = true;
                                    }
                                }
                            }
                            else {
                                var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[$(this).find('.peoplePickerOfficeName').attr('id') + "_TopSpan"];
                                var users = peoplePicker.GetAllUserInfo();
                                if (users.length == 0) {
                                    hasStaffName = false;
                                }
                            }
                            if (!getIsDorm()) {
                                if ($.trim($(this).find('.esq_TravelName').val()).length == 0) {
                                    hasTravelName = false;
                                }
                            }
                            if ($.trim($(this).find('.esq_MobileNumbers').val()).length == 0) {
                                hasMobileNumbers = false;
                            }
                            var xCheckin = $(this).find('#esq_Checkin_' + roomNumId + "_" + staffNumId).data("kendoDatePicker").value();
                            if (xCheckin == null) {
                                hasCheckin = false;
                            }
                            var xCheckout = $(this).find('#esq_Checkout_' + roomNumId + "_" + staffNumId).data("kendoDatePicker").value();
                            if (xCheckout == null) {
                                hasCheckout = false;
                            }
                            if (hasCheckin && hasCheckout && sCheckin != null && sCheckout != null && hasCheckoutGtin) {
                                if (xCheckin.getTime() < sCheckin.getTime() || xCheckin.getTime() >= sCheckout.getTime()) {
                                    hasTrueCheckin = false;
                                }
                                if (xCheckout.getTime() <= sCheckin.getTime() || xCheckout.getTime() > sCheckout.getTime()) {
                                    hasTrueCheckout = false;
                                }
                                if (hasTrueCheckin && hasTrueCheckout && xCheckin.getTime() >= xCheckout.getTime()) {
                                    hasTrueCheckoutGtin = false;
                                }
                                if (hasTrueCheckin && hasTrueCheckout && hasTrueCheckoutGtin) {
                                    if (xCheckin.getTime() == sCheckin.getTime()) {
                                        hasEqDate = true;
                                    }
                                    if (xCheckout.getTime() == sCheckout.getTime()) {
                                        hasEqDate2 = true;
                                    }
                                    if (oldRequestState.length > 0 && oldRequestState == "Checked in") {
                                        var localCheckOut = parseLocal(currentTimeZone, xCheckout.clone());
                                        if (localCheckOut.clone().clearTime().getTime() < (new Date()).clone().clearTime().getTime()) {
                                            hasLessNow = true;
                                        }
                                    }
                                }
                            }
                        });
                    });
                    if (!hasGuestName) {
                        message += (getLang("GuestName") + "\n");
                    }
                    if (!hasGuestEmail) {
                        message += (getLang("GuestEmail") + "\n");
                    }
                    if (!hasErrorGuestEmail) {
                        message += (getLang("ErrorGuestEmail") + "\n");
                    }
                    if (!hasTrueEmail) {
                        message += (getLang("EmailError") + "\n");
                    }
                    if (!hasStaffName) {
                        message += (getLang("OfficeName") + "\n");
                    }
                    if (!hasFactoryCode) {
                        message += (getLang("FactoryCode") + "\n");
                    }
                    if (!hasDepartment) {
                        message += (getLang("Department") + "\n");
                    }
                    if (!haspeoplePickerCCPersonusers) {
                        message += (getLang("CCPerson") + "\n");
                    }
                    if (!hasTravelName) {
                        message += (getLang("TravelName") + "\n");
                    }
                    if (!hasMobileNumbers) {
                        message += (getLang("PhoneNumber") + "\n");
                    }
                    if (!hasCheckin) {
                        message += (getLang("Checkin") + "\n");
                    }
                    if (!hasCheckout) {
                        message += (getLang("Checkout") + "\n");
                    }
                    if (!hasCheckoutGtin) {
                        message += (getLang("CheckinLessCheckout") + "\n");
                    }
                    if (!hasTrueCheckin) {
                        message += (getLang("CheckinScopeRequestor") + "\n");
                    }
                    if (!hasTrueCheckout) {
                        message += (getLang("CheckoutScopeRequestor") + "\n");
                    }
                    if (!hasTrueCheckoutGtin) {
                        message += (getLang("CheckinLessCheckout") + "\n");
                    }
                    if ((!hasEqDate || !hasEqDate2) && hasCheckin && hasCheckout && hasCheckoutGtin) {
                        message += (getLang("PlsSureSameCheckinAndCheckOut") + "\n");
                    }
                    if (hasLessNow) {
                        message += (getLang("CheckoutMustGEToday") + "\n");
                    }

                    if ($('.esq_dormHotel').is(':hidden')) {
                        if ($("#esq_EnterOtherHotel").is(':hidden')) {
                            if ($('#ddlPreference1').data("kendoDropDownList").value() == 0) {
                                message += (getLang("Preference1") + "\n");
                            }
                            if (hotelSources.length > 1) {
                                if ($('#ddlPreference2').data("kendoDropDownList").value() == 0) {
                                    if (hotelSources.length > 2 || $('#ddlPreference3').data("kendoDropDownList").value() == 0) {
                                        message += (getLang("Preference2") + "\n");
                                    }
                                }
                            }
                            if (hotelSources.length > 2) {
                                if ($('#ddlPreference3').data("kendoDropDownList").value() == 0) {
                                    message += (getLang("Preference3") + "\n");
                                }
                            }
                        }
                        else {
                            if ($.trim($('#txtOtherHotelName').val()).length == 0) {
                                message += (getLang("HotelName") + "\n");
                            }
                            if ($.trim($('#txtOtherHotelContactNumber').val()).length == 0) {
                                message += (getLang("ContactNumber") + "\n");
                            }
                            if ($.trim($('#txtOtherHotelAddress').val()).length == 0) {
                                message += (getLang("Address") + "\n");
                            }
                            if ($.trim($('#txtOtherHotelRemakrs').val()).length == 0) {
                                message += (getLang("Remarks") + "\n");
                            }
                            if ($.trim($('#txtOtherHotelEmail').val()).length == 0) {
                                message += (getLang("Hotel Email") + "\n");
                            }
                            var mpeoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict.peoplePickerManagersName_TopSpan;
                            var musers = mpeoplePicker.GetAllUserInfo();
                            if (musers.length == 0) {
                                message += (getLang("ManagersName") + "\n");
                            }
                        }
                    }
                    return message;
                }

                //-------------------------------
                // UI Binding Functions
                //-------------------------------
                //On Email1(Email Hotel) button click
                $scope.onEmail1 = function (preferenceID) {
                    var reciepient = '';
                    //Selecting ID for the chosen Option
                    var id = $(preferenceID).data("kendoDropDownList").value();
                    var hotelName = 'Booking Officer';
                    for (var i = 0; i < hotelSources.length; i++) {
                        //Compare the ID with possible ID to get the correct EmailAddress and Hotel Name
                        if (id == hotelSources[i].ID) {
                            if (hotelSources[i].EmailAddress != null) {
                                reciepient = hotelSources[i].EmailAddress;
                            } else {
                                reciepient = '';
                            }
                            if (hotelSources[i].Title != null) { hotelName = hotelSources[i].Title; };
                            break;
                        }
                    };
                    //Updating HotelName and Subject of Email
                    $('#HName').html(hotelName);
                    var subject = document.getElementById('autoHotelEmailSubject').innerText;
                    //Loading the Body of Email
                    var body = document.getElementById('autoHotelEmailBody').innerText;
                    //Adding an event of opening a mail when the link is clicked
                    window.location.href = "mailto:"+ reciepient+"?body=" + body + "&subject=" + subject;
                };
                //On Email4(Email Hotel) button click
                $scope.onEmail4 = function () {
                    $('#HName').html("Booking Officer");
                    var reciepient = $('#txtOtherHotelEmail').val();
                    var subject = document.getElementById('autoHotelEmailSubject').innerText;
                    var body = document.getElementById('autoHotelEmailBody').innerText;
                    window.location.href = "mailto:" + reciepient + "?body=" + body + "&subject=" + subject;
                };

                //On Submit button click
                $scope.onSubmit = function () {
                    var message = RequiredMessage();
                    if (message.length > 0) {
                        message = getLang("PlsFillFields") + "\r\n" + message;
                        alert(message);
                        return;
                    }
                    if (!getPublicHolidays()) {
                        return;
                    }
                    if (hasUrgent()) {
                        if (isDormAdmin) {
                            requestState = "Received";
                            requestSave(true, "Successfully");
                        } else {
                            if (initIsUrgent && !isCopy) {
                                $('#changeTime').html(getLang("BtnBack"));
                            }
                            $('#urgentAlertHtml').html(getLang("UrgentAlertHtml").replace("##", "" + currentCancellationTime));
                            var myWindow = $("#urgentDiv");
                            if ($('#urgentDiv_wnd_title').length > 0) {
                                $('#urgentDiv_wnd_title').html(getLang("UrgentBooking"));
                            }
                            myWindow.kendoWindow({
                                width: "600px",
                                title: getLang("UrgentBooking"),
                                actions: ["Close"],
                                modal: true
                            });
                            myWindow.data("kendoWindow").center().open();
                        }
                    }
                    else {
                        requestState = "Received";
                        requestSave(false, "Successfully");
                    }
                }

                $scope.onChangeTime = function () {
                    $("#urgentDiv").data("kendoWindow").close();
                }

                $scope.onMarkUrgent = function () {
                    $("#urgentDiv").data("kendoWindow").close();
                    var myWindow = $("#urgentFormDiv");
                    if ($('#urgentFormDiv_wnd_title').length > 0) {
                        $('#urgentFormDiv_wnd_title').html(getLang("UrgentBooking"));
                    }
                    myWindow.kendoWindow({
                        width: "600px",
                        title: getLang("UrgentBooking"),
                        actions: ["Close"],
                        modal: true
                    });
                    myWindow.data("kendoWindow").center().open();
                }

                $scope.onUrgentSubmit = function () {
                    var message = '';
                    var mpeoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict.peoplePickerUrgentManagersName_TopSpan;
                    var musers = mpeoplePicker.GetAllUserInfo();
                    if (musers.length == 0) {
                        message += (getLang("UrgentManagersName") + "\n");
                    }
                    if ($.trim($('#txtUrgentRmarks').val()).length == 0) {
                        message += (getLang("UrgentRemarks") + "\n");
                    }
                    if (message.length > 0) {
                        message = getLang("PlsFillFields") + "\r\n" + message;
                        alert(message);
                        return;
                    }
                    requestState = "Received";
                    $("#urgentFormDiv").data("kendoWindow").close();
                    requestSave(true, "Successfully");
                }

                $scope.onUrgentFormCancel = function () {
                    $("#urgentFormDiv").data("kendoWindow").close();
                }

                function CancelFunction(isu) {
                    $('.esq_adminFoot').hide();
                    $('.esq_adminCCManager').hide();
                    $('.esq_FormFoot').hide();
                    var hasDrom = getIsDorm();
                    var isBooking = hasDrom ? false : BookingCharged();
                    var waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose("Loading...", "", 90, 200);
                    var o_RoomRequest = {};
                    o_RoomRequest.Status = "Cancelled";
                    o_RoomRequest.WorkflowsLoop = false;
                    o_RoomRequest.UrgentCancel = "Standard";
                    o_RoomRequest.UrgentCancelManagersNameId = 0;
                    if (isBookingAdmin) {
                        o_RoomRequest.AdminRemarks = $('#txtAdminRemarks').val();
                    }
                    o_RoomRequest.UrgentCancelManagersEmail = "";
                    o_RoomRequest.UrgentCancelRemarks = "";
                    if (isu && !isDormAdmin) {
                        o_RoomRequest.UrgentCancel = 'Urgent';
                        var peoplePickerUrgent = SPClientPeoplePicker.SPClientPeoplePickerDict.peoplePickerUrgentCancelManagersName_TopSpan;
                        var usersUrgent = peoplePickerUrgent.GetAllUserInfo();
                        if (usersUrgent.length > 0) {
                            o_RoomRequest.UrgentCancelManagersNameId = getOfficeNameId(usersUrgent[0].Key);
                            o_RoomRequest.UrgentCancelManagersEmail = getOfficeEmail(usersUrgent[0]);
                        }
                        o_RoomRequest.UrgentCancelRemarks = $('#txtUrgentCancelRmarks').val();
                    }
                    hotelRequestService.editBookingReq(o_RoomRequest, $('#txtItemId').val()).then(function (response2) {
                        var delResult = true;
                        $('#dvStaffAndGuest .esq_Room').each(function () {
                            var roomNumId = $(this).attr("idnum");
                            $(this).find(".esq_room_staff").each(function () {
                                if (!delResult) {
                                    return;
                                }
                                var staffNumId = $(this).attr("idnum");
                                var tempId = parseInt($(this).attr('tempid'));
                                var intime = parseInt($(this).attr('intime'));
                                if (tempId > 0) {
                                    delResult = cancelDetail(isu, hasDrom, isBooking, tempId, intime);
                                }
                            })
                        });

                        if (delResult) {
                            var delIds = $('#txtDetailItemId').val();
                            if (delIds.length > 0) {
                                delIds = delIds.split(',');
                                $.each(delIds, function (i, v) {
                                    if (!delResult) {
                                        return;
                                    }
                                    if (v.length > 0) {
                                        delResult = cancelDetail(isu, hasDrom, isBooking, parseInt(v.split(":")[0]), parseInt(v.split(":")[1]));
                                    }
                                });
                            }
                        }

                        waitDialog.close(SP.UI.DialogResult.OK);

                        if (delResult) {
                            openEsqDialog(1, getLang("CancelSuccessInfo"));
                        }
                        else {
                            showFoot();
                        }
                    }, function (reason2) {
                        waitDialog.close(SP.UI.DialogResult.OK);
                        openEsqDialog(2, reason2);
                        showFoot();
                        //showSubmit('#SaveRequest', "Save");
                    });
                }

                $scope.onCancel = function () {
                    if (requestState == "Received" || requestState == "Processed") {
                        if (confirm(getLang("SureWantCancel"))) {
                            if (!getPublicHolidays()) {
                                return;
                            }
                            if (hasUrgent()) {
                                if (isDormAdmin) {
                                    CancelFunction(true);
                                } else {
                                    $('#urgentCancelAlertHtml').html(getLang("UrgentCancelAlertHtml").replace("##", "" + currentCancellationTime));
                                    var myWindow = $("#urgentCancelDiv");
                                    if ($('#urgentCancelDiv_wnd_title').length > 0) {
                                        $('#urgentCancelDiv_wnd_title').html(getLang("UrgentCancel"));
                                    }
                                    myWindow.kendoWindow({
                                        width: "600px",
                                        title: getLang("UrgentCancel"),
                                        actions: ["Close"],
                                        modal: true
                                    });
                                    myWindow.data("kendoWindow").center().open();
                                }
                            }
                            else {
                                CancelFunction(false);
                            }
                        }
                    }
                }

                $scope.onChangeTimeCancel = function () {
                    $("#urgentCancelDiv").data("kendoWindow").close();
                }

                $scope.onMarkUrgentCancel = function () {
                    $("#urgentCancelDiv").data("kendoWindow").close();
                    var myWindow = $("#urgentCancelFormDiv");
                    if ($('#urgentCancelFormDiv_wnd_title').length > 0) {
                        $('#urgentCancelFormDiv_wnd_title').html(getLang("UrgentCancel"));
                    }
                    myWindow.kendoWindow({
                        width: "600px",
                        title: getLang("UrgentCancel"),
                        actions: ["Close"],
                        modal: true
                    });
                    myWindow.data("kendoWindow").center().open();
                }

                $scope.onUrgentCancelSubmit = function () {
                    var message = '';
                    var mpeoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict.peoplePickerUrgentCancelManagersName_TopSpan;
                    var musers = mpeoplePicker.GetAllUserInfo();
                    if (musers.length == 0) {
                        message += (getLang("UrgentManagersName") + "\n");
                    }
                    if ($.trim($('#txtUrgentCancelRmarks').val()).length == 0) {
                        message += (getLang("UrgentCancelRemarks") + "\n");
                    }
                    if (message.length > 0) {
                        message = getLang("PlsFillFields") + "\r\n" + message;
                        alert(message);
                        return;
                    }
                    $("#urgentCancelFormDiv").data("kendoWindow").close();
                    CancelFunction(true);
                }

                $scope.onUrgentCancelFormCancel = function () {
                    $("#urgentCancelFormDiv").data("kendoWindow").close();
                }

                $scope.onBookedSend = function () {
                    var message2 = RequiredMessage();
                    if (message2.length > 0) {
                        message2 = getLang("PlsFillFields") + "\r\n" + message2;
                        alert(message2);
                        return;
                    }

                    var message = "";
                    var emails = [];
                    $(".esq_ConfirmationEmail [type='checkbox']:checked").each(function () {
                        emails.push($(this).attr('email'));
                    });
                    if (emails.length == 0 && $(".esq_ConfirmationEmail div").length > 0) {
                        message = (getLang("PlsSelectEmail") + '\n');
                    }
                    if ($("#esq_EnterOtherHotel").is(':hidden')) {
                        var radioVal = $('.esq_SelectHotelRadio :checked').val();
                        if (radioVal == null) {
                            message += (getLang("PlsSelectHotel") + '\n');
                        }
                    }
                    else {
                        if ($.trim($('#txtOtherHotelName').val()).length == 0) {
                            message += (getLang("PlsEnterOtherHotelName") + '\n');
                        }
                    }
                    //if ($("#dFileMessage > div").length == 0) {
                    //    message += getLang("PlsUploadFile");
                    //}
                    if (message.length > 0) {
                        alert(message);
                        return;
                    }

                    requestState = "Processed";
                    isBookedSend = true;

                    if (!getPublicHolidays()) {
                        return;
                    }
                    requestSave(hasUrgent(), "AdminDoSuccessInfo");
                }
                //On Save button click
                $scope.onSave = function () {
                    var message = RequiredMessage();
                    if (message.length > 0) {
                        message = getLang("PlsFillFields") + "\r\n" + message;
                        alert(message);
                        return;
                    }
                    requestState = "Draft";
                    requestSave(false, "SaveSuccessInfo");
                }

                //On Close button click
                $scope.onClose = function () {
                    var tstringifys = getFormDataStr();
                    var tempDStrs = getDetailFormStr();

                    if (formStringify == tstringifys.formStringify && detailStringify == tempDStrs.detailStringify) {
                        //window.opener = null;
                        //window.open('', '_self');
                        //window.close();
                        BackHistory();
                    }
                    else {
                        if (confirm(getLang("CloseBooking"))) {
                            BackHistory();
                        }
                    }
                }
                $scope.onCloseDialog = function () {
                    $("#esq_dialog").data("kendoWindow").close();
                    if ($("#esq_dialog").attr("msgCode") == '1') {
                        BackHistory();
                    }
                }

                $scope.onCopy = function () {

                    //Get current username and factory code
                    spsservice.getUsername().then(function (user) {
                        //Get current username
                        $scope.hotelRequestForm.requestor = user.get_title();
                        requestorEmail = user.get_email();
                        //Get current user factory code
                        var myRegEx = /([A-Z,a-z,0-9, ]*)\/([A-Z]{3})\/([A-Z,a-z,0-9, ]*)/g;
                        var matches = getMatches($scope.hotelRequestForm.requestor, myRegEx, 2);
                        $scope.userFactoryCode = matches[0];
                        $scope.department = $scope.hotelRequestForm.requestor.split('/')[2];
                    }, function (reason) {
                        alert('getUsername Failed: ' + reason);
                    });

                    //Get User Department
                    spsservice.getUserProfile().then(function (userProfile) {
                        $scope.userProfile = userProfile;
                        $scope.hotelRequestForm.department = userProfile['Department'];
                        if (userProfile['Department'].length == 0) {
                            $scope.hotelRequestForm.department = userProfile.PreferredName.split('/')[2];
                        }
                    }, function (reason) {
                        alert('getUserProfile Failed: ' + reason);
                    });

                    $('#RequestRef').html('');
                    $("#ddlBookingPurpose").data("kendoDropDownList").readonly(false);
                    $("#ddlDestination").data("kendoDropDownList").readonly(false);
                    $('#txtCheckin').data("kendoDatePicker").value(null);
                    $('#txtCheckout').data("kendoDatePicker").value(null);
                    $('#txtCheckin').data("kendoDatePicker").readonly(false);
                    $('#txtCheckout').data("kendoDatePicker").readonly(false);

                    $("#ddlPreference1").data("kendoDropDownList").readonly(false);
                    $("#ddlPreference2").data("kendoDropDownList").readonly(false);
                    $("#ddlPreference3").data("kendoDropDownList").readonly(false);
                    $('.esq_SelectHotelRadio input').hide();

                    $('#txtOtherHotelName').prop('readonly', false);
                    $('#txtOtherHotelContactNumber').prop('readonly', false);
                    $('#txtOtherHotelAddress').prop('readonly', false);
                    $('#txtOtherHotelRemakrs').prop('readonly', false);
                    var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict["peoplePickerManagersName_TopSpan"];
                    $("#" + peoplePicker.EditorElementId).prop('readonly', false);
                    $('#esq_EnterOtherHotel .sp-peoplepicker-delImage').show();

                    $('#btnReturnSelection').show();
                    if (!getIsDorm()) {
                        $('.esq_OtherHotelButton').show();
                    }

                    $('#btnAddRoom').show();
                    $('.btnRemoveRoom').show();
                    $('.esq_Room_add_button').show();
                    $('.btnRemoveGuestOrStaff').show();
                    $('#dvStaffAndGuest .esq_Room').each(function () {
                        var roomNumId = $(this).attr("idnum");
                        $(this).find(".esq_Smoking").prop("disabled", false);
                        $(this).find(".esq_room_staff").each(function () {
                            var staffNumId = $(this).attr("idnum");
                            $(this).find('.esq_Guest').prop('disabled', false);
                            $(this).find('.esq_GuestName').prop('readonly', false);

                            var peoplePicker22 = SPClientPeoplePicker.SPClientPeoplePickerDict[$(this).find('.peoplePickerOfficeName').attr('id') + "_TopSpan"];
                            $("#" + peoplePicker22.EditorElementId).prop('readonly', false);
                            $(this).find('.sp-peoplepicker-delImage').show();

                            $(this).find('.esq_TravelName').prop('readonly', false);
                            $(this).find('#esq_Gender_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").readonly(false);
                            $(this).find('.esq_PayPerson').prop('disabled', false);
                            $(this).find('#esq_FactoryCode_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").readonly(false);
                            $(this).find('#esq_Department_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").readonly(false);

                            var peoplePickerCCPerson = SPClientPeoplePicker.SPClientPeoplePickerDict[$(this).find('.peoplePickerCCPerson').attr('id') + "_TopSpan"];
                            $("#" + peoplePickerCCPerson.EditorElementId).prop('readonly', false);

                            $(this).find('.esq_MobileNumbers').prop('readonly', false);
                            $(this).find('#esq_TravelType_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").readonly(false);
                            $(this).find('.esq_FlightNumber').prop('readonly', false);
                            $(this).find('#esq_DormArrivalTime_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").readonly(false);
                            $(this).find('.esq_ArrivalTime').prop('readonly', false);
                            $(this).find('.esq_LateCheckin').prop('readonly', false);
                            $(this).find('.esq_RemarksDesc').prop('readonly', false);

                            $(this).find('#esq_Checkin_' + roomNumId + "_" + staffNumId).data("kendoDatePicker").value(null);
                            $(this).find('#esq_Checkout_' + roomNumId + "_" + staffNumId).data("kendoDatePicker").value(null);
                            $(this).find('#esq_Checkin_' + roomNumId + "_" + staffNumId).data("kendoDatePicker").readonly(false);
                            $(this).find('#esq_Checkout_' + roomNumId + "_" + staffNumId).data("kendoDatePicker").readonly(false);
                        });
                    });

                    $('#SaveRequest').show();
                    $('#SubmitRequest').show();
                    $('#CancelRequest').hide();
                    $('#CopyRequest').hide();
                    $('.esq_FormFoot').show();
                    if (isBookingAdmin) {
                        $('.esq_adminDiv').hide();
                    }
                    $('#CopyRequest3').hide();
                    isCopy = true;
                }

                $scope.onClearFile = function () {
                    var fileObj = document.getElementById("emailFile");
                    fileObj.outerHTML = fileObj.outerHTML;
                }
                $scope.onUploadFile = function () {
                    var element = document.getElementById("emailFile");
                    if (element.files.length == 0) {
                        alert(getLang("PlsSelectFile"));
                        return;
                    }

                    var waitDialog2 = SP.UI.ModalDialog.showWaitScreenWithNoClose("Loading...", "", 90, 200);
                    acrossDomainUploadFile("EmailDocument", "emailFile", requestId, function () {
                        initAttachment("Edit", requestId, "#dFileMessage");
                        waitDialog2.close(SP.UI.DialogResult.OK);
                        $scope.onClearFile();
                        //alert(getLang("Successfully"));
                    });
                }
            }]);
})();

//全局变量
var _hotelRequestService;
var dstcId = 0;
var isCopy = false;
var curAuthorId = 0;
var isDormAdmin = false;
var hotelSources = [];
var hotelS = [];
var initIsUrgent = false;
var currentCancellationTime = 24;
var isBookingAdmin = false;
var requestorEmail = '';
var isBookedSend = false;
var getHotelHtmls;
var _destination = [];
var oldRequestState = "";
var requestState = "Draft";
var factoryCodes;
var gradeList = [];
var ChoicesList = [];
var currentGradeId = 0;
var currentTimeZone = 0;
var currentCurrency = '';
var factoryAdminList = [];
var PublicHolidaysList = [];
var CCManagerIds = [];
//将对应时区的 d 时间转换成本地时间
function parseLocal(offset, d) {
    var tempDate = new Date();
    var localTime = tempDate.getTime();
    var localOffset = tempDate.getTimezoneOffset() * 60000;
    var utc = localTime + localOffset;
    var offsetTime = utc + (3600000 * offset);
    var newTime = d.getTime() - offsetTime + (offsetTime - localTime);
    return new Date(localTime + newTime);
}
//将本地 d 时间转换成对应时区时间
function parseOffset(offset, d) {
    var localTime = d.getTime();
    var localOffset = d.getTimezoneOffset() * 60000;
    var utc = localTime + localOffset;
    var offsetTime = utc + (3600000 * offset);
    return new Date(offsetTime);
}
function showFoot() {
    if (isBookingAdmin) {
        $('.esq_adminFoot').show();
        $('.esq_adminCCManager').show();
    } else {
        $('.esq_FormFoot').show();
    }
}
function hasUrgent(tDate) {
    var cinDate = $('#txtCheckin').data("kendoDatePicker").value();
    var CheckinDate = tDate || cinDate.clone();

    if ($('.esq_dormHotel').is(':hidden')) {
        CheckinDate.setHours(14);
        if ($("#esq_EnterOtherHotel").is(':hidden')) {
            if ($('#ddlPreference1').data("kendoDropDownList").dataItem() != null) {
                currentCancellationTime = $('#ddlPreference1').data("kendoDropDownList").dataItem().CancellationTime;
            }
        }
        else {
            currentCancellationTime = 24;
        }
    }
    else {
        CheckinDate.setHours(16);
    }

    var pDate2 = parseLocal(currentTimeZone, CheckinDate.clone());
    if ((new Date()).getTime() >= pDate2.getTime()) {
        return true;
    }

    var copyCheckinDate = CheckinDate.clone();
    CheckinDate.setHours(CheckinDate.getHours() - currentCancellationTime);

    copyCheckinDate.addDays(-1);

    while (copyCheckinDate >= CheckinDate) {
        if (copyCheckinDate.is().saturday()) {
            CheckinDate.addDays(-1);
        }
        else if (copyCheckinDate.is().sunday()) {
            CheckinDate.addDays(-1);
        } else {
            $.each(PublicHolidaysList, function (i, v) {
                if (v.Date.getFullYear() == copyCheckinDate.getFullYear() && v.Date.getMonth() == copyCheckinDate.getMonth() && v.Date.getDate() == copyCheckinDate.getDate()) {
                    CheckinDate.addDays(-1);
                }
            });
        }
        copyCheckinDate.addDays(-1);
    }

    var pDate = parseLocal(currentTimeZone, CheckinDate);
    if ((new Date()).getTime() >= pDate.getTime()) {
        return true;
    }
    return false;
}
function ViewDormForm() {
    if (requestState != "Draft") {
        $("#ddlDestination").data("kendoDropDownList").readonly();
        $('#SaveRequest').hide();

        if (requestState == "Completed" || requestState == "Cancelled" || requestState == "Checked out") {
            $('.esq_FormFoot').hide();
            //$('#CopyRequest3').show();
            $("#ddlBookingPurpose").data("kendoDropDownList").readonly();
            UrgentHide(true, false);
        } else {
            if (isDormAdmin) {
                if (requestState == "Checked in") {
                    $('#btnAddRoom').hide();
                    $('#txtCheckin').data("kendoDatePicker").readonly();
                    //$('#txtCheckout').data("kendoDatePicker").readonly();

                    $('#dvStaffAndGuest .esq_Room').each(function () {
                        var roomNumId = $(this).attr('idnum');
                        $(this).find(".esq_room_staff").each(function () {
                            var staffNumId = $(this).attr('idnum');
                            $(this).find('#esq_Checkin_' + roomNumId + "_" + staffNumId).data("kendoDatePicker").readonly();
                            //$(this).find('#esq_Checkout_' + roomNumId + "_" + staffNumId).data("kendoDatePicker").readonly();
                        });
                    });
                }
            } else {
                if (requestState == "Checked in" || requestState == "Processed") {
                    $("#ddlBookingPurpose").data("kendoDropDownList").readonly();
                    UrgentHide(true, false);
                    $('#SubmitRequest').hide();
                }
            }
            $('#CancelRequest').show();
        }
    }
}
function ViewForm(bTitle) {
    var isView = "Edit";
    if (requestState != "Draft") {
        $("#ddlDestination").data("kendoDropDownList").readonly();
        $('#SaveRequest').hide();

        var isEditCheckout = false;
        if (requestState != "Received" && requestState != "Processed") {
            $('.esq_FormFoot').hide();
            $('.esq_adminDiv').hide();
            //$('#CopyRequest3').show();
            isView = "View";

            $("#ddlBookingPurpose").data("kendoDropDownList").readonly();
            if (!getIsDorm()) {
                $('.esq_adminRemarks').show();
                if ($("#esq_EnterOtherHotel").is(':hidden')) {
                    $("#ddlPreference1").data("kendoDropDownList").readonly();
                    $("#ddlPreference2").data("kendoDropDownList").readonly();
                    $("#ddlPreference3").data("kendoDropDownList").readonly();
                    $('.esq_OtherHotelButton').hide();
                    $('.esq_SelectHotelRadio input').prop('disabled', true);
                }
                else {
                    $('#btnReturnSelection').hide();
                    $('#txtOtherHotelName').prop('readonly', true);
                    $('#txtOtherHotelContactNumber').prop('readonly', true);
                    $('#txtOtherHotelAddress').prop('readonly', true);
                    $('#txtOtherHotelRemakrs').prop('readonly', true);
                    var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict["peoplePickerManagersName_TopSpan"];
                    $("#" + peoplePicker.EditorElementId).prop('readonly', true);

                    $('#esq_EnterOtherHotel .sp-peoplepicker-delImage').hide();
                }
            }
            else {
                if (requestState == "Checked in") {
                    isEditCheckout = true;
                    $('.esq_FormFoot').show();
                    $('#CopyRequest3').hide();
                }
            }
            UrgentHide(true, isEditCheckout);
        } else {
            getPublicHolidays();
            if (hasUrgent()) {
                isEditCheckout = getIsDorm();
                UrgentHide(false, isEditCheckout);
            }
            if (!isBookingAdmin) {
                $('#CancelRequest').show();
            }
        }
    }

    initAttachment(isView, bTitle, "#dFileMessage");
}
function BackHistory() {
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl")) + ((isBookingAdmin || isDormAdmin) ? "/SitePages/RedirectToAdminUnprocessed.aspx" : "");
    window.location.href = hostweburl;
}
function cancelDetail(isu, hasDrom, isBooking, tempId, intime) {
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    appweburl = appweburl.split("#/")[0];
    var cCheckinDate = new Date();
    cCheckinDate.setTime(intime);
    var detailDelEntity = {};
    detailDelEntity.CancelFlag = true;
    detailDelEntity.ChargedCancel = false;
    if (isu) {
        if (!hasDrom && isBooking) {
            detailDelEntity.ChargedCancel = hasUrgent(cCheckinDate.clone());
        }
    }
    var delResult = true;
    if (hasDrom) {
        selectDormAllocation(hostweburl, appweburl, tempId).then(function (data) {
            var datas = data.d.results;
            if (datas.length > 0) {
                $.each(datas, function (i, v) {
                    if (!delResult) {
                        return;
                    }
                    var dormDelEntity = {};
                    dormDelEntity.__metadata = { "type": "SP.Data.DormAllocationListItem" };
                    dormDelEntity.CancelFlag = true;
                    dormDelEntity.ChargedCancel = false;
                    if (isu && hasUrgent(cCheckinDate.clone()) && ((v.HotelCodeId != null && v.HotelCodeId > 0) || (v.DormCodeId != null && v.DormCodeId > 0))) {
                        var inDateOut = new Date(v.Date);
                        var nowDate = new Date();
                        if (i == 0 || inDateOut.clone().clearTime().getTime() < nowDate.clone().clearTime().getTime() || (nowDate.getHours() > 15 && inDateOut.clone().clearTime().getTime() == nowDate.clone().clearTime().getTime())) {
                            dormDelEntity.ChargedCancel = detailDelEntity.ChargedCancel = true;
                        }
                    }

                    if (!editDormAllocation(dormDelEntity, v.Id)) {
                        delResult = false;
                    }
                });
            }
        }, function (jqXHR, textStatus, errorThrown) {
            delResult = false;
            alert('select DormAllocation error.');
        });
    }

    if (delResult) {
        if (!editDetail(detailDelEntity, tempId)) {
            delResult = false;
        }
    }
    return delResult;
}
function setDDLPreferenceSource(hotelId1, hotelId2, ddl) {
    var tempHotelList = [];
    tempHotelList.push({
        "Id": 0,
        "Title": "",
        "CancellationTime": 0,
        "HotelLocalName": "",
        "Address": "",
        "HotelLocalAddress": ""
    });
    $.each(hotelSources, function (i, v) {
        if (hotelId1 != v.Id && hotelId2 != v.Id) {
            tempHotelList.push(v);
        }
    });
    if (tempHotelList.length == 1) {
        tempHotelList[0].Title = 'None';
    }

    var ddlp2 = $('#ddlPreference' + ddl).data("kendoDropDownList").value();
    $("#ddlPreference" + ddl).data("kendoDropDownList").setDataSource(tempHotelList);
    $("#ddlPreference" + ddl).data("kendoDropDownList").value(ddlp2);
}
function UrgentHide(isAll, isEditCheckout) {
    initIsUrgent = true;
    $('#txtCheckin').data("kendoDatePicker").readonly();
    $('#txtCheckout').data("kendoDatePicker").readonly(!isEditCheckout);
    if (isAll) {
        $('.btnRemoveRoom').hide();
        $('.btnRemoveGuestOrStaff').hide();
    }
    $('#btnAddRoom').hide();
    $('.esq_Room_add_button').hide();

    $('#dvStaffAndGuest .esq_Room').each(function () {
        var roomNumId = $(this).attr('idnum');
        if (isAll) {
            $(this).find(".esq_Smoking").prop("disabled", true);
        }
        $(this).find(".esq_room_staff").each(function () {
            var staffNumId = $(this).attr('idnum');
            var xGuest = $(this).find('.esq_Guest').prop("checked");
            $(this).find('.esq_Guest').prop('disabled', true);
            if (xGuest) {
                $(this).find('.esq_GuestName').prop('readonly', true);
            }
            else {
                var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[$(this).find('.peoplePickerOfficeName').attr('id') + "_TopSpan"];
                $("#" + peoplePicker.EditorElementId).prop('readonly', true);
                $(this).find('.sp-peoplepicker-delImage').hide();
            }

            $(this).find('#esq_Checkin_' + roomNumId + "_" + staffNumId).data("kendoDatePicker").readonly();
            $(this).find('#esq_Checkout_' + roomNumId + "_" + staffNumId).data("kendoDatePicker").readonly(!isEditCheckout);
            if (isAll) {
                $(this).find('.esq_TravelName').prop('readonly', true);
                $(this).find('#esq_Gender_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").readonly();
                $(this).find('.esq_PayPerson').prop('disabled', true);
                $(this).find('#esq_FactoryCode_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").readonly();
                $(this).find('#esq_Department_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").readonly();

                var peoplePickerCCPerson = SPClientPeoplePicker.SPClientPeoplePickerDict[$(this).find('.peoplePickerCCPerson').attr('id') + "_TopSpan"];
                $("#" + peoplePickerCCPerson.EditorElementId).prop('readonly', true);
                $(this).find('.sp-peoplepicker-delImage').hide();

                //$(this).find('.esq_GuestEmail').prop('readonly', true);
                $(this).find('.esq_MobileNumbers').prop('readonly', true);
                $(this).find('#esq_TravelType_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").readonly();
                $(this).find('.esq_FlightNumber').prop('readonly', true);
                $(this).find('#esq_DormArrivalTime_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").readonly();
                $(this).find('.esq_ArrivalTime').prop('readonly', true);
                $(this).find('.esq_LateCheckin').prop('readonly', true);
                $(this).find('.esq_RemarksDesc').prop('readonly', true);
            }
        });
    });
}
function refreshHotel() {
    if (getIsDorm()) {
        return;
    }
    var cGid = getCurrentGrade();
    if (cGid == currentGradeId) {
        return;
    }
    if (cGid < currentGradeId) {
        alert(getLang("CanChooseHigherLevelHotel"));
    }
    currentGradeId = cGid;
    var ddlp1 = $('#ddlPreference1').data("kendoDropDownList").value();
    var ddlp2 = $('#ddlPreference2').data("kendoDropDownList").value();
    var ddlp3 = $('#ddlPreference3').data("kendoDropDownList").value();
    getHotelHtmls(false, true, function () {
        $("#ddlPreference1").data("kendoDropDownList").value(ddlp1);
        $("#ddlPreference2").data("kendoDropDownList").value(ddlp2);
        $("#ddlPreference3").data("kendoDropDownList").value(ddlp3);

        setDDLPreferenceSource($("#ddlPreference2").data("kendoDropDownList").value(), $("#ddlPreference3").data("kendoDropDownList").value(), 1);
        setDDLPreferenceSource($("#ddlPreference1").data("kendoDropDownList").value(), $("#ddlPreference3").data("kendoDropDownList").value(), 2);
        setDDLPreferenceSource($("#ddlPreference2").data("kendoDropDownList").value(), $("#ddlPreference1").data("kendoDropDownList").value(), 3);
    });
}
function getValue(o) {
    return (typeof (o) == "undefined" || o == null) ? "" : o;
}
function getGrade() {
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    appweburl = appweburl.split("#/")[0];
    $.ajax({
        url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('HotelGrade')/items?$orderby=Grade%20desc&@target='" + hostweburl + "'&sjs=" + Math.random(),
        headers: {
            "accept": "application/json; odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            'IF-MATCH': '*'
        },
        type: 'GET',
        async: false,
        contentType: "application/json;odata=verbose"
    }).then(function (data2) {
        gradeList = data2.d.results;
    }, function (jqXHR, textStatus, errorThrown) {
        alert("get grade error.");
    });
}
function getChoicesList() {
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    appweburl = appweburl.split("#/")[0];
    $.ajax({
        url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('BookingDetails')/fields?$filter=EntityPropertyName%20eq%20%27DormArrivalTime%27&@target='" + hostweburl + "'",
        headers: {
            "accept": "application/json; odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            'IF-MATCH': '*'
        },
        type: 'GET',
        async: false,
        contentType: "application/json;odata=verbose"
    }).then(function (data2) {
        $.each(data2.d.results[0].Choices.results, function (ci, cv) {
            ChoicesList.push('<option ' + (ci == 0 ? 'selected' : '') + '>' + cv + '</option>');
        });
        ChoicesList = ChoicesList.join('');
    }, function (jqXHR, textStatus, errorThrown) {
        alert("get Choices error.");
    });
}
var ConfigNoCcControlList = [];
var BookingConfigNoCcControlList = [];
function getConfigCcControl(cIsDorm) {
    ConfigNoCcControlList = [];
    BookingConfigNoCcControlList = [];
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    appweburl = appweburl.split("#/")[0];
    $.ajax({
        url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('ConfigCcControl')/items?@target='" + hostweburl + "'&sjs=" + Math.random(),
        headers: {
            "accept": "application/json; odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            'IF-MATCH': '*'
        },
        type: 'GET',
        async: false,
        contentType: "application/json;odata=verbose"
    }).then(function (data2) {
        $.each(data2.d.results, function (ci, cv) {
            if (cIsDorm) {
                if (cv.ControlName.indexOf("DormBooking_") > -1) {
                    cv.ControlName = cv.ControlName.substr("DormBooking_".length);
                    BookingConfigNoCcControlList.push(cv);
                } else if (cv.ControlName.indexOf("DormBookingDetails_") > -1) {
                    cv.ControlName = cv.ControlName.substr("DormBookingDetails_".length);
                    ConfigNoCcControlList.push(cv);
                }
            } else {
                if (cv.ControlName.indexOf("HotelBooking_") > -1) {
                    cv.ControlName = cv.ControlName.substr("HotelBooking_".length);
                    BookingConfigNoCcControlList.push(cv);
                } else if (cv.ControlName.indexOf("HotelBookingDetails_") > -1) {
                    cv.ControlName = cv.ControlName.substr("HotelBookingDetails_".length);
                    ConfigNoCcControlList.push(cv);
                }
            }
        });
    }, function (jqXHR, textStatus, errorThrown) {
        alert("get ConfigCcControl error.")
    });
}
function getPublicHolidays() {
    var fid = $('#ddlDestination').data("kendoDropDownList").value();
    PublicHolidaysList = [];
    var getResult = true;
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    appweburl = appweburl.split("#/")[0];
    $.ajax({
        url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('PublicHolidays')/items?$filter=FactoryCodeId eq " + fid + "&$top=5000&@target='" + hostweburl + "'&sjs=" + Math.random(),
        headers: {
            "accept": "application/json; odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            'IF-MATCH': '*'
        },
        type: 'GET',
        async: false,
        contentType: "application/json;odata=verbose"
    }).then(function (data2) {
        $.each(data2.d.results, function (i, v) {
            v.Date = parseOffset(currentTimeZone, new Date(v.Date));
            PublicHolidaysList.push(v);
        });
    }, function (jqXHR, textStatus, errorThrown) {
        alert("get PublicHolidays error.")
        getResult = false;
    });
    return getResult;
}
function getCurrentGrade() {
    var gradeid = 3;
    if (gradeList.length > 0) {
        gradeid = parseInt(gradeList[0].Grade);
    }

    $('#dvStaffAndGuest .esq_Room').each(function () {
        $(this).find(".esq_room_staff").each(function () {
            if (!$(this).find('.esq_Guest').prop("checked")) {
                var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[$(this).find('.peoplePickerOfficeName').attr('id') + "_TopSpan"];
                var users = peoplePicker.GetAllUserInfo();
                if (users.length > 0) {
                    $.each(gradeList, function (i, v) {
                        if (v.Titles != null) {
                            var titlesarr = v.Titles.split(';');
                            $.each(titlesarr, function (i2, v2) {
                                if (users[0].IsResolved && users[0].EntityData.Title.length > 0 && users[0].EntityData.Title.indexOf($.trim(v2)) > -1) {
                                    if (parseInt(v.Grade) < gradeid) {
                                        gradeid = parseInt(v.Grade);
                                        return;
                                    }
                                }
                            });
                        }
                    });
                }
            }
        });
    });
    return gradeid;
}
function getAcrossDomainItems(docLib, requisitionNumber) {
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    appweburl = appweburl.split("#/")[0];
    return jQuery.ajax({
        url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + docLib + "')/items?$filter=Title%20eq%20'" + requisitionNumber + "'&$select=Id,FileName,Title,FileLeafRef,FileRef&@target=%27" + hostweburl + "%27",
        type: "GET",
        dataType: "json",
        async: false,
        headers: { Accept: "application/json;odata=verbose" }
    });
}

function initAttachment(type, requisitionNumber, filesDiv) {
    getAcrossDomainItems("EmailDocument", requisitionNumber).done(function (itemData, itemStatus, itemXHR) {
        var items = itemData.d.results;
        $(filesDiv).html('');
        $("#dFileMessage2").html('');
        for (var i = 0; i < items.length; i++) {

            var fileUrl = "https://esquel.sharepoint.com" + items[i].FileRef;
            if (type == "Edit") {
                $(filesDiv).append('<div id="a' + items[i].ID + '"><a target="_blank" href="' + fileUrl + '">' + items[i].FileName + '</a><span id="delAttachment" onclick="delAttachment(' + items[i].ID + '); return false;" style="margin-left: 10px;cursor:pointer;color:red;">X</span></div>');
            } else {
                $(filesDiv).append('<div><a target="_blank" href="' + fileUrl + '">' + items[i].FileName + '</a></div>');
            }

            $("#dFileMessage2").append('<div><a target="_blank" href="' + fileUrl + '">' + items[i].FileName + '</a></div>');
        }

    }).fail(failHandler);
}

function failHandler(jqXHR, textStatus, errorThrown) {
    var response = JSON.parse(jqXHR.responseText);
    var message = response ? response.error.message.value : textStatus;
    alert("Call failed. Error: " + message);
}
function delAttachment(id) {
    if (confirm(getLang("SureDelete"))) {

        delAcrossDomainItem("EmailDocument", id).done(function (itemData, itemStatus, itemXHR) {

            $("#a" + id).remove();

        }).fail(failHandler);
        ;
    }
}
function delAcrossDomainItem(list, id) {
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    appweburl = appweburl.split("#/")[0];
    return jQuery.ajax({
        url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + list + "')/items(" + id + ")/?@target='" + hostweburl + "'",
        type: "POST",
        async: false,
        headers: {
            "accept": "application/json; odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            'IF-MATCH': '*',
            'X-HTTP-Method': 'DELETE'
        }
    });

    //var def = new $.Deferred();
    //var execute = new SP.RequestExecutor(appWebUrl);
    //execute.executeAsync({
    //    url: appWebUrl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + list + "')/items(" + id + ")/?@target='" + hostWebUrl + "'",
    //    method: "POST",
    //    async: false,
    //    headers: { "X-RequestDigest": $("#__REQUESTDIGEST").val(), "IF-MATCH": "*", "X-HTTP-Method": "DELETE" },
    //    success: function (result, errorCode, errorMessage) {
    //        def.resolve(result, errorCode, errorMessage);
    //    },
    //    error: function (result, errorCode, errorMessage) {
    //        def.reject(errorMessage);
    //    }
    //});
    //return def.promise();
}
var formStringify = "";
var someFormStringify = "";
var otherFormStringify = "";

var detailStringify = "";
var someFieldstr = "";
var otherFieldstr = "";


function getFormDataStr() {
    var allFieldArr = ["BookingPurposeCodeId", "FactoryCodeId", "Hotel1Id", "Hotel2Id", "Hotel3Id", "OtherHotelName", "OtherHotelContactNumber", "OtherHotelAddress", "OtherHotelRemakrs", "OtherHotelManagersNameId", "CheckinDate", "CheckoutDate"];
    var o_RoomRequest = {};
    o_RoomRequest.BookingPurposeCodeId = $('#ddlBookingPurpose').data("kendoDropDownList").value();
    o_RoomRequest.FactoryCodeId = $('#ddlDestination').data("kendoDropDownList").value();

    o_RoomRequest.Hotel1Id = 0;
    o_RoomRequest.Hotel2Id = 0;
    o_RoomRequest.Hotel3Id = 0;

    o_RoomRequest.OtherHotelName = '';
    o_RoomRequest.OtherHotelContactNumber = '';
    o_RoomRequest.OtherHotelAddress = '';
    o_RoomRequest.OtherHotelRemakrs = '';
    o_RoomRequest.Hotel_x0020_Email = '';
    o_RoomRequest.OtherHotelManagersNameId = 0;
    if ($('.esq_dormHotel').is(':hidden')) {
        if ($("#esq_EnterOtherHotel").is(':hidden')) {
            var Hotel1Id_dataItem = $('#ddlPreference1').data("kendoDropDownList").dataItem();
            var Hotel2Id_dataItem = $('#ddlPreference2').data("kendoDropDownList").dataItem();
            var Hotel3Id_dataItem = $('#ddlPreference3').data("kendoDropDownList").dataItem();

            if (Hotel1Id_dataItem != null) {
                o_RoomRequest.Hotel1Id = Hotel1Id_dataItem.Id;
            }
            if (Hotel2Id_dataItem != null && Hotel2Id_dataItem.Id > 0) {
                o_RoomRequest.Hotel2Id = Hotel2Id_dataItem.Id;
            }
            if (Hotel3Id_dataItem != null && Hotel3Id_dataItem.Id > 0) {
                o_RoomRequest.Hotel3Id = Hotel3Id_dataItem.Id;
            }
        }
        else {
            o_RoomRequest.OtherHotelName = $('#txtOtherHotelName').val();
            o_RoomRequest.OtherHotelContactNumber = $('#txtOtherHotelContactNumber').val();
            o_RoomRequest.OtherHotelAddress = $('#txtOtherHotelAddress').val();
            o_RoomRequest.OtherHotelRemakrs = $('#txtOtherHotelRemakrs').val();
            o_RoomRequest.Hotel_x0020_Email = $('#txtOtherHotelEmail').val();

            var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict.peoplePickerManagersName_TopSpan;
            var users = peoplePicker.GetAllUserInfo();
            if (users.length > 0) {
                o_RoomRequest.OtherHotelManagersNameId = users[0].Key;
            }
        }
    }

    var tCheckinDate = $('#txtCheckin').data("kendoDatePicker").value();
    if (tCheckinDate != null) {
        o_RoomRequest.CheckinDate = tCheckinDate.clone();
    }
    var tCheckoutDate = $('#txtCheckout').data("kendoDatePicker").value();
    if (tCheckoutDate != null) {
        o_RoomRequest.CheckoutDate = tCheckoutDate.clone();
    }

    var someFieldEntity = {};
    var otherFieldEntity = {};
    if (BookingConfigNoCcControlList.length > 0) {
        $.each(allFieldArr, function (fi, fv) {
            var hasFind = false;
            $.each(BookingConfigNoCcControlList, function (ni, nv) {
                if (fv == nv.ControlName) {
                    hasFind = true;
                }
            });
            if (hasFind) {
                someFieldEntity[fv] = o_RoomRequest[fv];
            }
            else {
                otherFieldEntity[fv] = o_RoomRequest[fv];
            }
        });
    }

    var stringify = {};
    stringify.formStringify = JSON.stringify(o_RoomRequest);
    stringify.someFormStringify = "";
    stringify.otherFormStringify = "";
    if (BookingConfigNoCcControlList.length > 0) {
        stringify.someFormStringify = JSON.stringify(someFieldEntity);
        stringify.otherFormStringify = JSON.stringify(otherFieldEntity);
    }
    return stringify;
}

function getFormData(FactoryCode, isEdit, isUrgent) {
    var o_RoomRequest = {};
    var destDataItem = $("#ddlDestination").data("kendoDropDownList").dataItem();
    if (isEdit == undefined || !isEdit) {
        o_RoomRequest.Title = destDataItem.Title + generateRequisitionNumber();
        o_RoomRequest.RequestorFactoryCode = FactoryCode;
        o_RoomRequest.RequestorDepartmentCode = $('#txtDepartment').val();
        var requSplit = $('#txtRequestor').val().split('/');
        o_RoomRequest.RequestorName = requSplit.length > 0 ? requSplit[0] : $('#txtRequestor').val();
    } else {
        if (oldRequestState == "Draft" && requestState == "Received") {
            if (dstcId != destDataItem.Id) {
                o_RoomRequest.Title = destDataItem.Title + generateRequisitionNumber();
            }
        }
    }
    o_RoomRequest.WorkflowsLoop = false;
    if (factoryAdminList[0].AdminNameId != null) {
        o_RoomRequest.AdminsId = {
            "results": factoryAdminList[0].AdminNameId.results
        };
    }

    o_RoomRequest.ToCCPerson = false;
    o_RoomRequest.ContactAdminId = factoryAdminList[0].ContactAdminId;
    o_RoomRequest.ContactAdminTel = factoryAdminList[0].TelNumber;

    if (!isBookedSend) {
        if (BookingConfigNoCcControlList.length > 0) {
            var stringify = getFormDataStr();
            if (otherFormStringify != stringify.otherFormStringify) {
                o_RoomRequest.ToCCPerson = true;
            }
        }

        if (!o_RoomRequest.ToCCPerson && ConfigNoCcControlList.length > 0) {
            var stringify2 = getDetailFormStr();
            if (otherFieldstr != stringify2.otherFieldstr) {
                o_RoomRequest.ToCCPerson = true;
            }
        }
        if (BookingConfigNoCcControlList.length == 0 && ConfigNoCcControlList.length == 0) {
            o_RoomRequest.ToCCPerson = true;
        }
        o_RoomRequest.Urgent = "Standard";
        o_RoomRequest.UrgentManagersNameId = 0;
        o_RoomRequest.UrgentManagersEmail = "";
        o_RoomRequest.UrgentRemarks = "";
        if (isUrgent && !isDormAdmin) {
            o_RoomRequest.Urgent = 'Urgent';
            var peoplePickerUrgent = SPClientPeoplePicker.SPClientPeoplePickerDict.peoplePickerUrgentManagersName_TopSpan;
            var usersUrgent = peoplePickerUrgent.GetAllUserInfo();
            if (usersUrgent.length > 0) {
                o_RoomRequest.UrgentManagersNameId = getOfficeNameId(usersUrgent[0].Key);
                o_RoomRequest.UrgentManagersEmail = getOfficeEmail(usersUrgent[0]);
            }
            o_RoomRequest.UrgentRemarks = $('#txtUrgentRmarks').val();
        }
    }
    if (isCopy) {
        o_RoomRequest.ToCCPerson = true;
    }
    o_RoomRequest.Status = requestState;
    o_RoomRequest.StaffGrade = currentGradeId;
    o_RoomRequest.BookingPurposeCodeId = $('#ddlBookingPurpose').data("kendoDropDownList").value();
    o_RoomRequest.FactoryCodeId = destDataItem.Id;// $('#ddlDestination').data("kendoDropDownList").value();

    o_RoomRequest.IsDorm = true;
    o_RoomRequest.OtherHotel = false;
    o_RoomRequest.Hotel1Id = 0;
    o_RoomRequest.Hotel2Id = 0;
    o_RoomRequest.Hotel3Id = 0;

    o_RoomRequest.OtherHotelName = '';
    o_RoomRequest.OtherHotelContactNumber = '';
    o_RoomRequest.OtherHotelAddress = '';
    o_RoomRequest.OtherHotelRemakrs = '';
    o_RoomRequest.Hotel_x0020_Email = '';
    o_RoomRequest.OtherHotelManagersNameId = 0;
    o_RoomRequest.OtherHotelManagersEmail = '';
    o_RoomRequest.HotelsForEmail = '';
    if ($('.esq_dormHotel').is(':hidden')) {
        o_RoomRequest.IsDorm = false;
        if ($("#esq_EnterOtherHotel").is(':hidden')) {
            var Hotel1Id_dataItem = $('#ddlPreference1').data("kendoDropDownList").dataItem();
            var Hotel2Id_dataItem = $('#ddlPreference2').data("kendoDropDownList").dataItem();
            var Hotel3Id_dataItem = $('#ddlPreference3').data("kendoDropDownList").dataItem();

            var hotelsForEmail = '<table style="border-collapse:collapse;border:1px solid"><tr style="height:0px;"><th style="width:200px;border:1px solid;">Preference(优先级)</th><th style="width:300px;text-align:left;border:1px solid;">Hotel Name(酒店名称)</th><th style="width:300px;text-align:left;border:1px solid;">Address(地址)</th></tr>';
            //tempHotelList.push({ "Id": 0, "Title": "", "CancellationTime": 0, "HotelLocalName": "", "Address": "", "HotelLocalAddress": "" });
            if (Hotel1Id_dataItem != null) {
                o_RoomRequest.Hotel1Id = Hotel1Id_dataItem.Id;
                hotelsForEmail += '<tr style="height:0px;"><td style="text-align:left;border:1px solid;">1</td><td style="text-align:left;border:1px solid;">' + Hotel1Id_dataItem.Title + ((Hotel1Id_dataItem.HotelLocalName == null || Hotel1Id_dataItem.HotelLocalName.length == 0) ? "" : ("(" + Hotel1Id_dataItem.HotelLocalName + ")")) + '</td><td style="text-align:left;border:1px solid;">' + (Hotel1Id_dataItem.Address == null ? "" : Hotel1Id_dataItem.Address) + ((Hotel1Id_dataItem.HotelLocalAddress == null || Hotel1Id_dataItem.HotelLocalAddress.length == 0) ? "" : ("(" + Hotel1Id_dataItem.HotelLocalAddress + ")")) + '</td></tr>';
            }
            if (Hotel2Id_dataItem != null && Hotel2Id_dataItem.Id > 0) {
                o_RoomRequest.Hotel2Id = Hotel2Id_dataItem.Id;
                hotelsForEmail += '<tr style="height:0px;"><td style="text-align:left;border:1px solid;">2</td><td style="text-align:left;border:1px solid;">' + Hotel2Id_dataItem.Title + ((Hotel2Id_dataItem.HotelLocalName == null || Hotel2Id_dataItem.HotelLocalName.length == 0) ? "" : ("(" + Hotel2Id_dataItem.HotelLocalName + ")")) + '</td><td style="text-align:left;border:1px solid;">' + (Hotel2Id_dataItem.Address == null ? "" : Hotel2Id_dataItem.Address) + ((Hotel2Id_dataItem.HotelLocalAddress == null || Hotel2Id_dataItem.HotelLocalAddress.length == 0) ? "" : ("(" + Hotel2Id_dataItem.HotelLocalAddress + ")")) + '</td></tr>';
            }
            if (Hotel3Id_dataItem != null && Hotel3Id_dataItem.Id > 0) {
                o_RoomRequest.Hotel3Id = Hotel3Id_dataItem.Id;
                hotelsForEmail += '<tr style="height:0px;"><td style="text-align:left;border:1px solid;">3</td><td style="text-align:left;border:1px solid;">' + Hotel3Id_dataItem.Title + ((Hotel3Id_dataItem.HotelLocalName == null || Hotel3Id_dataItem.HotelLocalName.length == 0) ? "" : ("(" + Hotel3Id_dataItem.HotelLocalName + ")")) + '</td><td style="text-align:left;border:1px solid;">' + (Hotel3Id_dataItem.Address == null ? "" : Hotel3Id_dataItem.Address) + ((Hotel3Id_dataItem.HotelLocalAddress == null || Hotel3Id_dataItem.HotelLocalAddress.length == 0) ? "" : ("(" + Hotel3Id_dataItem.HotelLocalAddress + ")")) + '</td></tr>';
            }
            hotelsForEmail += "</table>";
            o_RoomRequest.HotelsForEmail = hotelsForEmail;
        }
        else {
            o_RoomRequest.OtherHotel = true;

            o_RoomRequest.OtherHotelName = $('#txtOtherHotelName').val();
            o_RoomRequest.OtherHotelContactNumber = $('#txtOtherHotelContactNumber').val();
            o_RoomRequest.OtherHotelAddress = $('#txtOtherHotelAddress').val();
            o_RoomRequest.OtherHotelRemakrs = $('#txtOtherHotelRemakrs').val();
            o_RoomRequest.Hotel_x0020_Email = $('#txtOtherHotelEmail').val();

            var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict.peoplePickerManagersName_TopSpan;
            var users = peoplePicker.GetAllUserInfo();
            if (users.length > 0) {
                o_RoomRequest.OtherHotelManagersNameId = getOfficeNameId(users[0].Key);
                o_RoomRequest.OtherHotelManagersEmail = getOfficeEmail(users[0]);
            }

            o_RoomRequest.HotelsForEmail = '<table style="border-collapse:collapse;border:1px solid"><tr style="height:0px;"><th style="width:300px;text-align:left;border:1px solid;">Hotel Name(酒店名称)</th><th style="width:300px;text-align:left;border:1px solid;">Address(地址)</th></tr>';
            o_RoomRequest.HotelsForEmail += '<tr style="height:0px;"><td style="text-align:left;border:1px solid;">' + o_RoomRequest.OtherHotelName + '</td><td style="text-align:left;border:1px solid;">' + o_RoomRequest.OtherHotelAddress + '</td></tr></table>';
        }
    }

    if (isBookedSend) {
        o_RoomRequest.WorkflowsLoop = true;
        o_RoomRequest.ToCCPerson = true;
        var attHtmls = [];
        $("#dFileMessage a").each(function () {
            attHtmls.push('<div><a target="_blank" href="' + $(this).attr('href') + '">' + $(this).html() + '</a></div>');
        });
        o_RoomRequest.AttachmentHtmls = '';
        if (attHtmls.length > 0) {
            o_RoomRequest.AttachmentHtmls = attHtmls.join('');
        }
        o_RoomRequest.AdminRemarks = $('#txtAdminRemarks').val();
        var emails = [];
        $(".esq_ConfirmationEmail [type='checkbox']:checked").each(function () {
            emails.push($(this).attr('email'));
        });
        o_RoomRequest.SendEmail = '';
        if (emails.length > 0) {
            o_RoomRequest.SendEmail = emails.join(';');
        }
        o_RoomRequest.ReservationHotelId = 0;
        o_RoomRequest.ReservationHotelName = "";
        if ($("#esq_EnterOtherHotel").is(':hidden')) {
            var radioVal = $('.esq_SelectHotelRadio :checked').val();
            if (radioVal != null) {
                o_RoomRequest.ReservationHotelId = $('#ddlPreference' + radioVal).data("kendoDropDownList").value();
                o_RoomRequest.ReservationHotelName = $('#ddlPreference' + radioVal).data("kendoDropDownList").text();

                var Hotel1Id_dataItem = $('#ddlPreference' + radioVal).data("kendoDropDownList").dataItem();
                var hotelsForEmail = '<table style="border-collapse:collapse;border:1px solid"><tr style="height:0px;"><th style="width:200px;border:1px solid;">Preference(优先级)</th><th style="width:300px;text-align:left;border:1px solid;">Hotel Name(酒店名称)</th><th style="width:300px;text-align:left;border:1px solid;">Address(地址)</th></tr>';
                if (Hotel1Id_dataItem != null) {
                    hotelsForEmail += '<tr style="height:0px;"><td style="text-align:left;border:1px solid;">' + radioVal + '</td><td style="text-align:left;border:1px solid;">' + Hotel1Id_dataItem.Title + ((Hotel1Id_dataItem.HotelLocalName == null || Hotel1Id_dataItem.HotelLocalName.length == 0) ? "" : ("(" + Hotel1Id_dataItem.HotelLocalName + ")")) + '</td><td style="text-align:left;border:1px solid;">' + (Hotel1Id_dataItem.Address == null ? "" : Hotel1Id_dataItem.Address) + ((Hotel1Id_dataItem.HotelLocalAddress == null || Hotel1Id_dataItem.HotelLocalAddress.length == 0) ? "" : ("(" + Hotel1Id_dataItem.HotelLocalAddress + ")")) + '</td></tr>';
                }
                hotelsForEmail += "</table>";
                o_RoomRequest.HotelsForEmail = hotelsForEmail;
            }
        }
        else {
            o_RoomRequest.ReservationHotelName = $('#txtOtherHotelName').val();
        }
    }

    var tCheckinDate = $('#txtCheckin').data("kendoDatePicker").value();
    if (tCheckinDate != null) {
        o_RoomRequest.CheckinDate = tCheckinDate.clone();
        var addHours = 14;
        if (o_RoomRequest.IsDorm) {
            addHours = 16;
        }
        o_RoomRequest.CheckinDate.setHours(addHours);
        o_RoomRequest.CheckinDate.setMinutes(0);
        o_RoomRequest.CheckinDate.setSeconds(0);
        o_RoomRequest.CheckinDate.setMilliseconds(0);
        o_RoomRequest.CheckinDate = parseLocal(currentTimeZone, o_RoomRequest.CheckinDate);
        o_RoomRequest.CheckinDate = o_RoomRequest.CheckinDate.getFullYear() + "-" + (o_RoomRequest.CheckinDate.getMonth() + 1) + "-" + o_RoomRequest.CheckinDate.getDate() + " " + o_RoomRequest.CheckinDate.getHours() + ":" + o_RoomRequest.CheckinDate.getMinutes() + ":" + o_RoomRequest.CheckinDate.getSeconds() + "." + o_RoomRequest.CheckinDate.getMilliseconds();
    }
    var tCheckoutDate = $('#txtCheckout').data("kendoDatePicker").value();
    if (tCheckoutDate != null) {
        o_RoomRequest.CheckoutDate = tCheckoutDate.clone();
        o_RoomRequest.CheckoutDate.setHours(addHours);
        o_RoomRequest.CheckoutDate.setMinutes(0);
        o_RoomRequest.CheckoutDate.setSeconds(0);
        o_RoomRequest.CheckoutDate.setMilliseconds(0);
        o_RoomRequest.CheckoutDate = parseLocal(currentTimeZone, o_RoomRequest.CheckoutDate);
        o_RoomRequest.CheckoutDate = o_RoomRequest.CheckoutDate.getFullYear() + "-" + (o_RoomRequest.CheckoutDate.getMonth() + 1) + "-" + o_RoomRequest.CheckoutDate.getDate() + " " + o_RoomRequest.CheckoutDate.getHours() + ":" + o_RoomRequest.CheckoutDate.getMinutes() + ":" + o_RoomRequest.CheckoutDate.getSeconds() + "." + o_RoomRequest.CheckoutDate.getMilliseconds();
    }
    var staffEmails = [];
    var staffNames = [];
    var staffIds = [];
    var staffHtmls = [];
    var CCPersonIds = [];
    var CCPersonStr = '';
    $('#dvStaffAndGuest .esq_Room').each(function () {
        var roomNumId = $(this).attr("idnum");
        $(this).find(".esq_room_staff").each(function () {
            var staffNumId = $(this).attr("idnum");
            var readCCPerson = false;

            staffHtmls.push('<tr style="height:0px;"><td style="text-align:left;border:1px solid;">');
            var xGuest = $(this).find('.esq_Guest').prop("checked");
            if (xGuest) {
                //staffEmails.push($(this).find('.esq_GuestEmail').val());
                staffNames.push($(this).find('.esq_GuestName').val());
                staffHtmls.push($(this).find('.esq_GuestName').val());

                if (o_RoomRequest.IsDorm || !$(this).find('.esq_PayPerson').prop("checked")) {
                    readCCPerson = true;
                    //var departmentDataItem = $(this).find('#esq_Department_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").dataItem();
                    //if (departmentDataItem.CCPersonId != null) {
                    //    CCPersonIds.push.apply(CCPersonIds, departmentDataItem.CCPersonId.results);
                    //}
                }
            }
            else {
                var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[$(this).find('.peoplePickerOfficeName').attr('id') + "_TopSpan"];
                var users = peoplePicker.GetAllUserInfo();
                if (users.length > 0) {
                    var userEmailStr = getOfficeEmail(users[0]);
                    if (staffEmails.join(';').indexOf(userEmailStr) == -1) {
                        staffEmails.push(userEmailStr);
                    }
                    staffNames.push(users[0].DisplayText);
                    var userDisplayText = users[0].DisplayText.split('/');
                    staffHtmls.push(userDisplayText.length > 0 ? userDisplayText[0] : users[0].DisplayText);
                    staffIds.push(getOfficeNameId(users[0].Key));
                }

                //var departmentDataItem = $(this).find('#esq_Department_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").dataItem();
                //if (departmentDataItem.CCPersonId != null) {
                //    CCPersonIds.push.apply(CCPersonIds, departmentDataItem.CCPersonId.results);
                //}
                readCCPerson = true;
            }
            if (readCCPerson && !o_RoomRequest.IsDorm) {
                /*var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[$(this).find('.peoplePickerCCPerson').attr('id') + "_TopSpan"];
                 var users = peoplePicker.GetAllUserInfo();
                 if (users.length > 0) {
                 $.each(users, function (ri, rv) {
                 if (rv.IsResolved) {
                 var keyId = getOfficeNameId(rv.Key);
                 if (CCPersonStr.indexOf("," + keyId + ",") == -1) {
                 CCPersonIds.push(keyId);
                 CCPersonStr += ("," + keyId + ",");
                 }
                 }
                 });
                 }*/

                if (CCManagerIds.length > 0) {
                    CCPersonIds = CCManagerIds;
                }
            }

            var sCheckinDate = $(this).find('#esq_Checkin_' + roomNumId + "_" + staffNumId).data("kendoDatePicker").value();
            var sCheckoutDate = $(this).find('#esq_Checkout_' + roomNumId + "_" + staffNumId).data("kendoDatePicker").value();
            if (sCheckinDate != null && sCheckoutDate != null) {
                staffHtmls.push('</td><td style="text-align:left;border:1px solid;">' + ((sCheckinDate.getMonth() + 1) + "/" + sCheckinDate.getDate() + '/' + sCheckinDate.getFullYear()) + '</td><td style="text-align:left;border:1px solid;">' + ((sCheckoutDate.getMonth() + 1) + "/" + sCheckoutDate.getDate() + '/' + sCheckoutDate.getFullYear()) + '</td><td style="text-align:left;border:1px solid;">' + $(this).find('.esq_RemarksDesc').val() + '</td></tr>');
            }
        });
    });
    if (o_RoomRequest.IsDorm) {
        o_RoomRequest.NumberOfRooms = staffNames.length;
        o_RoomRequest.ReservationHotelName = 'Dorm';
    }
    else {
        o_RoomRequest.NumberOfRooms = $('#dvStaffAndGuest .esq_Room').length;
    }

    if (staffEmails.length > 0) {
        o_RoomRequest.StaffEmails = staffEmails.join(';');
        if (o_RoomRequest.StaffEmails.indexOf(requestorEmail) == -1) {
            o_RoomRequest.StaffEmails += (";" + requestorEmail);
        }
    } else {
        o_RoomRequest.StaffEmails = requestorEmail;
    }
    if (staffNames.length > 0) {
        o_RoomRequest.Sys_GuestNameWithoutAsterisk = o_RoomRequest.AllGuestName = staffNames.join('; ');
        if (o_RoomRequest.AllGuestName.length > 255) {
            o_RoomRequest.Sys_GuestNameWithoutAsterisk = o_RoomRequest.AllGuestName.substr(0, 255);
        }
    }
    if (staffIds.length > 0) {
        o_RoomRequest.Sys_GuestNameForRightCheckingId = {
            "results": staffIds
        };
    }
    //if (CCPersonIds.length == 0) {
    //    o_RoomRequest.CCPersonId = 0;
    //} else {
    o_RoomRequest.CCPersonId = {
        "results": CCPersonIds
    };
    //}
    if (staffHtmls.length > 0) {
        var staffhtmlsTable = '<table style="border-collapse:collapse;border:1px solid"><tr style="height:0px;"><th style="width:200px;border:1px solid;text-align: left;">Name/姓名</th><th style="width:200px;text-align:left;border:1px solid;text-align: left;">Check-In/ 入住日期</th><th style="width:200px;text-align:left;border:1px solid;text-align: left;">Check-Out / 退房日期</th><th style="width:300px;text-align:left;border:1px solid;text-align: left;">Remarks / 备注</th></tr>';
        o_RoomRequest.StaffHtmls = staffhtmlsTable + staffHtmls.join('') + '</table>';
    }

    if (oldRequestState != "Draft") {
        o_RoomRequest.IsUpdate = isEdit;
    }
    return o_RoomRequest;
}


function getDetailFormStr() {
    var allFieldArr = ["PayInPerson", "GuestName", "DepartmentCodeId", "Guest", "Gender", "CheckinDate", "CheckoutDate", "FactoryCodeId", "Smoking", "Remarks", "TravelType", "DormArrivalTime", "TravelDocumentName", "FlightNumber", "ArrivalTime", "LateCheckinTime", "CCPersonId", "PhoneNumber", "OfficeNameId"];
    var detailDatas = [];
    var detailSomeDatas = [];
    var detailOtherDatas = [];
    var roomNumber = 0;
    var dorm = getIsDorm();
    $('#dvStaffAndGuest .esq_Room').each(function () {
        var roomNumId = $(this).attr("idnum");
        roomNumber++;
        var smoking = $(this).find(".esq_Smoking").prop("checked");
        $(this).find(".esq_room_staff").each(function () {
            var staffNumId = $(this).attr("idnum");
            var detailEntity = {};
            var someFieldEntity = {};
            var otherFieldEntity = {};
            detailEntity.PayInPerson = false;
            detailEntity.GuestName = "";
            detailEntity.DepartmentCodeId = $(this).find('#esq_Department_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").value();
            detailEntity.Guest = $(this).find('.esq_Guest').prop("checked");
            if (detailEntity.Guest) {
                detailEntity.GuestName = $(this).find('.esq_GuestName').val();
            }

            detailEntity.Gender = $(this).find('#esq_Gender_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").value();
            var cCheckinDate = $(this).find('#esq_Checkin_' + roomNumId + "_" + staffNumId).data("kendoDatePicker").value();
            if (cCheckinDate != null) {
                detailEntity.CheckinDate = cCheckinDate.clone();
            }
            var cCheckoutDate = $(this).find('#esq_Checkout_' + roomNumId + "_" + staffNumId).data("kendoDatePicker").value();
            if (cCheckoutDate != null) {
                detailEntity.CheckoutDate = cCheckoutDate.clone();
            }

            var FactoryCodeDataItem = $(this).find('#esq_FactoryCode_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").dataItem();
            detailEntity.FactoryCodeId = FactoryCodeDataItem.FactoryCodeId;
            detailEntity.Smoking = smoking;
            detailEntity.Remarks = $(this).find('.esq_RemarksDesc').val();
            if (dorm) {
                detailEntity.TravelType = $(this).find('#esq_TravelType_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").value();
                detailEntity.DormArrivalTime = $(this).find('#esq_DormArrivalTime_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").value();
                detailEntity.TravelDocumentName = detailEntity.FlightNumber = "";
                detailEntity.ArrivalTime = "";
                detailEntity.LateCheckinTime = "";
            }
            else {
                detailEntity.TravelDocumentName = $(this).find('.esq_TravelName').val();
                detailEntity.FlightNumber = $(this).find('.esq_FlightNumber').val();
                detailEntity.ArrivalTime = $(this).find('.esq_ArrivalTime').val();
                detailEntity.LateCheckinTime = $(this).find('.esq_LateCheckin').val();

                detailEntity.TravelType = null;
                detailEntity.DormArrivalTime = null;

                if (detailEntity.Guest) {
                    detailEntity.PayInPerson = $(this).find('.esq_PayPerson').prop("checked");
                    if (detailEntity.PayInPerson) {
                        detailEntity.DepartmentCodeId = 0;
                        detailEntity.FactoryCodeId = 0;
                    }
                }
            }
            var CCPersonIds = [];
            if (!dorm && detailEntity.DepartmentCodeId > 0) {
                var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[$(this).find('.peoplePickerCCPerson').attr('id') + "_TopSpan"];
                var users = peoplePicker.GetAllUserInfo();
                if (users.length > 0) {
                    $.each(users, function (ki, kv) {
                        if (kv.IsResolved) {
                            CCPersonIds.push(kv.Key);
                        }
                    });
                }
            }
            detailEntity.CCPersonId = {
                "results": CCPersonIds
            };
            detailEntity.PhoneNumber = $(this).find('.esq_MobileNumbers').val();
            detailEntity.OfficeNameId = 0;
            if (!detailEntity.Guest) {
                var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[$(this).find('.peoplePickerOfficeName').attr('id') + "_TopSpan"];
                var users = peoplePicker.GetAllUserInfo();
                if (users.length > 0) {
                    detailEntity.OfficeNameId = users[0].Key;
                }
            }

            detailDatas.push(detailEntity);
            if (ConfigNoCcControlList.length > 0) {
                $.each(allFieldArr, function (fi, fv) {
                    var hasFind = false;
                    $.each(ConfigNoCcControlList, function (ni, nv) {
                        if (fv == nv.ControlName) {
                            hasFind = true;
                        }
                    });
                    if (hasFind) {
                        someFieldEntity[fv] = detailEntity[fv];
                    }
                    else {
                        otherFieldEntity[fv] = detailEntity[fv];
                    }
                });
                detailSomeDatas.push(someFieldEntity);
                detailOtherDatas.push(otherFieldEntity);
            }
        });
    });
    var stringify = {};
    stringify.detailStringify = JSON.stringify(detailDatas);
    stringify.someFieldstr = "";
    stringify.otherFieldstr = "";
    if (ConfigNoCcControlList.length > 0) {
        stringify.someFieldstr = JSON.stringify(detailSomeDatas);
        stringify.otherFieldstr = JSON.stringify(detailOtherDatas);
    }
    return stringify;
}

function getDetailFormData(ReferenceNumberId, isUrgent) {
    var actionResult = true;
    var roomNumber = 0;
    var dorm = getIsDorm();
    $('#dvStaffAndGuest .esq_Room').each(function () {
        var roomNumId = $(this).attr("idnum");
        roomNumber++;
        var smoking = $(this).find(".esq_Smoking").prop("checked");
        $(this).find(".esq_room_staff").each(function () {
            var staffNumId = $(this).attr("idnum");
            var detailEntity = {};
            //detailEntity.CostCenterCodeId = $(this).find('#esq_CostCentre_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").value();
            detailEntity.PayInPerson = false;
            detailEntity.GuestEmail = "";
            detailEntity.GuestName = "";
            detailEntity.DetailFactoryCodeId = $('#ddlDestination').data("kendoDropDownList").value();
            detailEntity.FactoryCode2Id = $('#ddlDestination').data("kendoDropDownList").value();
            detailEntity.CostCenterCodeId = detailEntity.DepartmentCodeId = $(this).find('#esq_Department_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").value();
            detailEntity.DepartmentName = $(this).find('#esq_Department_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").text();
            ;
            detailEntity.Guest = $(this).find('.esq_Guest').prop("checked");
            if (detailEntity.Guest) {
                //detailEntity.PayInPerson = $(this).find('.esq_PayPerson').prop("checked");
                //detailEntity.CostCenterCodeId = detailEntity.DepartmentCodeId = 0;
                //detailEntity.GuestEmail = $(this).find('.esq_GuestEmail').val();
                detailEntity.GuestName = $(this).find('.esq_GuestName').val();
            }

            detailEntity.Gender = $(this).find('#esq_Gender_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").value();
            var cCheckinDate = $(this).find('#esq_Checkin_' + roomNumId + "_" + staffNumId).data("kendoDatePicker").value();
            if (cCheckinDate != null) {
                detailEntity.CheckinDate = cCheckinDate.clone();
                detailEntity.CheckinDate.setHours(0);
                detailEntity.CheckinDate.setMinutes(0);
                detailEntity.CheckinDate.setSeconds(0);
                detailEntity.CheckinDate.setMilliseconds(0);
                detailEntity.CheckinDate = parseLocal(currentTimeZone, detailEntity.CheckinDate);
                var cCheckinMonth = (detailEntity.CheckinDate.getMonth() + 1);
                if (cCheckinMonth < 10) {
                    cCheckinMonth = "0" + cCheckinMonth
                } else {
                    cCheckinMonth = "" + cCheckinMonth
                }
                var cCheckinDay = detailEntity.CheckinDate.getDate();
                if (cCheckinDay < 10) {
                    cCheckinDay = "0" + cCheckinDay
                } else {
                    cCheckinDay = "" + cCheckinDay
                }
                detailEntity.ActualCheckinDate = detailEntity.CheckinDate = detailEntity.CheckinDate.getFullYear() + "-" + cCheckinMonth + "-" + cCheckinDay + " " + detailEntity.CheckinDate.getHours() + ":" + detailEntity.CheckinDate.getMinutes() + ":" + detailEntity.CheckinDate.getSeconds() + "." + detailEntity.CheckinDate.getMilliseconds();
            }
            var cCheckoutDate = $(this).find('#esq_Checkout_' + roomNumId + "_" + staffNumId).data("kendoDatePicker").value();
            if (cCheckoutDate != null) {
                detailEntity.CheckoutDate = cCheckoutDate.clone();
                detailEntity.CheckoutDate.setHours(0);
                detailEntity.CheckoutDate.setMinutes(0);
                detailEntity.CheckoutDate.setSeconds(0);
                detailEntity.CheckoutDate.setMilliseconds(0);
                detailEntity.CheckoutDate = parseLocal(currentTimeZone, detailEntity.CheckoutDate);
                var cCheckoutMonth = (detailEntity.CheckoutDate.getMonth() + 1);
                if (cCheckoutMonth < 10) {
                    cCheckoutMonth = "0" + cCheckoutMonth
                } else {
                    cCheckoutMonth = "" + cCheckoutMonth
                }
                var cCheckoutDay = detailEntity.CheckoutDate.getDate();
                if (cCheckoutDay < 10) {
                    cCheckoutDay = "0" + cCheckoutDay
                } else {
                    cCheckoutDay = "" + cCheckoutDay
                }
                detailEntity.ActualCheckoutDate = detailEntity.CheckoutDate = detailEntity.CheckoutDate.getFullYear() + "-" + cCheckoutMonth + "-" + cCheckoutDay + " " + detailEntity.CheckoutDate.getHours() + ":" + detailEntity.CheckoutDate.getMinutes() + ":" + detailEntity.CheckoutDate.getSeconds() + "." + detailEntity.CheckoutDate.getMilliseconds();
            }

            var FactoryCodeDataItem = $(this).find('#esq_FactoryCode_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").dataItem();
            detailEntity.FactoryCodeId = FactoryCodeDataItem.FactoryCodeId;
            detailEntity.SubFactoryId = FactoryCodeDataItem.Id;
            detailEntity.IsDorm = dorm;
            detailEntity.Smoking = smoking;
            detailEntity.Remarks = $(this).find('.esq_RemarksDesc').val();
            if (dorm) {
                detailEntity.Alloc_x0020_Flag = $(this).attr("isAll") == "1";
                detailEntity.TravelType = $(this).find('#esq_TravelType_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").value();
                //detailEntity.ArrivalDate = $(this).find('#esq_ArrivalDate_' + roomNumId + "_" + staffNumId).data("kendoDatePicker").value();
                //detailEntity.ArrivalDate = detailEntity.ArrivalDate.getFullYear() + "-" + (detailEntity.ArrivalDate.getMonth() + 1) + "-" + detailEntity.ArrivalDate.getDate();
                detailEntity.DormArrivalTime = $(this).find('#esq_DormArrivalTime_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").value();
                detailEntity.TravelDocumentName = detailEntity.FlightNumber = "";
                detailEntity.ArrivalTime = "";
                detailEntity.LateCheckinTime = "";

                if (cCheckoutDate != null && cCheckinDate != null) {
                    var days = Math.ceil((cCheckoutDate - cCheckinDate) / (24 * 60 * 60 * 1000));
                    detailEntity.RemainDays = days;
                }
            }
            else {
                detailEntity.TravelDocumentName = $(this).find('.esq_TravelName').val();
                detailEntity.FlightNumber = $(this).find('.esq_FlightNumber').val();
                detailEntity.ArrivalTime = $(this).find('.esq_ArrivalTime').val();
                detailEntity.LateCheckinTime = $(this).find('.esq_LateCheckin').val();

                detailEntity.TravelType = null;
                //detailEntity.ArrivalDate = null;
                detailEntity.DormArrivalTime = null;
                detailEntity.RemainDays = 0;

                if (detailEntity.Guest) {
                    detailEntity.PayInPerson = $(this).find('.esq_PayPerson').prop("checked");
                    if (detailEntity.PayInPerson) {
                        detailEntity.CostCenterCodeId = detailEntity.DepartmentCodeId = 0;
                        detailEntity.FactoryCodeId = 0;
                    }
                }
            }
            var CCPersonIds = [];
            if (!dorm && detailEntity.DepartmentCodeId > 0) {
                var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[$(this).find('.peoplePickerCCPerson').attr('id') + "_TopSpan"];
                var users = peoplePicker.GetAllUserInfo();
                if (users.length > 0) {
                    $.each(users, function (ki, kv) {
                        if (kv.IsResolved) {
                            CCPersonIds.push(getOfficeNameId(kv.Key));
                        }
                    });
                }
            }
            detailEntity.CCPersonId = {
                "results": CCPersonIds
            };
            detailEntity.Title = roomNumber + "";
            detailEntity.ReferenceNumberId = ReferenceNumberId;
            detailEntity.PhoneNumber = $(this).find('.esq_MobileNumbers').val();
            detailEntity.OfficeNameId = 0;
            detailEntity.OfficeEmail = "";
            detailEntity.StaffTitle = "";
            detailEntity.OfficeNameText = "";
            detailEntity.StaffDepartment = ""; //zack
            if (!detailEntity.Guest) {
                var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[$(this).find('.peoplePickerOfficeName').attr('id') + "_TopSpan"];
                var users = peoplePicker.GetAllUserInfo();
                if (users.length > 0) {
                    detailEntity.OfficeNameId = getOfficeNameId(users[0].Key);
                    detailEntity.OfficeNameText = users[0].DisplayText;
                    detailEntity.OfficeEmail = getOfficeEmail(users[0]);
                    detailEntity.StaffTitle = users[0].EntityData.Title;
                    detailEntity.StaffDepartment = users[0].EntityData.Department; //zack
                }
            }
            var tempId = parseInt($(this).attr('tempid'));
            if (isCopy) {
                tempId = 0;
            }
            if (tempId == 0) {
                if (!addDetail(detailEntity)) {
                    actionResult = false;
                }
                else {
                    if (dorm && requestState != "Draft") {
                        if (!addDorms2(ReferenceNumberId, detailEntity, tempId, detailEntity.Id)) {
                            actionResult = false;
                        }
                    }
                }
            } else {
                if (dorm && requestState != "Draft") {
                    if (!addDorms2(ReferenceNumberId, detailEntity, tempId, tempId)) {
                        actionResult = false;
                    }
                }
                if (actionResult) {
                    if (!editDetail(detailEntity, tempId)) {
                        actionResult = false;
                    }
                }
            }
        });
    });
    if (actionResult && !isCopy) {
        var delIds = $('#txtDetailItemId').val();
        if (delIds.length > 0) {
            var isBooking = dorm ? false : BookingCharged();
            delIds = delIds.split(',');
            $.each(delIds, function (i, v) {
                if (v.length > 0) {
                    if (!delDetail(v, dorm, isBooking)) {
                        actionResult = false;
                    }
                }
            });
        }
    }
    return actionResult;
}
function getIsDorm() {
    return $('#txtIsHotel').val() == "1" ? false : true;
}
function getOfficeEmail(users) {
    var OfficeEmail = users.EntityData.Email;
    if (OfficeEmail == null || OfficeEmail.length == 0) {
        var arrKeys = users.Key.split('|');
        if (arrKeys.length > 2) {
            OfficeEmail = arrKeys[2];
        }
    }
    return OfficeEmail;
}
//function getOfficeNameId(Key) {
//    var result = 0;
//    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
//    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
//    appweburl = appweburl.split("#/")[0];
//    $.ajax({
//        url: appweburl + "/_api/SP.AppContextSite(@target)/web/siteusers(@v)?@v='" + encodeURIComponent(Key) + "'&@target='" + hostweburl + "'",
//        headers: {
//            "accept": "application/json; odata=verbose",
//            "content-type": "application/json;odata=verbose",
//            "X-RequestDigest": $("#__REQUESTDIGEST").val()
//        },
//        type: 'GET',
//        async: false,
//        contentType: "application/json;odata=verbose"
//    }).then(function (data) {
//        result = data.d.Id;
//    }, function (jqXHR, textStatus, errorThrown) {
//        alert("getofficenameId : [" + Key + "] : " + jqXHR.responseJSON.error.message.value);
//    });
//    return result;
//}
function getOfficeNameId(Key) {
    var result = 0;
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    appweburl = appweburl.split("#/")[0];
    var payload = { 'logonName': Key };
    $.ajax({
        url: appweburl + "/_api/SP.AppContextSite(@target)/web/ensureuser?@target='" + hostweburl + "'",
        headers: {
            "accept": "application/json; odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val()
        },
        data: JSON.stringify(payload),
        type: 'POST',
        async: false,
        contentType: "application/json;odata=verbose"
    }).then(function (data) {
        result = data.d.Id;
    }, function (jqXHR, textStatus, errorThrown) {
        alert("getofficenameId : [" + Key + "] : " + jqXHR.responseJSON.error.message.value);
    });
    return result;
}
function getOfficeUserById(id) {
    var results;
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    appweburl = appweburl.split("#/")[0];
    $.ajax({
        url: appweburl + "/_api/SP.AppContextSite(@target)/web/siteusers?$filter=Id%20eq%20" + id + "&@target='" + hostweburl + "'",
        headers: {
            "accept": "application/json; odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val()
        },
        type: 'GET',
        async: false,
        contentType: "application/json;odata=verbose"
    }).then(function (data) {
        results = data.d.results;
    }, function (jqXHR, textStatus, errorThrown) {
        results = null;
    });
    return results;
}

//zack: no use now
function addDorms(ReferenceNumberId, detailDatas) {
    var addResult = true;
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    appweburl = appweburl.split("#/")[0];

    var dorms = [];
    $.each(detailDatas, function (i, v) {
        if (!addResult) {
            return;
        }
        var days = v.RemainDays;
        if (days < 1) {
            addResult = false;
        }
        else {
            var daItems = [];
            if (v.tempId > 0) {
                selectDormAllocation(hostweburl, appweburl, v.tempId).then(function (data3) {
                    if (data3.d.results.length > 0) {
                        daItems = data3.d.results;
                    }
                }, function (jqXHR, textStatus, errorThrown) {
                    addResult = false;
                    alert('select DormAllocation error.');
                });
            }
            for (var g = 0; g < days; g++) {
                if (!addResult) {
                    return;
                }
                var dormEntity = {};
                dormEntity.BookingDetailsIDId = v.Id;
                dormEntity.OfficeName = v.Guest ? v.GuestName : v.OfficeNameText;
                //Zack, add Gender value for 'Dorm Checked-in Report'/'Dorm Incoming Report' report
                //debugger;
                dormEntity.Gender = v.Gender;
                //--dormEntity.StaffDepartment = v.StaffDepartment;
                dormEntity.FactoryCodeId = $('#ddlDestination').data("kendoDropDownList").value();
                dormEntity.ReferenceNumberId = ReferenceNumberId;
                dormEntity.Date = Date.parse(v.CheckinDate.substr(0, 10));
                dormEntity.Date.setDate(dormEntity.Date.getDate() + g);
                var cCheckoutMonth = (dormEntity.Date.getMonth() + 1);
                if (cCheckoutMonth < 10) {
                    cCheckoutMonth = "0" + cCheckoutMonth
                } else {
                    cCheckoutMonth = "" + cCheckoutMonth
                }
                var cCheckoutDay = dormEntity.Date.getDate();
                if (cCheckoutDay < 10) {
                    cCheckoutDay = "0" + cCheckoutDay
                } else {
                    cCheckoutDay = "" + cCheckoutDay
                }
                dormEntity.Date = dormEntity.Date.getFullYear() + "-" + cCheckoutMonth + "-" + cCheckoutDay + v.CheckinDate.substr(10, v.CheckinDate.length - 10);
                dormEntity.__metadata = {
                    "type": "SP.Data.DormAllocationListItem"
                };
                if (v.tempId == 0) {
                    dorms.push(dormEntity);
                }
                else {
                    var dataExists = false;
                    $.each(daItems, function (ii, vv) {
                        if (!dataExists && (new Date(vv.Date)).clearTime().getTime() == (Date.parse(dormEntity.Date.substr(0, 10))).getTime()) {
                            dataExists = true;
                            vv.dataExists = true;
                            if (vv.OfficeName != dormEntity.OfficeName || vv.FactoryCodeId != dormEntity.FactoryCodeId) {
                                if (!editDormAllocation(dormEntity, vv.Id)) {
                                    addResult = false;
                                }
                            }
                        }
                    });
                    if (!dataExists) {
                        dorms.push(dormEntity);
                    }
                }
            }

            $.each(daItems, function (ii, vv) {
                if (!vv.dataExists && addResult) {
                    var dormEntity = {};
                    dormEntity.CancelFlag = true;
                    dormEntity.ChargedCancel = false;
                    if (oldRequestState == "Checked in") {
                        var inDateOut = new Date(dormEntity.Date);
                        var nowDate = new Date();
                        if (nowDate.getHours() > 15 && inDateOut.clone().clearTime().getTime() == nowDate.clone().clearTime().getTime()) {
                            dormEntity.ChargedCancel = true;
                        }
                    }
                    dormEntity.__metadata = {
                        "type": "SP.Data.DormAllocationListItem"
                    };

                    if (!editDormAllocation(dormEntity, vv.Id)) {
                        addResult = false;
                    }
                }
            });
        }
    });

    $.each(dorms, function (i, v) {
        if (!addResult) {
            return;
        }
        $.ajax({
            url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('DormAllocation')/items?@target='" + hostweburl + "'",
            headers: {
                "accept": "application/json; odata=verbose",
                "content-type": "application/json;odata=verbose",
                "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                'IF-MATCH': '*',
                'X-HTTP-Method': 'POST'
            },
            data: JSON.stringify(v),
            type: 'POST',
            async: false,
            contentType: "application/json;odata=verbose"
        }).then(function (data) {

        }, function (jqXHR, textStatus, errorThrown) {
            addResult = false;
            alert('insert DormAllocation error.');
        });
    });

    return addResult;
}

function addDorms2(ReferenceNumberId, detailItem, tempId, itemId) {
    var addResult = true;
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    appweburl = appweburl.split("#/")[0];

    var dorms = [];
    var days = detailItem.RemainDays;
    if (days < 1) {
        addResult = false;
    }
    else {
        var daItems = [];
        if (tempId > 0) {
            selectDormAllocation(hostweburl, appweburl, tempId).then(function (data3) {
                if (data3.d.results.length > 0) {
                    daItems = data3.d.results;
                }
            }, function (jqXHR, textStatus, errorThrown) {
                addResult = false;
                alert('select DormAllocation error.');
            });
        }
        for (var g = 0; g < days; g++) {
            if (!addResult) {
                return;
            }
            var dormEntity = {};
            dormEntity.BookingDetailsIDId = itemId;

            //zack v1.0.1.3
            dormEntity.SubFactoryId = detailItem.SubFactoryId;
            dormEntity.DepartmentCodeId = detailItem.DepartmentCodeId;
            dormEntity.DepartmentName = detailItem.DepartmentName;
            dormEntity.CostCenterCodeId = detailItem.CostCenterCodeId;
            //dormEntity.CheckoutDateBackground = detailItem.CheckoutDate;
            //dormEntity.ConfirmCheckIn = false;
            //dormEntity.ConfirmCheckOut = false;

            dormEntity.OfficeName = detailItem.Guest ? detailItem.GuestName : detailItem.OfficeNameText;
            //Zack, add Gender value for 'Dorm Checked-in Report'/'Dorm Incoming Report' report
            //debugger;
            dormEntity.Gender = detailItem.Gender;
            //--dormEntity.StaffDepartment = detailItem.StaffDepartment;
            dormEntity.CheckinStaffId = 0;
            if (!detailItem.Guest && detailItem.OfficeNameId != null) {
                dormEntity.CheckinStaffId = detailItem.OfficeNameId;
            }
            dormEntity.FactoryCodeId = $('#ddlDestination').data("kendoDropDownList").value();
            dormEntity.ReferenceNumberId = ReferenceNumberId;
            dormEntity.Date = Date.parse(detailItem.CheckinDate.substr(0, 10));
            dormEntity.Date.setDate(dormEntity.Date.getDate() + g);
            var cCheckoutMonth = (dormEntity.Date.getMonth() + 1);
            if (cCheckoutMonth < 10) {
                cCheckoutMonth = "0" + cCheckoutMonth
            } else {
                cCheckoutMonth = "" + cCheckoutMonth
            }
            var cCheckoutDay = dormEntity.Date.getDate();
            if (cCheckoutDay < 10) {
                cCheckoutDay = "0" + cCheckoutDay
            } else {
                cCheckoutDay = "" + cCheckoutDay
            }
            dormEntity.Date = dormEntity.Date.getFullYear() + "-" + cCheckoutMonth + "-" + cCheckoutDay + detailItem.CheckinDate.substr(10, detailItem.CheckinDate.length - 10);
            dormEntity.__metadata = {
                "type": "SP.Data.DormAllocationListItem"
            };
            if (tempId == 0) {
                dorms.push(dormEntity);
            }
            else {
                var dataExists = false;
                $.each(daItems, function (ii, vv) {
                    if (!dataExists && (new Date(vv.Date)).clearTime().getTime() == (Date.parse(dormEntity.Date.substr(0, 10))).getTime()) {
                        dataExists = true;
                        vv.dataExists = true;
                        if (vv.OfficeName != dormEntity.OfficeName || vv.FactoryCodeId != dormEntity.FactoryCodeId) {
                            if (!editDormAllocation(dormEntity, vv.Id)) {
                                addResult = false;
                            }
                        }
                    }
                });
                if (!dataExists) {
                    dorms.push(dormEntity);
                }
            }
        }

        $.each(daItems, function (ii, vv) {
            if (!vv.dataExists && addResult) {
                var dormEntity = {};
                dormEntity.CancelFlag = true;
                dormEntity.ChargedCancel = false;

                var inDateOut = new Date(vv.Date);
                var nowDate = new Date();
                if ((vv.HotelCodeId != null && vv.HotelCodeId > 0) || (vv.DormCodeId != null && vv.DormCodeId > 0)) {
                    if (inDateOut.clone().clearTime().getTime() < nowDate.clone().clearTime().getTime() || (nowDate.getHours() > 15 && inDateOut.clone().clearTime().getTime() == nowDate.clone().clearTime().getTime())) {
                        dormEntity.ChargedCancel = true;
                    }
                }
                dormEntity.__metadata = {
                    "type": "SP.Data.DormAllocationListItem"
                };

                if (!editDormAllocation(dormEntity, vv.Id)) {
                    addResult = false;
                }
            }
        });
    }

    $.each(dorms, function (i, v) {
        if (!addResult) {
            return;
        }
        $.ajax({
            url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('DormAllocation')/items?@target='" + hostweburl + "'",
            headers: {
                "accept": "application/json; odata=verbose",
                "content-type": "application/json;odata=verbose",
                "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                'IF-MATCH': '*',
                'X-HTTP-Method': 'POST'
            },
            data: JSON.stringify(v),
            type: 'POST',
            async: false,
            contentType: "application/json;odata=verbose"
        }).then(function (data) {

        }, function (jqXHR, textStatus, errorThrown) {
            addResult = false;
            alert(getLang('ErrorMsg'));
        });
    });

    if (tempId > 0) {
        var isall = true;
        var rds = dorms.length;
        if (dorms.length == 0) {
            $.each(daItems, function (ii, vv) {
                if (vv.dataExists) {
                    if ((vv.HotelCodeId == 0 || vv.HotelCodeId == null) && (vv.DormCodeId == 0 || vv.DormCodeId == null)) {
                        isall = false;
                        rds++;
                    }
                }
            });
        }
        else {
            isall = false;
        }
        if (!detailItem.Alloc_x0020_Flag && isall && oldRequestState == "Received") {
            detailItem.SendEmailFlag = false;
        }
        detailItem.Alloc_x0020_Flag = isall;
        detailItem.RemainDays = rds;
    }

    return addResult;
}

function editDormAllocation(dormEntity, id) {
    var editResult = false;
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    appweburl = appweburl.split("#/")[0];
    $.ajax({
        url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('DormAllocation')/getItemByStringId('" + id + "')?@target='" + hostweburl + "'",
        headers: {
            "accept": "application/json; odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            'IF-MATCH': '*',
            'X-HTTP-Method': 'PATCH'
        },
        data: JSON.stringify(dormEntity),
        type: 'POST',
        async: false,
        contentType: "application/json;odata=verbose"
    }).then(function (data) {
        editResult = true;
    }, function (jqXHR, textStatus, errorThrown) {
        alert('edit DormAllocation error.');
    });
    return editResult;
}
function openEsqDialog(msgCode, msg) {
    $("#esq_dialog").attr('msgCode', msgCode);
    $(".esq_dialog_img img").attr("src", "https://esquel.sharepoint.com/sites/ead/SiteAssets/hbs/Default/" + (msgCode == 1 ? "succeed" : (msgCode == 0 ? "warning" : "error")) + ".png");
    $(".esq_dialog_msg").html(msg);
    $("#esq_dialog").kendoWindow({ modal: true });
    $("#esq_dialog").data("kendoWindow").center().open();
    $("#esq_dialog").parent().find('.k-window-actions').hide();
}

function checkRefStatus(refId) {
    var checkResult = false;
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    appweburl = appweburl.split("#/")[0];
    $.ajax({
        url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('DormAllocation')/items?$filter=ReferenceNumberId eq " + refId + " and (HotelCodeId eq 0 or HotelCodeId eq null) and (DormCodeId eq 0 or DormCodeId eq null) and CancelFlag eq 0&$top=5000&@target='" + hostweburl + "'",
        headers: {
            "accept": "application/json; odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val()
        },
        type: 'GET',
        async: false,
        contentType: "application/json;odata=verbose"
    }).then(function (res) {
        checkRefStatus = res.d.results.length > 0;
    }, function (err) {
        console.log(err);
    });
    return checkRefStatus;
}

function checkRefStatus2(refId) {
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    appweburl = appweburl.split("#/")[0];
    $.ajax({
        url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('BookingDetails')/items?$filter=ReferenceNumber/Id eq " + refId + " and CancelFlag eq 0&@target='" + hostweburl + "'",
        headers: {
            "accept": "application/json; odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val()
        },
        type: 'GET',
        contentType: "application/json;odata=verbose"
    }).then(function (res) {
        return (res.d.results.length > 0);
    }, function (err) {
        console.log(err);
    });
}

function selectDormAllocation(hostweburl, appweburl, id) {
    return $.ajax({
        url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('DormAllocation')/items?$filter=BookingDetailsIDId%20eq%20" + id + " and CancelFlag eq 0&$orderby=Date%20asc&@target='" + hostweburl + "'",
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

function selectDetailById(hostweburl, appweburl, id) {
    return $.ajax({
        url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('BookingDetails')/items(" + id + ")?@target='" + hostweburl + "'",
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

function delDormAllocation(id) {
    var delResult = false;
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    appweburl = appweburl.split("#/")[0];
    $.ajax({
        url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('DormAllocation')/items(" + id + ")?@target='" + hostweburl + "'",
        headers: {
            "accept": "application/json; odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            'IF-MATCH': '*',//etag
            'X-HTTP-Method': 'DELETE'
        },
        type: 'POST',
        async: false,
        contentType: "application/json;odata=verbose"
    }).then(function (data) {
        delResult = true;
    }, function (jqXHR, textStatus, errorThrown) {
        alert('del DormAllocation error.');
    });
}

function BookingCharged() {
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    appweburl = appweburl.split("#/")[0];
    var isCharged = false;
    $.ajax({
        url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('Booking')/items?$filter=Id%20eq%20" + $('#txtItemId').val() + "&@target='" + hostweburl + "'",
        headers: {
            "accept": "application/json; odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            'IF-MATCH': '*'
        },
        type: 'GET',
        async: false,
        contentType: "application/json;odata=verbose"
    }).then(function (data3) {
        var datas = data3.d.results;
        if (datas.length > 0) {
            if (datas[0].ReservationHotelName != null && datas[0].ReservationHotelName.length > 0) {
                isCharged = true;
            }
        }
    }, function (jqXHR, textStatus, errorThrown) {
        alert('select Booking error.');
    });
    return isCharged;
}

function addDetail(detailEntity) {
    var addResult = false;
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    appweburl = appweburl.split("#/")[0];
    detailEntity.__metadata = {
        "type": "SP.Data.BookingDetailsListItem"
    };
    $.ajax({
        url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('BookingDetails')/items?@target='" + hostweburl + "'",
        headers: {
            "accept": "application/json; odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            'IF-MATCH': '*',
            'X-HTTP-Method': 'POST'
        },
        data: JSON.stringify(detailEntity),
        type: 'POST',
        async: false,
        contentType: "application/json;odata=verbose"
    }).then(function (data) {
        detailEntity.Id = data.d.Id;
        addResult = true;
    }, function (jqXHR, textStatus, errorThrown) {
        alert(getLang('ErrorMsg'));
    });
    return addResult;
}

function editDetail(detailEntity, id) {
    var editResult = false;
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    appweburl = appweburl.split("#/")[0];
    detailEntity.__metadata = {
        "type": "SP.Data.BookingDetailsListItem"
    };
    $.ajax({
        url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('BookingDetails')/getItemByStringId('" + id + "')?@target='" + hostweburl + "'",
        headers: {
            "accept": "application/json; odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            'IF-MATCH': '*',
            'X-HTTP-Method': 'PATCH'
        },
        data: JSON.stringify(detailEntity),
        type: 'POST',
        async: false,
        contentType: "application/json;odata=verbose"
    }).then(function (data) {
        detailEntity.Id = id;
        editResult = true;
    }, function (jqXHR, textStatus, errorThrown) {
        alert('edit BookingDetails error.');
    });
    return editResult;
}

function delDetail(idItem, dorm, isBooking) {
    var id = idItem.split(":")[0];
    var splitDate = new Date();
    splitDate.setTime(idItem.split(":")[1]);
    var isUrgent = hasUrgent(splitDate);
    var delResult = true;
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    appweburl = appweburl.split("#/")[0];
    if (dorm && requestState != "Draft") {
        selectDormAllocation(hostweburl, appweburl, id).then(function (data) {
            var datas = data.d.results;
            if (datas.length > 0) {
                $.each(datas, function (i, v) {
                    if (!delResult) {
                        return;
                    }
                    var dormDelEntity = {};
                    dormDelEntity.CancelFlag = true;
                    dormDelEntity.ChargedCancel = false;
                    if (isUrgent && ((v.HotelCodeId != null && v.HotelCodeId > 0) || (v.DormCodeId != null && v.DormCodeId > 0))) {
                        var inDateOut = new Date(v.Date);
                        var nowDate = new Date();
                        if (i == 0 || inDateOut.clone().clearTime().getTime() < nowDate.clone().clearTime().getTime() || (nowDate.getHours() > 15 && inDateOut.clone().clearTime().getTime() == nowDate.clone().clearTime().getTime())) {
                            dormDelEntity.ChargedCancel = isUrgent;
                            isBooking = true;
                        }
                    }
                    dormDelEntity.__metadata = {
                        "type": "SP.Data.DormAllocationListItem"
                    };

                    if (!editDormAllocation(dormDelEntity, v.Id)) {
                        delResult = false;
                    }
                });
            }
        }, function (jqXHR, textStatus, errorThrown) {
            delResult = false;
            alert('select DormAllocation error.');
        });
    }
    if (requestState == "Draft") {
        $.ajax({
            url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('BookingDetails')/items(" + id + ")?@target='" + hostweburl + "'",
            headers: {
                "accept": "application/json; odata=verbose",
                "content-type": "application/json;odata=verbose",
                "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                'IF-MATCH': '*',
                'X-HTTP-Method': 'DELETE'
            },
            type: 'POST',
            async: false,
            contentType: "application/json;odata=verbose"
        }).then(function (data) {
        }, function (jqXHR, textStatus, errorThrown) {
            delResult = false;
            alert('del BookingDetails error.');
        });
    }
    else {
        var detailDelEntity = {};
        detailDelEntity.CancelFlag = true;
        if (isUrgent && isBooking) {
            detailDelEntity.ChargedCancel = isUrgent;
        }
        else {
            detailDelEntity.ChargedCancel = false;
        }
        if (!editDetail(detailDelEntity, id)) {
            delResult = false;
        }
    }
    return delResult;
}

function postDetailData(RoomDetails, idArray) {
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    appweburl = appweburl.split("#/")[0];
    if (idArray != undefined && idArray != null && idArray.length > 0) {
        $.each(idArray, function (i, v) {
            $.ajax({
                url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('BookingDetails')/items(" + v + ")?@target='" + hostweburl + "'",
                headers: {
                    "accept": "application/json; odata=verbose",
                    "content-type": "application/json;odata=verbose",
                    "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                    'IF-MATCH': '*',
                    'X-HTTP-Method': 'DELETE'
                },
                type: 'POST',
                async: false,
                contentType: "application/json;odata=verbose"
            }).then(function (data) {
                //data.d.Id;
            }, function (jqXHR, textStatus, errorThrown) {
                alert('del BookingDetails error.');
            });
        });
    }

    $.each(RoomDetails, function (i, v) {
        v.__metadata = {
            "type": "SP.Data.BookingDetailsListItem"
        };
        $.ajax({
            url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('BookingDetails')/items?@target='" + hostweburl + "'",
            headers: {
                "accept": "application/json; odata=verbose",
                "content-type": "application/json;odata=verbose",
                "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                'IF-MATCH': '*',
                'X-HTTP-Method': 'POST'
            },
            data: JSON.stringify(v),
            type: 'POST',
            async: false,
            contentType: "application/json;odata=verbose"
        }).then(function (data) {
            v.Id = data.d.Id;
        }, function (jqXHR, textStatus, errorThrown) {
            alert('insert BookingDetails error.');
        });
    });
}
function generateRequisitionNumber() {
    var newDateTime = new Date();
    var dd = newDateTime.getDate() + "";
    dd = dd.length == 1 ? ("0" + dd) : dd;
    var mm = (newDateTime.getMonth() + 1) + "";
    mm = mm.length == 1 ? ("0" + mm) : mm;
    var yy = (newDateTime.getFullYear() + "").substr(2, 2);
    var generateDateString = mm + dd + yy + newDateTime.getTime();
    return generateDateString;
}
function hideSubmit(id) {
    $("#SubmitRequest").attr("disabled", true);
    $("#SaveRequest").attr("disabled", true);
    $("#CloseRequest").attr("disabled", true);
    $("#CancelRequest").attr("disabled", true);
    $(id).html("Processing");
}

function showSubmit(id, text) {
    $("#SubmitRequest").attr("disabled", false);
    $("#SaveRequest").attr("disabled", false);
    $("#CloseRequest").attr("disabled", false);
    $("#CancelRequest").attr("disabled", false);
    $(id).html(text);
}


//Regular Expression Matching Function

function getMatches(string, regex, index) {
    index || (index = 1); // default to the first capturing group
    var matches = [];
    var match;
    while (match = regex.exec(string)) {
        matches.push(match[index]);
    }
    return matches;
}

function removeRoom(i) {
    if ($('.esq_Room').length == 1) {
        alert(getLang("AlertDelRoom"));
        return;
    }
    $('#esq_Room_' + i).find(".esq_room_staff").each(function () {
        var tempId = $(this).attr("tempId");
        var intime = $(this).attr("intime");

        $(this).remove();

        if (parseInt(tempId) > 0) {
            tempId = tempId + ":" + intime;
            $('#txtDetailItemId').val($('#txtDetailItemId').val().length > 0 ? ($('#txtDetailItemId').val() + "," + tempId) : tempId);
        }
    });

    $('#esq_Room_' + i).remove();

    $("#dvStaffAndGuest .esq_Room").each(function (i, v) {
        $(this).find('.esq_Room_Number_span').html(i + 1);
    });

    refreshHotel();
    hideSubmitBtn();
    refreshCCManager();
}
var subFactorys = [];
var CostCenterList = null;
function AddRoom(Ccl, detailset, IsDorm) {
    if (Ccl != undefined) {
        CostCenterList = Ccl;
    }
    if (CostCenterList == null) {
        alert("CostCenter list is null.");
        return;
    }

    if (detailset == undefined || detailset == null) {
        var i = 1;
        var staffs = $("#dvStaffAndGuest .esq_Room:last");
        if (staffs.length > 0) {
            i = parseInt(staffs.attr("idNum")) + 1;
        }
        getRoomsHtmls(i, true);
    } else {
        $.each(detailset, function (a, e) {
            var idNum = 1;
            if ($("#dvStaffAndGuest #esq_Room_" + e.Title).length > 0) {
                idNum = addGuestOrStaff2(e.Title);
            } else {
                getRoomsHtmls(e.Title, false);
            }
            UserChangedResolved(e.Title, idNum);
            bindStaffData(e.Title, idNum, e);
        });
    }
    showOrHideDormField(IsDorm);
}
function showOrHideDormField(IsDorm) {
    if (IsDorm == undefined) {
        IsDorm = $('#txtIsHotel').val() == "1" ? false : true;
    }
    if (IsDorm) {
        $('.esq_Room_Dorm').show();
        $('.esq_Room_Hotel').hide();

        if ($('.esq_Room').hasClass('esq_Room_tempHotel')) {
            $('.esq_Room').removeClass("esq_Room_tempHotel");
        }
        $('.esq_Room').addClass('esq_Room_tempDorm');

        if ($('.esq_room_staff').hasClass('esq_room_staff_tempHotel')) {
            $('.esq_room_staff').removeClass("esq_room_staff_tempHotel");
        }
        $('.esq_room_staff').addClass('esq_room_staff_tempDorm');

        $(".esq_Room_Staff_Row_payment").show();
        $(".esq_staff_FactoryCode_td").show();
        //$(".esq_staff_department_th").show();
        $(".esq_staff_department_td").show();
        //$(".esq_staff_CCPerson_td").show();

        $(".esq_staff_payInPerson_th").hide();
        $(".esq_staff_payInPerson_td").hide();
    }
    else {
        if ($("#txtShowSmokingFlag").val() == "1") {
            $('.esq_txtShowSmokingFlag').show();
        }
        else {
            $('.esq_txtShowSmokingFlag').hide();
        }

        $('.esq_Room_Hotel').show();
        $('.esq_Room_Dorm').hide();

        if ($('.esq_Room').hasClass('esq_Room_tempDorm')) {
            $('.esq_Room').removeClass("esq_Room_tempDorm");
        }
        $('.esq_Room').addClass('esq_Room_tempHotel');

        if ($('.esq_room_staff').hasClass('esq_room_staff_tempDorm')) {
            $('.esq_room_staff').removeClass("esq_room_staff_tempDorm");
        }
        $('.esq_room_staff').addClass('esq_room_staff_tempHotel');

        $('#dvStaffAndGuest .esq_Room').each(function () {
            var roomNumId = $(this).attr("idnum");
            $(this).find(".esq_room_staff").each(function () {
                var staffNumId = $(this).attr("idnum");
                if ($(this).find(".esq_Guest").prop("checked")) {
                    $(this).find(".esq_staff_payInPerson_th").show();
                    $(this).find(".esq_staff_payInPerson_td").show();
                    payInPersonChange("#esq_Room_" + roomNumId, staffNumId, $(this).find('.esq_PayPerson').get(0));
                }
            })
        });
    }

    if ($("#txtShowRemark").val() == "1") {
        $('.esq_staff_RemarksDesc_th').show();
        $('.esq_staff_RemarksDesc_td').show();
    }
    else {
        $('.esq_staff_RemarksDesc_th').hide();
        $('.esq_staff_RemarksDesc_td').hide();
    }
}

function bindStaffData(roomNumId, staffNumId, detailEntity) {
    $("#esq_Room_" + roomNumId + " .esq_Smoking").prop("checked", detailEntity.Smoking);
    var $staff = $("#esq_Room_" + roomNumId + " .esq_room_staff[idNum='" + staffNumId + "']");
    $staff.attr("tempId", detailEntity.Id);
    $staff.find(".esq_Guest").prop("checked", detailEntity.Guest);
    if (detailEntity.Guest) {
        $staff.find('.esq_GuestName').val(detailEntity.GuestName);
        $staff.find(".esq_staff_OfficeName_th").hide();
        $staff.find(".esq_staff_OfficeName_td").hide();
        $staff.find(".esq_staff_GuestName_th").show();
        $staff.find(".esq_staff_GuestName_td").show();
    }
    else {
        if (detailEntity.OfficeNameId != null) {
            if (detailEntity.OfficeEmail == null || detailEntity.OfficeEmail.length == 0) {
                var oResults = getOfficeUserById(detailEntity.OfficeNameId);
                if (oResults != null && oResults.length > 0) {
                    detailEntity.OfficeEmail = oResults[0].Email;
                }
            }
            if (detailEntity.OfficeEmail != null && detailEntity.OfficeEmail.length > 0) {
                var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[$staff.find('.peoplePickerOfficeName').attr('id') + "_TopSpan"];
                $("#" + peoplePicker.EditorElementId).val(detailEntity.OfficeEmail);
                peoplePicker.AddUnresolvedUserFromEditor(true);
            }
        }
    }

    if (getIsDorm()) {
        $staff.find('#esq_TravelType_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").value(detailEntity.TravelType);
        $staff.find('#esq_DormArrivalTime_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").value(detailEntity.DormArrivalTime);
    }
    else {
        $staff.find('.esq_FlightNumber').val(detailEntity.FlightNumber);
        $staff.find('.esq_ArrivalTime').val(detailEntity.ArrivalTime);
        $staff.find('.esq_LateCheckin').val(detailEntity.LateCheckinTime);
        $staff.find('.esq_TravelName').val(detailEntity.TravelDocumentName);
        if (detailEntity.Guest) {
            $staff.find(".esq_staff_payInPerson_th").show();
            $staff.find(".esq_staff_payInPerson_td").show();
            $staff.find('.esq_PayPerson').prop("checked", detailEntity.PayInPerson);
            payInPersonChange("#esq_Room_" + roomNumId, staffNumId, $staff.find('.esq_PayPerson').get(0));
        }

        if (detailEntity.CCPersonId != null && detailEntity.CCPersonId.results.length > 0) {
            var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[$staff.find('.peoplePickerCCPerson').attr('id') + "_TopSpan"];
            $.each(detailEntity.CCPerson.results, function (ci, cv) {
                $("#" + peoplePicker.EditorElementId).val(cv.Name.substr(cv.Name.lastIndexOf('|') + 1));
                peoplePicker.AddUnresolvedUserFromEditor(true);
            });
        }
    }
    $staff.find('.esq_RemarksDesc').val(detailEntity.Remarks);
    $staff.find('#esq_FactoryCode_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").value(detailEntity.SubFactoryId);
    $staff.find('#esq_FactoryCode_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").trigger("change");
    $staff.find('#esq_Department_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").value(detailEntity.DepartmentCodeId);
    $staff.find('#esq_Gender_' + roomNumId + "_" + staffNumId).data("kendoDropDownList").value(detailEntity.Gender);
    var pCheckin = parseOffset(currentTimeZone, new Date(detailEntity.CheckinDate));
    var pCheckout = parseOffset(currentTimeZone, new Date(detailEntity.CheckoutDate));
    $staff.find('.esq_MobileNumbers').val(detailEntity.PhoneNumber);
    $staff.attr("intime", pCheckin.getTime());
    $staff.attr("outtime", pCheckout.getTime());
    $staff.attr("resolvedCount", '0');
    $staff.attr("isAll", detailEntity.Alloc_x0020_Flag ? "1" : "0");
    pCheckin.setHours(0);
    pCheckout.setHours(0);
    $staff.find('#esq_Checkin_' + roomNumId + "_" + staffNumId).data("kendoDatePicker").value(pCheckin);
    $staff.find('#esq_Checkout_' + roomNumId + "_" + staffNumId).data("kendoDatePicker").value(pCheckout);
}

function getRoomsHtmls(i, isResolved) {

    var roomsHtmls = [];

    roomsHtmls.push('<div class="esq_Room" id="esq_Room_' + i + '" idNum="' + i + '">');

    roomsHtmls.push('<div class="esq_Room_number esq_Room_Hotel"><span class="esq_Room_Number_span">' + ($("#dvStaffAndGuest .esq_Room").length + 1) + '</span></div>');

    //roomsHtmls.push('<div class="esq_Room_number esq_Room_Hotel" style="width:75px;left:60px;"><span></span></div>');
    roomsHtmls.push('<div class="esq_Room_number esq_Room_Hotel" style="width:75px;left:60px;"></div>');

    roomsHtmls.push('<div class="esq_Room_Hotel" style="left:1px;position:absolute;bottom:5px;"><input bind-tips="RemoveRoomHint" class="btnRemoveRoom" style="min-width:30px;padding:2px;" type="button" value="-" onclick="removeRoom(' + i + ')" /></div>');

    roomsHtmls.push('<div class="esq_txtShowSmokingFlag esq_Room_Hotel"><label bind-lang="Smoking">Smoking</label><input class="esq_Smoking" type="checkbox" /></div>');
    roomsHtmls.push('<div class="esq_Room_add esq_Room_Hotel">');
    roomsHtmls.push('<div class="esq_Room_add_button_th">');
    roomsHtmls.push('<input class="esq_Room_add_button" bind-tips="AddPeopleHint" style="min-width: 30px;padding: 2px;" type="button" value="+" onclick="addGuestOrStaff(' + i + ')" /></div>');
    roomsHtmls.push('</div>');

    roomsHtmls.push('<div class="esq_room_div">');
    roomsHtmls.push(getGuestOrStaffHtmls(i, 1));
    roomsHtmls.push('</div>');

    roomsHtmls.push('<div class="esq_clearFloat" style="float:none"></div>');

    roomsHtmls.push('</div>');

    $("#dvStaffAndGuest").append(roomsHtmls.join(''));
    bindGuestOrStaffEvent('#esq_Room_' + i, 1);
    if (isResolved) {
        UserChangedResolved(i, 1);
    }
    roomsHtmls = [];
}
function getGuestOrStaffHtmls(roomId, idNum) {
    var staffHtmls = [];
    staffHtmls.push('<div class="esq_room_staff" idNum="' + idNum + '" tempId="0" intime="0" outtime="0" resolvedCount="1" isAll="0">');

    staffHtmls.push('<div class="esq_room_staff_minus"><input bind-tips="RemovePeopleHint" class="btnRemoveGuestOrStaff" type="button" value="-" onclick="removeGuestOrStaff(this)" /></div>');

    staffHtmls.push('<div class="esq_Room_Staff_Row" style="height:auto;min-height:22px;">');
    staffHtmls.push('<div style="width:90px"><span bind-lang="Guest" bind-tips="GuestInfo" class="esq_span_tips">Guest</span></div>');
    staffHtmls.push('<div style="width:206px" class="esq_staff_OfficeName_th"><span bind-lang="OfficeName">Office Name</span><span style="color:red;">*</span></div>');
    staffHtmls.push('<div style="width:206px;display:none;" class="esq_staff_GuestName_th"><span bind-lang="GuestName">Guest Name</span><span style="color:red;">*</span></div>');
    staffHtmls.push('<div class="esq_Room_Hotel" style="width:212px"><span bind-lang="TravelName" bind-tips="TravelNameInfo" class="esq_span_tips">Travel Document Name</span><span style="color:red;">*</span></div>');
    staffHtmls.push('<div style="width:80px"><span bind-lang="Gender">Gender</span><span style="color:red;">*</span></div>');
    staffHtmls.push('<div style="width:214px;"><span bind-lang="PhoneNumber">Mobile Numbers</span><span style="color:red;">*</span></div>');
    staffHtmls.push('<div style="width:93px;display:none;" class="esq_staff_guestEmail_th"><span bind-lang="GuestEmail">Guest Email</span><span style="color:red;">*</span></div>');
    staffHtmls.push('<div style="width:98px;display:none;" class="esq_staff_payInPerson_th"><span bind-lang="PayPerson" bind-tips="PayPersonInfo" class="esq_span_tips">Pay in Person</span></div>');
    //staffHtmls.push('<div style="width:85px" class="esq_staff_chargeType_th" bind-lang="ChargeType">Charge Type</div>');
    //staffHtmls.push('<div class="esq_staff_payment_th" style="border-left:2px solid #ababab;border-right:2px solid #ababab;padding:0 8px 5px 8px;"><div style="text-align: center;"><span bind-lang="Payment" bind-tips="PayMentInfo" class="esq_span_tips">Payment</span></div><div><div style="width: 200px; margin-right: 8px; float: left;" class="esq_staff_FactoryCode_th"><span bind-lang="FactoryCode">Factory Code</span><span style="color:red;">*</span></div>');
    //staffHtmls.push('<div style="width: 300px; float: left; margin-right: 8px; " class="esq_staff_department_th"><span bind-lang="Department">Department</span><span style="color:red;">*</span></div><div style="width: 207px; float: left; " class="esq_staff_CCPerson_th"><span bind-lang="CCPerson">CCPerson</span><span style="color:red;">*</span></div></div></div>');
    staffHtmls.push('<div style="width:80px;display:none;" class="esq_staff_costCentre_th" bind-lang="CostCentre">Cost Centre</div>');
    staffHtmls.push('<div style="float:none;clear:both;"></div></div>');

    staffHtmls.push('<div class="esq_Room_Staff_Row" style="height:auto;margin-bottom:10px;border-bottom:1px solid #ababab;padding-bottom:8px">');
    staffHtmls.push('<div style="width:90px">');
    staffHtmls.push('<input type="checkbox" class="esq_Guest" onchange="guestChange(\'#esq_Room_' + roomId + '\', ' + idNum + ', this)" /></div>');
    staffHtmls.push('<div class="esq_staff_OfficeName_td" style="width:206px">');
    staffHtmls.push('<div class="peoplePickerOfficeName" id="OfficeName_' + roomId + '_' + idNum + '_' + ((new Date()).getTime()) + '"></div></div>');
    staffHtmls.push('<div style="width:206px;display:none;" class="esq_staff_GuestName_td">');
    staffHtmls.push('<input type="text" style="width:194px;height:22px"  class="esq_GuestName" onchange="refreshCCManager()" /></div>');
    staffHtmls.push('<div style="width:212px" class="esq_Room_Hotel">');
    staffHtmls.push('<input type="text" placeholder="Go to the EEL please use pinyin" style="width:200px;height:22px"  class="esq_TravelName" /></div>');
    staffHtmls.push('<div style="width:80px">');
    staffHtmls.push('<select style="width:80px" class="esq_Gender" id="esq_Gender_' + roomId + '_' + idNum + '"></select></div>');
    staffHtmls.push('<div style="width:214px;">');
    staffHtmls.push('<input type="text" style="width:200px;height:22px" class="esq_MobileNumbers" /></div>');
    staffHtmls.push('<div style="width:93px;display:none;" class="esq_staff_guestEmail_td">');
    staffHtmls.push('<input type="text" style="width:80px;height:22px" class="esq_GuestEmail" /></div>');
    staffHtmls.push('<div style="width:98px;display:none;" class="esq_staff_payInPerson_td">');
    staffHtmls.push('<input type="checkbox" class="esq_PayPerson" onchange="payInPersonChange(\'#esq_Room_' + roomId + '\', ' + idNum + ', this)" /></div>');
    //staffHtmls.push('<div style="width:85px" class="esq_staff_chargeType_td">');
    //staffHtmls.push('<select style="width:85px;" class="esq_ChargeType" id="esq_ChargeType_' + roomId + '_' + idNum + '"></select></div>');
    //staffHtmls.push('<div style="width:200px;padding-left:8px;border-left:2px solid #ababab;" class="esq_staff_FactoryCode_td">');
    //staffHtmls.push('<select style="width:200px" class="esq_FactoryCode" id="esq_FactoryCode_' + roomId + '_' + idNum + '"></select></div>');
    //staffHtmls.push('<div style="width:300px;" class="esq_staff_department_td">');
    //staffHtmls.push('<select style="width:300px" class="esq_Department" id="esq_Department_' + roomId + '_' + idNum + '"></select></div>');
    //staffHtmls.push('<div class="esq_staff_CCPerson_td" style="width:215px;border-right:2px solid #ababab;">');
    //staffHtmls.push('<div class="peoplePickerCCPerson" id="CCPerson_' + roomId + '_' + idNum + '_' + ((new Date()).getTime()) + '"></div></div>');
    staffHtmls.push('<div style="width:80px;display:none;" class="esq_staff_costCentre_td">');
    staffHtmls.push('<select style="width:80px" class="esq_CostCentre" id="esq_CostCentre_' + roomId + '_' + idNum + '"></select></div>');
    //staffHtmls.push('<div><input type="button" value="Cancel Booking" bind-lang="CancelBooking"  /></div>');
    staffHtmls.push('<div style="float:none;clear:both;"></div></div>');

    staffHtmls.push('<div class="esq_Room_Staff_Row esq_Room_Staff_Row_payment" style="height:auto;">');
    staffHtmls.push('<div class="esq_staff_payment_th" style="width: 90px; float: left;"><span bind-lang="Payment" bind-tipss="PayMentInfo" class="esq_span_tipss">Payment</span></div><div style="width: 206px; margin-right: 8px; float: left;" class="esq_staff_FactoryCode_th"><span bind-lang="FactoryCode">Factory Code</span><span style="color:red;">*</span></div>');
    staffHtmls.push('<div style="width: 300px; float: left; margin-right: 8px; " class="esq_staff_department_th"><span bind-lang="Department">Department</span><span style="color:red;">*</span></div><div style="width: 260px; float: left; display:none;" class="esq_staff_CCPerson_th"><span bind-lang="CCPerson">CCPerson</span><span style="color:red;">*</span></div>');
    staffHtmls.push('<div style="float:none;clear:both;"></div></div>');

    staffHtmls.push('<div class="esq_Room_Staff_Row esq_Room_Staff_Row_payment" style="height:auto;margin-bottom:10px;border-bottom:1px solid #ababab;padding-bottom:8px;padding-top:5px">');
    staffHtmls.push('<div class="esq_staff_payment_td" style="width: 90px; float: left;">&nbsp;</div>');
    staffHtmls.push('<div style="width:206px;" class="esq_staff_FactoryCode_td">');
    staffHtmls.push('<select style="width:206px" class="esq_FactoryCode" id="esq_FactoryCode_' + roomId + '_' + idNum + '"></select></div>');
    staffHtmls.push('<div style="width:300px;" class="esq_staff_department_td">');
    staffHtmls.push('<select style="width:300px" class="esq_Department" id="esq_Department_' + roomId + '_' + idNum + '"></select></div>');
    staffHtmls.push('<div style="display:none;" class="esq_staff_CCPerson_td">');
    staffHtmls.push('<div class="peoplePickerCCPerson" id="CCPerson_' + roomId + '_' + idNum + '_' + ((new Date()).getTime()) + '"></div></div>');
    staffHtmls.push('<div style="float:none;clear:both;"></div></div>');

    staffHtmls.push('<div class="esq_Room_Staff_Row">');
    staffHtmls.push('<div class="esq_Room_Dorm" style="width:90px" bind-lang="TravelType">Travel Type</div>');
    staffHtmls.push('<div class="esq_Room_Hotel" style="width:90px" bind-lang="FlightNumber">Flight Number</div>');
    //staffHtmls.push('<div class="esq_Room_Dorm" style="width:90px" bind-lang="ArrivalDate">Arrival Date</div>');
    staffHtmls.push('<div class="esq_Room_Dorm" style="width:206px" bind-lang="DormArrivalTime">Pick up time</div>');
    staffHtmls.push('<div class="esq_Room_Hotel" style="width:93px" bind-lang="ArrivalTime">Arrival Time</div>');
    staffHtmls.push('<div class="esq_Room_Hotel" style="width:103px"><span bind-lang="LateCheckin" bind-tips="LateCheckinInfo" class="esq_span_tips">Late Check in</span></div>');
    staffHtmls.push('<div style="width:140px"><span bind-lang="Checkin" bind-tips="CheckinInfo" class="esq_span_tips">Check in</span><span style="color:red;">*</span></div>');
    staffHtmls.push('<div style="width:152px"><span bind-lang="Checkout" bind-tips="CheckoutInfo" class="esq_span_tips">Check out</span><span style="color:red;">*</span></div>');
    staffHtmls.push('<div class="esq_Room_Hotel esq_staff_RemarksDesc_th" style="width:330px"><span bind-lang="RemarksDesc" bind-tips="RemarksDescInfo" class="esq_span_tips">Remarks:eg-Include breakfast</span></div>');
    staffHtmls.push('<div style="float:none;clear:both;"></div></div>');

    staffHtmls.push('<div class="esq_Room_Staff_Row" style="height:40px">');
    staffHtmls.push('<div class="esq_Room_Dorm" style="width:90px">');
    staffHtmls.push('<select style="width:90px" class="kdropdownlist esq_TravelType" id="esq_TravelType_' + roomId + '_' + idNum + '"><option selected>Bus</option><option>Ferry</option><option>Plane</option></select></select></div>');
    staffHtmls.push('<div class="esq_Room_Hotel" style="width:90px">');
    staffHtmls.push('<input type="text" style="width:79px;height:22px" class="esq_FlightNumber" /></div>');
    //staffHtmls.push('<div class="esq_Room_Dorm" style="width:90px">');
    //staffHtmls.push('<input type="text" style="width:90px" class="kdatepicker esq_ArrivalDate" id="esq_ArrivalDate_' + roomId + '_' + idNum + '" /></div>');
    staffHtmls.push('<div class="esq_Room_Dorm" style="width:206px">');
    staffHtmls.push('<select style="width:206px" class="kdropdownlist esq_DormArrivalTime" id="esq_DormArrivalTime_' + roomId + '_' + idNum + '">' + ChoicesList + '</select></div>');
    staffHtmls.push('<div class="esq_Room_Hotel" style="width:93px">');
    staffHtmls.push('<input type="text" style="width:82px;height:22px" class="esq_ArrivalTime" /></div>');
    staffHtmls.push('<div class="esq_Room_Hotel" style="width:103px">');
    staffHtmls.push('<input type="text" style="width:92px;height:22px" class="esq_LateCheckin" /></div>');
    staffHtmls.push('<div style="width:140px">');
    staffHtmls.push('<input type="text" style="width:140px" class="kdatepicker esq_Checkin" id="esq_Checkin_' + roomId + '_' + idNum + '" /></div>');
    staffHtmls.push('<div style="width:152px">');
    staffHtmls.push('<input type="text" style="width:152px" class="kdatepicker esq_Checkout" id="esq_Checkout_' + roomId + '_' + idNum + '" /></div>');
    staffHtmls.push('<div class="esq_Room_Hotel esq_staff_RemarksDesc_td" style="width:280px">');
    staffHtmls.push('<input type="text" style="width:270px;height:22px" class="esq_RemarksDesc" /></div>');
    staffHtmls.push('<div style="float:none;clear:both;"></div></div>');

    staffHtmls.push('</div>');
    return staffHtmls.join('');
}
function addGuestOrStaff2(roomId) {
    var roomNum = roomId;
    roomId = '#esq_Room_' + roomId;
    var idNum = 1;
    var staffs = $(roomId + " .esq_room_staff:last");
    if (staffs.length > 0) {
        idNum = parseInt(staffs.attr("idNum")) + 1;
    }
    $(roomId + " .esq_room_div").append(getGuestOrStaffHtmls(roomNum, idNum));
    bindGuestOrStaffEvent(roomId, idNum);
    return idNum;
}
function addGuestOrStaff(roomId) {
    var idNum = addGuestOrStaff2(roomId);
    showOrHideDormField();
    UserChangedResolved(roomId, idNum);
}
function bindGuestOrStaffEvent(roomId, idNum) {
    $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .kdatepicker").kendoDatePicker().removeClass("kdatepicker");
    $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .kdropdownlist").kendoDropDownList().removeClass("kdropdownlist");

    $(roomId + " [bind-lang]").each(function (i, obj) {
        objBindLang(obj);
    });
    $("[bind-tips]").each(function (i, obj) {
        var key = obj.attributes["bind-tips"].value;
        obj.title = getLang(key);
    });
    $('.esq_TravelName').attr("placeholder", getLang('TravelNameHint'));

    var GenderMale = getLang('GenderMale');
    var GenderFemale = getLang('GenderFemale');
    var goArry = [{ "Id": "Male", "Text": GenderMale }, { "Id": "Female", "Text": GenderFemale }];

    $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_Gender").kendoDropDownList({
        dataTextField: "Text",
        dataValueField: "Id",
        dataSource: goArry,
        index: 0
    });

    var ponId = $(roomId + " .esq_room_staff[idNum='" + idNum + "'] " + ".peoplePickerOfficeName").attr('id');
    initializePeoplePicker(ponId, 180);

    var ccId = $(roomId + " .esq_room_staff[idNum='" + idNum + "'] " + ".peoplePickerCCPerson").attr('id');
    initializePeoplePicker(ccId, 180, true);

    //$(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_ChargeType").kendoDropDownList({
    //    dataTextField: "Title",
    //    dataValueField: "Id",
    //    dataSource: ChargetypeList,
    //    index: 0
    //});
    $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_Department").kendoDropDownList({
        dataTextField: "DepartmentCode",
        dataValueField: "Id",
        dataSource: [],
        index: 0
    });

    //$(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_CostCentre").kendoDropDownList({
    //    dataTextField: "Title",
    //    dataValueField: "Id",
    //    dataSource: CostCenterList,
    //    index: 0
    //});

    $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_FactoryCode").kendoDropDownList({
        dataTextField: "SubFactory",
        dataValueField: "Id",
        dataSource: subFactorys,
        index: 0,
        change: function () {
            var FactoryCodeDataItem = $('#' + this.element.context.id).parents('.esq_room_staff').find('#' + this.element.context.id).data("kendoDropDownList").dataItem();

            var ccList = [];
            $.each(CostCenterList, function (i, e) {
                if (FactoryCodeDataItem && e.SubFactory == FactoryCodeDataItem.SubFactory) {
                    //Fix layout error when delete CostCenter Used Item
                    ccList.push({ "DepartmentCode": e.DepartmentCode, "Id": e.Id, "CCPersonId": e.CCPersonId });
                }
            });
            $('#' + this.element.context.id).parents('.esq_room_staff').find('#' + this.element.context.id.replace('FactoryCode', 'Department')).data("kendoDropDownList").setDataSource(ccList);
        }
    });

    var checkinDate = $('#txtCheckin').data("kendoDatePicker").value();
    if (checkinDate != null) {
        $(roomId + " .esq_room_staff[idNum='" + idNum + "'] #esq_Checkin_" + roomId.replace("#esq_Room_", "") + "_" + idNum).data("kendoDatePicker").value(checkinDate);
    }
    var checkoutDate = $('#txtCheckout').data("kendoDatePicker").value();
    if (checkoutDate != null) {
        $(roomId + " .esq_room_staff[idNum='" + idNum + "'] #esq_Checkout_" + roomId.replace("#esq_Room_", "") + "_" + idNum).data("kendoDatePicker").value(checkoutDate);
    }
}

function UserChangedResolved(roomId, idNum) {
    var roomId = "#esq_Room_" + roomId;
    var ponId = $(roomId + " .esq_room_staff[idNum='" + idNum + "'] " + ".peoplePickerOfficeName").attr('id');
    var picker = SPClientPeoplePicker.SPClientPeoplePickerDict[ponId + "_TopSpan"];
    picker.oldChanged = picker.OnControlResolvedUserChanged;
    picker.OnControlResolvedUserChanged = function () {
        picker.oldChanged();

        if ($(roomId + " .esq_room_staff[idNum='" + idNum + "']").attr("resolvedCount") == 0) {
            $(roomId + " .esq_room_staff[idNum='" + idNum + "']").attr("resolvedCount", "1");
        }
        else {

            var users = picker.GetAllUserInfo();
            if (users.length > 0 && users[0].IsResolved) {
                var dtsplit = users[0].DisplayText.split('/');
                //if (dtsplit.length >= 3) {
                //debugger;
                var userProfileOfficeLocation = getUserProfileOfficeLocation(users[0].Key); //use code replace below dtsplit[1]
                if (userProfileOfficeLocation != null && userProfileOfficeLocation.length > 0)
                {
                    var fcId = "";
                    var realFactoryCode = getUserRealFactory(userProfileOfficeLocation); //getUserRealFactory(dtsplit[1]);  //added by Zack 20170524 Get title issue
                    $.each(subFactorys, function (i, v) {
                        //if (v.SubFactory.toLowerCase() == dtsplit[1].toLowerCase()) {
                        if (v.SubFactory && (v.SubFactory.toLowerCase() == realFactoryCode.toLowerCase())) {
                            $(roomId + " .esq_room_staff[idNum='" + idNum + "'] #esq_FactoryCode_" + roomId.replace("#esq_Room_", '') + "_" + idNum).data("kendoDropDownList").value(v.Id);
                            fcId = v.SubFactory;
                        }
                    });


                    var ccList = [];
                    var ccId = 0;
                    if (fcId.length > 0) {
                        $.each(CostCenterList, function (i, e) {
                            if (e.SubFactory == fcId) {
                                ccList.push({
                                    "DepartmentCode": e.DepartmentCode,
                                    "Id": e.Id,
                                    "CCPersonId": e.CCPersonId
                                });
                                if (dtsplit.length >= 3 && e.DepartmentCode&&(e.DepartmentCode.toLowerCase() == dtsplit[2].toLowerCase())) {
                                    ccId = e.Id;
                                }
                            }
                        });
                    }
                    $(roomId + " .esq_room_staff[idNum='" + idNum + "'] #esq_Department_" + roomId.replace("#esq_Room_", '') + "_" + idNum).data("kendoDropDownList").setDataSource(ccList);
                    if (ccId > 0) {
                        $(roomId + " .esq_room_staff[idNum='" + idNum + "'] #esq_Department_" + roomId.replace("#esq_Room_", '') + "_" + idNum).data("kendoDropDownList").value(ccId);
                    }
                    refreshHotel();
                } else {
                    //取不到Factory & Payment Department取默认值 by ligs
                    var fcId = "";
                    $(roomId + " .esq_room_staff[idNum='" + idNum + "'] #esq_FactoryCode_" + roomId.replace("#esq_Room_", '') + "_" + idNum).data("kendoDropDownList").value(subFactorys[0].Id);
                    fcId = subFactorys[0].SubFactory;
                    var ccList = [];
                    $.each(CostCenterList, function (i, e) {
                        if (e.SubFactory == fcId) {
                            ccList.push({ "DepartmentCode": e.DepartmentCode, "Id": e.Id, "CCPersonId": e.CCPersonId });
                        }
                    });
                    $(roomId + " .esq_room_staff[idNum='" + idNum + "'] #esq_Department_" + roomId.replace("#esq_Room_", '') + "_" + idNum).data("kendoDropDownList").setDataSource(ccList);

                    alert(getLang("UserProfileOfficeLocationIsNull"));
                    return false;
                }
            } else {
                //用户为空时，Factory & Payment Department取默认值 by ligs
                var fcId = "";
                $(roomId + " .esq_room_staff[idNum='" + idNum + "'] #esq_FactoryCode_" + roomId.replace("#esq_Room_", '') + "_" + idNum).data("kendoDropDownList").value(subFactorys[0].Id);
                fcId = subFactorys[0].SubFactory;
                var ccList = [];
                $.each(CostCenterList, function (i, e) {
                    if (e.SubFactory == fcId) {
                        ccList.push({ "DepartmentCode": e.DepartmentCode, "Id": e.Id, "CCPersonId": e.CCPersonId });
                    }
                });
                $(roomId + " .esq_room_staff[idNum='" + idNum + "'] #esq_Department_" + roomId.replace("#esq_Room_", '') + "_" + idNum).data("kendoDropDownList").setDataSource(ccList);
            }
        }
        if (isBookingAdmin && (requestState == 'Received' || requestState == 'Processed')) {//add by ligs 20170421:添加CCManager
            refreshCCManager();
        }
    };

    picker.OnControlResolvedUserChanged();//自触发一次
}

function removeGuestOrStaff(o) {
    if ($('.esq_room_staff').length == 1) {
        alert(getLang("AlertDelPeople"));
        return false;
    }

    var tempId = $(o).parent().parent().attr("tempId");
    var intime = $(o).parent().parent().attr("intime");

    if ($(o).parent().parent().parent().find('.esq_room_staff').length > 1) {
        $(o).parent().parent().remove();

    }
    else {
        $(o).parent().parent().parent().parent().remove();

        $("#dvStaffAndGuest .esq_Room").each(function (i, v) {
            $(this).find('.esq_Room_Number_span').html(i + 1);
        });
    }
    if (parseInt(tempId) > 0) {
        tempId = tempId + ":" + intime;
        $('#txtDetailItemId').val($('#txtDetailItemId').val().length > 0 ? ($('#txtDetailItemId').val() + "," + tempId) : tempId);
    }

    refreshHotel();
    hideSubmitBtn();
    refreshCCManager();
    return false;
}


function refreshEmailHtmls() {
    var emailHtmls = [];
    $('#dvStaffAndGuest .esq_Room').each(function () {
        var roomNumId = $(this).attr("idnum");
        $(this).find(".esq_room_staff").each(function () {
            var staffNumId = $(this).attr("idnum");

            var xGuest = $(this).find('.esq_Guest').prop("checked");
            if (!xGuest) {
                var ppVal = JSON.parse($("#" + $(this).find('.peoplePickerOfficeName').attr('id') + "_TopSpan_HiddenInput").val());
                if (ppVal.length > 0&&ppVal[0].IsResolved) {
                    emailHtmls.push('<div><input checked="checked" id="ckbConfEmail_' + roomNumId + '_' + staffNumId + '" email="' + ppVal[0].EntityData.Email + '" type="checkbox" /><label for="ckbConfEmail_' + roomNumId + '_' + staffNumId + '">' + ppVal[0].DisplayText + '</label></div>');
                }
            }
        });
    });

    $('.esq_ConfirmationEmail').html(emailHtmls.join(''));
    if (emailHtmls.length == 0) {
        $('.esq_ConfirmationEmail_th').hide();
    }
}


//刷新CCManager,当客户名称修改时触发
var _firstRefreshCCManager = true;
function refreshCCManager() {
    if (_firstRefreshCCManager) return;
    refreshEmailHtmls();
    if (isBookingAdmin && (requestState == 'Received' || requestState == 'Processed')) {
        var allUserName = {};
        $('#dvStaffAndGuest .esq_Room').each(function () {
            $(this).find(".esq_room_staff").each(function () {
                var detailEntity = {};
                detailEntity.IsGuest = $(this).find('.esq_Guest').prop("checked");
                if (detailEntity.IsGuest) {
                    detailEntity.UserName = $(this).find('.esq_GuestName').val();
                } else {
                    var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[$(this).find('.peoplePickerOfficeName').attr('id') + "_TopSpan"];
                    var users = peoplePicker.GetAllUserInfo();
                    if (users.length > 0) {
                        detailEntity.UserName = users[0].DisplayText;
                        detailEntity.UserId = getOfficeNameId(users[0].Key);
                    } else {
                        return true;//continue
                    }
                }
                if (detailEntity.UserName != null && detailEntity.UserName != '') {
                    if (allUserName[detailEntity.UserName] == null) {
                        allUserName[detailEntity.UserName] = detailEntity.UserName;
                    }
                    var tableObj = document.getElementById('tbCCManger');
                    var isExist = false;
                    for (var i = 1; i < tableObj.rows.length; i++) {    //遍历Table的所有Row，第二行开始
                        var obj = {};
                        if (tableObj.rows[i].cells[0].innerText == detailEntity.UserName) {
                            //存在相同的则不添加,直接显示（可能是被隐藏的行）
                            $(tableObj.rows[i]).show();
                            isExist = true;
                            break;
                        }
                    }
                    if (!isExist) {
                        addCCManager(detailEntity);
                    }
                }

            });
        });
        //隐藏不存在的行
        if (allUserName.length < 1) return;
        var tableObj = document.getElementById('tbCCManger');
        for (var i = 1; i < tableObj.rows.length; i++) {    //遍历Table的所有Row，第二行开始
            var obj = {};
            if (allUserName[tableObj.rows[i].cells[0].innerText] == null) {
                //存在相同的则不添加,直接显示（可能是被隐藏的行）
                $(tableObj.rows[i]).hide();
            }
        }
    }
}


/*//当删除客人的时候，清除CCManager
function removeCCManager(name, isGuest) {
    if (isGuest) {
        name = $($($(name).parent().parent().children().get(2)).find('input[type=text]')[1]).context.value;
    }
    if (name == '')return;
    if (isBookingAdmin && (requestState == 'Received' || requestState == 'Processed')) {
        //var guestName = $($($(o).parent().parent().children().get(2)).find('input[type=text]')[1]).context.value;
        //var officeName = $($($(o).parent().parent().children().get(2)).find('input[type=text]')[0]).attr('aria-label');

        //var name = (guestName != null && guestName!='') ? guestName : ((officeName != null && officeName!='') ? officeName : '');
        var tableObj = document.getElementById('tbCCManger');
        for (var i = 1; i < tableObj.rows.length; i++) {    //遍历Table的所有Row，第二行开始
            var obj = {};
            if (tableObj.rows[i].cells[0].innerText == name) {
                //$(tableObj.rows[i]).remove();
                $(tableObj.rows[i]).hide();
                return true;
            }
        }
    }
}*/

/*function guestNameChange(obj) {
    var name = $(obj).context.value;
    if (isBookingAdmin && (requestState == 'Received' || requestState == 'Processed')) {
        var tableObj = document.getElementById('tbCCManger');
        for (var i = 1; i < tableObj.rows.length; i++) {    //遍历Table的所有Row，第二行开始
            var obj = {};
            if (tableObj.rows[i].cells[0].innerText == name) {
                //$(tableObj.rows[i]).remove();
                $(tableObj.rows[i]).show();
                return true;
            }
        }
    }
}*/


//显示与隐藏行 $(tableObj.rows[3]).context.style.display = 'none'
function showOrHideRow(name, isShow) {
    var tableObj = document.getElementById('tbCCManger');
    for (var i = 1; i < tableObj.rows.length; i++) {    //遍历Table的所有Row，第二行开始
        var obj = {};
        if (tableObj.rows[i].cells[0].innerText == name) {
            if (isShow) {
                $(tableObj.rows[i]).show();
            } else {
                $(tableObj.rows[i]).hide();
            }
            return true;
        }
    }
}

//当添加客人，自动添加CCManager
function addCCManager(detailEntity) {
    if (detailEntity == null || detailEntity.UserName == '' || detailEntity.IsGuest == null) return;
    if (isBookingAdmin && (requestState == 'Received' || requestState == 'Processed')) {
        var tableObj = document.getElementById('tbCCManger');
        for (var i = 1; i < tableObj.rows.length; i++) {    //遍历Table的所有Row，第二行开始
            var obj = {};
            if (tableObj.rows[i].cells[0].innerText == name) {
                //存在相同的则不添加,直接显示（可能是被隐藏的行）
                $(tableObj.rows[i]).show();
                return true;
            }
        }
        _hotelRequestService.getCCManager(null).then(function (data) {
            var ccObj = null;
            if (data != null && data.length > 0) {
                for (var k = 0; k < data.length; k++) {
                    var o = data[k];
                    if ((detailEntity.IsGuest && o.GuestName == detailEntity.UserName) || (!detailEntity.IsGuest && o.OfficeNameId == detailEntity.UserId)) {
                        ccObj = o;
                        break;
                    }
                }
            }
            var j = tableObj.rows.length;
            var managerOrAboveId = ccObj == null ? "" : ccObj.ManagerOrAboveId;

            var immediateSupervisorId = ccObj == null ? [] : ccObj.ImmediateSupervisorId.results;

            var managerOrAboveKey = "ccManagerOrAboveKey" + j;
            var immediateSupervisorKey = "ccImmediateSupervisorKey" + j;
            var html = '';
            html = html + "<tr id='row_" + j + "'><td>" + detailEntity.UserName + "</td>";

            html = html + "<td><div id='" + managerOrAboveKey + "'>" + managerOrAboveId + "</div></td>";
            html = html + "<td><div id='" + immediateSupervisorKey + "'>" + immediateSupervisorId.join() + "</div></td>";
            html = html + "<td style='display: none;'>" + detailEntity.IsGuest + "</td>";
            html = html + "<td style='display: none;'>" + (ccObj == null ? "false" : "true") + "</td>";
            html = html + "<td style='display: none;'>" + (detailEntity.IsGuest == true ? "" : ccObj == null ? 0 : ccObj.OfficeNameStringId) + "</td>";
            html = html + "<td style='display: none;'>" + (detailEntity.IsGuest == true ? detailEntity.UserName : "") + "</td>";
            html = html + "<td style='display: none;'>" + (ccObj == null ? "" : ccObj.Id) + "</td>";
            html = html + "</tr>";
            $('#tbCCManger').append($(html));

            initializePeoplePicker(immediateSupervisorKey, 230, true);
            if (immediateSupervisorId.length > 0) {
                var s = SPClientPeoplePicker.SPClientPeoplePickerDict[immediateSupervisorKey + "_TopSpan"];
                $.each(immediateSupervisorId, function (ci, cv) {
                    var oResults = getOfficeUserById(cv);
                    if (oResults != null && oResults.length > 0) {
                        $("#" + s.EditorElementId).val(oResults[0].Email);
                        s.AddUnresolvedUserFromEditor(true);
                    }
                });
            }
            initializePeoplePicker(managerOrAboveKey, 230);
            var p = SPClientPeoplePicker.SPClientPeoplePickerDict[managerOrAboveKey + "_TopSpan"];
            var oResults = getOfficeUserById(managerOrAboveId);
            if (oResults != null && oResults.length > 0) {
                $("#" + p.EditorElementId).val(oResults[0].Email);
                p.AddUnresolvedUserFromEditor(true);
            }
        });

    }
}

function hideSubmitBtn() {
    if ($('#btnAddRoom').is(':hidden')) {
        if ($('#dvStaffAndGuest .esq_Room').length == 0) {
            $('#btnBookedSend').hide();
            $('#SubmitRequest').hide();
        }
    }
}
function guestChange(roomId, idNum, $this) {
    if ($($this).prop("checked")) {
        if (!getIsDorm()) {
            $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_payInPerson_th").show();
            $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_payInPerson_td").show();
            payInPersonChange(roomId, idNum, $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_payInPerson_td input").get(0))
        }

        $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_OfficeName_th").hide();
        $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_OfficeName_td").hide();

        $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_GuestName_th").show();
        $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_GuestName_td").show();


        if ($(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_payInPerson_td input").prop("checked")) {
        }
    }
    else {
        $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_payInPerson_th").hide();
        $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_payInPerson_td").hide();
        $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_GuestName_th").hide();
        $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_GuestName_td").hide();
        $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_OfficeName_th").show();
        $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_OfficeName_td").show();
        $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_Room_Staff_Row_payment").show();
        $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_FactoryCode_td").show();
        $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_department_td").show();
    }
    refreshHotel();
    /*var name = '';
    if ($($this).prop("checked")) {
        name = $($($($this).parent().parent().parent().parent().children().get(2)).find('input[type=text]')[0]).attr('aria-label');
        showOrHideRow(name == null ? '' : name, false);
        name = $($($($this).parent().parent().parent().parent().children().get(2)).find('input[type=text]')[1]).context.value;
        showOrHideRow(name == null ? '' : name, true);
    } else {
        name = $($($($this).parent().parent().parent().parent().children().get(2)).find('input[type=text]')[0]).attr('aria-label');
        showOrHideRow(name == null ? '' : name, true);
        name = $($($($this).parent().parent().parent().parent().children().get(2)).find('input[type=text]')[1]).context.value;
        showOrHideRow(name == null ? '' : name, false);
    }*/
    refreshCCManager();
}

function payInPersonChange(roomId, idNum, $this) {
    if ($($this).prop("checked")) {
        $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_Room_Staff_Row_payment").hide();
        $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_FactoryCode_td").hide();
        //$(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_department_th").hide();
        $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_department_td").hide();
        //$(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_CCPerson_td").hide();
    }
    else {
        $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_Room_Staff_Row_payment").show();
        $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_FactoryCode_td").show();
        //$(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_department_th").show();
        $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_department_td").show();
        // $(roomId + " .esq_room_staff[idNum='" + idNum + "'] .esq_staff_CCPerson_td").show();
    }
}
function locationAssign(url) {
    setTimeout(function () {
        window.location.assign(url);
    }, 2000);
}

function editCell(event) {
    var currentCell;

    if (event == null) {
        currentCell = window.event.srcElement;
    } else {
        currentCell = event.target;
    }

    if (currentCell.tagName.toLowerCase() == "td") {
        var input = document.createElement("input");
        input.type = 'text';
        input.setAttribute('class', 'editable');
        input.value = currentCell.innerHTML;
        input.width = currentCell.style.width;

        input.onblur = function () {
            currentCell.innerHTML = input.value;
            //currentCell.removeChild(input);
        };
        input.onkeydown = function (event) {
            if (event.keyCode == 13) {
                input.blur();
            }
        };

        currentCell.innerHTML = '';
        currentCell.appendChild(input);
        input.focus();
    }
}


function initializePeoplePicker(peoplePickerElementId, width, AllowMultipleValues) {

    if (AllowMultipleValues == undefined || AllowMultipleValues == null) {
        AllowMultipleValues = false;
    }
    // Create a schema to store picker properties, and set the properties.
    var schema = {};
    schema['PrincipalAccountType'] = 'User';
    schema['SearchPrincipalSource'] = 15;
    schema['ResolvePrincipalSource'] = 15;
    schema['AllowMultipleValues'] = AllowMultipleValues;
    schema['MaximumEntitySuggestions'] = 50;
    schema['Width'] = width + 'px';

    // Render and initialize the picker.
    // Pass the ID of the DOM element that contains the picker, an array of initial
    // PickerEntity objects to set the picker value, and a schema that defines
    // picker properties.
    SPClientPeoplePicker_InitStandaloneControlWrapper(peoplePickerElementId, null, schema);
}
