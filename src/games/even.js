import gameEngine from '../index.js';
import randomNumber from '../utilits.js';

const TASK = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getEvenTask = () => {
  const question = randomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => gameEngine(TASK, getEvenTask);
