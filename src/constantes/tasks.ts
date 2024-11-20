export const TASKS: {
  id: number;
  title: string;
  description: string;
  time: "morning" | "afternoon" | "evening";
  status: "not_started" | "in_progress" | "done";
}[] = [
  {
    id: 1,
    title: "Título da Tarefa",
    description: "Descrição da Tarefa",
    time: "afternoon",
    status: "in_progress",
  },
  {
    id: 2,
    title: "Revisar o código do projeto",
    description: "Verificar funcionalidades e corrigir bugs identificados",
    time: "morning",
    status: "not_started",
  },
  {
    id: 3,
    title: "Reunião de planejamento",
    description: "Discutir as próximas etapas com a equipe",
    time: "afternoon",
    status: "done",
  },
  {
    id: 4,
    title: "Escrever documentação",
    description: "Criar documentação detalhada para as novas features",
    time: "evening",
    status: "in_progress",
  },
  {
    id: 5,
    title: "Teste de performance",
    description: "Executar testes para avaliar o desempenho da aplicação",
    time: "morning",
    status: "not_started",
  },
];
