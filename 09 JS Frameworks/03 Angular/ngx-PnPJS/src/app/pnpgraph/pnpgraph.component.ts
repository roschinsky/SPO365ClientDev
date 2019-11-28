import { Component, OnInit } from '@angular/core';
// import { graph } from '@pnp/graph';
// import { AdalFetchClient } from '@pnp/nodejs';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-pnpgraph',
	templateUrl: './pnpgraph.component.html',
	styleUrls: [ './pnpgraph.component.scss' ]
})
export class PnPGraphComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		// graph.setup({
		// 	graph: {
		// 		fetchClientFactory: () => {
		// 			return new AdalFetchClient(
		// 				'integrationsonline.onmicrosoft.com',
		// 				'4e60c128-a813-4031-bd99-cf4327cce885',
		// 				'JwLhU0B3icW25:o/sb_cjcKQKU]na[un'
		// 			);
		// 		}
		// 	}
		// });
		// graph.teams.get().then((data) => {
		// 	console.log(data);
		// });
	}
}
