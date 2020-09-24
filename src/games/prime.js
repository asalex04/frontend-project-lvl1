import gameEngine from '../index.js';
import randomNumber from '../utilits.js';

const TASK = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrimeTask = () => {
  const number = randomNumber(0, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default () => gameEngine(TASK, getPrimeTask);
