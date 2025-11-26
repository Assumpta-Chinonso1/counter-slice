import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, reset } from "./counterSlice";
import { FaMinus, FaPlus } from "react-icons/fa";


export default function Counter() {


const count = useSelector((state) => state.counter.value)
 const dispatchh = useDispatch()


return(
    <div className="flex flex-col items-center gap-4 p-10">

        <h2 className="text-3xl font-bold"> Counter: {count} </h2>
        <div className="flex gap-4">
            <button onClick={()=> dispatchh(increase())}
                className="px-4 py-2 bg-green-500 text-white rounded-2xl">
                <FaPlus size={20} > </FaPlus>

            </button>

            <button onClick={()=> dispatchh(decrease())}
                className="px-4 py-2 bg-green-500 text-white rounded-2xl">
                    <FaMinus size={20} ></FaMinus>

            </button>

            <button onClick={()=> dispatchh(reset())}
             className="px-4 py-2 bg-green-500 text-white rounded-2xl">
                Reset
             </button>
        </div>
    </div>

)
}