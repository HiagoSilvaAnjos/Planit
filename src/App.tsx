import Sidebar from "./components/Sidebar/Sidebar";
import Tasks from "./components/Tasks/Tasks";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Tasks />
    </div>
  );
}

export default App;
