function Pizza(size, meat, veggie) {
  this.size = size;
  this.meat = meat;
  this.veggie = veggie;
}

Pizza.prototype.toppingPrice = function() {
  var size = $("#size").val();
  if (size === "small") {
    for (i=0; i > toppings.length; i++)
    return 0.5;
  } else if (size === "medium") {
    for (i=0; i > toppings.length; i++)
    return 1;
  } else if (size === "large") {
    for (i=0; i > toppings.length; i++)
    return 1.5;
  }
}

var piz = new Pizza("small", "pepperoni", "olive");


// $(document).ready(function() {
//   $("#sub").click(function() {
//     var size = $("#size").val();
//     var meatInput = $("#meat:checked").val();
//     var veggieInput = $("input[type=checkbox]:checked").val();
//     var meat = [];
//     var veggie = []
//     $(".display").text("You ordered a "  + size + " " + meat + " " + veggie );
//     event.preventDefault();
//   });
// });
