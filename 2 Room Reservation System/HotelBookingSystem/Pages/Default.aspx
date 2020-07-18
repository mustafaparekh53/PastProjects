<%-- 以下 4 行是使用 SharePoint 组件时所需的 ASP.NET 指令 --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- 将在该页的 <head> 中放置以下 Content 元素中的标记和脚本 --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
    <script type="text/javascript" src="../Scripts/underscore-min.js"></script>
    <script type="text/javascript">
        var underscore = _.noConflict();
        $(document).ready(function () {
            $("#ctl00_PlaceHolderSiteName_onetidProjectPropertyTitle").text("Back To Home");//设置Title
            $("#ctl00_PlaceHolderSiteName_onetidProjectPropertyTitle").attr("href", decodeURIComponent(getQueryStringParameter("SPHostUrl")));
        });
        
    </script>
    <SharePoint:ScriptLink Name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />
    <meta name="WebPartPageExpansion" content="full" />

    <!-- Add your CSS styles to the following file -->
    <link rel="Stylesheet" type="text/css" href="../Content/kendo.common.min.css" />
    <link rel="Stylesheet" type="text/css" href="../Content/kendo.default.min.css" />
    <link rel="Stylesheet" type="text/css" href="../Content/App.css" />
    <%--<link rel="Stylesheet" type="text/css" href="https://esquel.sharepoint.com/sites/ead/SiteAssets/hbs/kendo.common.min.css" />
    <link rel="Stylesheet" type="text/css" href="https://esquel.sharepoint.com/sites/ead/SiteAssets/hbs/kendo.default.min.css" />
    <link rel="Stylesheet" type="text/css" href="https://esquel.sharepoint.com/sites/ead/SiteAssets/hbs/devApp.css" />--%>

    <!-- Add your JavaScript to the following file -->
    <script type="text/javascript" src="../Scripts/angular.min.js"></script>
    <script type="text/javascript" src="../Scripts/angular-route.js"></script>
    <script type="text/javascript" src="../Scripts/kendo.all.min.js"></script>
    
    <script type="text/javascript" src="../Scripts/App/components/app.module.js"></script>
    <script type="text/javascript" src="../Scripts/App/components/app.controller.js"></script>
    <script type="text/javascript" src="../Scripts/App/components/app.service.js"></script>
    <script type="text/javascript" src="../Scripts/App/shared/jsUpLoad.js"></script>
    <script type="text/javascript" src="../Scripts/App/shared/date.js"></script>
    <script type="text/javascript" src="../Scripts/App/shared/base.service.js"></script>
    <script type="text/javascript" src="../Scripts/App/shared/HBSLang.js"></script>
    <script type="text/javascript" src="../Scripts/App/components/app.route.js"></script>

    <script type="text/javascript" src="../Scripts/App/components/hotelRequestForm/hotelRequestFormCtrl.js"></script>
    <script type="text/javascript" src="../Scripts/App/components/hotelRequestForm/hotelRequestFormSvc.js"></script>
    <script type="text/javascript" src="../Scripts/App/components/adminPage/adminPageCtrl.js"></script>
    <script type="text/javascript" src="../Scripts/App/components/reportPage/reportPageCtrl.js"></script>
    <script type="text/javascript" src="../Scripts/App/components/dormLandingPage/dormLandingPageSrv.js"></script>
    <script type="text/javascript" src="../Scripts/App/components/dormLandingPage/dormLandingPageCtrl.js"></script>
    <%--<script type="text/javascript" src="../../SiteAssets/components/dormLandingPageCtrl.js"></script>
    <script type="text/javascript" src="../../SiteAssets/components/dormLandingPageSrv.js"></script>--%>
</asp:Content>

<%-- 以下 Content 元素中的标记将放置在页面的 TitleArea 中 --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    Room Reservation Form
</asp:Content>

<%-- 将在该页的 <body> 中放置以下 Content 元素中的标记和脚本 --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
    <SharePoint:ScriptLink name="clienttemplates.js" runat="server" LoadAfterUI="true" Localizable="false" />
    <SharePoint:ScriptLink name="clientforms.js" runat="server" LoadAfterUI="true" Localizable="false" />
    <SharePoint:ScriptLink name="clientpeoplepicker.js" runat="server" LoadAfterUI="true" Localizable="false" />
    <SharePoint:ScriptLink name="autofill.js" runat="server" LoadAfterUI="true" Localizable="false" />
    <SharePoint:ScriptLink name="sp.js" runat="server" LoadAfterUI="true" Localizable="false" />
    <SharePoint:ScriptLink name="sp.runtime.js" runat="server" LoadAfterUI="true" Localizable="false" />
    <SharePoint:ScriptLink name="sp.core.js" runat="server" LoadAfterUI="true" Localizable="false" />

    <div class="esq_BookFrom" ng-app="spsmodule" ng-controller="spscontroller">
        <div>
            <div class="esq_floatR"> 
                <span bind-lang="Language">Language</span>：
                <select id="ddlLanguage" kendo-drop-down-list k-options="languageList" ng-model="Language"></select>
            </div>
            <div class="esq_clearFloat"></div>
        </div>
        <ul style="display:none;" id="menu">
            <li ng-repeat="(link,itemName) in menu"><a href="{{link}}">{{itemName}} </a></li>
        </ul>
        <div ng-view>Loading...</div>
    </div>

</asp:Content>
