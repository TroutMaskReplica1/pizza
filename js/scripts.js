function Pizza(size, meat, veggie) {
  this.size = size;
  this.meat = [];
  this.veggie = [];
  this.price = 0;
}

Pizza.prototype.sizePrice = function() {
  var size = $("#size").val();
  if (size === "small") {
    this.price += 5;
  } else if (size === "medium") {
    this.price += 7;
  } else if (size === "large") {
    this.price += 9;
  }
}

Pizza.prototype.meatPrice = function() {
  if ($("input:radio[name=meat]:checked")) {
    this.price += 1;
      }
    }

Pizza.prototype.veggiePrice = function() {
  if ($("input:radio[name=veggie]:checked")) {
    this.price += 0.5;
    }
  }


$(document).ready(function() {
  $("#pizza").submit(function() {
    event.preventDefault();
    var piz = new Pizza();
    var size = $("#size").val();
    var meat = $("input:radio[name=meat]:checked").val();
    var veggie = $("input:radio[name=veggie]:checked").val();
    function meatPush() {
      return (piz.meat).push(meat);
    }
    function veggiePush() {
      return (piz.veggie).push(veggie);
    }
    meatPush(meat);
    veggiePush(veggie);
    price = parseInt(piz.sizePrice() + piz.meatPrice() + piz.veggiePrice());
    $(".display").text("You ordered a " + piz.meat + " " + piz.veggie + " pizza");
    $("#price").text("That will be $" + piz.price );
  });
});
