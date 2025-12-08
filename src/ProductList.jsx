import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, setQty, removeItem } from "./cartSlice";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

export default function ProductList() {
  const items = useSelector((state) => state.cart.items);

  return (
    <div className="space-y-4 max-w-xl mx-auto mt-6">
      {items.map((item) => (
        <ProductRow key={item.id} id={item.id} />
      ))}
    </div>
  );
}

function ProductRow({ id }) {
  const dispatch = useDispatch();
  const item = useSelector((state) =>
    state.cart.items.find((it) => it.id === id)
  );

  if (!item) return null;

  return (
    <div className="flex items-center justify-between bg-white dark:bg-gray-800 shadow rounded p-4">
      <div>
        <div className="font-medium text-lg">{item.name}</div>
        <div className="text-sm text-gray-500 dark:text-gray-300">
          ₦{item.price}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="px-3 py-1 bg-red-500 text-white rounded"
          onClick={() => dispatch(decreaseQty(id))}
        >
          <FaMinus />
        </button>

       
<input
  type="number"
  value={item.qty}
  min="0"
  className="w-16 text-center border rounded px-2 py-1 bg-white text-gray-900 dark:bg-gray-700 dark:text-white"
  onChange={(e) => dispatch(setQty({ id, qty: e.target.value }))}
/>

        <button
          className="px-3 py-1 bg-green-500 text-white rounded"
          onClick={() => dispatch(increaseQty(id))}
        >
          <FaPlus />
        </button>

        <button
          className="p-2 text-red-500"
          onClick={() => dispatch(removeItem(id))}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
