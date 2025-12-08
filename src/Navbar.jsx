import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./cartSlice";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.cart.theme);

  return (
    <nav className="w-full p-4 flex justify-between items-center bg-white dark:bg-neutral-900 shadow">
      <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
        Shopping Cart
      </h1>

      <button
        onClick={() => dispatch(toggleTheme())}
        className="p-2 rounded bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
      >
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </nav>
  );
}


