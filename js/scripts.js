<<<<<<< HEAD
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
=======
function Restaurant(restaurantName) {
  this.restaurantName = restaurantName;
  this.customerList = [];
}

Restaurant.prototype.restaurantList = function() {
  for (var i = 0; i < customers.length; i++) {
    this.customerList.push(customers[i]);
  }
  console.log(this.customerList);
  return this.customerList;
}

var customers = [];

function Customer(customerName, phoneNumber, partySize) {
  this.customerName = customerName;
  this.phoneNumber = phoneNumber;
  this.partySize = partySize;
}


Customer.prototype.customerInfo = function() {
  customers.push([this.customerName,this.phoneNumber,this.partySize]);
  console.log(customers);
  return customers;
}

Customer.prototype.waitTime = function() {
  var parties = [];
  var time = 0;
  for(var i=0; i < customers.length; i++) {
    parties.push(customers[i][2])
    }
    console.log(parties);
    for(var k=0; k < parties.length; k++) {
      if (parties[k] === 2) {
        return 30;
      }
    }
}
>>>>>>> 1ca8ac410dbb79a69d00e9e6e18f01eac5bbab95
