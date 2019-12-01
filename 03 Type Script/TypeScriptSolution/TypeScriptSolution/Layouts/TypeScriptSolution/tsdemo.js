$(document).ready(function () {
    var helper = new SPHelper();
    helper.execQuery();
});
var SPHelper = /** @class */ (function () {
    function SPHelper() {
        var _this = this;
        this.query = 'http://sp2019/_api/web/title';
        this.execQuery = function () {
            $.ajax({
                type: 'GET',
                url: _this.query,
                dataType: 'json',
                headers: {
                    accept: 'application/json;odata=verbose',
                    'content-type': 'application/json;odata=verbose'
                }
            })
                .then(function (data) {
                console.log('Web Title is:', data.d);
            })
                .fail(function (err) {
                console.log(err);
            });
        };
    }
    return SPHelper;
}());
//# sourceMappingURL=tsdemo.js.map