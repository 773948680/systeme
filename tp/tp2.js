// Importe la fonction prompt depuis le fichier helper.js
import { prompt } from '../index.js';

console.log('SOUSTRACTION');

// Demande le premier nombre à l'utilisateur et stocke le résultat dans la variable firstNumber
const firstNumber = Number(await prompt('Entrer premier nombre : '));

// Demande le deuxième nombre à l'utilisateur et stocke le résultat dans la variable secondNumber
const secondNumber = Number(await prompt('Entrer deuxieme nombre : '));

// Affiche l'addition des deux nombres
console.log("Le résultat de l'addition est : ", firstNumber - secondNumber);
