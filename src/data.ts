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
]

export const experience = [
    {
        role: 'Estagiário de TI · Sistemas Operacionais',
        place: 'Santos Brasil',
        period: 'set/2025 – atual',
        items: [
            'Manutenção e novas funcionalidades numa aplicação interna WinForms, o sistema é responsável por acompanhar a exportação de cargas pelo Portal Único do Siscomex',
            'Telas, consultas e rotinas em C#, WinForms e Oracle PL/SQL para as áreas operacionais do terminal',
            'Instrumentação de serviços com OpenTelemetry para monitoramento e diagnóstico',
            'Projeto Lean Six Sigma White Belt em equipe: automação em Python da extração e consolidação de dados para o fechamento trimestral financeiro',
        ],
    },
    {
        role: 'Sistemas de Informação',
        place: 'UNISANTA',
        period: 'em andamento',
        items: [],
    },

]

export const certifications = [
    { name: 'Desenvolvimento de Software', issuer: 'UNISANTA', hours: 720, year: 2026 },
    { name: 'Desenvolvimento Back-End', issuer: 'UNISANTA', hours: 400, year: 2026 },
    { name: 'Desenvolvimento Front-End', issuer: 'UNISANTA', hours: 320, year: 2026 },
    { name: 'Administração de Dados', issuer: 'UNISANTA', hours: 320, year: 2026 },
    { name: 'Web API ASP.NET Core Essencial (.NET 8/9)', issuer: 'Udemy', hours: 47, year: 2025 },
    { name: 'Git e GitHub do básico ao avançado', issuer: 'Udemy', hours: 8.5, year: 2025 },
    { name: 'Aprenda SQL do Zero', issuer: 'Udemy', hours: 7.5, year: 2025 },
    { name: 'Hackathon UNISANTA', issuer: 'UNISANTA', hours: 30, year: 2024 },
]