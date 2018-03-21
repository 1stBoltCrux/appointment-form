
// Front-End Logic
$(document).ready(function() {
  $("form#form1").submit(function(event) {
    var name = $("input#name").val();
    var street = $("input#street").val();
    var state = $("input#state").val();
    var zip = $("input#zip").val();
    var reason = $("input#reason").val();
    var date = $("input#date").val();
    var time = $("input#time").val();
    alert("Booking Successful!");
    event.preventDefault();
    });
});
