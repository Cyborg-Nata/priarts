var $input_amounts = document.querySelector("#amount");
var $output_total = document.querySelector("#total");

$input_amounts.oninput = function() {
    var price = document.querySelector("#price").textContent;
    price = price.replace("R$ ", "");
    price = price.replace(",", ".");
    price = parseFloat(price);

    var amounts = $input_amounts.value;
    var total = amounts * price;
    total = "R$ " + total.toFixed(2);
    total = total.replace(".", ",");

$output_total.value = total;
}