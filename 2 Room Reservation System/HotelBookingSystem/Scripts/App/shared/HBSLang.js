if (typeof (window.SPLanguagePack) == "undefined") {

    window.SPLanguagePack = "use strict";

    var langType = null, langPackObj = null, switchingLanguageCallbackCollections = new Array();

    var languageKey = "HBS.lang";

    var hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
    var appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
    appweburl = appweburl.split("#/")[0];

    function localStorageItem(key, val) {
        if (typeof (localStorage) == "object") {
            if (typeof (val) == "undefined") {
                return localStorage.getItem(key);
            } else {
                if (val == null) {
                    localStorage.removeItem(key);
                }
                else {
                    localStorage.setItem(key, val);
                }
            }
        } return null;
    }

    function toDate(v) { return typeof (v) == "string" ? new Date(v) : v; }

    function getUrlQuery(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");

        var r = window.location.search.substr(1).match(reg);

        if (r != null) { return unescape(r[2]); }

        r = window.location.hash.substr(1).match(reg);

        if (r != null) { return unescape(r[2]); }

        return null;
    }

    function getCurrentSiteUrl() { var cSiteUrl = _spPageContextInfo.webServerRelativeUrl; return cSiteUrl == "/" ? "" : cSiteUrl; }

    function getLanguagePackList(doSuccess, langType) {
        jQuery.ajax({
            url: (appweburl + "/_api/SP.AppContextSite(@target)/web/lists/GetByTitle('LanguagePack')/items?$orderby=Modified desc&$top=5000&$select=Title,Modified," + langType.replace("-", "_x002d_") + "&@target='" + hostweburl + "'"),
            type: "GET",
            async: false,
            headers: { "accept": "application/json;odata=verbose" },
            success: doSuccess
        });
    }

    function analyticalLanguagePack(s) {

        var lang = localStorageItem(languageKey + "Type"), langs = new Object(), status = false;

        if (typeof (s) != "undefined" && s != null && langType.toLowerCase() == lang) {
            status = true;

            var items = s.split(":?");

            for (var i = 0; i < items.length; ++i) {
                var item = items[i].split("=|");

                if (item.length > 1)
                    langs[item[0]] = item[1];
            }
        }

        return { lang: ((typeof (lang) == "undefined" || lang == null) ? "en-us" : lang), status: status, langs: langs };
    }

    function saveLanguagePack(obj) {

        var items = new Array();

        var data = obj.d.results;

        langPackObj.langs = new Object();

        var langField = langType.replace("-", "_x002d_");

        for (var i = 0; i < data.length; ++i) {

            var lKey = data[i].Title, lVal = data[i][langField];

            if (typeof (lKey) != "undefined" && lKey != null && typeof (lVal) != "undefined" && lVal != null) { items.push(lKey + "=|" + lVal); langPackObj.langs[lKey] = lVal; }
        }

        localStorageItem(languageKey, items.join(":?"));

        localStorageItem(languageKey + "Type", langPackObj.lang = langType.toLowerCase());

        if (data.length > 0) {
            localStorageItem(languageKey + "UT", toDate(data[0]["Modified"]).getTime());
        }
    }



    //获取语言类型
    function getLangType() { return langPackObj.lang; }

    //通过键值获取语言
    function getLang(key) {

        if (langPackObj == null) { return key; }

        if (typeof (langPackObj.langs[key]) == "undefined" || langPackObj.langs[key] == null) {

            var val = langPackObj.langs[$.trim(key).replace(/ /ig, "_").replace(/ /ig, "_")];

            return (typeof (val) == "undefined") ? key : val;
        } else {
            return langPackObj.langs[key];
        }
    }

    //将元素对象绑定语言
    function objBindLang(obj) {
        var key = obj.attributes["bind-lang"].value;

        if (obj.type == 'button') {
            obj.value = getLang(key);
        } else {
            obj.innerHTML = getLang(key);
        }
    }

    //全居对象语言绑定
    function bindLang() {

        $("[bind-lang]").each(function (i, obj) { objBindLang(obj); });

        //$(".o365cs-nav-brandingText,.ms-promotedActionButton-text,[id=lang]").each(function (i, obj) {

        //    bindLangItemByText(obj);

        //});

         if (typeof (callback) == "function") { callback(); }
    }

    //根据单个对象文本值进行绑定
    function bindLangItemByText(obj) {

        var key = $.trim(obj.innerText).replace(/&#8203;/ig, "").replace(/​/ig, "");

        var defaultValue = obj.getAttribute("defaultValue");

        if (typeof (defaultValue) != "undefined" && defaultValue != null) {
            key = defaultValue;
        } else {
            obj.setAttribute("defaultValue", key);
        }

        if (key != "") {
            var val = getLang(key);

            if ($.trim(obj.innerHTML) != val) {
                obj.innerHTML = val;
            }
        }
    }

    function bindLangByText(objs) {

        $(objs).each(function (i, obj) { bindLangItemByText(obj); });

    }

    //居部对象语言绑定
    function bindLangByObj(obj, callback) {

        $(obj).find("[bind-lang]").each(function (i, obj) { objBindLang(obj); });

        if (typeof (callback) == "function") { callback(); }
    }

    //切换语言
    function switchingLanguagePack(lang, callback) {

        langPackInitialize(lang);

        bindLang(callback);

        for (var i = 0; i < switchingLanguageCallbackCollections.length; ++i) { switchingLanguageCallbackCollections[i](); }
        //switchingLanguageCallbackCollections = new Array();
    }

    //语言切换回应事件注册
    function switchingLanguageCallback(callback) { if (typeof (callback) == "function") { switchingLanguageCallbackCollections.push(callback); } }

    //语言包初使化
    function langPackInitialize(t) {
        try {
            langType = t;
            /*默认选择英文*/
            if (langType == null || langType == "") { langType = "en-us"; }

            langPackObj = analyticalLanguagePack(langType == "clear" ? null : localStorageItem(languageKey));

            if (langType == null || langType == "" || langType == "clear") { langType = langPackObj.lang; }

            if (langPackObj.status == false) { getLanguagePackList(saveLanguagePack, langType); }

        } catch (e) {
            console.log("Lang Pack Initialize Error:" + e.message);
        }
    }

    //检查多语言包是否有更新
    function checkLangPackUpdate(callback) {
        try {
            var lUpdateTime = localStorageItem(languageKey + "UT");
            jQuery.ajax({
                url: (appweburl + "/_api/SP.AppContextSite(@target)/web/lists/GetByTitle('LanguagePack')/items?$orderby=Modified desc&$top=1&$select=Modified&@target='" + hostweburl + "'"),
                type: "GET",
                async: true,
                headers: { "accept": "application/json;odata=verbose" },
                success: function (obj) {
                    var items = obj.d.results;

                    if (items.length > 0) {

                        var time = toDate(items[0]["Modified"]).getTime().toString();

                        if (lUpdateTime != time) {
                            localStorageItem(languageKey, null);
                        }
                    }

                    if (typeof (callback) == "function") { callback(); }
                },
                error: function (jqxr, errorCode, errorThrown) {
                    console.log("检查多语言包是否有更新 Error");
                    if (typeof (callback) == "function") { callback(); }
                }
            });
        } catch (e) {
            console.log("Lang Pack Initialize Error:" + e.message);
        }
    }
}