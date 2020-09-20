import _ from 'underscore';
import gameEngine from '../index.js';

const TASK = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (start, step) => {
  const end = start + 10 * step;
  return _.range(start, end, step).map(String);
};

const getProgressionTask = () => {
  const start = _.random(1, 100);
  const step = _.random(1, 10);
  let sequence = getProgression(start, step);
  const numRandom = _.random(0, progressionLength - 1);
  const correctAnswer = sequence[numRandom];
  sequence[numRandom] = '..';
  sequence = sequence.join(' ');
  return [sequence, correctAnswer];
};

export default () => gameEngine(TASK, getProgressionTask);
