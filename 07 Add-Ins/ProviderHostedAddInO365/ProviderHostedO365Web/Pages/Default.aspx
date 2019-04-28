<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="ProviderHostedO365Web.Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Provider Hosted Office 365 App</title>
    <link href="/css/app.css" rel="stylesheet"/>
    <script src="/Scripts/jquery-2.2.3.min.js"></script>
    <script src="/Scripts/MicrosoftAjax.js"></script>
    <script src="/Scripts/SP.Runtime.js" type="text/javascript"></script>
    <script src="/Scripts/SP.RequestExecutor.js" type="text/javascript"></script>
    <script src="/Scripts/SP.js"></script>
    <script src="/Pages/js/default.js"></script>
</head>
<body>
<form id="form1" runat="server">
  <div
        id="chrome_ctrl_container"
        data-ms-control="SP.UI.Controls.Navigation"
        data-ms-options=
        '{  
                    "appHelpPageUrl" : "Help.aspx",
                    "appIconUrl" : "/Images/AppIcon.png",
                    "appTitle" : "Provider Hosted Office 365 App",
                    "settingsLinks" : [
                        {
                            "linkUrl" : "Page2.aspx",
                            "displayName" : "Page 2"
                        }
                    ]
                 }'>
    </div>
    <div id="wrapper">
        <div class="demoMenu">
            <div id="status">Please choose:</div>
            <asp:LinkButton ID="LinkButton1" runat="server" OnClick="readHostWebCSOM">Read Host Web CSOM</asp:LinkButton><br/>
            <asp:LinkButton ID="LinkButton2" runat="server" OnClick="readAddInWebCSOM">Read AddIn Web CSOM</asp:LinkButton><br/>
            <asp:LinkButton ID="LinkButton3" runat="server" OnClick="writeHostWebCSOM">Write Host Web CSOM</asp:LinkButton><br/>
            <asp:LinkButton ID="LinkButton8" runat="server" OnClick="writeAddInWebCSOM">Write AddIn Web CSOM</asp:LinkButton><br/>
            <a href="#" onclick="usingRequestExecutorREST()" style="cursor: pointer;">REST & Request Executor in AppWeb</a><br/>
            <a href="#" onclick="usingRequestExecutorCSOM()" style="cursor: pointer">CSOM & Request Executor in AppWeb</a><br/>
            <a href="#" onclick="consumingExternalData()" style="cursor: pointer">Consuming external data</a><br/>
        </div>
        <div id="result" class="workbench">
            <asp:Literal ID="lcResult" runat="server"/>
        </div>
    </div>
</form>
</body>
</html>
