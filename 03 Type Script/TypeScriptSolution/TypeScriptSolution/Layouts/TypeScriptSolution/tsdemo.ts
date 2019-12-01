$(document).ready(() => {
	let helper = new SPHelper();
	helper.execQuery('http://sp2019/_api/web/title');
});

class SPHelper {
	execQuery = (query: string) => {
		$.ajax({
			type: 'GET',
			url: query,
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
