<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <meta name="WebPartPageExpansion" content="full" />
    <script src="../Scripts/lib/jQuery/jquery.min.js"></script>
    <%--Angular--%>
    <script src="../Scripts/lib/Angular/angular.js" type="text/javascript"></script>
    <script src="../Scripts/lib/Angular/angular-route.min.js" type="text/javascript"></script>
    <script src="../Scripts/lib/Angular/angular-sanitize.min.js"></script>
    <%--Fabric--%>
    <link href="../Scripts/lib/UIFabric/fabric.components.min.css" rel="stylesheet" />
    <link href="../Scripts/lib/UIFabric/fabric.min.css" rel="stylesheet" />
    <script src="../Scripts/lib/UIFabric/ngOfficeUiFabric.min.js" type="text/javascript"></script>
    <script src="../Scripts/lib/Pickerdate/picker.js"></script>
    <script src="../Scripts/lib/Pickerdate/picker.date.js"></script>
    <%--Angular UI Bootstrap--%>
    <link href="../Scripts/lib/Bootstrap/bootstrap.min.css" rel="stylesheet" />
    <script src="../Scripts/lib/AngularUIBootstrap/ui-bootstrap-tpls-2.5.0.js"></script>
    <%--Custom--%>
    <link rel="Stylesheet" type="text/css" href="../Content/App.css" />  
    <link href="../Content/basics.css" rel="stylesheet" />
    <script src="../Scripts/app.js"></script>  
    <script src="../Scripts/controller.js"></script>
    <script src="../Pages/views/basics.js"></script>
</asp:Content>

<%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    Using Office UI Fabric
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">

    <div id="demoContainer" class="ms-Grid" ng-app="newsApp">
    <div class="ms-Grid-row">
        <div class="demoMenu ms-Grid-col ms-u-sm4">
            <div id="status">Please choose:</div>
            <ul>
                <li><a ng-href="#basics">Basic Elements</a></li>
                <li><a ng-href="#table">Table with Popup</a></li>
                <li><a ng-href="#ngForm">Form using ngOfficeUI</a></li>
                <li><a ng-href="#ngTable">Table using ngOfficeUI</a></li>
            </ul>
        </div>
        <div class="workbench ms-Grid-col ms-u-sm7 ms-u-smPush1"><div ng-view=""></div></div>
    </div>
</div>

</asp:Content>
