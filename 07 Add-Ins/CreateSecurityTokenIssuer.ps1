if ((Get-PSSnapin "Microsoft.SharePoint.PowerShell" -ErrorAction SilentlyContinue) -eq $null) {
    Add-PSSnapin "Microsoft.SharePoint.PowerShell"
}

$site = "http://sp2016";
$issuerName = "SPSigningIssuer";
$issuerId = "2ffbee9b-3a1f-4d7e-b673-866ffa549d27";
$certPath = "D:\Classes\O365ClientSideDev\00 Ressources\SPSigning.cer";

$web = Get-SPWeb -Identity $site; 
$realm = Get-SPAuthenticationRealm -ServiceContext $web.Site;
$appIdentifier = $issuerId + '@' + $realm;
$certificate = Get-PfxCertificate $certPath ;

New-SPTrustedSecurityTokenIssuer -Name $issuerName -Certificate $certificate -RegisteredIssuerName $appIdentifier -IsTrustBroker;

# Turn off https for dev 
$serviceConfig = Get-SPSecurityTokenServiceConfig 
$serviceConfig.AllowOAuthOverHttp = $true 
$serviceConfig.Update()

iisreset.exe

Write-Host "Token Issuer created"

exit;

# Remove SecurityTokenIssuer
$issuerName = "SPSigningIssuer";
Remove-SPTrustedSecurityTokenIssuer -Identity $issuerName -Confirm:$false
Write-Host "Token Issuer removed"

exit 
# List SecurityTokenIssuer
Get-SPTrustedSecurityTokenIssuer