/* eslint-disable react/prop-types */
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa6';
import Button from '../Button';

import { increaseItem } from '../../features/cartSlice';
import { decreaseItem } from '../../features/cartSlice';
import { useDispatch } from 'react-redux';
function ToggleAmount({ isAdded, handleDeletePizza, id }) {
  const dispatch = useDispatch();
  const handleIncrease = (id) => {
    dispatch(increaseItem(id));
  };
  const handleDecrease = (id) => {
    dispatch(decreaseItem(id));
  };
  return (
    <div className="flex justify-between p-2 items-center">
      <div className="flex gap-4 items-center">
        <FaMinus
          className="w-8 h-8 p-2 rounded-[50%] bg-pizzaOrange flex items-center justify-center cursor-pointer"
          onClick={() => handleDecrease(id)}
        />
        <p className="text-lg">{isAdded.quantity}</p>
        <FaPlus
          className="w-8 h-8 p-2 rounded-[50%] bg-pizzaOrange flex items-center justify-center cursor-pointer"
          onClick={() => handleIncrease(id)}
        />
      </div>
      <Button
        type="primary"
        bgColor={'pizzaOrange'}
        hoverColor="pizzaRed"
        onClick={() => handleDeletePizza(id)}
      >
        Delete
      </Button>
    </div>
  );
}

export default ToggleAmount;
