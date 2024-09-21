import { useState } from "react";

function App() {
  const [toggleTheme, setToggleTheme] = useState<boolean>(false);

  const handleClick = () => {
    setToggleTheme((prevToggle) => !prevToggle);
  };

  return (
    <>
      <div
        className={`${toggleTheme ? "flex h-[100vh] w-full items-center justify-center bg-slate-700" : "flex h-[100vh] w-full items-center justify-center bg-black"}`}
      >
        <button
          onClick={handleClick}
          className="cursor-pointer rounded-sm bg-green-500 p-3 text-xl text-white transition-all duration-[0.2s] hover:bg-green-600"
        >
          Planit
        </button>
      </div>
    </>
  );
}

export default App;
