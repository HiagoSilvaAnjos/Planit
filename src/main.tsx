import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TaskDetails from "./pages/TaskDetails/taskDetails.tsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage/HomePage.tsx";
import TasksPage from "./pages/Tasks/Tasks.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "*",
    element: <h1>404 - Not Found</h1>,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "task/:taskId",
    element: <TaskDetails />,
  },
  {
    path: "/tasks",
    element: <TasksPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster
        toastOptions={{
          style: {
            color: "#35383E",
          },
        }}
      />
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  </StrictMode>
);
