import { NextResponse } from 'next/server';
import jsPDF from 'jspdf';

interface CVContent {
  name: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  summary: string;
  skills: {
    programming: string;
    frontend: string;
    backend: string;
    databases: string;
    tools: string;
    methodologies: string;
  };
  experience: Array<{
    role: string;
    company: string;
    period: string;
    description: string;
  }>;
  education: Array<{
    degree: string;
    institution: string;
    period: string;
    description: string;
  }>;
  projects: Array<{
    title: string;
    description: string;
  }>;
  languages: string;
  awards: Array<string>;
}

const contentPT: CVContent = {
  name: 'ANA LUISA REIS NASCENTE',
  location: 'Brasília, DF — Brasil',
  phone: '(61) 98140-2266',
  email: 'anarnascente@gmail.com',
  github: 'github.com/anaareiis',
  linkedin: 'linkedin.com/in/ana-luisa-nascente',
  summary:
    'Estudante de Engenharia de Computação na Universidade de Brasília (UnB) com experiência em desenvolvimento full-stack, engenharia de software e educação técnica. Proficiente em Python, JavaScript, TypeScript, React, Node.js e diversas tecnologias de banco de dados. Fortes habilidades em resolução de problemas com capacidade demonstrada em design de algoritmos, arquitetura de sistemas e liderança de projetos.',
  skills: {
    programming: 'Python, JavaScript, TypeScript, C, C++, Java, Ruby',
    frontend: 'React.js, React Native, Next.js, HTML5, CSS3, Tailwind CSS',
    backend: 'Node.js, Express, NestJS, Spring Boot',
    databases: 'PostgreSQL, SQL, Prisma ORM',
    tools: 'Git, GitHub, Docker, Figma, Linux, Power BI',
    methodologies: 'Scrum, Kanban, Desenvolvimento Ágil, Test-Driven Development',
  },
  experience: [
    {
      role: 'Professora Particular — Física & Matemática',
      company: 'Porto Apoio Individual',
      period: 'Março 2023 — Presente | Brasília, DF',
      description:
        'Suporte acadêmico personalizado para alunos do ensino médio e universitários em Física e Matemática. Desenvolvimento de planos de aula customizados e acompanhamento individualizado do aprendizado.',
    },
    {
      role: 'Estagiária de Docência — Ensino Fundamental e Médio',
      company: 'Colégio Santo Antônio',
      period: '2022 — 2023 | Brasília, DF',
      description:
        'Planejamento e execução de aulas, tutoria de alunos e desenvolvimento de habilidades de comunicação e didática em ambiente escolar. Suporte ao alcance de objetivos acadêmicos dos alunos.',
    },
  ],
  education: [
    {
      degree: 'Bacharelado em Engenharia de Computação',
      institution: 'Universidade de Brasília — UnB',
      period: 'Março 2023 — Presente (Conclusão prevista 2027) | Brasília, DF',
      description:
        'Cursando 7º semestre. Foco em sistemas de software, algoritmos, estruturas de dados e infraestrutura.',
    },
    {
      degree: 'Certificado Cambridge in Advanced English (CAE) — C1',
      institution: 'Cambridge University Press & Assessment',
      period: '2023',
      description: 'Certificação internacional de proficiência em inglês no nível C1 (Avançado).',
    },
  ],
  projects: [
    {
      title: 'Sistema Adaptativo de Transmissão de Vídeo (2025)',
      description:
        'Desenvolveu um sistema adaptativo de transmissão de vídeo para projeto de Teleinformática e Redes usando Python. Implementou controle de largura de banda, simulação de jitter, gerenciamento de buffering e failover automático de servidor.',
    },
    {
      title: 'Sistema de Processamento de Documentos com OCR (2025)',
      description:
        'Construiu um pipeline automatizado de processamento de documentos usando tecnologias OCR. Extraiu e estruturou informações de documentos digitalizados para fluxos de trabalho digitais.',
    },
    {
      title: 'Projetos Full-Stack de Desenvolvimento Web (2024 — Presente)',
      description:
        'Desenvolveu múltiplas aplicações web utilizando React, Node.js e PostgreSQL. Criou APIs REST e integrações de banco de dados. Aplicou controle de versão e práticas de desenvolvimento colaborativo.',
    },
    {
      title: 'Liderança e Atividades Extracurriculares',
      description:
        'Presidente da Seleção de Vôlei da UnB (2025). Diretora Financeira (2022-2025). Monitora de Física Experimental II. Membro ativo da Empresa Júnior EngNet (2024).',
    },
  ],
  languages: 'Português: Nativo | Inglês: Fluente (C1) | Espanhol: Básico (A2) | Francês: Básico (A2)',
  awards: [
    'Medalha de Prata — Olimpíada Brasileira de Astronomia (OBA, 2019)',
    'Menção Honrosa — Ciências (Análise de dados no reflorestamento do Cerrado, Nov 2019)',
    'Classificada — Olimpíada Brasileira de Física (OBF, 2ª fase, 2018 e 2019)',
    'Classificada — Olimpíada Brasileira de Matemática das Escolas Públicas (OBMEP, 2ª fase, 2017, 2018 e 2019)',
  ],
};

const contentEN: CVContent = {
  name: 'ANA LUISA REIS NASCENTE',
  location: 'Brasília, DF — Brazil',
  phone: '(61) 98140-2266',
  email: 'anarnascente@gmail.com',
  github: 'github.com/anaareiis',
  linkedin: 'linkedin.com/in/ana-luisa-nascente',
  summary:
    'Computer Engineering student at University of Brasília (UnB) with hands-on experience in full-stack development, software engineering, and technical education. Proficient in Python, JavaScript, TypeScript, React, Node.js, and various database technologies. Strong problem-solving skills with demonstrated ability in algorithm design, system architecture, and project leadership.',
  skills: {
    programming: 'Python, JavaScript, TypeScript, C, C++, Java, Ruby',
    frontend: 'React.js, React Native, Next.js, HTML5, CSS3, Tailwind CSS',
    backend: 'Node.js, Express, NestJS, Spring Boot',
    databases: 'PostgreSQL, SQL, Prisma ORM',
    tools: 'Git, GitHub, Docker, Figma, Linux, Power BI',
    methodologies: 'Scrum, Kanban, Agile Development, Test-Driven Development',
  },
  experience: [
    {
      role: 'Private Tutor — Physics & Mathematics',
      company: 'Porto Apoio Individual',
      period: 'March 2023 — Present | Brasília, DF',
      description:
        'Personalized academic support for high school and university students in Physics and Mathematics. Development of customized lesson plans and individualized learning support.',
    },
    {
      role: 'Teaching Intern — Primary and Secondary Education',
      company: 'Colégio Santo Antônio',
      period: '2022 — 2023 | Brasília, DF',
      description:
        'Lesson planning and delivery, student tutoring, and development of communication and didactic skills in a school environment. Support for student academic achievement and learning goals.',
    },
  ],
  education: [
    {
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'University of Brasília — UnB',
      period: 'March 2023 — Present (Expected 2027) | Brasília, DF',
      description:
        'Currently in 7th semester. Focus on software systems, algorithms, data structures, and infrastructure.',
    },
    {
      degree: 'Cambridge Certificate in Advanced English (CAE) — C1',
      institution: 'Cambridge University Press & Assessment',
      period: '2023',
      description: 'International certification of English proficiency at the C1 level (Advanced).',
    },
  ],
  projects: [
    {
      title: 'Adaptive Video Streaming System (2025)',
      description:
        'Developed an adaptive video streaming system for a Teleinformatics and Networks project using Python. Implemented bandwidth control, jitter simulation, buffering management, and automatic server failover.',
    },
    {
      title: 'OCR Document Processing System (2025)',
      description:
        'Built an automated document processing pipeline using OCR technologies. Extracted and structured information from scanned documents for digital workflows.',
    },
    {
      title: 'Full-Stack Web Development Projects (2024 — Present)',
      description:
        'Developed multiple web applications using React, Node.js, and PostgreSQL. Created REST APIs and database integrations. Applied version control and collaborative development practices.',
    },
    {
      title: 'Leadership & Extracurricular',
      description:
        'President of UnB Volleyball Team (2025). Financial Director (2022-2025). Teaching Assistant for Experimental Physics II. Active member of EngNet Junior Enterprise (2024).',
    },
  ],
  languages: 'Portuguese: Native | English: Fluent (C1) | Spanish: Basic (A2) | French: Basic (A2)',
  awards: [
    'Silver Medal — Brazilian Astronomy Olympiad (OBA, 2019)',
    'Honorable Mention — Science (Data analysis on Cerrado reforestation, Nov 2019)',
    'Qualifier — Physics Olympiad (OBF, 2nd round, 2018 and 2019)',
    'Qualifier — Mathematics Olympiad (OBMEP, 2nd round, 2017, 2018, and 2019)',
  ],
};

function generatePDF(content: CVContent, lang: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      let currentY = 15;
      const leftMargin = 15;
      const rightMargin = 15;
      const contentWidth = pageWidth - leftMargin - rightMargin;
      const darkText: [number, number, number] = [0, 0, 0];

      function addWrappedText(
        text: string,
        x: number,
        y: number,
        fontSize: number,
        isBold = false,
        color: [number, number, number] = darkText
      ): number {
        doc.setFontSize(fontSize);
        doc.setTextColor(color[0], color[1], color[2]);
        doc.setFont('helvetica', isBold ? 'bold' : 'normal');
        const lines = doc.splitTextToSize(text, contentWidth);
        doc.text(lines, x, y);
        return y + lines.length * (fontSize / 2.5);
      }

      function addSection(title: string, y: number): number {
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.setFont('helvetica', 'bold');
        doc.text(title, leftMargin, y);

        doc.setDrawColor(0, 0, 0);
        doc.line(leftMargin, y + 1, pageWidth - rightMargin, y + 1);

        return y + 7;
      }

      // HEADER
      currentY = addWrappedText(content.name, leftMargin, currentY, 16, true);
      currentY = addWrappedText(content.location, leftMargin, currentY, 10);
      currentY = addWrappedText(
        `${content.phone} | ${content.email}`,
        leftMargin,
        currentY,
        10
      );
      currentY = addWrappedText(
        `GitHub: ${content.github} | LinkedIn: ${content.linkedin}`,
        leftMargin,
        currentY,
        9
      );
      currentY += 3;

      const sectionTitles = lang === 'pt' ? {
        summary: 'RESUMO PROFISSIONAL',
        skills: 'HABILIDADES TÉCNICAS',
        experience: 'EXPERIÊNCIA PROFISSIONAL',
        education: 'EDUCAÇÃO',
        projects: 'PROJETOS & CONQUISTAS',
        languages: 'IDIOMAS',
        awards: 'PRÊMIOS & RECONHECIMENTO',
      } : {
        summary: 'PROFESSIONAL SUMMARY',
        skills: 'TECHNICAL SKILLS',
        experience: 'PROFESSIONAL EXPERIENCE',
        education: 'EDUCATION',
        projects: 'KEY PROJECTS & ACHIEVEMENTS',
        languages: 'LANGUAGES',
        awards: 'AWARDS & RECOGNITION',
      };

      // PROFESSIONAL SUMMARY
      currentY = addSection(sectionTitles.summary, currentY);
      currentY = addWrappedText(content.summary, leftMargin, currentY, 9);
      currentY += 3;

      // TECHNICAL SKILLS
      currentY = addSection(sectionTitles.skills, currentY);
      currentY = addWrappedText(
        `${lang === 'pt' ? 'Linguagens de Programação' : 'Programming Languages'}: ${content.skills.programming}`,
        leftMargin,
        currentY,
        9
      );
      currentY = addWrappedText(
        `${lang === 'pt' ? 'Frontend' : 'Frontend'}: ${content.skills.frontend}`,
        leftMargin,
        currentY,
        9
      );
      currentY = addWrappedText(
        `${lang === 'pt' ? 'Backend' : 'Backend'}: ${content.skills.backend}`,
        leftMargin,
        currentY,
        9
      );
      currentY = addWrappedText(
        `${lang === 'pt' ? 'Bancos de Dados' : 'Databases'}: ${content.skills.databases}`,
        leftMargin,
        currentY,
        9
      );
      currentY = addWrappedText(
        `${lang === 'pt' ? 'Ferramentas' : 'Tools'}: ${content.skills.tools}`,
        leftMargin,
        currentY,
        9
      );
      currentY = addWrappedText(
        `${lang === 'pt' ? 'Metodologias' : 'Methodologies'}: ${content.skills.methodologies}`,
        leftMargin,
        currentY,
        9
      );
      currentY += 3;

      if (currentY > pageHeight - 80) {
        doc.addPage();
        currentY = 15;
      }

      // PROFESSIONAL EXPERIENCE
      currentY = addSection(sectionTitles.experience, currentY);

      for (const job of content.experience) {
        currentY = addWrappedText(job.role, leftMargin, currentY, 10, true);
        currentY = addWrappedText(job.company, leftMargin, currentY, 9);
        currentY = addWrappedText(job.period, leftMargin, currentY, 9);
        currentY = addWrappedText(job.description, leftMargin, currentY, 9);
        currentY += 2;
      }

      currentY += 1;

      // EDUCATION
      currentY = addSection(sectionTitles.education, currentY);

      for (const edu of content.education) {
        currentY = addWrappedText(edu.degree, leftMargin, currentY, 10, true);
        currentY = addWrappedText(edu.institution, leftMargin, currentY, 9);
        currentY = addWrappedText(edu.period, leftMargin, currentY, 9);
        currentY = addWrappedText(edu.description, leftMargin, currentY, 9);
        currentY += 2;
      }

      currentY += 1;

      if (currentY > pageHeight - 80) {
        doc.addPage();
        currentY = 15;
      }

      // KEY PROJECTS & ACHIEVEMENTS
      currentY = addSection(sectionTitles.projects, currentY);

      for (const project of content.projects) {
        currentY = addWrappedText(project.title, leftMargin, currentY, 10, true);
        currentY = addWrappedText(project.description, leftMargin, currentY, 9);
        currentY += 1;
      }

      currentY += 2;

      // LANGUAGES
      currentY = addSection(sectionTitles.languages, currentY);
      currentY = addWrappedText(content.languages, leftMargin, currentY, 9);
      currentY += 3;

      // AWARDS & RECOGNITION
      currentY = addSection(sectionTitles.awards, currentY);
      for (const award of content.awards) {
        currentY = addWrappedText(award, leftMargin, currentY, 9);
      }

      const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
      resolve(pdfBuffer);
    } catch (error) {
      reject(error);
    }
  });
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'pt';

    if (lang !== 'pt' && lang !== 'en') {
      return NextResponse.json({ error: 'Invalid language. Use "pt" or "en"' }, { status: 400 });
    }

    const content = lang === 'pt' ? contentPT : contentEN;
    const filename =
      lang === 'pt'
        ? 'Ana-Luisa-Reis-Nascente-Curriculo-PT.pdf'
        : 'Ana-Luisa-Reis-Nascente-CV-EN.pdf';

    const pdfBuffer = await generatePDF(content, lang);

    return new NextResponse(new Uint8Array(pdfBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
}
