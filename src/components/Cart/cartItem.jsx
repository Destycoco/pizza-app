/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa6';
import { formatCurrency } from '../../utils';
import { increaseItem } from '../../features/cartSlice';
import { decreaseItem } from '../../features/cartSlice';
import { deleteItem } from '../../features/cartSlice';
import { useDispatch } from 'react-redux';
formatCurrency;
function CartItem({
  imageUrl,
  pizzaId,
  name,
  quantity,
  unitPrice,
  totalPrice,
  ingredients,
}) {
  const dispatch = useDispatch();
  const handleIncrease = (id) => {
    dispatch(increaseItem(id));
  };
  const handleDecrease = (id) => {
    dispatch(decreaseItem(id));
  };
  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };
  return (
    <div className="flex">
      <div className="flex gap-4 items-center basis-[40%]">
        <div className="w-20 h-20  overflow-hidden basis-[30%]">
          <img src={imageUrl} alt="pizza image" className="w-[100%] h-[100%]" />
        </div>
        <div className="text-xs space-y-1 basis-[50%]">
          <p className="font-semibold text-sm">
            {quantity}X {name}
          </p>
          <p>{ingredients.join(', ')}</p>
          <button
            className="text-red-400 hover:text-red-600 hover:font-bold"
            onClick={() => handleDelete(pizzaId)}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 basis-[20%]">
        <FaMinus
          className="w-8 h-8 p-2 rounded-[50%] bg-pizzaOrange flex items-center justify-center cursor-pointer"
          onClick={() => handleDecrease(pizzaId)}
        />
        <p>{quantity}</p>
        <FaPlus
          className="w-8 h-8 p-2 rounded-[50%] bg-pizzaOrange flex items-center justify-center cursor-pointer"
          onClick={() => handleIncrease(pizzaId)}
        />
      </div>
      <div className="basis-[20%] flex items-center justify-center">
        <p>{formatCurrency(unitPrice)}</p>
      </div>
      <div className="basis-[20%] flex items-center justify-end">
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </div>
  );
}

export default CartItem;
