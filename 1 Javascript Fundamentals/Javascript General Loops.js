/* eslint-disable guard-for-in */
const cars = ['Ford', 'GMC', 'Honda', 'Toyota'];


// LOOP THROUGH ARRAY
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }


// FOR EACH METHOD
// cars.forEach(function(car) {
//   console.log(car);
// });

cars.forEach(function(car, index, array) {
  console.log(`${index} : ${car}`);
  console.log(array);
});


// MAP METHOD
const users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Sarah'},
  {id: 3, name: 'Karen'},
];

const ids = users.map(function(user) {
  return user.id;
});

console.log(ids);


// FOR IN LOOP
const user = {
  firstName: 'John',
  lastName: 'Smith',
  age: 20,
};

for (const x in user) {
  console.log(x);
}
