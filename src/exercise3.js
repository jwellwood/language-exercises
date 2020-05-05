// Data to use
const a = { name: 'Maria', surname: 'Ibañez', age: 50, country: 'SPA' };
const b = { name: 'Luisa', age: 31, married: true, country: 'FRA' };

// Answers ***************************
const clone = (source) => {
  const newObj = { ...source };
  return newObj;
};

const c = clone(a); // To ensure that c and a are different

const merge = (source, target) => {
  const mergedObj = { ...target, ...source };
  return mergedObj;
};

// End Answers ***************************

// log function to see result
const exercise3 = () => {
  console.log({
    TASK: '************** DELIVERABLE 03 *********************',
    original: a,
    cloned: c,
    merged: merge(a, b),
  });
};

module.exports = exercise3;
