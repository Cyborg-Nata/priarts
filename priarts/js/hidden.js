// Panel Hidden 
bestSeller();
function bestSeller() {
    $("#btnbestseller").click(function () {
        $("#hiddenbestseller").toggleClass("hidden");
    });
}

moreNews();
function moreNews() {
    $("#btn-news").click(function () {
        $("#more-news").toggleClass("hidden");
    });
}
