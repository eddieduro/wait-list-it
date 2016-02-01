
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

$(document).ready(function(){
  $('#review-btn').click(function(){
    $('#new-input').show();
    $('#review-btn').hide();
  });

  $("form#new-input").submit(function(event) {
   event.preventDefault();
   debugger;
   var customerName = $("input#name").val();
   var phoneNumber = $("input#phone").val();
   var partySize = $("input#party").val();
   var newCustomer = new Customer(customerName, phoneNumber, partySize);
   var newRestaurant = new Restaurant('Screen Door');

   var custArr = newCustomer.customerInfo();
   var custArrList =  newRestaurant.restaurantList(custArr);
   console.log(custArrList);

  $('ul#list').append('<li>' + newCustomer.customerName + "</li>");
  $("ul#list li").click(function(){
    $(this).remove();
  });
  });
});
