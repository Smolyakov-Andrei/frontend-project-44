import readlineSync from 'readline-sync';

export default function greetUser() {
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May i Have your name?');
console.log(`Hello, ${userName}!`);
}