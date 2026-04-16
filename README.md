<p align="center"\>
<img src="https://github.com/Mathieu7483/Clock-Modern-Way/blob/main/a-photorealistic--high-end-studio-shot-of-a-wall-m.png"\>
</p>

# 🕒 Clock Modern Way

**Clock Modern Way** est une horloge analogique moderne et minimaliste conçue avec les technologies web standards (HTML/CSS/JS). Elle se distingue par une interface épurée affichant non seulement l'heure en temps réel, mais aussi le jour de la semaine, le mois et la date du mois via une disposition radiale dynamique.


---

## 🚀 Fonctionnalités

* **Heure en temps réel** : Affichage fluide des heures, minutes et secondes grâce à des aiguilles animées.
* **Calendrier Radial** : Trois anneaux concentriques affichant dynamiquement la date :
    * **Anneau extérieur** : Les jours du mois (1 à 31).
    * **Anneau intermédiaire** : Les jours de la semaine (SUN à SAT).
    * **Anneau intérieur** : Les mois de l'année (JAN à DEC).
* **Surbrillance Contextuelle** : 
    * Mise en évidence visuelle du jour actuel et du mois en cours.
    * Surbrillance spécifique pour la date exacte du jour.
* **Gestion Intelligente des Mois** : Le script calcule automatiquement le nombre de jours réels dans le mois en cours (ex: février à 28/29 jours) pour ajuster l'affichage.
* **Design Responsive** : Mise en page centrée avec un thème sombre (*Dark Mode*) natif pour un confort visuel optimal.

---

## 🛠️ Technologies Utilisées

* **HTML5** : Structure sémantique du document.
* **CSS3** : 
    * Positionnement absolu et relatif pour la superposition des anneaux.
    * Flexbox pour le centrage global.
    * Transitions fluides et transformations (`rotate`) pour le mouvement des aiguilles.
* **JavaScript (Vanilla JS)** :
    * Calculs trigonométriques pour le placement automatique des éléments sur un cercle (360°).
    * Manipulation du DOM pour l'injection des dates et la gestion des classes CSS.
    * Utilisation de `setInterval` pour la mise à jour à la seconde près.

---

## 📂 Structure du Projet

```text
.
├── horloge.html   # Structure de l'horloge et conteneurs
├── horloge.css    # Styles, animations et thémage
├── horloge.js     # Logique de calcul radial et mise à jour temporelle
└── README.md      # Documentation du projet
```

---

## ⚙️ Détails Techniques : Le Placement Radial

Pour positionner les éléments (jours, mois, chiffres) de manière circulaire, le projet utilise les fonctions mathématiques **Sinus** et **Cosinus**.

La formule utilisée est la suivante :
* **Angle** : $$(i \times (\frac{360}{n})) - 90$$ (où $n$ est le nombre d'éléments).
* **Position X** : $$centre + rayon \times \cos(angle \times \frac{\pi}{180})$$
* **Position Y** : $$centre + rayon \times \sin(angle \times \frac{\pi}{180})$$

---

## 📝 Installation et Utilisation

1.  Clonez ou téléchargez les fichiers du dépôt.
2.  Assurez-vous que les trois fichiers (`.html`, `.css`, `.js`) sont dans le même répertoire.
3.  Ouvrez le fichier `horloge.html` dans n'importe quel navigateur moderne (Chrome, Firefox, Edge, Safari).

---
## 🕒 Prévisualisation de mon horloge
<p align="center"\>
<img src="https://github.com/Mathieu7483/Clock-Modern-Way/blob/main/Capture%20d'%C3%A9cran%20horloge.png"\>
</p>

## 👨‍💻 Auteur

**Mathieu**
* Étudiant en programmation.
* Passionné par le développement web et les interfaces interactives.

---

## ⚖️ Licence

Ce projet est libre de droits. Vous pouvez l'utiliser, le modifier et l'améliorer selon vos besoins.
