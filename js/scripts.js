function Pizza(size, meat, veggie) {
  this.size = size;
  this.topping = [];
  this.price = 0;
}

Pizza.prototype.sizePrice = function() {
  var size = $("#size").val();
  if (size === "small") {
    return 5;
  } else if (size === "medium") {
    return 7;
  } else if (size === "large") {
    return 9;
  }
}

Pizza.prototype.toppingPrice = function() {
  for (i=0; i<this.topping.length; i++)
      this.price + 1;
    }

var piz = new Pizza();

$(document).ready(function() {
  $("#pizza").submit(function() {
    event.preventDefault();
    var size = $("#size").val();
    var topping = $("input[name=topping]:checked").val();
    function topPush() {
      piz.topping.push(this).value;
    }
    topPush(topping);
    $(".display").text("You ordered a " + piz.topping + " pizza");
    $("#price").text("That will be $" + piz.sizePrice() + piz.toppingPrice());
  });
});
