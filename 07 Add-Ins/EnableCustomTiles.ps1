if ((Get-PSSnapin "Microsoft.SharePoint.PowerShell" -ErrorAction SilentlyContinue) -eq $null) {
    Add-PSSnapin "Microsoft.SharePoint.PowerShell"
}

$url = "http://sp2019"

Enable-SPFeature -Identity CustomTiles -Url $url -Force
Write-Host "custom tiles have been enable - look for $url/lists/custom%20tiles"
