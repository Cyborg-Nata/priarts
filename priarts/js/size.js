//Product Size
var inputSize = document.querySelector('[name=size]');
var outputSize = document.querySelector('[name=valuesize]');
inputSize.oninput = function () {
    outputSize.value = inputSize.value;
}
var $input_quantidade = document.querySelector("#amount");
var $output_total = document.querySelector("#total");
