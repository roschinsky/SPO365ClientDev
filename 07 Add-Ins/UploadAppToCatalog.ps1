if ((Get-PSSnapin "Microsoft.SharePoint.PowerShell" -ErrorAction SilentlyContinue) -eq $null) 
{
    Add-PSSnapin "Microsoft.SharePoint.PowerShell"
}

#the folder which contains the .app files ready to be uploaded
$Folder = "D:\"

#"App for SharePoint" library in App Catalog site
$lib = "Apps for SharePoint"
$url = "http://sp2016/sites/appCatalog"

Add-Type -Path 'C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\16\ISAPI\Microsoft.SharePoint.Client.dll'
Add-Type -Path 'C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\16\ISAPI\Microsoft.SharePoint.Client.Runtime.dll'

$ctx = New-Object Microsoft.SharePoint.Client.ClientContext($url)
$ctx.Credentials = Get-Credential;

#Retrieve list
$list = $ctx.Web.Lists.GetByTitle($lib)
$ctx.Load($list)
$ctx.ExecuteQuery()

#Upload file
Foreach ($File in (Get-ChildItem $Folder -File))
{
    if($File.Extension -eq ".app"){
    	$FileStream = New-Object IO.FileStream($File.FullName,[System.IO.FileMode]::Open)
	    $FileCreationInfo = New-Object Microsoft.SharePoint.Client.FileCreationInformation
	    $FileCreationInfo.Overwrite = $true
	    $FileCreationInfo.ContentStream = $FileStream
	    $FileCreationInfo.URL = $File
	    $Upload = $List.RootFolder.Files.Add($FileCreationInfo)
	    $Context.Load($Upload)
	    $Context.ExecuteQuery()
    }
}