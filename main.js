import * as  readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

const chars = {
  letters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQLMNQRSTUVWXYZ',
  L: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQLMNQRSTUVWXYZ',
  numbers: '1234567890',
  N: '1234567890',
  symbols: '!#$%&./:<=>?@',
  S: '!#$%&./:<=>?@'
}

const random = (types, length) => {
  if(!types.every(t=> Object.keys(chars).includes(t)))
    throw new Error('Invalid char type');
  
  const charsForRandom = types.map(t=> chars[t]).join('');

  let randomString = '';
  for (let i = 0; i < length; i++) {
   randomString += charsForRandom[Math.floor(Math.random() * charsForRandom.length)]
  }
  return randomString;
}

const rl = readline.createInterface({input, output});

console.log('Welcome to password generator!');

const passwordLength = await rl.question('Tell me your desirable password length \n');

const charTypes = await rl.question('What kind of chars do you want to include? [letters (L), numbers (N), symbols (S)].\nPlease input options leaving a whitespace between them.\n');

console.info(`This is your resulting password: ${random(charTypes.split(' ').map(c=> c.trim()), Number(passwordLength))}`)

rl.close();
