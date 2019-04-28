if ((Get-PSSnapin "Microsoft.SharePoint.PowerShell" -ErrorAction SilentlyContinue) -eq $null) 
{
    Add-PSSnapin "Microsoft.SharePoint.PowerShell"
}

$url = "http://sp2019/"
$appTitle = "SPHostedAddIn"

$installedapps = Get-SPAppInstance -Web $url 
$yourInstalledapp = $installedapps | Where-Object {$_.Title -eq $appTitle}
Uninstall-SPAppInstance -Identity $yourInstalledapp -Confirm:$false

Write-Host "App uninstalled: " $appTitle