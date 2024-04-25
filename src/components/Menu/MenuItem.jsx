/* eslint-disable react/prop-types */
import { formatCurrency } from '../../utils';
import Button from '../Button';
function MenuItem({ id, imageUrl, ingredients, name, soldOut, unitPrice }) {
  return (
    <div className="basis-[23%] flex flex-col justify-between border-2 border-green-600 relative">
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

      <button
        className={`${soldOut ? 'disabled grayscale' : ''} rounded-md w-[100%] py-2 px-3 bg-pizzaOrange text-white hover:bg-pizzaRed `}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default MenuItem;
