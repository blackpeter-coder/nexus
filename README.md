# NEXUS

Sistema de Gestão Empresarial (SGE) com painel executivo inteligente, alertas automáticos e sugestões de ação para gestores.

## Visão geral

O NEXUS funciona como um "painel de comando" da empresa, reunindo dados de:
- Funcionários
- Tarefas e projetos
- Produtividade
- Documentos
- Departamentos
- Problemas internos

Além disso, o sistema identifica situações críticas, prioriza alertas e sugere ações para reduzir riscos e melhorar desempenho.

## Como executar

Basta abrir o arquivo `index.html` em um navegador.

Ou, se preferir, rode um servidor local simples:

```bash
python3 -m http.server 8000
```

Em seguida, acesse:

```bash
http://localhost:8000
```

## Estrutura

- `index.html` — estrutura da interface
- `styles.css` — visual do dashboard
- `app.js` — dados fictícios e lógica de renderização

## Dados usados

Os dados são mockados e simulados para demonstrar o comportamento do sistema, incluindo:
- performance geral
- alertas críticos
- recomendações de gestão
- tarefas em atraso
- documentos pendentes

## Demonstração funcional

A interface gera automaticamente:
- cards de desempenho
- alertas de risco
- sugestões de ação
- indicadores por departamento
- lista de tarefas e documentos

