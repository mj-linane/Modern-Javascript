class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

// Subclass of Person Class
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName); // Calls the parent class constructor
    // Anything extra in the Customer class goes here
    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john);

// We can access the Person methods inside of Customer
console.log(john.greeting());

// Get access to static methods unique to the Customer class
console.log(Customer.getMembershipCost());
