

function doConvert() {
    debugger;
    $.ajax({
        url: "http://data.fixer.io/latest?symbols=THB&access_key=6c36c303e33169dd7102897259fc93be",
        cache: false
    }).then(function(data) {
        const p = $("#price").val();
        const result = p + " THB are approx. " + parseFloat(p / data.rates.THB).toFixed(2) + " €";
        $("#result").text(result);
    }).fail(function (err) {
        $("#result").text(err);
    });;
}