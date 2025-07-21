import runGame from '../gameEngine.js'
import { getRandomNumber } from '../utils.js'

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (num) => {
  if (num <= 1) return false
  if (num === 2) return true
  if (num % 2 === 0) return false
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false
  }
  return true
}

const generateRound = () => {
  const num = getRandomNumber(1, 10)
  const correctAnswer = isPrime(num) ? 'yes' : 'no'
  return [num, correctAnswer]
}

export default () => runGame(gameRule, generateRound)