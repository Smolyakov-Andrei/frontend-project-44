import runGame from '../gameEngine.js'
import { getRandomNumber } from '../utils.js'

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".'

const generateRound = () => {
  const number = getRandomNumber(1, 100)
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no'
  return [number, correctAnswer]
}

export default () => runGame(gameRule, generateRound)
