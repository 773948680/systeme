// Création des entités
const eleve = {
    nom: "Jule Ciss",
    age: 18,
    matricule: "E1",
  };
  const eleve2 = {
    nom: "Fatou SECK",
    age: 19,
    matricule: "E2"
  }
  
  const professeur = {
    nom: "Mamadou SALL",
    matiere: "Mathématiques",
    anciennete: 5
  };
  
  const cours = {
    titre: "Introduction à la Programmation",
    horaire: "10:00 - 12:00",
    salle: "B202"
  };
  
  // Affichage des entités dans la console
  console.log("Détails de l'élève :");
  console.log("Nom :", eleve.nom);
  console.log("Âge :", eleve.age);
  
  console.log("Matricule :", eleve.matricule);
  console.log("--------------------------");
  
  console.log("Détails du professeur :");
  console.log("Nom :", professeur.nom);
  console.log("Matière :", professeur.matiere);
  console.log("Ancienneté :", professeur.anciennete, "ans");
  console.log("--------------------------");
  
  console.log("Détails du cours :");
  console.log("Titre :", cours.titre);
  console.log("Horaire :", cours.horaire);
  console.log("Salle :", cours.salle);
  