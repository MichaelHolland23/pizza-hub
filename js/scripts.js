function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;

}

Pizza.prototype.pizzaTotal = function () {
  return this.size + this.toppings

}


$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();

    var sizeInput = $("#size").val();
    var toppingInput = $("#toppings").val();

    var newPizza = new Pizza(parseInt(sizeInput), parseInt(toppingInput));
    alert("Your pizza comes to $" + newPizza.pizzaTotal() + ", thank you!");
  });
});
