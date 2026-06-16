import type { Language } from './types';

const content = {
  pt: {
    navbar: {
      links: [
        { label: 'Sobre',        href: '#sobre'       },
        { label: 'Habilidades',  href: '#habilidades' },
        { label: 'Experiência',  href: '#experiencia' },
        { label: 'Projetos',     href: '#projetos'    },
        { label: 'Contato',      href: '#contato'     },
      ],
    },

    hero: {
      greeting:  'Olá, eu sou',
      name:      'Ana Luísa Reis Nascente',
      title:     'Engenheira de Software',
      subtitle:  'Estudante de Engenharia de Computação na UnB, apaixonada por desenvolvimento full-stack e educação em tecnologia.',
      cta: {
        projects: 'Ver Projetos',
        cv:       'Baixar CV',
        contact:  'Contato',
      },
      scroll: 'role para baixo',
    },

    about: {
      sectionTitle: 'Sobre Mim',
      bio: [
        'Sou estudante de Engenharia de Computação na Universidade de Brasília (UnB), atualmente no 7º semestre com previsão de conclusão em 2027. Tenho experiência em desenvolvimento full-stack, com foco em aplicações web modernas.',
        'Além do desenvolvimento, tenho paixão por ensino e compartilhamento de conhecimento. Atuei como professora e monitora, contribuindo para a formação de outros estudantes em programação e tecnologia.',
      ],
      infoCards: [
        { label: 'Localização', value: 'Brasília, DF — Brasil' },
        { label: 'Universidade', value: 'UnB' },
        { label: 'Formatura', value: '2027' },
      ],
      languages: [
        { name: 'Português', level: 'Nativo' },
        { name: 'Inglês',    level: 'Fluente (C1)' },
        { name: 'Espanhol',  level: 'Básico (A2)' },
        { name: 'Francês',   level: 'Básico (A2)' },
      ],
    },

    skills: {
      sectionTitle: 'Habilidades',
      primaryTitle: 'Principais',
      otherTitle: 'Outras tecnologias',
      primary: ['JavaScript', 'React JS / React Native', 'Node.js', 'Python'],
      other: [
        'Ruby', 'C', 'C++', 'Java', 'Git & GitHub', 'SQL',
        'HTML', 'CSS', 'Figma', 'LaTeX', 'TDD (GTest, Valgrind)',
        'Metodologias Ágeis', 'Linux', 'Power BI', 'Microsoft Office',
      ],
    },

    experience: {
      sectionTitle: 'Experiência',
      present: 'Presente',
      items: [
        {
          role:        'Professora Particular – Física & Matemática',
          company:     'Porto Apoio Individual',
          period:      'Mar 2023 — Presente',
          current:     true,
          description: 'Suporte acadêmico e tutoria para alunos do ensino médio e universitários em Física e Matemática. Planejamento de aulas personalizadas e acompanhamento individualizado do aprendizado.',
        },
        {
          role:        'Estagiária de Docência – Ensino Fundamental e Médio',
          company:     'Colégio Santo Antônio',
          period:      '2022 — 2023',
          current:     false,
          description: 'Planejamento de aulas, tutoria de alunos e desenvolvimento de habilidades de comunicação e didática no ambiente escolar.',
        },
      ],
    },

    education: {
      sectionTitle: 'Educação',
      present: 'Presente',
      items: [
        {
          degree:      'Bacharelado em Engenharia de Computação',
          institution: 'Universidade de Brasília — UnB',
          period:      'Mar 2023 — Presente (prev. 2027)',
          current:     true,
          description: 'Foco em sistemas de software, algoritmos, estruturas de dados e infraestrutura. 7º semestre.',
        },
        {
          degree:      'Discovery Course',
          institution: 'Rocketseat',
          period:      '2023',
          current:     false,
          description: 'Fundamentos de desenvolvimento web: HTML, CSS, JavaScript, Git e GitHub.',
        },
        {
          degree:      'Cambridge Certificate in Advanced English (CAE) — C1',
          institution: 'Cambridge University Press & Assessment',
          period:      '2023',
          current:     false,
          description: 'Certificação internacional de proficiência em inglês nível C1.',
        },
      ],
    },

    achievements: {
      sectionTitle: 'Conquistas & Extracurricular',
      awardsTitle: 'Prêmios',
      leadershipTitle: 'Liderança & Extracurricular',
      awards: [
        { title: 'Medalha de Prata — OBA',           description: 'Olimpíada Brasileira de Astronomia, 2019.' },
        { title: 'Menção Honrosa — Ciências',         description: 'Análise de dados no reflorestamento do Cerrado, Curitiba/PR, Nov 2019.' },
        { title: 'Classificada — OBF 2ª fase',        description: '2018 e 2019.' },
        { title: 'Classificada — OBMEP 2ª fase',      description: '2017, 2018 e 2019.' },
      ],
      leadership: [
        { role: 'Presidente',         org: 'Seleção de Vôlei — UnB',      period: '2025' },
        { role: 'Diretora Financeira', org: 'Seleção de Vôlei — UnB',      period: '2022 — 2025' },
        { role: 'Diretora de Vôlei',   org: 'Atlética Maquinada',           period: '' },
        { role: 'Jogadora Titular',    org: 'Time Feminino de Vôlei — UnB', period: '' },
        { role: 'Membro',              org: 'EngNet Empresa Júnior',         period: '2024' },
        { role: 'Monitora',            org: 'Física Experimental II — UnB',  period: '' },
      ],
    },

    projects: {
      sectionTitle: 'Projetos',
      subtitle:     'Alguns dos projetos que desenvolvi',
      viewCode:     'Ver código',
      viewDemo:     'Ver demo',
      loadMore:     'Ver mais projetos no GitHub',
      noDescription: 'Sem descrição',
      emptyState:   'Não foi possível carregar os projetos agora.',
      emptyCta:     'Ver perfil no GitHub',
    },

    contact: {
      sectionTitle: 'Contato',
      subtitle:     'Disponível para oportunidades. Vamos conversar? Entre em contato por qualquer um dos canais abaixo.',
      form: {
        name:        'Nome',
        email:       'E-mail',
        message:     'Mensagem',
        namePlaceholder:    'Seu nome',
        emailPlaceholder:   'seu@email.com',
        messagePlaceholder: 'Olá, gostaria de conversar sobre...',
        submit:      'Enviar Mensagem',
        sending:     'Enviando...',
        success:     'Mensagem enviada com sucesso!',
        error:       'Preencha todos os campos para continuar.',
      },
      links: {
        email:    'anarnascente@gmail.com',
        github:   'github.com/anaareiis',
        location: 'Brasília, DF — Brasil',
      },
    },

    footer: {
      credit:    'Feito com ♥ por Ana Luísa Reis Nascente',
      builtWith: 'Desenvolvido com Next.js e Tailwind CSS',
      rights:    'Todos os direitos reservados.',
      backToTop: 'Voltar ao topo',
    },
  },

  en: {
    navbar: {
      links: [
        { label: 'About',      href: '#sobre'       },
        { label: 'Skills',     href: '#habilidades' },
        { label: 'Experience', href: '#experiencia' },
        { label: 'Projects',   href: '#projetos'    },
        { label: 'Contact',    href: '#contato'     },
      ],
    },

    hero: {
      greeting:  "Hi, I'm",
      name:      'Ana Luísa Reis Nascente',
      title:     'Software Engineer',
      subtitle:  'Computer Engineering student at UnB, passionate about full-stack development and tech education.',
      cta: {
        projects: 'View Projects',
        cv:       'Download CV',
        contact:  'Contact',
      },
      scroll: 'scroll down',
    },

    about: {
      sectionTitle: 'About Me',
      bio: [
        "I'm a Computer Engineering student at the University of Brasília (UnB), currently in my 7th semester with an expected graduation in 2027. I have experience in full-stack development, focused on modern web applications.",
        'Beyond development, I have a passion for teaching and knowledge sharing. I have worked as a teacher and teaching assistant, contributing to the education of other students in programming and technology.',
      ],
      infoCards: [
        { label: 'Location',    value: 'Brasília, DF — Brazil' },
        { label: 'University',  value: 'UnB' },
        { label: 'Graduation',  value: '2027' },
      ],
      languages: [
        { name: 'Portuguese', level: 'Native' },
        { name: 'English',    level: 'Fluent (C1)' },
        { name: 'Spanish',    level: 'Basic (A2)' },
        { name: 'French',     level: 'Basic (A2)' },
      ],
    },

    skills: {
      sectionTitle: 'Skills',
      primaryTitle: 'Core',
      otherTitle: 'Other technologies',
      primary: ['JavaScript', 'React JS / React Native', 'Node.js', 'Python'],
      other: [
        'Ruby', 'C', 'C++', 'Java', 'Git & GitHub', 'SQL',
        'HTML', 'CSS', 'Figma', 'LaTeX', 'TDD (GTest, Valgrind)',
        'Agile Methodologies', 'Linux', 'Power BI', 'Microsoft Office',
      ],
    },

    experience: {
      sectionTitle: 'Experience',
      present: 'Present',
      items: [
        {
          role:        'Private Tutor – Physics & Mathematics',
          company:     'Porto Apoio Individual',
          period:      'Mar 2023 — Present',
          current:     true,
          description: 'Academic support and tutoring for high school and university students in Physics and Mathematics. Personalized lesson planning and individualized learning support.',
        },
        {
          role:        'Teaching Intern – Primary and Secondary Education',
          company:     'Colégio Santo Antônio',
          period:      '2022 — 2023',
          current:     false,
          description: 'Lesson planning, student tutoring, and development of communication and teaching skills in a school environment.',
        },
      ],
    },

    education: {
      sectionTitle: 'Education',
      present: 'Present',
      items: [
        {
          degree:      'Bachelor in Computer Engineering',
          institution: 'University of Brasília — UnB',
          period:      'Mar 2023 — Present (exp. 2027)',
          current:     true,
          description: 'Focus on software systems, algorithms, data structures, and infrastructure. 7th semester.',
        },
        {
          degree:      'Discovery Course',
          institution: 'Rocketseat',
          period:      '2023',
          current:     false,
          description: 'Web development fundamentals: HTML, CSS, JavaScript, Git and GitHub.',
        },
        {
          degree:      'Cambridge Certificate in Advanced English (CAE) — C1',
          institution: 'Cambridge University Press & Assessment',
          period:      '2023',
          current:     false,
          description: 'International English proficiency certification at the C1 level.',
        },
      ],
    },

    achievements: {
      sectionTitle: 'Achievements & Extracurricular',
      awardsTitle: 'Awards',
      leadershipTitle: 'Leadership & Extracurricular',
      awards: [
        { title: 'Silver Medal — OBA',              description: 'Brazilian Astronomy Olympiad, 2019.' },
        { title: 'Honorable Mention — Science',     description: 'Data analysis on Cerrado reforestation, Curitiba/PR, Nov 2019.' },
        { title: 'Qualifier — OBF 2nd round',       description: '2018 and 2019.' },
        { title: 'Qualifier — OBMEP 2nd round',     description: '2017, 2018 and 2019.' },
      ],
      leadership: [
        { role: 'President',           org: 'UnB Volleyball Team',          period: '2025' },
        { role: 'Financial Director',  org: 'UnB Volleyball Team',          period: '2022 — 2025' },
        { role: 'Volleyball Director', org: 'Atlética Maquinada',           period: '' },
        { role: 'Starting Player',     org: "UnB Women's Volleyball Team",  period: '' },
        { role: 'Member',              org: 'EngNet Junior Enterprise',      period: '2024' },
        { role: 'Teaching Assistant',  org: 'Experimental Physics II — UnB', period: '' },
      ],
    },

    projects: {
      sectionTitle: 'Projects',
      subtitle:     'Some of the projects I have built',
      viewCode:     'View code',
      viewDemo:     'View demo',
      loadMore:     'See more projects on GitHub',
      noDescription: 'No description',
      emptyState:   'Could not load projects right now.',
      emptyCta:     'View GitHub profile',
    },

    contact: {
      sectionTitle: 'Contact',
      subtitle:     "Open to opportunities. Let's talk! Reach out through any of the channels below.",
      form: {
        name:        'Name',
        email:       'Email',
        message:     'Message',
        namePlaceholder:    'Your name',
        emailPlaceholder:   'your@email.com',
        messagePlaceholder: 'Hi, I would like to talk about...',
        submit:      'Send Message',
        sending:     'Sending...',
        success:     'Message sent successfully!',
        error:       'Please fill in all fields to continue.',
      },
      links: {
        email:    'anarnascente@gmail.com',
        github:   'github.com/anaareiis',
        location: 'Brasília, DF — Brazil',
      },
    },

    footer: {
      credit:    'Made with ♥ by Ana Luísa Reis Nascente',
      builtWith: 'Built with Next.js and Tailwind CSS',
      rights:    'All rights reserved.',
      backToTop: 'Back to top',
    },
  },
} as const;

export type Content = typeof content;
export type SectionContent = Content[Language];

export function getContent(lang: Language): SectionContent {
  return content[lang];
}

export default content;
