<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <script type="text/javascript" src="../Scripts/jquery-1.9.1.min.js"></script>
    <SharePoint:ScriptLink name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />
    <meta name="WebPartPageExpansion" content="full" />
    <link rel="Stylesheet" type="text/css" href="../Content/bootstrap.min.css" />
    <link rel="Stylesheet" type="text/css" href="../Content/App.css" />
    <script type="text/javascript" src="../Scripts/App.js"></script>
</asp:Content>

<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    Reading & writing data to Host- & AddIn Web
</asp:Content>

<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
    <div id="demoContainer" class="container-fluid">
        <div class="row">
            <header class="header">
                
            </header>
        </div>
        <div class="row">
            <div class="demoMenu col-xs-3">
                <a onclick="readHostWebCSOM()" style="cursor: pointer">Read Host Web CSOM</a><br/>
                <a onclick="readAppWebCSOM()" style="cursor: pointer">Read AddIn Web CSOM</a><br/>
                <a onclick="writeHostWebCSOM()" style="cursor: pointer">Write Host Web CSOM</a><br/>
                <a onclick="writeAppWebCSOM()" style="cursor: pointer">Write AddIn Web CSOM</a><br/>
                <a onclick="readHostWebREST()" style="cursor: pointer">Read Host Web REST</a><br/>
                <a onclick="readHostWebjQuery()" style="cursor: pointer">Read Host Web REST using jQuery</a><br/>
                <a onclick="readAppWebREST()" style="cursor: pointer">Read AddIn Web REST</a><br/>
                <a onclick="writeHostWebREST()" style="cursor: pointer">Write Host Web REST</a><br/>
                <a onclick="writeAppWebREST()" style="cursor: pointer">Write AddIn Web REST</a><br/>
                <a onclick="useWebProxy()" style="cursor: pointer">Using Web Proxy to call external ressource</a><br/>
            </div>
            <div id="workbench" class="workbench col-xs-8 col-xs-offset-1"></div>
        </div>
    </div>
</asp:Content>
