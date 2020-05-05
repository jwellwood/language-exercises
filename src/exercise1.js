// Data to use
const arr = [1, 2, 3, 4, 5];

// Answers ***************************
let first, rest;

const head = (array) => {
  [first, ...rest] = array;
  return first;
};

const tail = (array) => {
  [first, ...rest] = array;
  return rest;
};

const init = (array) => array.slice(0, array.length - 1);

const last = (array) => array[array.length - 1];

// End Answers ***************************

// log function to see result
const exercise1 = () => {
  console.log({
    TASK: '************** DELIVERABLE 01 *********************',
    head: head(arr),
    tail: tail(arr),
    init: init(arr),
    last: last(arr),
  });
};

module.exports = exercise1;
