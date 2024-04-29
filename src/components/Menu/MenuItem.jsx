/* eslint-disable react/prop-types */
import { formatCurrency } from '../../utils';
import { addToCart, deleteItem } from '../../features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import ToggleAmount from './ToggleAmount';

function MenuItem({ id, imageUrl, ingredients, name, soldOut, unitPrice }) {
  const isAdded = useSelector((store) =>
    store.cart.cart.find((cart) => cart.pizzaId === id),
  );

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const newCart = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addToCart(newCart));
  };
  const handleDeletePizza = (pizza) => {
    dispatch(deleteItem(pizza));
  };
  return (
    <div className="basis-[23%] flex flex-col justify-between shadow-lg relative">
      <div
        className={`${soldOut ? 'grayscale' : ''} w-[100%] h-[60%] overflow-hidden `}
      >
        <img
          src={imageUrl}
          alt=""
          className="w-[100%] h-[100%] transform hover:scale-125 transition ease-in-out"
        />
      </div>
      <p className="absolute top-4 right-3 bg-pizzaOrange rounded-md text-white font-semibold px-2 py-1">
        {soldOut ? 'Sold Out' : 'Available'}
      </p>
      <div>
        <h2 className="font-bold">{name}</h2>
        <p className="font-pizzaIngrd">{ingredients.join(', ')}</p>
        <p>{formatCurrency(unitPrice)}</p>
      </div>

      {isAdded && !soldOut ? (
        <ToggleAmount
          isAdded={isAdded}
          key={id}
          id={id}
          handleDeletePizza={handleDeletePizza}
        />
      ) : (
        <button
          className={`${soldOut ? 'grayscale' : ''} rounded-md w-[100%] py-2 px-3 bg-pizzaOrange text-white hover:bg-pizzaRed `}
          disabled={soldOut}
          onClick={handleAddToCart}
        >
          {soldOut ? 'Sold Out' : 'Add to Cart'}
        </button>
      )}
    </div>
  );
}

export default MenuItem;
