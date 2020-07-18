function getQueryParams(paramToRetrieve) { var params = document.URL.split("?")[1].split("&"); for (var i = 0; i < params.length; ++i) { var singleParam = params[i].split("="); if (singleParam[0] == paramToRetrieve) return singleParam[1]; }; return ""; }
var appWebUrl = decodeURIComponent(getQueryParams("SPAppWebUrl")), hostWebUrl = decodeURIComponent(getQueryParams("SPHostUrl"));
var parentHostWebUrl = hostWebUrl.substring(0, hostWebUrl.lastIndexOf("/"));

$(document).ready(function () {
    window.context = SP.ClientContext.get_current();
    window.web = context.get_web();
    window.user = window.web.get_currentUser();
    

    //---------------bind ddlLang-------------
    var data = [
        { text: "English", value: "1" },
        { text: "Chinese", value: "2" }
    ];

    // create DropDownList from input HTML element
    $("#ddlLang").kendoDropDownList({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: data,
        index: 0
        //, change: onChange
    });
    //--------------------------------------------------------

    //---------bind requestor and department-----------------
    //BindUserInfo();
    //---------------------------

    //------------bind booking purpose--------------
    var bookingPurposeData = [];
    getAcrossDomainItems("Booking Purpose", "", "false").done(function (itemData, itemStatus, itemXHR) {
        var items = itemData.d.results;
        for (var i = 0; i < items.length; i++) {
            bookingPurposeData.push({
                //BookingPurposeCode is (URL Field=Title)
                text: items[i].Title, value: items[i].ID
            });
        }

    }).fail(failHandler);

    $("#ddlBookingPurpose").kendoDropDownList({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: bookingPurposeData,
        index: 0
        //, change: onChange
    });
    //--------------------------------------------

    //------------------bind check in date----------------
    $("#txtCheckinDate").kendoDatePicker();
    $("#txtCheckoutDate").kendoDatePicker();
    //-------------------------------------------------

    //------------bind destination--------------
    var factoryData = [];
    getAcrossDomainItems("Factory", "", "true").done(function (itemData, itemStatus, itemXHR) {
        var items = itemData.d.results;
        for (var i = 0; i < items.length; i++) {
            factoryData.push({
                //BookingPurposeCode is (URL Field=Title)
                text: items[i].Title, value: items[i].ID
            });
        }

    }).fail(failHandler);

    $("#ddlDestination").kendoDropDownList({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: factoryData,
        index: 0
        //, change: onChange
    });
    //--------------------------------------------

    //-----------------bind hotel details---------------
    $("#tabstripHotel").kendoTabStrip({
        animation: {
            open: {
                effects: "fadeIn"
            }
        }
    });

    var hotelData = [
        { text: "BP International House", value: "1" },
        { text: "Hotel 2", value: "2" },
        { text: "Hotel 3", value: "3" },
        { text: "Hotel 4", value: "4" }
    ];

    // create DropDownList from input HTML element
    $("#ddlHotel1").kendoDropDownList({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: hotelData,
        index: 0
        , change: ddlHotel1_onChange
    });

    $("#ddlHotel2").kendoDropDownList({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: hotelData,
        index: 0
        //, change: ddlHotel1_onChange
    });

    $("#ddlHotel3").kendoDropDownList({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: hotelData,
        index: 0
        //, change: ddlHotel1_onChange
    });

    $("#spanHotel1").mouseover(spanMouseOver);
    $("#spanHotel2").mouseover(spanMouseOver);
    $("#spanHotel3").mouseover(spanMouseOver);

    //--------------------------------------

    //$("#dvMain").kendoSplitter({
    //    orientation: "vertical",
    //    panes: [
    //        { collapsible: true },
    //        { collapsible: false },
    //        { collapsible: true }
    //    ]
    //});

    popupOtherHolte();

    var numberOfRoomsData = [
        { text: "1", value: "1" },
        { text: "2", value: "2" },
        { text: "3", value: "3" },
        { text: "4", value: "4" }
    ];

    // create DropDownList from input HTML element
    $("#ddlNumberOfRooms").kendoDropDownList({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: numberOfRoomsData,
        index: 0
        //, change: ddlHotel1_onChange
    });

    $("#btnAddDynamicArea").click(copyDynamicArea);

});

function copyDynamicArea(event) {

    var cloneObj = $("#tblStaffAndGuest_1").clone(true); //.appendTo("#dvStaffAndGuest");
    //cloneObj.attr("id", "tblStaffAndGuest_2");
    //var obj1 = cloneObj.find("#tblStaffAndGuest_td1").val("1");

    cloneObj.appendTo("#dvStaffAndGuest");

    var i = 0;
    $("#dvStaffAndGuest table").each(function () {
        var countI = ++i;
        var tablID = "tblStaffAndGuest_" + countI;
        $(this).attr("id", tablID);
        var tdAddButton = $(this).find("#tblStaffAndGuest_td1");
        tdAddButton.text(countI);
        var newButtonStr = "<input id='btnAddDynamicArea1' type='button' onclick='copyDynamicArea();' value='+'/>";
        var newButton = $(newButtonStr).appendTo(tdAddButton);
    });
}

function popupOtherHolte() {
    //$(this).click();

}

function spanMouseOver() {
    $(this).click();
}



function ddlHotel1_onChange() {
    //var value = $("#color").val();
    var hotelV = $("#ddlHotel1").data("kendoDropDownList");
    //alert("you select " + hotelV.text());
    if (hotelV.value() == 1) {
        $('#spanHotel1').click();
    }
    else if (hotelV.value() == 2) {
        $('#spanHotel2').click();
    }
    else if (hotelV.value() == 3) {
        $('#spanHotel3').click();
    }
    else  {
        $('#spanHotel4').click();
    }
    
};

function failHandler(jqXHR, textStatus, errorThrown) {
    var response = JSON.parse(jqXHR.responseText);
    var message = response ? response.error.message.value : textStatus;
    alert("Call failed. Error: " + message);
}

function getAcrossDomainItems(docLib, requisitionNumber, isParentSite) {
    var listUrl = "";
    var siteUrl = "";
    if (isParentSite == "true") {
        siteUrl = parentHostWebUrl;
    } else {
        siteUrl = hostWebUrl;
    }

    if (requisitionNumber == "") {
        listUrl = appWebUrl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + docLib + "')/items" + "?@target='" + siteUrl + "'";
    } else {
        listUrl = appWebUrl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + docLib + "')/items?$filter=Title%20eq%20" + requisitionNumber + "&$select=Id,Title,FileLeafRef,FileRef&@target=%27" + siteUrl + "%27";
    }

    return jQuery.ajax({
        url: listUrl,
        type: "GET",
        dataType: "json",
        async: false,
        headers: { Accept: "application/json;odata=verbose" }
    });/*.done(function (itemData, itemStatus, itemXHR) {
        var item = itemData.d;

    }).fail(failHandler);*/
}

// 此函数准备、加载然后执行 SharePoint 查询以获取当前用户信息
function BindUserInfo() {
    context.load(user);
    context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);
}

// 如果上述调用成功，则执行此函数
// 此函数将“message”元素的内容替换为用户名
function onGetUserNameSuccess() {
    $("#txtRequestor").text(user.get_title());
    //$("#txtDepartment").text(user.get_d());
    $("#txtDepartment").text(getUserDepartment());
}

// 将在上述调用失败时执行此函数
function onGetUserNameFail(sender, args) {
    alert('Failed to get user name. Error:' + args.get_message());
}

function getUserDepartment() {
    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var department;
    //getUserInfo().LoginName
    try {
        $.ajax(
          {
              url: _spPageContextInfo.webServerRelativeUrl +
                  "/_api/SP.UserProfiles.PeopleManager/GetUserProfilePropertyFor(accountName=@v,propertyName='Department')" +
                  "?@v='" + encodeURIComponent(_spPageContextInfo.userLoginName) + "'",
              type: "GET",
              async: false,
              headers: {
                  "accept": "application/json;odata=verbose",
              },
              success: function (data) {
                  if (data.d.GetUserProfilePropertyFor == "undefined" || data.d.GetUserProfilePropertyFor == null) {
                      department = "";
                  }
                  else {
                      department = data.d.GetUserProfilePropertyFor;
                  };
              },
              error: function (jqxr, errorCode, errorThrown) {
                  department = null;
              },
              complete: function (data) {
              }
          }
      );
    } catch (e) {
        department = null;
    }
    return department;
}


//get list item function
function getUserInfo() {
    var userData;
    $.ajax(
     {
         url: _spPageContextInfo.webServerRelativeUrl +
             "/_api/web/currentuser",
         type: "GET",
         async: false,
         headers: {
             "accept": "application/json;odata=verbose",
         },
         success: function (data) {
             userData = { Id: data.d.Id, UserName: data.d.Title, LoginName: data.d.LoginName };
         },
         error: function (err) {
         },
         complete: function (data) {
         }
     }
 );
    return userData;
}