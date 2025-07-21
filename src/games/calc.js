import runGame from '../gameEngine.js'
import { getRandomNumber } from '../utils.js'

const gameRule = 'What is the result of the expression?'

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2
    case '-': return num1 - num2
    case '*': return num1 * num2
    default: return NaN
  }
}

const generateRound = () => {
  const number1 = getRandomNumber(1, 15)
  const number2 = getRandomNumber(1, 15)
  const operator = ['+', '-', '*'][getRandomNumber(0, 2)]
  const question = `${number1} ${operator} ${number2}`
  const correctAnswer = calculate(number1, number2, operator)
  return [question, correctAnswer]
}

export default () => runGame(gameRule, generateRound)