import readlineSync from 'readline-sync';

const roundsCount = 3;

const gameEngine = (TASK, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  console.log(`${TASK}\n`);
  for (let index = 0; index < roundsCount; index += 1) {
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('You answer: ');
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default gameEngine;
