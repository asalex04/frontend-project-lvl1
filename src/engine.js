import readlineSync from 'readline-sync';

const ROUNDS = 3;

const gameEngine = (TASK, getNumber) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  console.log(`${TASK}\n`);
  for (let index = 0; index < ROUNDS; index++) {
    const [question, trueAnswer] = getNumber();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('You answer: ');
    if (answer !== trueAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default gameEngine;
