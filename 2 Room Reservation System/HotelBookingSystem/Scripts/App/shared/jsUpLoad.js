/*
Authou:Tiger
Created:2016-04-06
Description:Javascript upload file to sharepoint document libaray
*/

/*
function uploadFile(obj, fileID) {

    if (!window.FileReader) { alert('This browser does not support the FileReader API. Please use the above version of IE10 browser!'); }

    // Get test values from the file input and text input page controls.
    var fileInput = jQuery('#' + fileID);

    if (fileInput[0].files.length == 0) { alert('Please select a file!'); return false; }

    var date = new Date();
    var parts = fileInput[0].value.split('\\');
    var fileName = parts[parts.length - 1];

    var newName = date.getFullYear().toString() + (date.getMonth() + 1).toString() + date.getDate().toString() + "_" + date.getMilliseconds() + "_" + fileName;

    var serverUrl = _spPageContextInfo.webAbsoluteUrl, serverRelativeUrlToFolder = '/shared documents';

    // Get the local file as an array buffer.
    function getFileBuffer(file) {
        var deferred = jQuery.Deferred();
        var reader = new FileReader();
        reader.onloadend = function (e) { deferred.resolve(e.target.result); }
        reader.onerror = function (e) { deferred.reject(e.target.error); }
        reader.readAsArrayBuffer(file);
        return deferred.promise();
    }

    // Get the local file as an array buffer.
    var getFile = getFileBuffer(fileInput[0].files[0]);

    getFile.done(function (arrayBuffer) {

        // Add the file to the SharePoint folder.
        var addFile = addFileToFolder(serverUrl, serverRelativeUrlToFolder, arrayBuffer, fileName);
        addFile.done(function (file, status, xhr) {

            // Get the list item that corresponds to the uploaded file.
            var getItem = getListItem(file.d.ListItemAllFields.__deferred.uri);
            getItem.done(function (listItem, status, xhr) {

                // Change the display name and title of the list item.
                var changeItem = updateListItem(listItem.d.__metadata);
                changeItem.done(function (data, status, xhr) {
                    alert('file uploaded and updated');
                });
                changeItem.fail(onError);
            });
            getItem.fail(onError);
        });
        addFile.fail(onError);
    });
    getFile.fail(onError);



    // Add the file to the file collection in the Shared Documents folder.
    function addFileToFolder(serverUrl, toFolder, arrayBuffer, fileName) {

        // Construct the endpoint.
        var fileCollectionEndpoint = String.format("{0}/_api/web/getfolderbyserverrelativeurl('{1}')/files/add(overwrite=true, url='{2}')", serverUrl, toFolder, fileName);

        // Send the request and return the response. This call returns the SharePoint file.
        return jQuery.ajax({
            url: fileCollectionEndpoint,
            type: "POST",
            data: arrayBuffer,
            processData: false,
            headers: {
                "accept": "application/json;odata=verbose",
                "X-RequestDigest": jQuery("#__REQUESTDIGEST").val(),
                "content-length": arrayBuffer.byteLength
            }
        });
    }

    // Get the list item that corresponds to the file by calling the file's ListItemAllFields property.
    function getListItem(fileListItemUri) {

        // Send the request and return the response.
        return jQuery.ajax({ url: fileListItemUri, type: "GET", headers: { "accept": "application/json;odata=verbose" } });
    }

    // Change the display name and title of the list item.
    function updateListItem(itemMetadata) {

        // Define the list item changes. Use the FileLeafRef property to change the display name. 
        // For simplicity, also use the name as the title. 
        // The example gets the list item type from the item's metadata, but you can also get it from the
        // ListItemEntityTypeFullName property of the list.
        var body = String.format("{{'__metadata':{{'type':'{0}'}},'FileLeafRef':'{1}','Title':'{2}'}}", itemMetadata.type, newName, newName);

        // Send the request and return the promise.
        // This call does not return response content from the server.
        return jQuery.ajax({
            url: itemMetadata.uri,
            type: "POST",
            data: body,
            headers: {
                "X-RequestDigest": jQuery("#__REQUESTDIGEST").val(),
                "content-type": "application/json;odata=verbose",
                "content-length": body.length,
                "IF-MATCH": itemMetadata.etag, "X-HTTP-Method": "MERGE"
            }
        });
    }
}

// Display error messages. 
function onError(error) {
    alert(error.responseText);
}*/

function getExtensionName(name) {

    if (typeof (name) == "undefined" || name == null || name == "") { return ""; }

    var i = name.lastIndexOf(".");

    return (i > 0) ? name.substring(i) : "";
}

function failHandler(jqXHR, textStatus, errorThrown) {
    var response = JSON.parse(jqXHR.responseText);
    var message = response ? response.error.message.value : textStatus;
    alert("Call failed. Error: " + message);
}

function readerFileBuffer(fn, file) { var reader = new FileReader(); reader.onload = function (e) { fn(e.target.result); }; reader.onerror = function (e) { alert(e.target.error); }; reader.readAsArrayBuffer(file); }

function uploadFile(obj, docLib, fileID) {
    if (!window.FileReader) { alert("This browser does not support the HTML5 File APIs"); return false; }

    var element = document.getElementById(fileID);

    if (element.files.length == 0) { alert('Please select a file!'); return false; }

    var date = new Date();
    var parts = element.value.split("\\");
    var fileName = parts[parts.length - 1];

    var newName = date.getFullYear().toString() + (date.getMonth() + 1).toString() + date.getDate().toString() + "_" + date.getMilliseconds() + "_" + fileName;

    readerFileBuffer(function (buffer) {

        jQuery.ajax({
            url: String.format("{0}/_api/Web/Lists/getByTitle('" + docLib + "')/RootFolder/Files/Add(url='{1}', overwrite=true)", _spPageContextInfo.webAbsoluteUrl, fileName),
            type: "POST",
            data: buffer,
            processData: false,
            headers: {
                Accept: "application/json;odata=verbose",
                "X-RequestDigest": jQuery("#__REQUESTDIGEST").val(),
                "Content-Length": buffer.byteLength
            }
        }).done(function (fileData, textStatus, jqXHR) {

            jQuery.ajax({
                url: fileData.d.ListItemAllFields.__deferred.uri,
                type: "GET",
                dataType: "json",
                headers: { Accept: "application/json;odata=verbose" }
            }).done(function (itemData, itemStatus, itemXHR) {
                var item = itemData.d;

                updateItemFields(item, newName).done(function (data, textStatus, jqXHR) {
                    alert('file uploaded and updated');
                }).fail(failHandler);

            }).fail(failHandler);

        }).fail(failHandler);

    }, element.files[0]);

    function updateItemFields(item, newFileName) {

        return jQuery.ajax({
            url: item.__metadata.uri,
            type: "POST",
            data: JSON.stringify({
                "__metadata": { type: item.__metadata.type },
                FileLeafRef: newFileName,
                Title: newFileName
            }),
            headers: {
                Accept: "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
                "X-RequestDigest": jQuery("#__REQUESTDIGEST").val(),
                "IF-MATCH": item.__metadata.etag,
                "X-Http-Method": "MERGE"
            }
        });
    }
}


function guid() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

function getQueryParams(paramToRetrieve) {
    var docUrl = document.URL;
    docUrl = docUrl.split("#/")[0];
    var params = docUrl.split("?")[1].split("&"); for (var i = 0; i < params.length; ++i) { var singleParam = params[i].split("="); if (singleParam[0] == paramToRetrieve) return singleParam[1]; }; return "";
}

var appWebUrl = decodeURIComponent(getQueryParams("SPAppWebUrl")), hostWebUrl = decodeURIComponent(getQueryParams("SPHostUrl"));

function acrossDomainUploadFile(docLib, fileID, requisitionNumber, cb) {

    if (!window.FileReader) { /*alert("This browser does not support the HTML5 File APIs");*/ return false; }

    var element = document.getElementById(fileID);

    if (element.files.length == 0) { /*alert('Please select a file!');*/ return false; }

    var date = new Date();
    //var parts = element.value.split("\\");
    var fileName = element.value.split('\\');//requisitionNumber + getExtensionName(element.value); //parts[parts.length - 1];
    fileName = fileName[fileName.length - 1];
    var newGuid = guid() + date.getTime() + getExtensionName(element.value);

    //var newName = date.getFullYear().toString() + (date.getMonth() + 1).toString() + date.getDate().toString() + "_" + date.getMilliseconds() + "_" + fileName;

    readerFileBuffer(function (buffer) {

        jQuery.ajax({
            url: String.format("{0}/_api/sp.appcontextsite(@target)/web/getfolderbyserverrelativeurl('{1}')/Files/Add(overwrite=true, url='{2}')?@target='{3}'", appWebUrl, docLib, newGuid, hostWebUrl),
            type: "POST",
            data: buffer,
            processData: false,
            async: false,
            headers: {
                Accept: "application/json;odata=verbose",
                "X-RequestDigest": jQuery("#__REQUESTDIGEST").val(),
                "Content-Length": buffer.byteLength
            }
        }).done(function (fileData, textStatus, jqXHR) {

            var fileListItemUri = (fileData.d.ListItemAllFields.__deferred.uri).replace(hostWebUrl, '{0}').replace('_api/Web', '_api/sp.appcontextsite(@target)/web');

            var itemEndpoint = String.format(fileListItemUri + "?@target='{1}'", appWebUrl, hostWebUrl);

            jQuery.ajax({
                url: itemEndpoint,
                type: "GET",
                dataType: "json",
                async: false,
                headers: { Accept: "application/json;odata=verbose" }
            }).done(function (itemData, itemStatus, itemXHR) {
                var item = itemData.d;

                acrossDomainUpdateItemFields(item, requisitionNumber, fileName).done(function (data, textStatus, jqXHR) {
                    cb();
                }).fail(failHandler);

            }).fail(failHandler);

        }).fail(failHandler);

    }, element.files[0]);

    function acrossDomainUpdateItemFields(item, newFileName, fileName) {

        var listItemUri = item.__metadata.uri.replace('_api/Web', '_api/sp.appcontextsite(@target)/web');

        var listItemEndpoint = String.format(listItemUri + "?@target='{0}'", hostWebUrl);

        return jQuery.ajax({
            url: listItemEndpoint,
            type: "POST",
            async: false,
            data: JSON.stringify({
                "__metadata": { type: item.__metadata.type },
                //FileLeafRef: newFileName,
                Title: newFileName,
                FileName: fileName
            }),
            headers: {
                Accept: "application/json;odata=verbose",
                "Content-Type": "application/json;odata=verbose",
                "X-RequestDigest": jQuery("#__REQUESTDIGEST").val(),
                "IF-MATCH": item.__metadata.etag,
                "X-Http-Method": "MERGE"
            }
        });
    }
}


function getAcrossDomainItems(docLib, requisitionNumber) {
    return jQuery.ajax({
        url: appWebUrl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + docLib + "')/items?$filter=Title%20eq%20" + requisitionNumber + "&$select=Id,FileName,Title,FileLeafRef,FileRef&@target=%27" + hostWebUrl + "%27",
        type: "GET",
        dataType: "json",
        async: false,
        headers: { Accept: "application/json;odata=verbose" }
    });/*.done(function (itemData, itemStatus, itemXHR) {
        var item = itemData.d;

    }).fail(failHandler);*/
}

function delAcrossDomainItem(list, id) {
    //return jQuery.ajax({
    //    url: appWebUrl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + list + "')/items(" + id + ")/?@target='" + hostWebUrl + "'",
    //    method: "POST",
    //    async: false,
    //    headers: { "X-RequestDigest": $("#__REQUESTDIGEST").val(), "IF-MATCH": "*", "X-HTTP-Method": "DELETE" }
    //});

    var def = new $.Deferred();
    var execute = new SP.RequestExecutor(appWebUrl);
    execute.executeAsync({
        url: appWebUrl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('" + list + "')/items(" + id + ")/?@target='" + hostWebUrl + "'",
        method: "POST",
        async: false,
        headers: { "X-RequestDigest": $("#__REQUESTDIGEST").val(), "IF-MATCH": "*", "X-HTTP-Method": "DELETE" },
        success: function (result, errorCode, errorMessage) {
            def.resolve(result, errorCode, errorMessage);
        },
        error: function (result, errorCode, errorMessage) {
            def.reject(errorMessage);
        }
    });
    return def.promise();
}