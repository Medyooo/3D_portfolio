export const translations = {
  fr: {
    nav: {
      about: 'À propos',
      experiences: 'Expérience',
      projects: 'Projets perso',
      studies: 'Formation',
      certification: 'Certifications',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Bonjour, je suis',
      name: 'Mohamed Larbi  EL BAIDI',
      role: 'Développeur full-stack',
      downloadCv: 'Télécharger mon CV'
    },
    about: {
      subtitle: 'Introduction',
      title: 'À propos',
      portraitAlt: 'Portrait de Mohamed Larbi El Baidi',
      paragraph: "Développeur logiciel en ingénierie informatique, spécialisé en Full-Stack, je conçois et développe des applications web modernes, performantes et maintenables. En alternance chez Enedis Lab, je participe à la conception, au développement et à la sécurisation de solutions utilisées par les équipes métiers, en intervenant sur l'ensemble du cycle de vie logiciel : analyse des besoins, architecture, développement front-end et back-end, tests automatisés, intégration continue et déploiement. Rigoureux et orienté qualité, j'accorde une importance particulière aux bonnes pratiques, à la sécurité applicative et à la fiabilité des solutions livrées."
    },
    services: {
      fullstack: 'Full-stack',
      security: 'Sécurité Applicative / DevSecOps',
      cicd: 'CI/CD & Qualité Logicielle',
      engineering: 'Ingénierie Logicielle'
    },
    experience: {
      subtitle: 'MON PARCOURS PROFESSIONNEL',
      title: 'Expériences Professionnelles'
    },
    studies: {
      subtitle: 'MON PARCOURS ACADÉMIQUE',
      title: 'Formations'
    },
    tech: {
      subtitle: 'OUTILS & LANGAGES',
      title: 'Stack technique',
      frontend: 'Frontend',
      backend: 'Backend & Base de données',
      cicd: 'CI/CD & DevOps'
    },
    personalProjects: {
      subtitle: 'RÉALISATIONS & EXPÉRIMENTATIONS',
      title: 'Projets personnels',
      stackLabel: 'Stack',
      galleryLabel: 'Aperçus',
      clickToEnlarge: 'Cliquer pour agrandir',
      slidePrev: 'Image précédente',
      slideNext: 'Image suivante',
      closeImageZoom: 'Fermer l’agrandissement',
      viewProject: 'Voir le projet',
      categoryLabel: 'Domaine',
      status: {
        in_progress: 'En cours',
        completed: 'Terminé',
        planned: 'À venir'
      },
      itemsById: {
        medtrading: {
          name: 'MedTrading',
          category: 'Fintech',
          description:
            'Application de journalisation des trades et de suivi de performance : authentification, tableau de bord (P&L cumulé, win rate, paires), journal des positions, création de trades avec calcul automatique du R/R, catalogue d’instruments et vue analyse avec intégration TradingView. Front React, Redux, TypeScript, Vite et Tailwind CSS ; back Java / Spring Boot avec Spring Security, persistance PostgreSQL, conteneurisation Docker, API REST, architecture n-tiers et multi-couche.',
          imageAlt: 'MedTrading — page de connexion',
          galleryAlts: [
            'Tableau de bord',
            'Journal des trades',
            'Formulaire nouveau trade',
            'Catalogue des paires (mode sombre)',
            'Analyse graphique (mode sombre)'
          ]
        },
        secoursplus: {
          name: 'Secours+',
          category: 'E-learning',
          description:
            'Plateforme e-learning de formation aux premiers secours : parcours, catalogue avec filtres et offres premium, fiches cours avec suivi de progression, quiz d’évaluation (timer, vies, score) et tableau de bord utilisateur. Mise en avant d’un parcours en réalité virtuelle pour des gestes sauveurs immersifs. Front Next.js, TypeScript et Tailwind CSS ; back Spring Boot avec Spring Security, PostgreSQL, Docker, API REST, architecture n-tiers et approche DDD (Domain-Driven Design).',
          imageAlt: 'Secours+ — page d’accueil',
          galleryAlts: [
            'Détail d’un cours',
            'Quiz d’évaluation',
            'Catalogue des formations',
            'Tableau de bord utilisateur'
          ]
        },
        vtechno: {
          name: 'V-Techno',
          category: 'Veille tech',
          description:
            'Dashboard de veille technologique conçu dans le cadre d\'un projet académique à l\'EPSI. Développement de l’interface web (React, Vite, Tailwind) connectée aux flux automatisés par l’équipe, pour centraliser et visualiser des actualités en temps réel. Authentification et données via Firebase / Firestore, dans l’écosystème Google Cloud.',
          imageAlt: 'V-Techno — page de connexion',
          galleryAlts: [
            'Tableau de bord — suivi d’articles',
            'Gestion des sources RSS'
          ]
        },
        ecosort: {
          name: 'EcoSort',
          category: 'RSE & IoT',
          description:
            'Application web de gestion administrative pour une poubelle connectée intelligente. Le tableau de bord permet aux entreprises de suivre les statistiques de tri des déchets, de visualiser les courbes d’évolution, de gérer les employés et de consulter le classement gamifié des utilisateurs. Projet académique MyDigitalSchool.',
          imageAlt: 'EcoSort — connexion',
          galleryAlts: [
            'Première configuration',
            'Tableau de bord — statistiques et classement'
          ]
        }
      }
    },
    certifications: {
      subtitle: 'Auto-formation & cours en ligne',
      title: 'Certifications',
      list: [
        { name: 'JAVA INTERMEDIATE', description: 'Certification SoloLearn - Java intermédiaire.' },
        { name: 'JAVASCRIPT INTERMEDIATE', description: 'Certification SoloLearn - Auto-formation en JavaScript.' },
        { name: 'SQL INTERMEDIATE', description: 'Certification SoloLearn - Maîtrise des bases SQL.' },
        { name: 'PHP INTERMEDIATE', description: 'Certification SoloLearn - Programmation PHP.' },
        { name: 'DEVENEZ DÉVELOPPEUR AGILE', description: 'OpenClassrooms - Parcours sur les méthodes agiles.' },
        { name: 'CYBERSÉCURITÉ', description: 'Formation cybersécurité - L\'ANSSI.' }
      ]
    },
    contact: {
      subtitle: 'Restons en contact',
      title: 'Contact',
      yourName: 'Votre nom',
      yourEmail: 'Votre email',
      yourMessage: 'Votre message',
      placeholderName: 'Quel est votre nom ?',
      placeholderEmail: 'Quelle est votre adresse email ?',
      placeholderMessage: 'Que souhaitez-vous me dire ?',
      send: 'Envoyer',
      sending: 'Envoi en cours...',
      closeLabel: 'Fermer la notification'
    },
    viewSource: 'Voir le code source',
    notifications: {
      fillAll: 'Veuillez remplir tous les champs du formulaire.',
      invalidEmail: 'Veuillez entrer une adresse email valide.',
      rateLimit: 'Veuillez patienter une minute avant de renvoyer un message.',
      success: 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.',
      error: "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou me contacter directement à arbielbaidi6@gmail.com"
    }
  },
  en: {
    nav: {
      about: 'About',
      experiences: 'Experience',
      projects: 'Side projects',
      studies: 'Education',
      certification: 'Certifications',
      contact: 'Contact'
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Mohamed Larbi  EL BAIDI',
      role: 'Full-stack developer',
      downloadCv: 'Download my CV'
    },
    about: {
      subtitle: 'Introduction',
      title: 'About',
      portraitAlt: 'Portrait of Mohamed Larbi El Baidi',
      paragraph: 'Software developer in computer engineering, specialized in Full-Stack, I design and develop modern, performant and maintainable web applications. As an apprentice at Enedis Lab, I contribute to the design, development and securing of solutions used by business teams, covering the full software lifecycle: requirements analysis, architecture, front-end and back-end development, automated testing, continuous integration and deployment. Thorough and quality-oriented, I pay particular attention to best practices, application security and the reliability of delivered solutions.'
    },
    services: {
      fullstack: 'Full-stack',
      security: 'Application Security / DevSecOps',
      cicd: 'CI/CD & Software Quality',
      engineering: 'Software Engineering'
    },
    experience: {
      subtitle: 'MY PROFESSIONAL BACKGROUND',
      title: 'Professional Experience'
    },
    studies: {
      subtitle: 'MY ACADEMIC BACKGROUND',
      title: 'Education'
    },
    tech: {
      subtitle: 'TOOLS & LANGUAGES',
      title: 'Technical stack',
      frontend: 'Frontend',
      backend: 'Backend & Databases',
      cicd: 'CI/CD & DevOps'
    },
    personalProjects: {
      subtitle: 'BUILD & EXPERIMENTATION',
      title: 'Personal projects',
      stackLabel: 'Stack',
      galleryLabel: 'Screenshots',
      clickToEnlarge: 'Click to enlarge',
      slidePrev: 'Previous image',
      slideNext: 'Next image',
      closeImageZoom: 'Close enlarged image',
      viewProject: 'View project',
      categoryLabel: 'Domain',
      status: {
        in_progress: 'In progress',
        completed: 'Completed',
        planned: 'Planned'
      },
      itemsById: {
        medtrading: {
          name: 'MedTrading',
          category: 'Fintech',
          description:
            'Trade journaling and performance app: secure sign-in, dashboard (cumulative P&L, win rate, pairs), trade log, trade creation with automatic R/R calculation, instrument catalog and analysis view with TradingView integration. React, Redux, TypeScript, Vite, and Tailwind CSS on the front end; Java / Spring Boot with Spring Security, PostgreSQL, Docker, REST API, n-tier layered architecture on the backend.',
          imageAlt: 'MedTrading — sign-in',
          galleryAlts: [
            'Dashboard',
            'Trade log',
            'New trade form',
            'Pairs catalog (dark mode)',
            'Chart analysis (dark mode)'
          ]
        },
        secoursplus: {
          name: 'Secours+',
          category: 'E-learning',
          description:
            'E-learning platform for first aid training: learning paths, searchable catalog with premium courses, course pages with progress, timed evaluation quiz (lives, points, score) and user dashboard. Marketing and flows highlight an immersive virtual reality path for life-saving gestures. Next.js, TypeScript, and Tailwind CSS on the front end; Spring Boot with Spring Security, PostgreSQL, Docker, REST API, n-tier architecture, domain-driven design (DDD) on the backend.',
          imageAlt: 'Secours+ — landing',
          galleryAlts: [
            'Course page',
            'Evaluation quiz',
            'Training catalog',
            'User dashboard'
          ]
        },
        vtechno: {
          name: 'V-Techno',
          category: 'Tech watch',
          description:
            'Technology watch dashboard for an academic project at EPSI. Web UI (React, Vite, Tailwind) I built on top of the team’s automated feed pipeline to centralize and view tech news in real time. Authentication and data through Firebase and Firestore on Google Cloud.',
          imageAlt: 'V-Techno — sign-in',
          galleryAlts: [
            'Dashboard — article feed',
            'RSS sources'
          ]
        },
        ecosort: {
          name: 'EcoSort',
          category: 'Sustainability & IoT',
          description:
            'Web app for the admin side of a smart connected waste bin. The dashboard helps companies track sorting statistics, view trend charts, manage team members, and browse a gamified user leaderboard. Academic project at MyDigitalSchool.',
          imageAlt: 'EcoSort — login',
          galleryAlts: [
            'First-time setup',
            'Dashboard — stats and ranking'
          ]
        }
      }
    },
    certifications: {
      subtitle: 'Self-training & online courses',
      title: 'Certifications',
      list: [
        { name: 'JAVA INTERMEDIATE', description: 'SoloLearn Certification - Java Intermediate.' },
        { name: 'JAVASCRIPT INTERMEDIATE', description: 'SoloLearn Certification - JavaScript self-training.' },
        { name: 'SQL INTERMEDIATE', description: 'SoloLearn Certification - SQL fundamentals.' },
        { name: 'PHP INTERMEDIATE', description: 'SoloLearn Certification - PHP programming.' },
        { name: 'BECOME AN AGILE DEVELOPER', description: 'OpenClassrooms - Agile methods course.' },
        { name: 'CYBERSECURITY', description: 'Cybersecurity training - ANSSI.' }
      ]
    },
    contact: {
      subtitle: 'Get in touch',
      title: 'Contact',
      yourName: 'Your name',
      yourEmail: 'Your email',
      yourMessage: 'Your message',
      placeholderName: "What's your name?",
      placeholderEmail: "What's your email address?",
      placeholderMessage: 'What would you like to say?',
      send: 'Send',
      sending: 'Sending...',
      closeLabel: 'Close notification'
    },
    viewSource: 'View source code',
    notifications: {
      fillAll: 'Please fill in all form fields.',
      invalidEmail: 'Please enter a valid email address.',
      rateLimit: 'Please wait a minute before sending another message.',
      success: 'Message sent successfully! I will get back to you as soon as possible.',
      error: 'An error occurred while sending. Please try again or contact me directly at arbielbaidi6@gmail.com'
    }
  }
}

export const t = (lang, key) => {
  const keys = key.split('.')
  let value = translations[lang]
  for (const k of keys) {
    value = value?.[k]
  }
  return value ?? key
}
