export const TASKS: {
  id: string;
  title: string;
  description: string;
  time: "morning" | "afternoon" | "evening";
  status: "not_started" | "in_progress" | "done";
}[] = [
  {
    id: "09eacc09-298b-43a6-815d-c9ae72eba432",
    title: "Título da Tarefa",
    description: "Descrição da Tarefa",
    time: "afternoon",
    status: "in_progress",
  },
  {
    id: "a29ed8b2-a304-4113-b8f9-4fd5f52cec6b",
    title: "Revisar o código do projeto",
    description: "Verificar funcionalidades e corrigir bugs identificados",
    time: "morning",
    status: "not_started",
  },
  {
    id: "086930e2-3568-403b-933e-9056311690ff",
    title: "Reunião de planejamento",
    description: "Discutir as próximas etapas com a equipe",
    time: "afternoon",
    status: "done",
  },
  {
    id: "55b080a4-c757-433f-b9ac-b5d87d7e3248",
    title: "Escrever documentação",
    description: "Criar documentação detalhada para as novas features",
    time: "evening",
    status: "in_progress",
  },
  {
    id: "ec9357fe-62ee-4cff-b461-0645338a731a",
    title: "Teste de performance",
    description: "Executar testes para avaliar o desempenho da aplicação",
    time: "morning",
    status: "not_started",
  },
];
