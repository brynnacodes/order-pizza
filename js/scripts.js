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
    var toppingsString;
    var userName = $("#name").val();
    var userStreet = $("#street").val();
    var userCity = $("#city").val();
    var userZip = $("#zip").val();

    var size = $("select#pizza-size").val();

    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      toppings.push($(this).val());
      console.log(toppings);
      toppingsString = toppings.join(", ");
    });

    var newPizza = new Pizza(toppings, size);
    var pizzaTotal = newPizza.pizzaPrice();

    $("#pizza-container").hide();

    $("#pizza-order").show().append("<p class='receipt'>Size: " + size + "<br>" + "Toppings: " + toppingsString + "<br>" + "Price:" + " " + "$" + pizzaTotal + "<br>Thank you for your order!</p><br><p class='receipt'>Delivery name:" + " " + userName + "<br>" + "Delivery address: " + userStreet + " " + userCity + " " + userZip + "</p>");
  });
});
