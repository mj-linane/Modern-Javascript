/* eslint-disable require-jsdoc */
/*
Event bubbling, when it bubbles up through its parents
Event delegation, put listener in one of the parent elements, then use logic
inside of the event handler to target specific elements
*/

// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click', function() {
// console.log('card title');
// });

// eslint-disable-next-line max-len
// document.querySelector('.card-content').addEventListener('click', function() {
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function() {
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function() {
//   console.log('col');
// });

// EVENT DELEGATION
// const deleteItem = document.querySelector('.delete-item');

// deleteItem.addEventListener('click', delItem);
/*
Here is an example of only the first one firing off. We need to use delegation
Would also need to do it if something was created
dynamically after the page was loaded
*/

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  // if (e.target.parentElement.className === 'delete-item-secondary-content') {
  //   console.log('delete item');
  // }
  // this is not a great way to do it because if it is modified it won't work
  // dont check class name, use class list
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
    const parent = e.target.parentElement.parentElement;
    console.log(parent);
    e.target.parentElement.parentElement.remove();
  }
}
