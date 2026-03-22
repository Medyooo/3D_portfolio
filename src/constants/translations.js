export const translations = {
  fr: {
    nav: {
      about: 'À propos',
      experiences: 'Expérience',
      studies: 'Formation',
      certification: 'Certifications',
      contact: 'Contact'
    },
    hero: {
      greeting: "Salut, c'est",
      name: 'Mohamed Larbi  EL BAIDI',
      role: 'Développeur full-stack',
      downloadCv: 'Télécharger mon CV'
    },
    about: {
      subtitle: 'Introduction',
      title: 'À propos',
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
      title: 'Stack technique'
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
      title: 'Technical stack'
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
