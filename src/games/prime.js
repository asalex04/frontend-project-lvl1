import gameEngine from '../index.js';
import randomNumber from '../utilits.js';

const TASK = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const getNumber = () => {
  const number = randomNumber(2, 100);
  const trueAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, trueAnswer];
};

export default () => gameEngine(TASK, getNumber);
