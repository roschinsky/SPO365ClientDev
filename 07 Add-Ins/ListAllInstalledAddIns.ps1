if ((Get-PSSnapin "Microsoft.SharePoint.PowerShell" -ErrorAction SilentlyContinue) -eq $null) 
{
    Add-PSSnapin "Microsoft.SharePoint.PowerShell"
}


$webApp = Get-SPWebApplication "http://sp2016"
foreach($site in $webApp.Sites)
{    
    foreach($web in $site.AllWebs)
    {
        $appInstances = Get-SPAppInstance -Web $web.Url | Select-Object Title, Appwebfullurl, Id
        if($appInstances -ne $null)
        {     
            $appInstances | ForEach-Object{
                Write-Host $_.Title + " - " + $_.Appwebfullurl
            }
        }
    }
}