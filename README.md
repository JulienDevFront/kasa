# 🏠 Kasa — Plateforme de location d’hébergements

Projet de refonte d’une application web de location immobilière, réalisé dans une stack 100% JavaScript avec React côté front-end.

---

## 📌 Objectif du projet

Repenser totalement l’application **Kasa** avec des technologies modernes, en mettant l’accent sur :

- La **clarté de l’architecture front-end**
- La **séparation UX / UI**
- La **navigation fluide** via React Router
- Une **interface responsive** et accessible

---

## ⚙️ Stack technologique

| Technologie            | Rôle                                             |
| ---------------------- | ------------------------------------------------ |
| **React 19**           | Construction des interfaces en composants        |
| **React Router DOM 7** | Navigation et gestion des routes côté client     |
| **SASS (pattern 7-1)** | Gestion des styles de manière modulaire          |
| **Vite**               | Build et serveur de développement                |
| **Node.js**            | Stack côté back-end (simulé ou en base statique) |
| **GitHub Pages**       | Déploiement statique de l’application            |

---

## 🧭 Navigation front-end

| Route          | Description                                              |
| -------------- | -------------------------------------------------------- |
| `/`            | Page d’accueil, liste de logements                       |
| `/housing/:id` | Page de détails d’un logement                            |
| `/about`       | Page "À propos", avec des infos présentées en accordéons |
| `/error`       | Page d’erreur (route non trouvée ou logement inexistant) |

---

## 🧩 Architecture & composants

### Structure logique

- Séparation claire entre **composants UX** (structure/logique) et **UI** (présentation).
- L’architecture suit le **pattern 7-1 en SASS** pour les styles.

### Pages principales

- **HomePage** → `HousingCard`, `HeroHeader`, `Header`, `Footer`
- **HousingPage** → `HeroCarousel`, `DropdownList`, `HousingTitle`, `Rating`, etc.
- **AboutPage** → Accordéons `DropdownList`, présentation statique
- **ErrorPage** → Page d’erreur 404

---

## 🚀 Installation & lancement

### 1. Cloner le dépôt

```bash
git clone https://github.com/juliendevfront/kasa.git
cd kasa
```
