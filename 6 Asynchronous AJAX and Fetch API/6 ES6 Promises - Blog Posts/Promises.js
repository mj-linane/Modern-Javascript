// Creating a promise
// The promise API exposes a Promise constructor,
// which you initialize using 'new Promise()'
const done = true;

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built';
    resolve(workDone);
  } else {
    const why = 'Still working on something else';
    reject(why);
  }
});

// Consuming A Promise
const checkIsItDoneYet = () => {
  isItDoneYet
    .then(ok => {
      console.log(ok);
    })
    .catch(err => {
      console.error(err);
    });
};

checkIsItDoneYet();
