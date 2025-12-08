import { useSelector } from "react-redux";

import Navbar from "./Navbar";
import ProductList from "./ProductList";

export default function App() {
  // 1. Read the current theme from Redux state
  // Assuming the theme state is in `state.cart.theme` and is "dark" or "light"
  const theme = useSelector((state) => state.cart.theme);

  // You can log the theme here if needed
  console.log("Current Theme Mode from Redux (Cart App):", theme);


  return (
   
    <div
      className={`
        min-h-screen
        transition-colors
        duration-300
        bg-gray-100          
        text-gray-900         
        dark:bg-gray-900      
        dark:text-gray-50      
        ${theme === "dark" ? "dark" : "light"}
      `}
    >
      <Navbar />
      <ProductList />
    </div>
  );
}