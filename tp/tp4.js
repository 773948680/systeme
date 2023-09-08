import { prompt } from '../index.js';

console.log('DIVISION');

const firstNumber = Number(await prompt('Entrer premier nombre : '));

if (Number.isNaN(firstNumber)) {
  console.log('Error : le premier n`\est pas un nombre');
  process.exit(1);
}

const secondNumber = Number(await prompt('Entrer deuxieme nombre : '));

// Si secondNumber est totalement égal à 0, alors on affiche une erreur et on quitte le programme
if (secondNumber === 0) {
  console.log("Error : le deuxième numéro ne peut pas être 0");
  process.exit(1);
}

if (Number.isNaN(secondNumber)) {
  console.log('Error : le deuxième n`\est pas un nombre');
  process.exit(1);
}

// J'ai changé le signe + par un /
console.log('Le resultat de la division est de : ', firstNumber / secondNumber);
