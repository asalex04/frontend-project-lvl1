const TASK = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2;

function getNumber() {
  const number = Math.floor(Math.random() * 100) + 1;
  return number, !isEven(number) ? 'yes' : 'no';
}

export { getNumber, TASK };
