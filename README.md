# 📅 ChronoNova - Frises Chronologiques Modernes

ChronoNova est une **application web gratuite et ultra simple** permettant de créer des frises chronologiques esthétiques pour élèves et professeurs.

## ✨ Caractéristiques

✅ **Gestion des événements** - Ajoutez des événements avec titre et date  
✅ **Timeline esthétique** - Visualisez vos événements dans une frise moderne  
✅ **Suppression facile** - Supprimez les événements d'un clic  
✅ **Sauvegarde automatique** - Vos données sont sauvegardées en localStorage  
✅ **Export PNG/PDF** - Exportez votre frise en image ou PDF  
✅ **Mode sombre** - Interface en mode clair ou sombre  
✅ **Design minimaliste** - Interface simple et intuitive inspirée de Notion/Apple  
✅ **Responsive** - Fonctionne parfaitement sur mobile et desktop  

## 🚀 Démarrage rapide

### Installation

```bash
# Cloner le repository
git clone https://github.com/glitchmelo/ChronoNova.git
cd ChronoNova

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### Build pour production

```bash
# Construire l'application
npm run build

# Prévisualiser le build
npm run preview
```

### Déployer sur GitHub Pages

```bash
# Déployer automatiquement
npm run deploy
```

## 📦 Stack technologique

- **React 18** - Framework UI
- **Vite** - Build tool ultra-rapide
- **TailwindCSS** - Styling minimaliste
- **html2canvas** - Export en PNG
- **jsPDF** - Export en PDF
- **localStorage** - Persistance des données

## 🎨 Design

- Minimaliste et moderne
- Palette de couleurs douce (blanc, gris clair, bleu/violet pastel)
- Animations légères (fade-in, slide-up, hover smooth)
- Typographie Inter
- Fully responsive

## 📂 Structure du projet

```
src/
├── components/
│   ├── EventForm.jsx      # Formulaire d'ajout d'événement
│   ├── EventCard.jsx      # Carte d'événement individuelle
│   └── Timeline.jsx       # Composant frise chronologique
├── utils/
│   └── export.js          # Utilitaires d'export (PNG/PDF)
├── App.jsx                # Composant principal
├── main.jsx               # Point d'entrée React
└── index.css              # Styles globaux Tailwind
```

## 🎯 Fonctionnalités détaillées

### 1. Ajouter un événement
- Remplissez le titre et la date
- L'événement s'ajoute instantanément à la frise
- Animation slide-up

### 2. Visualiser la timeline
- Les événements sont triés chronologiquement
- Design avec ligne centrale et dots colorés
- Statistiques (nombre d'événements, durée)

### 3. Supprimer des événements
- Bouton supprimer visible au hover
- Confirmation avant suppression

### 4. Sauvegarde automatique
- Tous les événements sont sauvegardés automatiquement
- Recharge au refresh
- Zéro serveur nécessaire

### 5. Exporter
- **PNG** : Image haute qualité de la frise
- **PDF** : Document téléchargeable (multi-pages si besoin)

### 6. Mode sombre
- Toggle accessible en haut à droite
- Préférence sauvegardée

## 🌍 Langue

L'interface est entièrement en **français** pour faciliter l'utilisation par les élèves et professeurs francophones.

## 📝 Licence

MIT - Libre d'utilisation

## 💡 Bonus implémentés

✨ Mode sombre toggle  
✨ Animations légères (fade-in, slide-up)  
✨ Statistiques (durée, nombre d'événements)  
✨ Design inspiré de Notion/Apple  

## 🐛 Rapporter un bug

Ouvrez une [issue](https://github.com/glitchmelo/ChronoNova/issues) directement sur GitHub.

## 🤝 Contribution

Les contributions sont bienvenues ! N'hésitez pas à forker et créer une pull request.

---

**Créé avec ❤️ pour élèves et professeurs**