/* eslint-disable require-jsdoc */
// document
//     .querySelector('.clear-tasks')
//     .addEventListener('click', function(event) {
//       console.log('Hello World');

//       // event.preventDefault();
//     });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

// Having a named function is neater than an unnamed function as above
function onClick(event) {
  // console.log('Clicked');

  let val;

  val = event;

  // Event target element
  val = event.target;
  val = event.target.id;
  val = event.className;
  val = event.target.classList;

  event.target.innerText = 'Hello';

  // Event type
  val = event.type;

  // Timestamp
  val = event.timeStamp;

  // Coordinates event relative to the window
  val = event.clientY;
  val = event.clientX;

  // Coords event relative to the element
  val = event.offsetY;
  val = event.offsetX;

  console.log(val);
}
