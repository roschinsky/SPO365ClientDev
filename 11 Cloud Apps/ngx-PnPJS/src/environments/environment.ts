// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	config: {
		tenantName: 'integrationsonline',
		tenant: 'd92b247e-90e0-4469-a129-6a32866c0d0a',
		clientId: '4e60c128-a813-4031-bd99-cf4327cce885', //=> Application ID in Azure
		cacheLocation: 'localStorage',
		endpoints: {
			graphApiUri: 'https://graph.microsoft.com',
			sharePointUri: 'https://integrationsonline.sharepoint.com' // Replace with your Tenant
		},
		returnUrl: 'http://localhost:5000'
	}
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
