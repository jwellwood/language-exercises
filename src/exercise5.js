// Answers ***************************
class SlotMachine {
  constructor() {
    this.counter = 0;
    this.message = 'Better luck next time!';
    this.numberOfBools = 3;
  }

  play() {
    this.counter++;
    // generate three booleans and put them in an array
    const boolArray = [];
    const generateBool = () => {
      const random = Math.random();
      return random >= 0.5 ? true : false;
    };
    for (let i = 0; i < this.numberOfBools; i++) {
      boolArray.push(generateBool());
    }
    console.log(boolArray); // So the results show on the log
    // Check the booleans
    const isWinner = boolArray.every(Boolean);
    // Prepare messages
    if (isWinner) {
      this.message = `Congratulations!!! You won ${this.counter} coins!`;
      // Reset counter
      this.counter = 0;
    }
    return this.message;
  }
}
// End Answers ***************************
const machine1 = new SlotMachine();

// log function to see result
const exercise5 = () => {
  console.log({
    TASK: '************** DELIVERABLE 05 *********************',
  });
  do {
    // Run the log until a winner so we can see it works
    console.log(machine1.play());
  } while (machine1.counter > 0);
};

module.exports = exercise5;
