describe("Customer", function() {
  it ("create customer constructor with name, phone number, and party size.", function() {
    var newCustomer = new Customer("Bob", "503-999-9999", 2);
    expect(newCustomer.customerName).to.equal("Bob");
    expect(newCustomer.phoneNumber).to.equal("503-999-9999");
    expect(newCustomer.partySize).to.equal(2);
  });
});
