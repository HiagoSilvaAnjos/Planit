import { useState } from "react";

function App() {
  const [toggleTheme, setToggleTheme] = useState<boolean>(false);

  const handleClick = () => {
    setToggleTheme((prevToggle) => !prevToggle);
  };

  return (
    <>
      <div
        className={`${toggleTheme ? "flex justify-center items-center h-[100vh] w-full bg-slate-700" : "flex justify-center items-center h-[100vh] w-full bg-black"}`}
      >
        <button
          onClick={handleClick}
          className=" text-xl text-white p-3 cursor-pointer bg-green-500 rounded-sm hover:bg-green-600 transition-all duration-[0.2s]"
        >
          Planit
        </button>
      </div>
    </>
  );
}

export default App;
