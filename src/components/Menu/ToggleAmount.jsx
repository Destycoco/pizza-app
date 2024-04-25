/* eslint-disable react/prop-types */
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa6';
function ToggleAmount({ isAdded }) {
  return (
    <div className="flex gap-4 justify-center items-center mb-3">
      <FaMinus className="w-8 h-8 p-2 rounded-[50%] bg-pizzaOrange flex items-center justify-center cursor-pointer" />
      <p className="text-lg">{isAdded.quantity}</p>
      <FaPlus className="w-8 h-8 p-2 rounded-[50%] bg-pizzaOrange flex items-center justify-center cursor-pointer" />
    </div>
  );
}

export default ToggleAmount;
