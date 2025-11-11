# Random Quote Generator 💭

Un générateur de citations aléatoires avec une interface moderne et élégante.

## 🌐 Voir le projet en direct

**[Cliquez ici pour voir le projet en live](https://maxroe66.github.io/random-quote-generator/)**

## ✨ Fonctionnalités

- ✅ Génère des citations aléatoires
- ✅ Citations variées (inspiration, humour, vie, sagesse, amour, amitié, courage)
- ✅ Pas de répétition consécutive (se souvient des dernières citations)
- ✅ Interface belle et intuitive
- ✅ Design responsive
- ✅ Animations fluides

## 🛠️ Technologies utilisées

- **HTML5** - Structure
- **CSS3** - Styling avec gradients et animations
- **JavaScript (Vanilla)** - Logique et génération aléatoire

## 📂 Structure du projet

```
random-quote-generator/
├── index.html       # Structure HTML
├── styles.css       # Styles et animations
├── script.js        # Logique JavaScript
└── README.md        # Documentation
```

## 🎨 Caractéristiques du design

- Dégradé rose/rouge vibrant en arrière-plan
- Cartes de citations avec effet glassmorphism
- Guillemets décoratifs géants en arrière-plan
- Bouton stylisé avec emoji ✨
- Animations au chargement et au survol
- Design responsive (mobile, tablette, desktop)
- Message d'accueil avant la première citation

## 📝 Citations incluses

Le projet contient 7 citations variées dans différentes catégories :
- **Inspiration** - Steve Jobs
- **Humour** - Anonyme
- **Vie** - John Lennon
- **Sagesse** - Albert Einstein
- **Amour** - Antoine de Saint-Exupéry
- **Amitié** - Elbert Hubbard
- **Courage** - Nelson Mandela

## 🚀 Comment utiliser

1. Ouvrez [le site en live](https://maxroe66.github.io/random-quote-generator/)
2. Cliquez sur le bouton "GENERATE QUOTE"
3. Une nouvelle citation s'affichera
4. Cliquez à nouveau pour voir une autre citation

## 🧠 Concepts JavaScript couverts

- Tableaux et accès aux éléments
- Set pour tracker les citations utilisées
- Générer des nombres aléatoires
- DOM manipulation et événements
- Gestion d'état (tracking des citations)
- Fonctions et logique fonctionnelle

## 💡 Comment ça marche

L'application utilise un `Set` pour tracker les citations déjà affichées :
1. Génère un index aléatoire
2. Vérifie si cette citation a déjà été affichée
3. Si oui, génère un nouvel index
4. Si toutes les citations ont été affichées, réinitialise la liste

Cela garantit qu'on ne voit jamais la même citation deux fois de suite !

## 🎯 Prochaines améliorations possibles

- [ ] Ajouter plus de citations
- [ ] Partager la citation sur les réseaux sociaux
- [ ] Copier la citation au presse-papiers
- [ ] Catégories de citations
- [ ] Favoris/Marquer une citation
- [ ] API de citations externes

---

**Auteur:** maxroe66  
**Date:** Novembre 2025
