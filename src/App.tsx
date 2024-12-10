import Sidebar from "./components/Sidebar/Sidebar";
import Tasks from "./components/Tasks/Tasks";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="flex">
      <Toaster
        toastOptions={{
          style: {
            color: "#35383E",
          },
        }}
      />
      <Sidebar />
      <Tasks />
    </div>
  );
}

export default App;
