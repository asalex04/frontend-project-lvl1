import _ from 'underscore';
import gameEngine from '../index.js';

const TASK = 'What number is missing in the progression?';

const getProgression = (start, step) => {
  const end = start + 10 * step;
  return _.range(start, end, step).map(String);
};

const getRound = () => {
  const start = _.random(1, 100);
  const step = _.random(1, 10);
  let sequence = getProgression(start, step);
  const numRandom = _.random(0, 9);
  const trueAnswer = sequence[numRandom];
  sequence[numRandom] = '..';
  sequence = sequence.join(' ');
  return [sequence, trueAnswer];
};

export default () => gameEngine(TASK, getRound);
