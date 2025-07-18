import readlineSync from 'readline-sync';
import generateSequence from './generateSequence.js';

const playProgressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
  const roundsCount = 3;
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


  for (let i = 0; i < roundsCount; i++) {
    const start = Math.floor(Math.random() * 10) + 1;
    const step = Math.floor(Math.random() *5) + 1;
    const length = 10;
    const progression = generateSequence(start, step, length);
    
    const hiddenIndex = Math.floor(Math.random() * progression.length);
    const correctAnswer = progression[hiddenIndex].toString();


    const progressionWithHidden = [...progression];
    progressionWithHidden[hiddenIndex] = '..';
    const question = progressionWithHidden.join(' ');

    console.log(`Questoin: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  // Если все ответы верны
  console.log(`Congratulations, ${userName}!`);
};

export default playProgressionGame;