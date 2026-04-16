/**
 * CLOCK MODERN WAY - Logique Complète (Vanilla JS)
 * Version : Finale Stable avec gestion des 31 jours variables
 * Auteur : Mathieu (Base) & Gemini (Ajustements)
 */

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

// =======================================================
// A. GÉNÉRATION DES ÉLÉMENTS RADIAUX (Au chargement)
// =======================================================

// Créer les nombres des dates (1 à 31)
const hoursContainer = document.getElementById('hours-numbers');

if (hoursContainer) {
    // Boucle jusqu'à 31 pour couvrir tous les jours d'un mois
    for (let i = 1; i <= 31; i++) {
        const num = document.createElement('div');
        num.className = 'number';
        num.textContent = i;
        
        // Nouvelle formule d'angle pour 31 éléments: 360 degrés / 31 = ~11.61 degrés par élément
        const angle = (i * (360 / 31)) - 90; 
        const radius = 185;
        
        // Calcul trigonométrique (Méthode de centrage de Mathieu)
        const x = 200 + radius * Math.cos(angle * Math.PI / 180);
        const y = 200 + radius * Math.sin(angle * Math.PI / 180);
        
        // Ajustement pour centrer le div par rapport au point (x, y)
        num.style.left = x - 15 + 'px';
        num.style.top = y - 10 + 'px';
        
        hoursContainer.appendChild(num);
    }
}


// Créer les jours de la semaine
const daysContainer = document.getElementById('days');
if (daysContainer) {
    days.forEach((day, i) => {
        const dayEl = document.createElement('div');
        dayEl.className = 'day';
        dayEl.textContent = day;
        
        // Calcul trigonométrique pour le positionnement radial des jours (7 éléments)
        const angle = (i * (360 / 7)) - 90; // 360 / 7 = ~51.4 degrés
        const radius = 155;
        const x = 170 + radius * Math.cos(angle * Math.PI / 180);
        const y = 170 + radius * Math.sin(angle * Math.PI / 180);
        
        dayEl.style.left = x - 15 + 'px';
        dayEl.style.top = y - 10 + 'px';
        
        daysContainer.appendChild(dayEl);
    });
}


// Créer les mois
const monthsContainer = document.getElementById('months');
if (monthsContainer) {
    months.forEach((month, i) => {
        const monthEl = document.createElement('div');
        monthEl.className = 'month';
        monthEl.textContent = month;
        
        // Calcul trigonométrique pour le positionnement radial des mois (12 éléments)
        const angle = (i * (360 / 12)) - 90; // 360 / 12 = 30 degrés
        const radius = 125;
        const x = 140 + radius * Math.cos(angle * Math.PI / 180);
        const y = 140 + radius * Math.sin(angle * Math.PI / 180);
        
        monthEl.style.left = x - 15 + 'px';
        monthEl.style.top = y - 10 + 'px';
        
        monthsContainer.appendChild(monthEl);
    });
}

// =======================================================
// B. FONCTION DE MISE À JOUR (Chaque seconde)
// =======================================================

function updateClock() {
    const now = new Date();
    
    // Données temporelles
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    // Données de date
    const day = now.getDay();       // Jour de la semaine (0=dim à 6=sam)
    const month = now.getMonth();   // Mois (0=jan à 11=déc)
    const date = now.getDate();     // Jour du mois (1 à 31)
    
    // Calculer le nombre réel de jours dans le mois actuel
    const lastDayOfMonth = new Date(now.getFullYear(), month + 1, 0).getDate();
    
    // --- 1. Rotation des Aiguilles ---
    const secondsRotation = seconds * 6;
    const minutesRotation = minutes * 6 + seconds / 10;
    const hoursRotation = (hours % 12) * 30 + minutes / 2;

    document.getElementById('hand-seconds').style.transform = `rotate(${secondsRotation}deg)`;
    document.getElementById('hand-minutes').style.transform = `rotate(${minutesRotation}deg)`;
    document.getElementById('hand-hours').style.transform = `rotate(${hoursRotation}deg)`;

    // --- 2. Mise en Surbrillance (Jours et Mois) ---
    
    // Jour de la semaine
    document.querySelectorAll('.day').forEach((el, i) => {
        el.classList.toggle('today', i === day);
    });

    // Mois
    document.querySelectorAll('.month').forEach((el, i) => {
        el.classList.toggle('current', i === month);
    });

    // --- 3. Mise en Surbrillance de la DATE (1 à 31) ---
    
    document.querySelectorAll('.number').forEach(el => {
        
        const numValue = parseInt(el.textContent, 10);
        
        // Gérer les jours inexistants (ex: 30 et 31 en février)
        if (numValue > lastDayOfMonth) {
            // Retire la surbrillance (pour les jours qui n'existent pas ce mois-ci)
            el.classList.remove('current-date-highlight'); 
            // OPTIONNEL : Vous pouvez ajouter une classe pour estomper la couleur/opacité
            // el.classList.add('date-out-of-month');
        } 
        
        // Mettre en surbrillance uniquement le jour actuel (date)
        el.classList.toggle('current-date-highlight', numValue === date);
    });
}

// =======================================================
// C. INITIALISATION
// =======================================================

// Mettre à jour l'horloge toutes les secondes
updateClock();
setInterval(updateClock, 1000);