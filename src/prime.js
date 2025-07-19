import readlineSync from 'readline-sync';


const playPrimeGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const roundsCount = 3;

  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;


    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
  
    return true;
  };

  for (let i = 0; i < roundsCount; i += 1) {
    const num = getRandomNumber(1, 10);
    const correctAnswer = isPrime(num) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase().trim();
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playPrimeGame 
 
  
