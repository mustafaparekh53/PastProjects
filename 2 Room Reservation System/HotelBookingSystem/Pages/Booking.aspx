<%@ Page language="C#" MasterPageFile="~masterurl/default.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
    
    <link rel="Stylesheet" type="text/css" href="../Content/kendo.common.min.css" />
    <link rel="Stylesheet" type="text/css" href="../Content/kendo.default.min.css" />
    <link rel="Stylesheet" type="text/css" href="../Content/App.css" />

    <SharePoint:ScriptLink name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />

    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>
    <script type="text/javascript" src="/_layouts/SP.debug.js"></script>
    
    <script src="../Scripts/jquery-1.9.1.min.js"></script>
    <script src="../Scripts/angular.min.js"></script>
    <script src="../Scripts/kendo.all.min.js"></script>
    <script src="../Scripts/Booking.js"></script>

</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
    <div id="dvMain">
        <div id="dvFormHeader">
           <table id="tblFormHeader" style="width:100%;">
               <tbody>
                   <tr>
                       <td class="labelBold headerTitle" >Hotel Booking System</td>
                       <td class="labelBold headerRef">Ref:eel742016000005</td>
                       <td class="labelBold headerDraft">DRAFT</td>
                       <td class="labelBold" style="width:10%;">Language:</td>
                       <td class="labelNormal" style="width:15%;"><input id="ddlLang" value="1" style="width: 100%;" /></td>
                   </tr>
               </tbody>
           </table> 
        </div>
        <div id="spliter1" class="spliter_line_02"></div>
        <div id="dvRequestor">
           <table id="tblRequestor" style="width:100%;">
               <tbody>
                   <tr>
                       <td class="labelNormal" style="width:10%;">Requestor</td>
                       <td class="inputNormal" style="width:23%;"><input id="txtRequestor" value="Zack Huang" /></td>
                       <td class="labelNormal" style="width:10%;">Department</td>
                       <td class="inputNormal" style="width:23%;"><input id="txtDepartment" value="IT Dept."/></td>
                       <td class="labelNormal" style="width:10%;">Booking Purpose</td>
                       <td class="inputNormal" style="width:23%;"><input id="ddlBookingPurpose" /></td>
                   </tr>
                   <tr>
                       <td class="labelNormal" style="width:10%;">Destination</td>
                       <td class="inputNormal" style="width:23%;"><input id="ddlDestination" /></td>
                       <td class="labelNormal" style="width:10%;">Check in</td>
                       <td class="inputNormal" style="width:23%;"><input id="txtCheckinDate" style="width:50%;" /></td>
                       <td class="labelNormal" style="width:10%;">Check out</td>
                       <td class="inputNormal" style="width:23%;"><input id="txtCheckoutDate" style="width:50%;" /></td>
                   </tr>
               </tbody>
           </table> 
        </div>
        <div id="spliter2" class="spliter_line_02"></div>
        <div id="dvSelectHotelHeader">
           <table id="tblSelectHotelHeader" style="width:100%;">
               <tbody>
                   <tr>
                       <td class="labelBold" style="width:25%;">Select Hotel</td>
                       <td class="labelBold" style="width:25%;"></td>
                       <td style="width:25%;"></td>
                       <td class="labelBold" style="width:10%;"></td>
                       <td class="labelNormal" style="width:15%;"></td>
                   </tr>
               </tbody>
           </table> 
        </div>
        <div id="dvHotelDetails">
           <table id="tblHotelDetails" style="width:100%;">
               <tbody>
                   <tr>
                        <td>
                            <div id="tabstripHotel">
                                    <ul class="bNav">
                                        <li class="k-state-active" id="spanHotel1">
                                            Hotel 1
                                        </li>
                                        <li id="spanHotel2">
                                            Hotel 2
                                        </li>
                                        <li id="spanHotel3">
                                            Hotel 3
                                        </li>
                                    </ul>
                                <div>
                                   <table id="tblHotel1" style="width:100%;height:100px;">
                                       <tbody>
                                           <tr>
                                               <td class="labelNormal" style="width:10%;"></td>
                                                <td class="labelNormal" style="width:10%;">Hotel</td>
                                                <td class="labelNormal" style="width:20%;">BP International House</td>
                                               <td class="labelNormal" style="width:40%;" colspan="3">Room Rates:</td>
                                               <td class="labelNormal" style="width:10%;">Cancelation</td>
                                               <td class="labelNormal" style="width:10%;"></td>
                                           </tr>
                                           <tr>
                                               <td class="labelNormal" style="width:10%;"></td>
                                                <td class="labelNormal" style="width:10%;">Address</td>
                                                <td class="labelNormal" style="width:20%;">8 Austin Rd W. Tsim Sha Tsui Hong Kong</td>
                                               <td class="labelNormal" style="width:40%;" colspan="3">The rates indicated are for reference only prices may change on arrival. Weekend rates are excluded from corporate rates.</td>
                                               <td class="labelNormal" style="width:10%;">48 hours</td>
                                               <td class="labelNormal" style="width:10%;"></td>
                                           </tr>
                                           <tr>
                                               <td class="labelNormal" style="width:10%;"></td>
                                                <td class="labelNormal" style="width:10%;"></td>
                                                <td class="labelNormal" style="width:20%;"></td>
                                               <td class="labelNormal" style="width:13%;">High Season $450 HKD</td>
                                               <td class="labelNormal" style="width:13%;">Load Season 250 HKD</td>
                                               <td class="labelNormal" style="width:14%;">Public Holidays 550 HKD</td>
                                               <td class="labelNormal" style="width:10%;"></td>
                                               <td class="labelNormal" style="width:10%;"></td>
                                           </tr>
                                       </tbody>
                                   </table> 
                                </div>
                                <div>
                                   <table id="tblHotel2" style="width:100%;height:100px;">
                                       <tbody>
                                           <tr>
                                                <td class="labelNormal" style="width:10%;">Hotel 2</td>
                                           </tr>
                                       </tbody>
                                   </table> 
                                </div>
                                <div>
                                   <table id="tblHotel3" style="width:100%;height:100px;">
                                       <tbody>
                                           <tr>
                                                <td class="labelNormal" style="width:10%;">Hotel 3</td>
                                           </tr>
                                       </tbody>
                                   </table> 
                                </div>                               
                            </div>
                        </td>
                   </tr>
               </tbody>
           </table> 
        </div>
        <div id="dvSelectHotel">
           <table id="tblSelectHotel" style="width:100%;">
               <tbody>
                   <tr>
                        <td class="inputNormal" style="width:23%;"><input id="ddlHotel1" /></td>
                        <td class="inputNormal" style="width:23%;"><input id="ddlHotel2" /></td>
                        <td class="inputNormal" style="width:23%;"><input id="ddlHotel3" /></td>
                       <td class="inputNormal" style="width:23%;">
                           <input id="btnSelectOtherHotels" type="button" value="Select Other Hotels" />
                            <div id="example1">
                                <div id="dvOtherHotelwindow" style="display: none;" >
                                   <table id="tblOtherHotel" style="width:100%;">
                                       <tbody>
                                           <tr>
                                               <td class="labelNormal" style="width:10%;">Hotel Name</td>
                                               <td class="inputNormal" style="width:23%;"><input id="txtHotelName" value="" /></td>
                                               <td class="labelNormal" style="width:10%;">Contact Number</td>
                                               <td class="inputNormal" style="width:23%;"><input id="txtContactNumber" value=""/></td>
                                           </tr>
                                           <tr>
                                               <td class="labelNormal" style="width:10%;">Address</td>
                                               <td class="inputNormal" style="width:23%;"><input id="txtAddress" /></td>
                                               <td class="labelNormal" style="width:10%;"></td>
                                               <td class="inputNormal" style="width:23%;"></td>
                                           </tr>
                                       </tbody>
                                   </table> 
                                </div>
                                <script>
                                    $(document).ready(function () {
                                        var myWindow = $("#dvOtherHotelwindow"),
                                            btnSelectOtherHotels = $("#btnSelectOtherHotels");

                                        myWindow.kendoWindow({
                                            width: "500px",
                                            actions: ["Custom", "Minimize", "Maximize", "Close"],
                                            title: "Other Hotel",
                                            close: function () {
                                                btnSelectOtherHotels.fadeIn();
                                            }
                                        });

                                        myWindow.data("kendoWindow").wrapper
                                            .find(".k-i-custom").click(function (e) {
                                                alert("Custom action button clicked");
                                                e.preventDefault();
                                            });

                                        btnSelectOtherHotels.click(function () {
                                            myWindow.data("kendoWindow").open();
                                            btnSelectOtherHotels.fadeOut();
                                        });
                                    });
                                </script>

                                <style>
                                    #example
                                    {
                                        min-height:500px;
                                    }
                                    #undo {
                                        text-align: center;
                                        position: absolute;
                                        white-space: nowrap;
                                        padding: 1em;
                                        cursor: pointer;
                                    }
                                    .armchair {
                                        float: left;
                                        margin: 20px 30px;
                                        text-align: center;
                                    }
                                    .armchair img {
                                        display: block;
                                        margin-bottom: 10px;
                                    }
                
                                    @media screen and (max-width: 1023px) {
                                        div.k-window {
                                            display: none !important;
                                        }
                                    }
                                </style>
                            </div>
                       </td>
                   </tr>
               </tbody>
           </table> 
        </div>
        <div id="spliter3" class="spliter_line_02"></div>
        <div id="dvStaffAndGuestHeader">
           <table id="tblStaffAndGuestHeader" style="width:100%;">
               <tbody>
                   <tr>
                       <td class="labelBold" style="width:15%;">Number of Rooms</td>
                       <td class="labelBold" style="width:25%;"><input id="ddlNumberOfRooms"/></td>
                       <td class="labelBold" style="width:25%; font-size:22px;">Staff and Guest</td>
                       <td class="labelBold" style="width:35%;"><input id="btnAddDynamicArea" type="button" value="Add dynamic area"/></td>
                   </tr>
               </tbody>
           </table> 
        </div>
        <div id="spliter5" class="spliter_line_02"></div>
        <div id="dvStaffAndGuest">
           <table id="tblStaffAndGuest_1" style="width:100%; border:solid black; border-width:1px 1px 1px 1px;">
               <tbody>
                   <tr>
                       <td id="tblStaffAndGuest_td1" class="labelNormal" style="width:20%;border:solid black; border-width:1px 1px 1px 1px;">
                           1
                           <input id='btnAddDynamicArea1' type='button' onclick='copyDynamicArea();' value='+'/>
                       </td>
                       <td class="labelNormal" style="width:80%;">Dynamic add area</td>
                   </tr>
               </tbody>
           </table> 
        </div>
        <div id="spliter4" class="spliter_line_02"></div>
    </div>
</asp:Content>
