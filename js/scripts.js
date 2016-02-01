$(document).ready(function(){
  $("#add-reservation").click(function(event) {
      event.preventDefault();
      $("ul#list").append("<li>Bob</li>");
    });

  $("ul#list li").click(function(){
    $(this).remove();
  });
-----------------------------------------------------
  $("form#new-input").submit(function(event) {
   event.preventDefault();

   var customerName = $("input#name").val();
   var phoneNumber = $("input#phone").val();
   var partySize = $("input#party").val();

   $(".new-address").each(function() { //new address function
     var inputtedStreet = $(this).find("input.new-street").val();
     var inputtedCity = $(this).find("input.new-city").val();
     var inputtedState = $(this).find("input.new-state").val();
     var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState)
     newContact.addresses.push(newAddress)
   });

   $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

   $(".contact").last().click(function() {
   $("#show-contact").show();
   $("#show-contact h2").text(newContact.fullName());
   $(".first-name").text(newContact.firstName);
   $(".last-name").text(newContact.lastName);
   newContact.addresses.forEach(function(address) {
     $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
     });
   });

   resetFields();

 });

});
