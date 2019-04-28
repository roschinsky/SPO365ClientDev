<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Import Namespace="Microsoft.SharePoint.ApplicationPages" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="SecurityBasics.aspx.cs" Inherits="SecurityDemos.Layouts.SecurityDemos.SecurityBasics" DynamicMasterPageFile="~masterurl/default.master" %>

<asp:Content ID="PageHead" ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <SharePoint:ScriptLink ID="jquery" Name="SecurityDemos/lib/jquery-2.1.4.min.js" runat="server" Localizable="False"/>
    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>
    <script type="text/javascript" src="/_layouts/15/SP.UserProfiles.js"></script>
    
    <%--Required for People Picker--%>
    <SharePoint:ScriptLink name="clienttemplates.js" runat="server" LoadAfterUI="true" Localizable="false" />
    <SharePoint:ScriptLink name="clientforms.js" runat="server" LoadAfterUI="true" Localizable="false" />
    <SharePoint:ScriptLink name="clientpeoplepicker.js" runat="server" LoadAfterUI="true" Localizable="false" />
    <SharePoint:ScriptLink name="autofill.js" runat="server" LoadAfterUI="true" Localizable="false" />
    <SharePoint:ScriptLink name="sp.RequestExecutor.js" runat="server" LoadAfterUI="true" Localizable="false" />
    <SharePoint:ScriptLink name="sp.core.js" runat="server" LoadAfterUI="true" Localizable="false" />

    <SharePoint:ScriptLink ID="SecurityBasicsSL" Name="SecurityDemos/SecurityBasics.aspx.js" Localizable="False" runat="server"/>
    <script type="text/javascript" src="SecurityBasics.aspx.js"></script>
</asp:Content>

<asp:Content ID="Main" ContentPlaceHolderID="PlaceHolderMain" runat="server">
    
    <div><h3>Users & Groups</h3></div>
    <a href="#" onclick="listAllGroups()">List All Groups</a><br/>
    <a href="#" onclick="createGroup()">Create Group</a><br/>
    <a href="#" onclick="retrieveAllUsersInGroup()">Get Users in Group</a><br/>
    <a href="#" onclick="retrieveAllUsersInSite()">Get Users in Site</a><br/>
    <a href="#" onclick="createUser()">Create User</a> <br/>   
    <a href="#" onclick="retrieveUser()">Get a specific User</a><br/>    
    <a href="#" onclick="addUserToGroup()">Add User to SP Group</a><br/>
    <br/> 
    <div><h3>Permissions</h3></div>
    <a href="#" onclick="createPermissionLevel()">Create Permission Level</a> <br/>   
    <a href="#" onclick="assignRoleToUser()">Assign Role to user</a><br/>
    <a href="#" onclick="breakInheritanceAddUser()">Break Role Inheritance</a><br/>
    <br/>
    <a href="#" onclick="initClientSidePeoplePicker()">Client Side People Picker</a><br/>
    <div>
        <div id="divPeoplePicker" ></div><br/>
        <a href="#" onclick="getPerson()">Get Person</a><br/>
    </div>
    <br/>
    <div><h3>User Profiles</h3></div>
    <a href="#" onclick="loadUserProfile()">Load User Profile</a>  <br/>  
    <a href="#" onclick="followCurrentSite()">Following</a><br/>
    <a href="#" onclick="publishPost()">Publish to Microsfeed</a><br/>
</asp:Content>

<asp:Content ID="PageTitle" ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
Security Basics
</asp:Content>

<asp:Content ID="PageTitleInTitleArea" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server" >
Security Basics
</asp:Content>
