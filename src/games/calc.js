import gameEngine from '../index.js';
import randomNumber from '../utilits.js';

const TASK = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const getRound = () => {
  const number1 = randomNumber(1, 100);
  const number2 = randomNumber(1, 100);
  const operator = operators[randomNumber(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = `${calculate(number1, number2, operator)}`;
  return [question, answer];
};

export default () => gameEngine(TASK, getRound);
