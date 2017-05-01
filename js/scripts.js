$(function() {
  $("#icecreamFlavors").submit(function(event) {
    var flavor1 = $("input#flavor1").val();
    var flavor2 = $("input#flavor2").val();
    var flavor3 = $("input#flavor3").val();
    var favorites = [flavor1, flavor2, flavor3]
    var faveList = [];

    faveList.push(favorites[0], favorites[1], favorites[2]);
    $("ul").append("<li>" + faveList[0] + "</li>");
    $("ul").append("<li>" + faveList[1] + "</li>");
    $("ul").append("<li>" + faveList[2] + "</li>");

    event.preventDefault();
  });
});
