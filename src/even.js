import readlineSync from 'readline-sync'

const playEvenGame = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  const roundsCount = 3
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  for (let i = 0; i < roundsCount; i += 1) {
    const number = getRandomNumber(1, 100)
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no'

    console.log(`Question: ${number}`)
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase().trim()

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
    console.log('Correct!')
  }

  console.log(`Congratulations, ${userName}!`)
}

export default playEvenGame