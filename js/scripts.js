//back-end


function Pizza (toppings) {
  this.toppings = toppings;
};

//front-end

$(document).ready(function() {
  $("#pizza-form").submit(function(event) {
    event.preventDefault();

    var pizzaToppings = $("select#pizza-toppings").val();


    $("#pizza-order").append("<p>" + pizzaToppings + "</p>");
  });
});
