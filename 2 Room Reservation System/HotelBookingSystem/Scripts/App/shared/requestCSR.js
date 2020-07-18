
(function () {

    var titleFiledContext = {};
    titleFiledContext.Templates = {};
    titleFiledContext.Templates.Fields = {
        "TitleLink": {
            "View": titleViewFiledTemplate,
            "DisplayForm": titleViewFiledTemplate
        }
    };
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(titleFiledContext);

})();


function titleViewFiledTemplate(ctx) {

    var value = ctx.CurrentItem[ctx.CurrentFieldSchema.Name];

    //是否为空
    if (strIsNullOrEmpty(value)) {
        return value;
    }
    var hrefVal = "https://esquel-f013a4a5dc0525.sharepoint.com/sites/ead/hbs/RoomReservationSystem/Pages/Default.aspx";
    hrefVal += "?SPHostUrl=https%3A%2F%2Fesquel%2Esharepoint%2Ecom%2Fsites%2Fead%2Fhbs";
    hrefVal += "&SPLanguage=en-US";
    hrefVal += "&id="+ctx.CurrentItem["ID"];
    hrefVal += "&SPAppWebUrl=https%3A%2F%2Fesquel-f013a4a5dc0525%2Esharepoint%2Ecom%2Fsites%2Fead%2Fhbs%2FRoomReservationSystem#/Booking";
    var returnHtml = '<div><a href="'+ hrefVal +'" target="_blank">' + value + '</a></div>';

    return returnHtml;
}

function strIsNullOrEmpty(v) {
    if ((v != null) && (v.length > 0))
        return false;
    else
        return true;
}
