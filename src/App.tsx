import Sidebar from "./components/Sidebar/Sidebar";
import Tasks from "./components/Tasks/Tasks";

function App() {
  return (
    <div className="flex gap-9">
      <Sidebar />
      <Tasks />
    </div>
  );
}

export default App;
