//back-end

var toppings = [];

function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
};

Pizza.prototype.pizzaPrice = function () {
  var cost = 10;

  for (i = 1; i <= toppings.length; i++) {
    cost +=1;
  }
  return cost;
};

//front-end

$(document).ready(function() {
  $("#pizza-form").submit(function(event) {
    event.preventDefault();

    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      toppings.push($(this).val());
    });

    console.log(toppings);

    size = $("select#pizza-size").val();

      var newPizza = new Pizza(toppings, size);
      var cost = 10;
      var pizzaTotal = newPizza.pizzaPrice();

    $("#pizza-order").append("<p> Your order: " + size + " " + toppings + ", " + "price:" + " " + "$" + pizzaTotal + "</p>");


  });
});
