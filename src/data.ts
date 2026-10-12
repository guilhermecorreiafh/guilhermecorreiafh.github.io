export const links = {
  github: 'https://github.com/guilhermecorreiafh',
  linkedin: 'https://www.linkedin.com/in/guilherme-correia-b0a816261',
  email: 'guilherme.henrique4782@gmail.com',
}

export const projects = [
  {
    name: 'Job Tracker',
    description:
      'Quadro Kanban pra organizar processos seletivos. Cada mudança de etapa fica registrada no histórico, e um dashboard mostra o funil, as candidaturas por semana e o tempo médio que as empresas levam pra responder.',
    image: '/projetos/job-tracker.gif',
    tags: ['.NET 10', 'React', 'PostgreSQL', 'Playwright', 'Docker'],
    repo: 'https://github.com/guilhermecorreiafh/job-tracker',
  },
  {
    name: 'Uptime Monitor',
    description:
      'Monitor de disponibilidade self-hosted. Um worker em .NET verifica os serviços de tempos em tempos, guarda o histórico e avisa no Discord quando algo cai. O painel em React mostra status e latência.',
    image: '/projetos/uptime-monitor.png',
    tags: ['.NET', 'React', 'PostgreSQL', 'OpenTelemetry', 'Docker'],
    repo: 'https://github.com/guilhermecorreiafh/uptime-monitor',
  },
  {
    name: 'PZaaS · API Gateway',
    description:
      'Projeto da faculdade, em dupla: o API Gateway de uma pizzaria construída em microsserviços por toda a turma. Valida as requisições, autentica no serviço de identidade e encaminha para Catálogo, Pagamento e Orquestrador, com fallback quando um serviço cai e cache do cardápio em Redis.',
    image: '/projetos/pzaas.png',
    tags: ['n8n', 'API Gateway', 'Microsserviços', 'Redis', 'REST'],
    repo: 'https://github.com/guilhermecorreiafh/pzaas-api-gateway',
  },
]

export const experience = [
  {
    role: 'Estagiário de TI · Sistemas Operacionais',
    place: 'Santos Brasil',
    period: 'set/2025 – atual',
    logo: '/logos/santos-brasil.png',
    items: [
      'Manutenção e novas funcionalidades no PUE, sistema que acompanha a exportação de cargas pelo Portal Único do Siscomex',
      'Telas, consultas e rotinas em C#, WinForms e Oracle PL/SQL para as áreas operacionais do terminal',
      'Instrumentação de serviços com OpenTelemetry para monitoramento e diagnóstico',
      'Projeto Lean Six Sigma White Belt em equipe: automação em Python da extração e consolidação de dados para o fechamento trimestral financeiro',
    ],
  },
  {
    role: 'Bacharelado em Sistemas de Informação',
    place: 'UNISANTA',
    period: 'jul/2023 – jul/2027',
    logo: '/logos/unisanta.png',
    items: ['Bolsista integral, com 100% de bolsa de estudos'],
  },
]

export const certifications = [
  { name: 'Desenvolvimento de Software', issuer: 'UNISANTA', hours: 720, year: 2026, file: '/certificados/desenvolvimento-de-software.pdf' },
  { name: 'Desenvolvimento Back-End', issuer: 'UNISANTA', hours: 400, year: 2026, file: '/certificados/desenvolvimento-back-end.pdf' },
  { name: 'Desenvolvimento Front-End', issuer: 'UNISANTA', hours: 320, year: 2026, file: '/certificados/desenvolvimento-front-end.pdf' },
  { name: 'Administração de Dados', issuer: 'UNISANTA', hours: 320, year: 2026, file: '/certificados/administracao-de-dados.pdf' },
  { name: 'Web API ASP.NET Core Essencial (.NET 8/9)', issuer: 'Udemy', hours: 47, year: 2025, file: '/certificados/web-api-aspnet-core.pdf' },
  { name: 'Hackathon UNISANTA', issuer: 'UNISANTA', hours: 30, year: 2024, file: null },
  { name: 'Git e GitHub do básico ao avançado', issuer: 'Udemy', hours: 8.5, year: 2025, file: '/certificados/git-e-github.pdf' },
  { name: 'Aprenda SQL do Zero', issuer: 'Udemy', hours: 7.5, year: 2025, file: '/certificados/sql-do-zero.pdf' },
  { name: 'Desenvolvimento Seguro de Software Avançado', issuer: 'Udemy', hours: 4.5, year: 2025, file: '/certificados/desenvolvimento-seguro.pdf' },
]

export const skills = [
  {
    title: 'Back-End',
    description: 'APIs, regras de negócio e integrações.',
    items: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework Core', 'WinForms'],
  },
  {
    title: 'Front-End',
    description: 'Interfaces componentizadas e responsivas.',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    title: 'Dados',
    description: 'Modelagem, consultas e rotinas no banco.',
    items: ['Oracle', 'PL/SQL', 'PostgreSQL', 'SQL'],
  },
  {
    title: 'Qualidade e DevOps',
    description: 'Testes, observabilidade e entrega contínua.',
    items: ['Git', 'GitHub Actions', 'Docker', 'xUnit', 'Playwright', 'OpenTelemetry'],
  },
  {
    title: 'IA no desenvolvimento',
    description: 'Desenvolvimento assistido por IA e documentação de bases em YAML como contexto para modelos.',
    items: ['Claude Code', 'Cursor', 'ChatGPT', 'GitHub Copilot', 'Prompt engineering', 'YAML'],
  },
]