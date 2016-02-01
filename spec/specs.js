describe("Customer", function() {
  it ("create customer constructor with name, phone number, and party size.", function() {
    var newCustomer = new Customer("Bob", "503-999-9999", 2);
    expect(newCustomer.customerName).to.equal("Bob");
    expect(newCustomer.phoneNumber).to.equal("503-999-9999");
    expect(newCustomer.partySize).to.equal(2);
  });
  it ("concat name, phone number, and party size.", function() {
    var newCustomer = new Customer("Bob", "503-999-9999", 2);
    var newCustomer2 = new Customer("Tom", "503-999-9999", 5);
    expect(newCustomer.customerInfo()).to.eql([["Bob","503-999-9999",2]]);
    expect(newCustomer2.customerInfo()).to.eql([["Bob","503-999-9999",2],["Tom","503-999-9999",5]]);
  });
  it ("returns a wait time based on customer party size.", function() {
    var newCustomer = new Customer("Bob", "503-999-9999", 2);
    expect(newCustomer.waitTime()).to.equal(30);
  });
});

describe("Restaurant", function() {
  it ("create restaurant constructor with restaurant name and customer list.", function() {
    var newRestaurant = new Restaurant("Pizzacato");
    expect(newRestaurant.restaurantName).to.equal("Pizzacato");
    expect(newRestaurant.customerList).to.eql([]);
  });
  // it ("", function() {
  //
  //   var newRestaurant = new Restaurant();
  //       console.log(newRestaurant.restaurantList());
  //   expect(newRestaurant.restaurantList()).to.eql();
  // });
});
