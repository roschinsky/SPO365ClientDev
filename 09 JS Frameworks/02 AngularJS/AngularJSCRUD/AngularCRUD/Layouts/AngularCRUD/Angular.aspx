<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Import Namespace="Microsoft.SharePoint.ApplicationPages" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Angular.aspx.cs" Inherits="AngularCRUD.Layouts.AngularCRUD.Angular" DynamicMasterPageFile="~masterurl/default.master" %>

<asp:Content ID="PageHead" ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <script  type="text/javascript" src="jquery-2.1.4.min.js"></script>
    <script type="text/javascript" src="angular.min.js"></script>
    <script type="text/javascript" src="app.js"></script>

</asp:Content>

<asp:Content ID="Main" ContentPlaceHolderID="PlaceHolderMain" runat="server">
    
    <%--this is our app--%>
    <div ng-app="taskApp">
        
       <div class="row">  
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 replacement-btn-list">  
           <h3 class="text-bold text-color-dark ">List of Tasks:</h3>  
         </div>  
       </div>  
       <div class="row">  
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">  
           <div class="table-responsive replacement-list" ng-controller="spTasksController">  
             <table class="table">  
               <tr>  
                 <th>Tasks</th>  
                 <th>Status</th>  
                 <th>Prority</th>  
                 <th>Update</th>  
               </tr>  
               <tbody>  
                 <tr ng-repeat="task in tasks">  
                   <td><span ng-hide="editMode">{{task.Title}}</span><input type="text" ng-show="editMode" ng-model="task.Title" /></td>  
                   <td>  
                     <div>{{task.Status}}</div>  
                   </td>  
                   <td>  
                     <div>{{task.Priority}}</div>  
                   </td>  
                   <td><span>  
                     <input type="button" ng-hide="editMode" ng-click="editMode = true; editItem(task) " value="Edit" /></span>  
                     <span>  
                       <input type="button" ng-show="editMode" ng-click="editMode = false; updateTask('Tasks',task)" value="Save"></span></td>  
                   <td>  
                     <div>  
                       <input type="button" ng-click="deleteTask('Tasks',task,$index)" value="Delete" /></div>  
                   </td>  
                 </tr>  
                 <tr>  
                   <td>  
                     <input type="button" ng-click="addTask('Tasks')" value="Add" /></td>  
                 </tr>  
               </tbody>  
             </table>  
           </div>  
         </div>  
       </div>         

    </div>
    

</asp:Content>

<asp:Content ID="PageTitle" ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
Angular CRUD
</asp:Content>

<asp:Content ID="PageTitleInTitleArea" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server" >
Angular CRUD
</asp:Content>
