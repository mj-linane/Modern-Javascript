/* eslint-disable require-jsdoc */
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// // Click to trigger runEvent
// clearBtn.addEventListener('click', runEvent);

// // Double Click
// clearBtn.addEventListener('dblclick', runEvent);

// // Mouse Down
// clearBtn.addEventListener('mousedown', runEvent);

// // Mouse Up
// clearBtn.addEventListener('mouseup', runEvent);

// // Mouse Enter
// card.addEventListener('mouseenter', runEvent);

// // Mouse Leave
// card.addEventListener('mouseleave', runEvent);

// Mouse Move
card.addEventListener('mousemove', runEvent);

// Event handler with event (e)
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
