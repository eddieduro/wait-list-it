describe("Customer", function() {
  var newCustomer = new Customer("Bob", "503-999-9999", 5);
  var newCustomer2 = new Customer("Tom", "503-999-9999", 2);
  it ("create customer constructor with name, phone number, and party size", function() {
    expect(newCustomer.customerName).to.equal("Bob");
    expect(newCustomer.phoneNumber).to.equal("503-999-9999");
    expect(newCustomer.partySize).to.equal(5);
  });
  it ("concat name, phone number, and party size.", function() {
    expect(newCustomer.customerInfo()).to.eql([["Bob","503-999-9999",5]]);
    expect(newCustomer2.customerInfo()).to.eql([["Bob","503-999-9999",5],["Tom","503-999-9999",2]]);
  });
  it ("returns a wait time based on customer party size and array size", function() {
    expect(newCustomer.waitTime()).to.equal(13);
  });
});
describe("Restaurant", function() {
  it ("create restaurant constructor with restaurant name and customer list", function() {
    var newRestaurant = new Restaurant("Pizzacato");
    expect(newRestaurant.restaurantName).to.equal("Pizzacato");
    expect(newRestaurant.customerList).to.eql([]);
  });
  it ("return customer as an array", function() {
    var newRestaurant = new Restaurant("Pizzacato");
    expect(newRestaurant.restaurantList()).to.eql([["Bob","503-999-9999",5],["Tom","503-999-9999",2]]);
  });
});
