import gameEngine from '../index.js';
import randomNumber from '../utilits.js';

const TASK = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (b !== 0 ? gcd(b, a % b) : a);

const getGcdTask = () => {
  const num1 = randomNumber(0, 100);
  const num2 = randomNumber(0, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return [question, correctAnswer];
};

export default () => gameEngine(TASK, getGcdTask);
