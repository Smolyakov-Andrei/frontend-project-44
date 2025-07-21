import runGame from '../gameEngine.js'
import { getRandomNumber } from '../utils.js'

const gameRule = 'What number is missing in the progression?'

const generateSequence = (start, step, length) => {
  const result = []
  for (let i = 0; i < length; i += 1) {
    result.push(start + i * step)
  }
  return result
}

const generateRound = () => {
  const start = getRandomNumber(1, 10)
  const step = getRandomNumber(1, 5)
  const progression = generateSequence(start, step, 10)
  const hiddenIndex = getRandomNumber(0, 9)
  const correctAnswer = progression[hiddenIndex]
  const question = progression
    .map((num, i) => (i === hiddenIndex ? '..' : num))
    .join(' ')
  return [question, correctAnswer]
}

export default () => runGame(gameRule, generateRound)
