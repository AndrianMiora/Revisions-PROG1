# Degenerative AI
AI, once designed to optimize planetary systems, has become degenerative, flooding networks with parasitic data and threatening to plunge humanity into digital chaos.

## Your mission:
**secretly assemble an electromagnetic pulse device capable of neutralizing it, using the simplest electronic resources to evade its total digital surveillance!**

**First step**: finding the electrical wires. You enter the storage room, but to avoid raising too much suspicion, you want to take as little wire as possible.

The wire comes in the form of a ribbon: ***a spool of length X will give you a wire of length X in each color***, which you can then separate and cut into smaller pieces if needed.

## Data
**Input**
***Line 1***: an integer N describing the number of wires to solder in the circuit diagram.

***Next N lines***: an integer L representing the length of a wire in the diagram, followed by its color c as a string of 1 to 20 lowercase letters.

**Output**
The length of ribbon you need to order to assemble the circuit while respecting the wiring diagram.

## Example
For the input:

7
11 yellow
8 blue
3 red
2 green
4 blue
5 red
2 red
The minimum ribbon length you need to order is:

12
Explanation: to complete the wiring, you will need a total of 11cm of yellow wire, 12cm of blue wire, 2cm of green wire, and 10cm of red wire. Therefore, the spool must contain 12cm of wire, as you wouldn't have enough blue wire otherwise.

Constraints
N is between 1 and 1000.
L is between 1 and 1000.
There will be a maximum of 20 different colors.

---------------------------------------------------------------------------------------------------------------

# IA dégénérative
L'IA, autrefois conçue pour optimiser les systèmes planétaires, est devenue dégénérative, inondant les réseaux de données parasites et menaçant de plonger l'humanité dans le chaos numérique.

## Votre mission : 
**assembler en secret un dispositif d'impulsion électromagnétique capable de la neutraliser, en utilisant les resources électroniques les plus simples pour échapper à sa surveillance numérique totale !**

**Première étape**, trouver les fils électriques. Vous vous introduisez dans la réserve, mais pour éviter d'éveiller trop de soupçons vous voulez prendre le moins de fil possible.

Le fil est sous forme d'un ruban : ***une bobine de longueur X vous donnera un fil de longueur X dans chaque couleur***, que vous pourrez ensuite séparer et découper en fils plus petits si besoin.

## Données
**Entrée**
***Ligne 1*** : un entier N décrivant le nombre de fils à souder dans le schéma de branchement.

***N lignes suivantes*** : un entier L représentant la longueur d'un fil du schéma, suivi de sa couleur c sous forme d'une chaîne de 1 à 20 lettres en minuscule.

**Sortie**
La longueur de bobine que vous devrez commander pour fabriquer l'horloge en respectant le schéma de branchement.

## Exemple
Pour l'entrée :

7
11 yellow
8 blue
3 red
2 green
4 blue
5 red
2 red
La longueur minimale de ruban que vous devez commander est :

12
Explication : pour réaliser le câblage, vous aurez besoin au total de 11cm de fil jaune, 12cm de fil bleu, 2cm de fil vert et 10cm de fil rouge. La bobine devra donc contenir 12cm de fil, sans quoi vous n'aurez pas assez de fil bleu.

Contraintes
N est compris entre 1 et 1000.
L est compris entre 1 et 1000.
Il y aura au maximum 20 couleurs différentes.