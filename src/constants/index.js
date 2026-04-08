import {
  puzzle,
  computer,
  linkicon,
  jssl,
  javasl,
  anssi,
  rocket,
  javascript,
  typescript,
  python,
  reactjs,
  nodejs,
  mongodb,
  git,
  springboot,
  agile,
  sqlsl,
  phpsl,
  docker,
  vuejs,
  postgresql,
  symfony,
  php,
  mysql,
  expressjs,
  carrent,
  jobit,
  tripguide,
  java,
  enedis,
  jdm,
  pi, ubo, mds, epsi
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'À propos'
  },
  {
    id: 'experiences',
    title: 'Expérience'
  },
  {
    id: 'studies',
    title: 'Formation'
  },
  {
    id: 'certification',
    title: 'Certifications'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

const services = [
  { key: 'fullstack', icon: rocket },
  { key: 'security', icon: linkicon },
  { key: 'cicd', icon: puzzle },
  { key: 'engineering', icon: computer }
]

const technologies = [
  {
    name: 'Docker',
    icon: docker
  },
  {
    name: 'Typescript',
    icon: typescript
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Vue JS',
    icon: vuejs
  },
  {
    name: 'Java',
    icon: java
  },
  {
    name: 'Spring Boot',
    icon: springboot
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'Express JS',
    icon: expressjs
  },
  {
    name: 'Php',
    icon: php
  },
  {
    name: 'Symfony',
    icon: symfony
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'MySQL',
    icon: mysql
  },
  {
    name: 'PostgreSQL',
    icon: postgresql
  },
  {
    name: 'python',
    icon: python
  }
]

const experiences = [
  {
    title: 'Développeur logiciel / Full-Stack & DevSecOps (Alternance)',
    company_name: 'Enedis Lab — Nantes',
    icon: enedis,
    iconBg: '#ffff',
    date: 'Sept 2024 – Présent',
    points: [
      'Conception et développement d’applications web en Symfony (PHP) et d’APIs sécurisées en Node.js / Adonis.js (TypeScript).',
      'Intégration front-end avec Vue.js, Nuxt.js et Twig.',
      'Analyse et correction de vulnérabilités via Checkmarx (SAST) et SonarCloud.',
      'Mise en œuvre des bonnes pratiques OWASP, Security by Design et revues de code orientées sécurité.',
      'Développement de tests unitaires et d’intégration (approche TDD).',
      'Utilisation et maîtrise de services AWS pour l’hébergement, la supervision et la fiabilité des applications, en collaboration avec l’équipe Cloud.'
    ]
  },
  {
    title: 'Stagiaire Développeur Full-Stack',
    company_name: 'Les Jardins Du Maroc — Saint-Sébastien-sur-Loire',
    icon: jdm,
    iconBg: '#ffff',
    date: 'Janv 2024 – Juin 2024',
    points: [
      'Développement d’interfaces web avec React, JSX, Redux et React-Bootstrap.',
      'Conception d’une API REST avec Node.js, Express.js et MongoDB.',
      'Gestion des accès, validation des données et sécurisation des endpoints.',
      'Participation à l’architecture, au versioning Git et à la documentation technique.',
      'Collaboration avec l’équipe produit pour définir les besoins et prioriser les évolutions.'
    ]
  },
  {
    title: 'Stagiaire Développeur Web',
    company_name: 'Pi Marketing — Distanciel',
    icon: pi,
    iconBg: '#ffff',
    date: 'Avril 2023 – Juin 2023',
    points: [
      'Développement et personnalisation de sites e-commerce avec Laravel, WordPress et WooCommerce.',
      'Intégration front-end en HTML, CSS, JavaScript.',
      'Optimisation des performances et amélioration de l’UX.',
      'Ajout de fonctionnalités sur mesure selon les besoins clients.'
    ]
  }
]

const studies = [
  {
    title:
      "Ingénierie informatique - Expert en informatique et systèmes d'information",
    company_name: "EPSI - L'École d'ingénierie informatique — Nantes",
    icon: epsi,
    iconBg: '#ffff',
    date: '2024 – 2026',
    points: [
      "Parcours orienté ingénierie logicielle, sécurité informatique, architecture logicielle et systèmes d’information.",
      'Enseignements clés : développement sécurisé, DevOps / DevSecOps, cloud, architecture multi-couches, analyse de données, BI & DataViz.',
      "Projets : conception d’applications métiers, pipelines CI/CD, optimisation de la qualité logicielle, modélisation avancée."
    ]
  },
  {
    title:
      'Licence professionnelle Concepteur développeur d’applications, Programmation informatique',
    company_name: 'MyDigitalSchool Nantes — Nantes',
    icon: mds,
    iconBg: '#ffff',
    date: '2023 – 2024',
    points: [
      'Conception et développement d’applications Web sécurisées (Front, Back, persistance).',
      'Architecture logicielle, développement multi-couches, bonnes pratiques de sécurité.',
      "Réalisation d’applications web répondant aux normes de sécurité et d’ergonomie."
    ]
  },
  {
    title:
      'DEUG Informatique - Diplôme d’études universitaires générales, Informatique',
    company_name: 'Université de Bretagne Occidentale — Brest',
    icon: ubo,
    iconBg: '#ffff',
    date: '2021 – 2023',
    points: [
      "Bases fondamentales de l’algorithmique, de la programmation et de la modélisation.",
      'Architecture des systèmes, structures de données, développement applicatif.',
      'Initiation au développement Web, aux systèmes d’information et à la programmation orientée objet.'
    ]
  }
]

const experiencesEn = [
  {
    title: 'Software Developer / Full-Stack & DevSecOps (Apprenticeship)',
    company_name: 'Enedis Lab — Nantes',
    icon: enedis,
    iconBg: '#ffff',
    date: 'Sept 2024 – Present',
    points: [
      'Design and development of web applications in Symfony (PHP) and secure APIs in Node.js / Adonis.js (TypeScript).',
      'Front-end integration with Vue.js, Nuxt.js and Twig.',
      'Analysis and remediation of vulnerabilities via Checkmarx (SAST) and SonarCloud.',
      'Implementation of OWASP best practices, Security by Design and security-focused code reviews.',
      'Development of unit and integration tests (TDD approach).',
      'Use of AWS services for hosting, monitoring and application reliability, in collaboration with the Cloud team.'
    ]
  },
  {
    title: 'Full-Stack Developer Intern',
    company_name: 'Les Jardins Du Maroc — Saint-Sébastien-sur-Loire',
    icon: jdm,
    iconBg: '#ffff',
    date: 'Jan 2024 – June 2024',
    points: [
      'Development of web interfaces with React, JSX, Redux and React-Bootstrap.',
      'Design of a REST API with Node.js, Express.js and MongoDB.',
      'Access management, data validation and endpoint security.',
      'Participation in architecture, Git versioning and technical documentation.',
      'Collaboration with the product team to define requirements and prioritize changes.'
    ]
  },
  {
    title: 'Web Developer Intern',
    company_name: 'Pi Marketing — Remote',
    icon: pi,
    iconBg: '#ffff',
    date: 'April 2023 – June 2023',
    points: [
      'Development and customization of e-commerce sites with Laravel, WordPress and WooCommerce.',
      'Front-end integration in HTML, CSS, JavaScript.',
      'Performance optimization and UX improvement.',
      'Custom features according to client needs.'
    ]
  }
]

const studiesEn = [
  {
    title: 'Computer Engineering - Expert in Computer Science and Information Systems',
    company_name: "EPSI - School of Computer Engineering — Nantes",
    icon: epsi,
    iconBg: '#ffff',
    date: '2024 – 2026',
    points: [
      'Path focused on software engineering, cybersecurity, software architecture and information systems.',
      'Key topics: secure development, DevOps / DevSecOps, cloud, multi-tier architecture, data analysis, BI & DataViz.',
      'Projects: design of business applications, CI/CD pipelines, software quality optimization, advanced modeling.'
    ]
  },
  {
    title: 'Professional License in Application Design & Development, Computer Programming',
    company_name: 'MyDigitalSchool Nantes — Nantes',
    icon: mds,
    iconBg: '#ffff',
    date: '2023 – 2024',
    points: [
      'Design and development of secure Web applications (Front, Back, persistence).',
      'Software architecture, multi-tier development, security best practices.',
      'Delivery of web applications meeting security and ergonomics standards.'
    ]
  },
  {
    title: 'DEUG in Computer Science - General University Diploma',
    company_name: 'Université de Bretagne Occidentale — Brest',
    icon: ubo,
    iconBg: '#ffff',
    date: '2021 – 2023',
    points: [
      'Fundamentals of algorithms, programming and modeling.',
      'System architecture, data structures, application development.',
      'Introduction to Web development, information systems and object-oriented programming.'
    ]
  }
]

const certifications = [
  {
    name: 'JAVA INTERMEDIATE',
    description: 'Certification SoloLearn - Java intermédiaire.',
    image: javasl,
    source_code_link: ''
  },
  {
    name: 'JAVASCRIPT INTERMEDIATE',
    description: 'Certification SoloLearn - Auto-formation en JavaScript.',
    image: jssl,
    source_code_link: ''
  },
  {
    name: 'SQL INTERMEDIATE',
    description: 'Certification SoloLearn - Maîtrise des bases SQL.',

    image: sqlsl,
    source_code_link: ''
  },
  {
    name: 'PHP INTERMEDIATE',
    description: 'Certification SoloLearn - Programmation PHP.',
    image: phpsl,
    source_code_link: ''
  },
  {
    name: 'DEVENEZ DÉVELOPPEUR AGILE',
    description: 'OpenClassrooms - Parcours sur les méthodes agiles.',
    image: agile,
    source_code_link: ''
  },
  {
    name: 'CYBERSÉCURITÉ',
    description: 'Formation cybersécurité - LANSSI.',
    image: anssi,
    source_code_link: ''
  }
]

const projects = [
  {
    name: 'Car Rent',
    description:
        'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'text-white'
      },
      {
        name: 'mongodb',
        color: 'text-white'
      },
      {
        name: 'tailwind',
        color: 'text-white'
      }
    ],
    image: carrent,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Job IT',
    description:
        'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'text-white'
      },
      {
        name: 'restapi',
        color: 'text-white'
      },
      {
        name: 'scss',
        color: 'text-white'
      }
    ],
    image: jobit,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Trip Guide',
    description:
        'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'text-white'
      },
      {
        name: 'supabase',
        color: 'text-white'
      },
      {
        name: 'css',
        color: 'text-white'
      }
    ],
    image: tripguide,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Trip Guide',
    description:
        'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'text-white'
      },
      {
        name: 'supabase',
        color: 'text-white'
      },
      {
        name: 'css',
        color: 'text-white'
      }
    ],
    image: tripguide,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Trip Guide',
    description:
        'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'text-white'
      },
      {
        name: 'supabase',
        color: 'text-white'
      },
      {
        name: 'css',
        color: 'text-white'
      }
    ],
    image: tripguide,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Trip Guide',
    description:
        'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'text-white'
      },
      {
        name: 'supabase',
        color: 'text-white'
      },
      {
        name: 'css',
        color: 'text-white'
      }
    ],
    image: tripguide,
    source_code_link: 'https://github.com/'
  }
]

export {
  services,
  technologies,
  experiences,
  experiencesEn,
  studies,
  studiesEn,
  projects,
  certifications
}
