function Pizza(size, meat, veggie) {
  this.size = size;
  this.meat = meat;
  this.veggie = veggie;
}

Pizza.prototype.toppingPrice = function() {
  var size = $("#size").val();
  var topArray = [];
  topArray.push(this.meat, this.veggie);
  if (size === "small") {
    for (i=0; i >= topArray.length; i++) {
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
    var meatInput = $("#meat:checked").val();
    var veggieInput = $("input[type=checkbox]:checked").val();
    $(".display").text("You ordered a " + piz.meat + " " + piz.veggie + " pizza");
    $("#price").text("That will be " + piz.toppingPrice());
  });
});
