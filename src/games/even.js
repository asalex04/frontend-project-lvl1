import gameEngine from '../index.js';
import randomNumber from '../utilits.js';

const TASK = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2;

const getNumber = () => {
  const number = randomNumber(1, 100);
  const answer = !isEven(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => gameEngine(TASK, getNumber);
