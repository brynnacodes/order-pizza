//back-end

var toppings = [];

function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
};

Pizza.prototype.pizzaPrice = function () {
  var cost = 0;

  for (i = 1; i <= toppings.length; i++) {
    cost += 1;
  }

  if (this.size === "small") {
    cost += 10;
  } else if (this.size === "medium") {
    cost += 12;
  } else if (this.size === "large") {
    cost += 14;
  }
  return cost;
};

//front-end

$(document).ready(function() {
  $("#pizza-form").submit(function(event) {
    event.preventDefault();

    var size = $("select#pizza-size").val();
    console.log(size);

    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      toppings.push($(this).val());
    });

    var newPizza = new Pizza(toppings, size);
    var pizzaTotal = newPizza.pizzaPrice();

    $("#pizza-container").hide();

    $("#pizza-order").show().append("<p>Size: " + size + "<br>" + "Toppings: " + toppings + "<br>" + "Price:" + " " + "$" + pizzaTotal + "<br>Thank you for your order!</p>");

  });
});
