// Data to use
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = ['seven', 'eight', 'nine'];
const arr4 = [10, 11, 12];

// Answers ***************************
const concat = (a, b) => [...a, ...b];

const concatMultiple = (...arrays) => [].concat(...arrays);
// End Answers ***************************

// log function to see result
const exercise2 = () => {
  console.log({
    TASK: '************** DELIVERABLE 02 *********************',
    concat: concat(arr1, arr2),
    optional: concatMultiple(arr1, arr2, arr3, arr4),
  });
};

module.exports = exercise2;
