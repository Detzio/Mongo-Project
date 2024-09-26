# Projet MongoDB
## Introduction
Pour ce projet, vous devez créer les base d'un réseau social. Le but étant pour les utilisateur de pouvoir s'inscrire, se connecter, poster et commenter des post.
Le code nodejs a été prévue en amont, il ne reste qu'à créer les modèles et les requêtes. Le front n'est pas attendu sur ce projet.

## Installation
Pour installer ce projet, il est conseiller de faire un fork dans un premier temps, puis de cloner le repo forké.
Afin d'installer les libraries requises, executez la commande :

    npm init 



## Livrables
Il vous sera demandé de fournir un repo git (github, gitlab ou équivalent), les commit de chaque membre devront être présent avec leur travail respectif.
Une présentation orale technique du projet sera aussi à prévoir.

## Code  à compléter
Les fichiers nodejs ont déjà été créer, vous ne devriez pas avoir besoin d'en créer de nouveaux.
Il faudra modifier :
 - model/connexion.js ici vous devrez implémenter la connexion à votre base de données
 - app.js : à modifier afin d'appeler la fonction de connexion à la base de données
 - model/....model.js : les 3 fichiers de model doivent être implémentés pour créer des schéma mongoose appropriés
 - controller/....controller.js : les 3 fichiers présentent déjà les fonctions demandées, avec des commentaires explicatif de ce qui est attendu, à vous de les compléter les "todo"
A