import { Component, OnInit } from '@angular/core';
import { sp } from '@pnp/sp';
import { AdalService } from 'adal-angular4';
import { environment } from '../../environments/environment';

@Component({
	selector: 'app-pnpjs',
	templateUrl: './pnpjs.component.html',
	styleUrls: [ './pnpjs.component.scss' ]
})
export class PnPJsComponent implements OnInit {
	constructor(private adalService: AdalService) {
		this.tenant = environment.config.tenantName;
	}

	userMail: string;
	web: string;

	private readonly tenant;

	ngOnInit() {
		this.adalService.init(environment.config);
		var authContext = new AuthenticationContext(environment.config);

		var isCallback = authContext.isCallback(window.location.hash);
		authContext.handleWindowCallback(false);

		if (isCallback && !authContext.getLoginError()) {
			console.log('Login error');
		}

		var user = authContext.getCachedUser();
		if (!user) {
			authContext.login();
		} else {
			this.userMail = user.userName;
		}

		this.adalService.acquireToken(environment.config.endpoints.sharePointUri).subscribe((token) => {
			sp.setup({
				sp: {
					headers: {
						Authorization: 'Bearer ' + token,
						Accept: 'application/json;odata=verbose'
					},
					baseUrl: `https://${this.tenant}.sharepoint.com`
				}
			});
		});
	}

	getWebTitle(): void {
		sp.web.get().then((web) => (this.web = web.Title));
	}
}
