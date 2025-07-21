import runGame from '../gameEngine.js'
import { getRandomNumber } from '../utils.js'

const gameRule = 'Find the greatest common divisor of given numbers.'

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))

const generateRound = () => {
  const num1 = getRandomNumber(1, 100)
  const num2 = getRandomNumber(1, 100)
  const question = `${num1} ${num2}`
  const correctAnswer = gcd(num1, num2)
  return [question, correctAnswer]
}

export default () => runGame(gameRule, generateRound)