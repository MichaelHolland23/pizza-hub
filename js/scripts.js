function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;

}

Ticket.prototype.pizzaTotal = function () {
  return this.size + this.toppings

}


$(document).ready(function() {
  $(#"pizza").submit(function(event) {
    event.preventDefault();

    var sizeInput = $("#size").val();
    var toppingInput = $("#toppings").val();

    var NewPizza = new Pizza(parseInt(sizeInput), parseInt(toppingInput));
    alert(newPizza.pizzaTotal());
  });
});
