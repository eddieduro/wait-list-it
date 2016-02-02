var customers = [];


function Restaurant(restaurantName) {
  this.restaurantName = restaurantName;
  this.customerList = [];
}

function Customer(customerName, phoneNumber, partySize) {
  this.customerName = customerName;
  this.phoneNumber = phoneNumber;
  this.partySize = partySize;
}

Restaurant.prototype.restaurantList = function() {
  for (var i = 0; i < customers.length; i++) {
    this.customerList.push(customers[i]);
  }
  // return this.customerList;
}

Customer.prototype.customerInfo = function() {
  customers.push([this.customerName,this.phoneNumber,this.partySize]);
  return customers;
}

Customer.prototype.waitTime = function() {
  var parties = [];
  var time = 0;

  for(var i = 0; i < customers.length; i++) {
    parties.push(customers[i][2]);
    }

  for(var k = 0; k < parties.length; k++) {
      if (parties[k] === 2 || parties[k] === 1) {
        time = 3;
      } else if ((parties[k] > 2) &&  (parties[k] <= 4)) {
        time = 5;
      } else if ((parties[k] > 4 )&& (parties[k] <= 6)) {
        time = 7;
      } else if (parties[k] > 7) {
        time = 9;
      }
    }
  time += i * 5;
  console.log(time);
  return time;
}

$(document).ready(function(){
  $('#review-btn').click(function(){
    $('#new-input').show();
    $('#review-btn').hide();
  });

  $("form#new-input").submit(function(event) {
    event.preventDefault();
    var customerName = $("input#name").val();
    var phoneNumber = $("input#phone").val();
    var partySize = parseInt($("input#party").val());
    var newCustomer = new Customer(customerName, phoneNumber, partySize);
    var newRestaurant = new Restaurant('Screen Door');

    var newCustomerInfo = newCustomer.customerInfo();
    var customerArrList =  newRestaurant.restaurantList(newCustomerInfo);



    $('ul#list').append('<li class="mdl-list__item"> Thanks ' + newCustomer.customerName + ", you have been added to the list!</li>");
    $('#time').text(newCustomer.waitTime() + " minutes");
    $("ul#list li").click(function(){
      $(this).remove();
    });
  });
  $('.star').hover(function(){
    $(this).addClass("starOverlay");
  });
});
