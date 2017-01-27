//back-end


function Pizza (toppings) {
  this.toppings = toppings;
};

//front-end

$(document).ready(function() {
  $("#pizza-form").submit(function(event) {
    event.preventDefault();

    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      var pizzaToppings = $(this).val();

    var pizzaSize = $("select#pizza-size").val();

    $("#pizza-order").append("<p> Your order: " + pizzaSize + " " + pizzaToppings + " pizza</p>");

    });
  });
});
