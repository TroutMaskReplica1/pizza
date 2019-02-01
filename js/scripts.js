function Pizza(size, meat, veggie) {
  this.size = size;
  this.topping = [];
  this.price = 0;
}

Pizza.prototype.toppingPrice = function() {
  var size = $("#size").val();
  topArray.push(this.topping);
  if (size === "small") {
    for (i=0; i >= this.meat.length; i++) {
      return console.log(0.5);
    }
     alert("1");
  } else if (size === "medium") {
    for (i=0; i >= topArray.length; i++) {
      return console.log(1);
    }
     alert("2");
  } else if (size === "large") {
    for (i=0; i >= topArray.length; i++) {
      return console.log(1.5);
    }
     alert("3");
  } else {
     alert("not working");
  }
}

var piz = new Pizza("small", "human", "bell pepper");


$(document).ready(function() {
  $("#pizza").submit(function() {
    event.preventDefault();
    var size = $("#size").val();
    var meat = $("input[name=topping]:checked").val();
    $(".display").text("You ordered a " + piz.topping + " pizza");
    $("#price").text("That will be " + piz.toppingPrice());
  });
});
