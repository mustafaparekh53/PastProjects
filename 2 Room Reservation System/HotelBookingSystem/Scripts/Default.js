

$(document).ready(function () {
    //$('#BookingLink').attr("href", "../Pages/Booking.aspx");
    $('#BookingLink').attr("href", "../Pages/Booking.aspx?SPHostUrl=" + getQueryStringParameter("SPHostUrl") + "&SPAppWebUrl=" + getQueryStringParameter("SPAppWebUrl") + "");
    //$('#TickectLink').attr("href", "../Pages/Book.aspx?SPHostUrl=" + getQueryStringParameter("SPHostUrl") + "&SPAppWebUrl=" + getQueryStringParameter("SPAppWebUrl") + "");
});

function getQueryStringParameter(paramToRetrieve) {
    var params =
        document.URL.split("?")[1].split("&");
    var strParams = "";
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");
        if (singleParam[0] == paramToRetrieve)
            return singleParam[1];
    }
}
