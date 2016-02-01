var customers = [];

function Customer(customerName, phoneNumber, partySize) {
  this.customerName = customerName;
  this.phoneNumber = phoneNumber;
  this.partySize = partySize;
}

Customer.prototype.customerInfo = function() {
  customers.push([this.customerName,this.phoneNumber,this.partySize]);
  return customers;
}
