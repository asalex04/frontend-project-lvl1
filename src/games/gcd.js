import gameEngine from '../index.js';
import randomNumber from '../utilits.js';

const TASK = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (b !== 0 ? gcd(b, a % b) : a);

const getRound = () => {
  const num1 = randomNumber(0, 100);
  const num2 = randomNumber(0, 100);
  const question = `${num1} ${num2}`;
  const trueAnswer = `${gcd(num1, num2)}`;
  return [question, trueAnswer];
};

export default () => gameEngine(TASK, getRound);
