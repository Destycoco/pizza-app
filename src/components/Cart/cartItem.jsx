/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa6';

function CartItem({
  imageUrl,
  pizzaId,
  name,
  quantity,
  unitPrice,
  totalPrice,
  ingredients,
}) {
  return (
    <div className="flex">
      <div className="flex gap-4 items-center basis-[40%]">
        <div className="w-20 h-20 border-2 border-red-500 overflow-hidden basis-[30%]">
          <img src={imageUrl} alt="pizza image" className="w-[100%] h-[100%]" />
        </div>
        <div className="text-xs space-y-1 basis-[50%]">
          <p className="font-bold text-sm">{name}</p>
          <p>{ingredients.join(', ')}</p>
          <button>Remove</button>
        </div>
      </div>
      <div className="flex items-center gap-2 basis-[20%]">
        <FaMinus className="w-8 h-8 p-2 rounded-[50%] bg-pizzaOrange flex items-center justify-center cursor-pointer" />
        <p>4</p>
        <FaPlus className="w-8 h-8 p-2 rounded-[50%] bg-pizzaOrange flex items-center justify-center cursor-pointer" />
      </div>
      <div className="basis-[20%] flex items-center justify-center">
        <p>#44</p>
      </div>
      <div className="basis-[20%] flex items-center justify-end">
        <p>$66</p>
      </div>
    </div>
  );
}

export default CartItem;
