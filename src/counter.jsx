import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, reset, toggleTheme } from "./counterSlice";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CgToggleOff, CgToggleOn } from "react-icons/cg";
import { useEffect } from "react";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

 
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [mode]);

  return (
    <div className="w-full flex items-center justify-center py-20">
      <div
        className="
          max-w-md w-[90%]
          bg-white dark:bg-gray-800
          text-black dark:text-white
          rounded-2xl shadow-2xl p-10
          flex flex-col items-center gap-6
          transition-all duration-300
        ">
    
        {/* Theme toggle */}
        <button
          onClick={() => dispatch(toggleTheme())}
          className="self-end p-2 rounded-lg hover:scale-110 transition"
        >
          {mode === "light" ? (
            <CgToggleOff size={45} className="text-black" />
          ) : (
            <CgToggleOn size={45} className="text-white" />
          )}
        </button>

        <h2 className="text-5xl font-bold">{count}</h2>

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => dispatch(increase())}
            className="px-4 py-2 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 transition">
     
            <FaPlus size={20} />
          </button>

          <button
            onClick={() => dispatch(decrease())}
            className="px-4 py-2 bg-red-500 text-white rounded-xl shadow hover:bg-red-600 transition">
       
            <FaMinus size={20} />
          </button>

          <button
            onClick={() => dispatch(reset())}
            className="px-4 py-2 bg-gray-500 text-white rounded-xl shadow hover:bg-gray-600 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
