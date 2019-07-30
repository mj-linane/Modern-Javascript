let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Getting Node Properties from Parent and Children

// Get Child Nodes of ul -- Returns Node list
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3].nodeType;

// NODE TYPES

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get Children element nodes -- Returns HTML collection of elements
// You will use Children more than ChildNodes
val = list.children;

// Selecting specific children
val = list.children[1];
list.children[1].textContent = 'Hello';

// Can also get children of children
val = list.children[3].children;

// Can access specific elements of children of children
val = list.children[3].children[0];

// Can do things with that child of children
val = list.children[3].children[0].id = 'test-link';

// First child -- #text node is the <ul> break
val = list.firstChild; // #text node is the <ul> break

// To avoid #text
val = list.firstElementChild; // <-- will most likely use this

// To get last child
val = list.lastElementChild;

// Count of child elements (returns 5 list items)
val = list.childElementCount;

// GET PARENTS

// Get parent nodes
val = listItem.parentNode;

// Get parent element
val = listItem.parentElement;

// Get parent of parents
val = listItem.parentElement.parentElement;

// GET SIBLINGS

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get prev sibling
val = listItem.previousSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(val);
