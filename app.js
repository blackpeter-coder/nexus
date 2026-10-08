const dashboardData = {
  metrics: [
    { label: 'Vendas', value: 'R$ 1.42M', trend: '+12%', type: 'up', detail: 'vs. mês anterior' },
    { label: 'Produtividade', value: '86%', trend: '+8%', type: 'up', detail: 'média os últimos 7 dias' },
    { label: 'Projetos atrasados', value: '4', trend: '-2', type: 'down', detail: 'comparado a semana passada' }
  ],
  alerts: [
    {
      type: 'danger',
      title: 'TI com tarefas críticas atrasadas',
      description: '3 tarefas críticas da equipe de infraestrutura estão fora do cronograma e podem impactar a estabilidade do sistema.'
    },
    {
      type: 'warning',
      title: 'Estoque abaixo do limite',
      description: 'O produto “Tablet Base X9” está com estoque crítico e precisa de reposição imediata.'
    },
    {
      type: 'info',
      title: 'Projetos próximos do prazo',
      description: '2 projetos estão em risco de atraso se não houver redistribuição de equipe na próxima 48h.'
    }
  ],
  suggestions: [
    {
      title: 'Reorganizar as tarefas do Projeto X',
      description: 'Redistribuir 2 profissionais de desenvolvimento para as entregas críticas pode reduzir o atraso estimado em 18%.'
    },
    {
      title: 'Ajustar compras do estoque',
      description: 'A reposição automatizada do item X9 evitaria a contenção de vendas e reduziria o risco logístico.'
    },
    {
      title: 'Priorizar atendimento de TI',
      description: 'Focar na correção da pendência crítica de integração liberará a operação do departamento por até 1 dia.'
    }
  ],
  departments: [
    { name: 'TI', progress: 62, score: '62%', detail: '3 tarefas críticas' },
    { name: 'Vendas', progress: 84, score: '84%', detail: 'foco em expansão' },
    { name: 'Logística', progress: 71, score: '71%', detail: 'estoque monitorado' },
    { name: 'Financeiro', progress: 91, score: '91%', detail: 'ações em dia' }
  ],
  projects: [
    { name: 'Sistema de ERP Nova Versão', status: 'warning', meta: 'Atraso de 12 dias' },
    { name: 'Campanha de Vendas B2B', status: 'success', meta: 'No prazo' },
    { name: 'Migração de Dados', status: 'danger', meta: 'Revisão crítica' }
  ],
  documents: [
    { name: 'Contrato de fornecedor A2', type: 'Aprovação' },
    { name: 'Relatório trimestral', type: 'Revisão' },
    { name: 'Manual de operações TI', type: 'Atualização' }
  ]
};

function renderMetrics() {
  const metricsEl = document.getElementById('metrics');
  metricsEl.innerHTML = dashboardData.metrics
    .map(
      (metric) => `
        <article class="metric-card">
          <div class="metric-head">
            <span>${metric.label}</span>
            <span class="metric-trend ${metric.type}">${metric.trend}</span>
          </div>
          <div class="metric-value">
            <strong>${metric.value}</strong>
          </div>
          <span class="muted-text">${metric.detail}</span>
        </article>
      `
    )
    .join('');
}

function renderAlerts() {
  const alertsEl = document.getElementById('alerts');
  alertsEl.innerHTML = dashboardData.alerts
    .map(
      (alert) => `
        <div class="alert-item">
          <span class="alert-badge ${alert.type}"></span>
          <div>
            <strong>${alert.title}</strong>
            <p>${alert.description}</p>
          </div>
        </div>
      `
    )
    .join('');
}

function renderSuggestions() {
  const suggestionsEl = document.getElementById('suggestions');
  suggestionsEl.innerHTML = dashboardData.suggestions
    .map(
      (suggestion) => `
        <div class="suggestion-item">
          <strong>${suggestion.title}</strong>
          <p>${suggestion.description}</p>
        </div>
      `
    )
    .join('');
}

function renderDepartments() {
  const departmentsEl = document.getElementById('departments');
  departmentsEl.innerHTML = dashboardData.departments
    .map(
      (department) => `
        <div class="department-row">
          <div>
            <div class="department-meta">
              <strong>${department.name}</strong>
              <span>${department.score}</span>
            </div>
            <div class="progress-bar">
              <span class="progress-fill" style="width: ${department.progress}%"></span>
            </div>
            <p>${department.detail}</p>
          </div>
        </div>
      `
    )
    .join('');
}

function renderProjects() {
  const projectsEl = document.getElementById('projects');
  projectsEl.innerHTML = dashboardData.projects
    .map(
      (project) => `
        <div class="project-item">
          <div>
            <strong>${project.name}</strong>
            <p>${project.meta}</p>
          </div>
          <span class="project-status ${project.status}">${project.status === 'warning' ? 'Atenção' : project.status === 'success' ? 'OK' : 'Crítico'}</span>
        </div>
      `
    )
    .join('');
}

function renderDocuments() {
  const documentsEl = document.getElementById('documents');
  documentsEl.innerHTML = dashboardData.documents
    .map(
      (document) => `
        <div class="document-item">
          <div>
            <strong>${document.name}</strong>
            <p>${document.type}</p>
          </div>
          <span class="doc-tag">${document.type}</span>
        </div>
      `
    )
    .join('');
}

renderMetrics();
renderAlerts();
renderSuggestions();
renderDepartments();
renderProjects();
renderDocuments();

console.log('NEXUS dashboard initialized.');












































































































































































































































































































































































































































































www

































































n





















n






n




n





n














n









n





















n



n





n





n






30


























n





n



n





n












n




n





n





n








n





n





















n





n




n

n
















n





n







n







n






n





n




n





n





n





n





n





n









n





n





n







n









n





n




n





n





n



n





n





n





n



n

n




n





n





n





n





n





n





n





n





n





n





n





n








n





n





n





n





n





n





n





n





n





n





n





n





n





n




n





n



n



n




n




n





n





n




n



n




n




n





n




n





n




n





n





n







n





n




n




n




n






n





n




n




n




n




n




n




n





n



n
n



n





n




n





n





n




n




n




n




n




n





n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n





n

n



n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n



n





n




n



n





n




n




n





n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n



n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n



n




n




n




n




n




n




n





n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n



n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




a










n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n



n
n



n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n



n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n
n



n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n



n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n




n



"}]}�&&error_intermediate to=functions.push_files  jspb  ,