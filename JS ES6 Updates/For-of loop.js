/* eslint-disable no-unused-vars */
// iterate over the value
for (const v of ['a', 'b', 'c']) {
  console.log(v);
}

// get the index as well, using 'entries()'
for (const [i, v] of ['a', 'b', 'c'].entries()) {
  console.log(index); // index
  console.log(value); // value
}

// for ... of iterates over the property values
// for ... in iterates over the property names
