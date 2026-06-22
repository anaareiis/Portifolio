# Portfólio — Ana Luísa Reis Nascente

Portfólio pessoal bilíngue (PT/EN), construído com Next.js, React e Tailwind CSS.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **jsPDF** — geração dinâmica do currículo em PDF (PT/EN)

## Funcionalidades

- Conteúdo bilíngue (Português/Inglês) com troca de idioma em tempo real
- Seções: Hero, Sobre, Habilidades, Experiência, Educação, Conquistas, Projetos e Contato
- Integração com a GitHub API para listar repositórios públicos dinamicamente
- Download do currículo em PDF, gerado on-the-fly via API route (`/api/cv-ats`)
- Totalmente responsivo (mobile, tablet, desktop)

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Build de produção

```bash
npm run build
npm run start
```

## Deploy

Hospedado na [Vercel](https://vercel.com), com deploy automático a cada push na branch `main`.
