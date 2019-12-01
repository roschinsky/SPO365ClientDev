# Suggested Add-ons & Extensions

## Fast / Auto Deploy

### CKS Dev

CKS Dev is not available for VS 2017 - Patched File included in Folder

#### CKSDev Installation

- Install CKSDev, answer warning with "yes"
- Modifify devenv.exe.config located in: C:\Program Files (x86)\Microsoft Visual Studio\2017\Enterprise\Common7\IDE
- Search for `Microsoft.VisualStudio.SharePoint`
- Change Assembly Binding

```
<dependentAssembly>
    <assemblyIdentity name="Microsoft.VisualStudio.SharePoint" publicKeyToken="b03f5f7f11d50a3a" culture="neutral"/>
    <!--bindingRedirect oldVersion="10.0.0.0-14.0.0.0" newVersion="14.0.0.0"/-->
    <bindingRedirect oldVersion="10.0.0.0-14.0.0.0" newVersion="15.0.0.0"/>
</dependentAssembly>
```

### SPDevTools

Inspired by CKS Dev -> does Fast Deploy for VS 2019

[SPDevTools](https://marketplace.visualstudio.com/items?itemName=MarcusKaseder.SPDevTools)

### SPFastDeploy

Fast Deploy for Add-Ins

[SPFastDeploy](https://marketplace.visualstudio.com/items?itemName=SteveCurranMVP.SPFastDeploy)

## Postman

[Postman](https://www.getpostman.com/)

Add Header for Json result:

```
Accept: application/json
```

Enable Auth Office 365:

[Querying the Office 365 Management APIs using Postman](https://blogs.msdn.microsoft.com/emeamsgdev/2018/08/03/querying-the-office-365-management-apis-using-postman/)

## CAML Designer

Taken from https://www.biwug.be/resources:

[Click Once Installation](http://camldesigner.blob.core.windows.net/clickonce/CamlDesigner2013.application)

[Offline Installation](http://camldesigner.blob.core.windows.net/offlinepackage/CamlDesigner2013.zip)


## Sharepoint Client Browser

[Sharepoint Client Browser](https://github.com/bramdejager/spcb)

## VS Prof Extensions

[Open Command Line](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.OpenCommandLine)

[Add New File](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.AddNewFile)

[SPRemote API Explorer](https://marketplace.visualstudio.com/items?itemName=SteveCurranMVP.SPRemoteAPIExplorer)

[SPFastDeploy](https://marketplace.visualstudio.com/items?itemName=SteveCurranMVP.SPFastDeploy)