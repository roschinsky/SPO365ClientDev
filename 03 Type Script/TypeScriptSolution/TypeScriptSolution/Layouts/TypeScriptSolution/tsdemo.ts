$(document).ready(() => {
	let helper = new SPHelper();
	helper.execQuery();
});

class SPHelper {
	query = 'http://sp2019/_api/web/title';

	execQuery = () => {
		$.ajax({
			type: 'GET',
			url: this.query,
			dataType: 'json',
			headers: {
				accept: 'application/json;odata=verbose',
				'content-type': 'application/json;odata=verbose'
			}
		})
			.then((data) => {
				console.log('Web Title is:', data.d);
			})
			.fail((err) => {
				console.log(err);
			});
	};
}
