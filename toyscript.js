height = $(window).height();
makeGrid = function(size) {
    for (var i = 0; i <  Math.pow(size, 2); i++){
        $('<div />').addClass('gridCell').attr('id','div'+i).appendTo("#container");
    }
    $(".gridCell").width(height/size).height(height/size);
};
var changeSize = function() {
    var newSize=prompt("How many rows do you want it to be this time? Size is in pixels per inch" +
                       "along the side. Tested up to 300. Can be slow after 90 or so.");
    $("#container").empty();
    makeGrid(newSize);
    $(".gridCell").hover(function() {
        $(this).addClass("white");
    });
};
$(document).ready(function () {
    $("#container").css("height", height);
    $("#container").css("width", height);
    makeGrid(64);
    $(".gridCell").hover(function() {
        $(this).addClass("white");
    });
});