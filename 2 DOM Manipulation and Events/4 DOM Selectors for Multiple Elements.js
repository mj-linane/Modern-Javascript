// // DOM Selectors for Multiple Elements
// // document.getElementsByClassName

// // Returns a collection of individual class collection items
// // const items = document.getElementsByClassName('collection-item');
// // console.log(items);
// // Accessing a specific class item
// // console.log(items[0]);
// // items[0].style.color = 'red';
// // items[3].textContent = 'Hello';

// // Get class name on a global scope
// // const listItems = document
// // .querySelector('ul')
// // .getElementsByClassName('collection-item');

// // console.log(listItems);

// // document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // Convert HTML Collection into an array
// lis = Array.from(lis);
// console.log(lis.reverse());

// // For Each on Array version of Collection
// lis.forEach(function(li, index) {
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// Query Selector -- Returns a Node List
// Allows us to do a forEach without having to convert
// querySelectorAll

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index) {
  item.textContent = `${index}: Hello`;
});

console.log(items);
// Changing style for odd and even
const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index) {
  li.style.background = 'gray';
});
// Can do the same with a for loop. Can use length on an HTML collection
for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = '#333333';
}
console.log(items);
