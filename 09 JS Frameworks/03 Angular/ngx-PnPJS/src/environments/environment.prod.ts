export const environment = {
	production: true,
	config: {
		tenantName: 'integrationsonline',
		tenant: 'd92b247e-90e0-4469-a129-6a32866c0d0a',
		clientId: '4e60c128-a813-4031-bd99-cf4327cce885', //=> Application ID in Azure
		clientSecret: 'replacethis',
		cacheLocation: 'localStorage',
		endpoints: {
			graphApiUri: 'https://graph.microsoft.com',
			sharePointUri: 'https://integrationsonline.sharepoint.com' // Replace with your Tenant
		},
		returnUrl: 'http://localhost:4200'
	}
};
