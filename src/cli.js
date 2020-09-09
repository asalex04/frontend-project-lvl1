import readlineSync from 'readline-sync';

export function getUserName() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
}

export function getUserAnswer() {
  const answer = readlineSync.question('You answer: ');
  return answer;
}
