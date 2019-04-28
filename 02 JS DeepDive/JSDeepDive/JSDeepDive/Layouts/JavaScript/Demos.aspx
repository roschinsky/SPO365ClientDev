<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Demos.aspx.cs" Inherits="JSFundamentals.Layouts.JSFundamentals.Demos" DynamicMasterPageFile="~masterurl/default.master" %>

<asp:Content ID="PageHead" ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <script src="lib/jquery/jquery-3.1.1.min.js" type="text/javascript"></script>
    <script src="lib/moment/moment.js"></script>
    <script src="demos.aspx.js">
    
    </script>
    <%--<script src="bundle/bundle.js"></script>--%>
    <SharePoint:CssRegistration runat="server" ID="CssRegistration1" Name="/_layouts/15/JavaScript/css/demo.css" After="corev15.css"/>
</asp:Content>

<asp:Content ID="Main" ContentPlaceHolderID="PlaceHolderMain" runat="server">
    <div id="wrapper">
        <div class="demoMenu">
            <div id="status">Please choose:</div>

            <a href="javascript:loadPage('demos/referencing.html', this, true);">Referencing, Executing</a>
            <a href="#" onclick="javascript:loadPage('demos/logging.html', this, true);">Debugging & Logging</a>
            <a href="#" onclick="javascript:loadPage('demos/variables.html', this, true);">Variables</a>
            <a href="#" onclick="javascript:loadPage('demos/dates.html', this, true);">Working with Dates</a>
            <a href="#" onclick="javascript:loadPage('demos/logic.html', this, true);">Program Flow</a>
            <a href="#" onclick="javascript:loadPage('demos/form.html', this, true);">Reading & Writing Data</a>
            <a href="#" onclick="javascript:loadPage('demos/domevents.html', this, true);">Using DOM & Events</a>
            <a href="#" onclick="javascript:loadPage('demos/eventBubbling.html', this, true);">Event Bubbling</a>
            <a href="#" onclick="javascript:loadPage('demos/objectOrientations.html', this, true);">Object Orientation</a>
            <a href="#" onclick="javascript:loadPage('demos/testjquery.html', this, true, null);">Test if jQuery is installed</a>
            <a href="#" onclick="javascript:loadPage('demos/selecting.html', this, true, null);">Selecting</a>
            <a href="#" onclick="javascript:loadPage('demos/manipulate.html', this, true, null);">Manipulate DOM</a>
            <a href="#" onclick="javascript:loadPage('demos/events.html', this, true, null);">jQuery Events</a>
            <a href="#" onclick="javascript:loadPage('demos/closures.html', this, true);">Closures</a>
            <a href="#" onclick="javascript:loadPage('demos/readJSON.html', this, true);">Consume JSON</a>
            <a href="#" onclick="javascript:loadPage('demos/es6lang.html', this, true);">ECMA Script 6 - Language</a>
            <a href="#" onclick="javascript:loadPage('demos/es6classes.html', this, true);">ECMA Script 6 - Classes</a>
            <a href="#" onclick="javascript:loadPage('demos/consumingServices.html', this, true, null);">Consuming Services</a>
            <a href="#" onclick="javascript:loadPage('demos/promises.html', this, true, null);">Promises</a>
            <a href="#" onclick="javascript:loadPage('demos/modules.html', this, true);">Modules</a>
        </div>
        <div class="workbench"></div>
    </div>
</asp:Content>

<asp:Content ID="PageTitle" ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
    Javascript Deep Dive - Demos
</asp:Content>

<asp:Content ID="PageTitleInTitleArea" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    Javascript Deep Dive - Demos
</asp:Content>