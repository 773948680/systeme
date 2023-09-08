// 🦁 Import cette function
import { prompt } from '../index.js';

console.log('ELEVE');

// 🦁 Utilise la function "prompt" pour demander le premier nombre à l'utilisateur
const nom = await prompt('Entrer votre Nom:');
if (!isNaN(nom)) {
  console.log('Erreur : Veiller saisir votre nom !');
  process.exit(1);
}
const prenom = await prompt('Entrer votre Prenom: ');
if (!isNaN(prenom)) {
  console.log('Erreur : Veiller saisir votre prenom !');
  process.exit(1);
}
const age = Number(await prompt('Entrer votre Age: '));
if (Number.isNaN(age)) {
  console.log('Erreur : Veiller saisir votre age !');
  process.exit(1);
}
const cours = await prompt('Entrer votre cours: ');
if (!isNaN(cours)) {
  console.log('Erreur : Veiller saisir votre cours !');
  process.exit(1);
}

// <===================================================>
console.log('PROFESSEUR');
const nomProf = await prompt('Entrer votre Nom:');
if (!isNaN(nomProf)) {
  console.log('Erreur : Veiller saisir votre nom !');
  process.exit(1);
}
const prenomProf = await prompt('Entrer votre Prenom: ');
if (!isNaN(prenomProf)) {
  console.log('Erreur : Veiller saisir votre prenom !');
  process.exit(1);
}
const experience = Number(await prompt('Experience : '));
if (Number.isNaN(experience)) {
  console.log("Erreur : Veiller saisir nombre d'année d'experience  !");
  process.exit(1);
}
const matiere = await prompt('Entrer votre matiere: ');
if (!isNaN(cours)) {
  console.log('Erreur : Veiller saisir votre cours !');
  process.exit(1);
}
//=======================================================================
console.log('COURS');
const titre = await prompt('Entrer le titre du cours:');
if (!isNaN(titre)) {
  console.log('Erreur : Veiller saisir le cours !');
  process.exit(1);
}
const horaire = (await prompt('Entrer horaire: '));
// if (Number.isNaN(horaire)) {
//   console.log('Erreur : Veiller saisir votre horaire !');
//   process.exit(1);
// }
const salles = await prompt('Entrer votre salles: ');
if (!isNaN(salles)) {
  console.log('Erreur : Veiller saisir votre salles !');
  process.exit(1);
}

console.log('---------------------------');
console.log('Détail Eleve:');
console.log('NOM:', nom);
console.log('PRENOM:', prenom);
console.log('AGE:', age);
console.log('COURS:', cours);
console.log('---------------------------');

console.log('---------------------------');
console.log('Détail Professeur:');
console.log('NOM:', nomProf);
console.log('PRENOM:', prenomProf);
console.log('experience:', experience);
console.log('matiere:', matiere);
console.log('---------------------------');

console.log('---------------------------');
console.log('Détail du Cours:');
console.log('TITRE:', titre);
console.log('HORAIRE:', horaire);
console.log('SALLES:', salles);
console.log('---------------------------');

// console.log('Le resultat :', firstNumber + secondNumber);
// 🦁 Stocke le résultat dans une variable "firstNumber" et utilise `Number()` pour convertir la valeur en nombre
// 💡 await prompt('Enter your name: ') permet de récupérer la valeur saisie par l'utilisateur

// 🦁 Fait la même chose pour la variable "secondNumber"

// 🦁 Affiche l'addition des deux nombres
