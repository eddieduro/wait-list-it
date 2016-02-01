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
});
