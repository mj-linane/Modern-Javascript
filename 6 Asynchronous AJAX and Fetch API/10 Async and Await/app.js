// async function myFun() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = true;

//   if (!error) {
//     const res = await promise; // Wait until promise is resolved
//     return res;
//   }
//   return new Error('Something went wrong');
// }

// myFun().then(res => console.log(res));

// USING WITH FETCH

async function getUsers() {
  // await response from fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once it is resolved
  const data = await response.json();

  // Only proceed once the second promise has resolved
  return data;
}

getUsers().then(users => console.log(users));
