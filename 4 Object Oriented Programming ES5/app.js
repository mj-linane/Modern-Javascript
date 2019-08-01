class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName} you were born on ${this.birthday}`;
  }
}

const mary = new Person('Mary', 'Williams', '11-13-1980');
console.log(mary.greeting());
