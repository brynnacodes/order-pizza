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
      $("#pizza-order").append("<p>" + pizzaToppings + "</p>");
    });


  });
});
