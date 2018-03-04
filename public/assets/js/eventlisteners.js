$(document).ready(function(){

  // function getTacos() {
  //   $.get("/", function(data) {
  //     console.log(data);
  //     var tacoObject = {
  //       taco: data
  //     };
  //       data.render("index", {taco: res});
  //   });
  // }
  // getTacos();
  
  //Listens for a submit for new taco.
  $("#tacoSubmit").on("click", function(event){
    event.preventDefault();
    var newTaco = {
      taco_name: $("#tacoForm").val().trim(),
      devoured: 0
    };

    $.ajax("/api/tacos", {
      type: "POST",
      data: newTaco
    }).then(function(){
      location.reload();
      console.log("posted");
    });
  });

  //listens for a submit to devour the taco.
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var devoured = {
      devoured: 1
    };
    $.ajax("/api/tacos/" + id, {
      type: "PUT",
      data: devoured
    }).then(
      function() {
        location.reload();
      }
    );
  });
});
