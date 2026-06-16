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
      items: [
        {
          degree:      'Engenharia de Computação',
          institution: 'Universidade de Brasília — UnB',
          period:      '2022 — 2027',
          description: '7º semestre. Foco em sistemas de software, algoritmos e infraestrutura.',
        },
        {
          degree:      'Formação Full Stack',
          institution: 'Rocketseat',
          period:      '2023',
          description: 'Trilha de desenvolvimento web com React, Node.js e tecnologias modernas do ecossistema JavaScript.',
        },
        {
          degree:      'Cambridge English B2 First (FCE)',
          institution: 'Cambridge University Press & Assessment',
          period:      '2021',
          description: 'Certificação internacional de proficiência em inglês nível B2.',
        },
      ],
    },

    achievements: {
      sectionTitle: 'Conquistas & Atividades',
      items: [
        {
          title:       'Olimpíadas Científicas',
          description: 'Participação e premiação em olimpíadas científicas nacionais (Matemática, Física e Informática).',
        },
        {
          title:       'Vôlei UnB',
          description: 'Atleta e liderança na equipe de vôlei da Universidade de Brasília, conciliando esporte de alto rendimento com a graduação.',
        },
        {
          title:       'Contribuições Open Source',
          description: 'Contribuições para projetos open source e desenvolvimento de projetos pessoais disponíveis no GitHub.',
        },
      ],
    },

    projects: {
      sectionTitle: 'Projetos',
      subtitle:     'Alguns dos projetos que desenvolvi',
      viewCode:     'Ver código',
      viewDemo:     'Ver demo',
      loadMore:     'Ver mais projetos no GitHub',
      noDescription: 'Sem descrição',
    },

    contact: {
      sectionTitle: 'Contato',
      subtitle:     'Vamos conversar? Entre em contato por qualquer um dos canais abaixo.',
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
        error:       'Erro ao enviar. Tente novamente.',
      },
      links: {
        email:    'samurth00@gmail.com',
        github:   'github.com/anaareiis',
        linkedin: 'linkedin.com/in/anaareiis',
      },
    },

    footer: {
      builtWith: 'Desenvolvido com Next.js e Tailwind CSS',
      rights:    'Todos os direitos reservados.',
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
      items: [
        {
          degree:      'Computer Engineering',
          institution: 'University of Brasília — UnB',
          period:      '2022 — 2027',
          description: '7th semester. Focus on software systems, algorithms, and infrastructure.',
        },
        {
          degree:      'Full Stack Developer Training',
          institution: 'Rocketseat',
          period:      '2023',
          description: 'Web development track covering React, Node.js, and modern JavaScript ecosystem technologies.',
        },
        {
          degree:      'Cambridge English B2 First (FCE)',
          institution: 'Cambridge University Press & Assessment',
          period:      '2021',
          description: 'International English proficiency certification at the B2 level.',
        },
      ],
    },

    achievements: {
      sectionTitle: 'Achievements & Activities',
      items: [
        {
          title:       'Science Olympiads',
          description: 'Participation and awards in national science olympiads (Mathematics, Physics, and Informatics).',
        },
        {
          title:       'UnB Volleyball',
          description: 'Athlete and team leader in the University of Brasília volleyball team, balancing high-performance sport with academics.',
        },
        {
          title:       'Open Source Contributions',
          description: 'Contributions to open source projects and personal projects available on GitHub.',
        },
      ],
    },

    projects: {
      sectionTitle: 'Projects',
      subtitle:     'Some of the projects I have built',
      viewCode:     'View code',
      viewDemo:     'View demo',
      loadMore:     'See more projects on GitHub',
      noDescription: 'No description',
    },

    contact: {
      sectionTitle: 'Contact',
      subtitle:     "Let's talk! Reach out through any of the channels below.",
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
        error:       'Failed to send. Please try again.',
      },
      links: {
        email:    'samurth00@gmail.com',
        github:   'github.com/anaareiis',
        linkedin: 'linkedin.com/in/anaareiis',
      },
    },

    footer: {
      builtWith: 'Built with Next.js and Tailwind CSS',
      rights:    'All rights reserved.',
    },
  },
} as const;

export type Content = typeof content;
export type SectionContent = Content[Language];

export function getContent(lang: Language): SectionContent {
  return content[lang];
}

export default content;
